import express from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";

// This file is a catch-all Vercel Serverless Function for /api/*
// It creates a fresh Express `app` per invocation, registers routes
// via `registerRoutes`, and then passes the incoming request to Express.

export default async function handler(req: any, res: any) {
  try {
    const app = express();

    // replicate middleware used in `server/index.ts`
    app.use(
      express.json({
        verify: (r: any, _res: any, buf: Buffer) => {
          r.rawBody = buf;
        },
      }),
    );
    app.use(express.urlencoded({ extended: false }));

    // register application routes (no long-lived server required)
    // we pass a created http.Server to match the existing signature
    await registerRoutes(createServer(app), app);

    // let express handle the incoming request
    app(req, res, (err: any) => {
      if (err) {
        const status = err.status || err.statusCode || 500;
        res.statusCode = status;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: err.message || "Internal Server Error" }));
        return;
      }

      // If no route matched, return 404 JSON
      if (!res.writableEnded) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Not found" }));
      }
    });
  } catch (e: any) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: e?.message || "Server error" }));
  }
}
