import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { InsertUser } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // Health check
  app.get("/api/health", (_req, res) => {
    return res.json({ status: "ok", time: new Date().toISOString() });
  });

  // List users (memory-backed)
  app.get("/api/users", async (_req, res) => {
    // storage doesn't expose a list method; return all users via internal map if available
    try {
      // Try to access internal map (works for MemStorage)
      // @ts-ignore - intentionally accessing internal users for demo/testing
      const users = Array.from((storage as any).users?.values() || []);
      res.json({ users });
    } catch (e) {
      res.status(500).json({ message: "Could not list users" });
    }
  });

  // Create user
  app.post("/api/users", async (req, res) => {
    try {
      const body = req.body as InsertUser;
      if (!body || !body.username) {
        return res.status(400).json({ message: "username is required" });
      }
      const existing = await storage.getUserByUsername(body.username);
      if (existing) {
        return res.status(409).json({ message: "username already exists" });
      }
      const created = await storage.createUser(body);
      return res.status(201).json({ user: created });
    } catch (err: any) {
      return res.status(500).json({ message: err?.message || "Failed to create user" });
    }
  });

  return httpServer;
}
