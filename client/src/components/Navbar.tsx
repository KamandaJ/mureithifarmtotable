import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoImg from "@assets/generated_images/logo_for_organic_farm_mureithi's_farm_to_table.png";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src={logoImg} 
            alt="Mureithi's Farm To Table" 
            className="h-12 w-12 object-contain rounded-full border border-primary/10" 
          />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl md:text-2xl text-primary leading-none tracking-tight">
              Mureithi's Farm
            </span>
            <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
              To Table
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/products">
            <Button 
              variant="ghost" 
              className={cn(
                "text-base font-medium",
                location === "/products" ? "text-primary font-bold bg-primary/10" : "text-muted-foreground"
              )}
            >
              Our Produce
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-base font-medium text-muted-foreground gap-1">
                Explore <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white">
              <Link href="/">
                <DropdownMenuItem className="cursor-pointer">Home</DropdownMenuItem>
              </Link>
              <Link href="/about">
                <DropdownMenuItem className="cursor-pointer">About Us</DropdownMenuItem>
              </Link>
              <Link href="/contact">
                <DropdownMenuItem className="cursor-pointer">Contact</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <a 
            href="https://wa.me/254712700008" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Order via WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link 
            href="/"
            className={cn(
              "px-4 py-3 rounded-lg transition-colors text-lg font-medium",
              location === "/" ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/products"
            className={cn(
              "px-4 py-3 rounded-lg transition-colors text-lg font-medium",
              location === "/products" ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            Our Produce
          </Link>
          <Link 
            href="/about"
            className={cn(
              "px-4 py-3 rounded-lg transition-colors text-lg font-medium",
              location === "/about" ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact"
            className={cn(
              "px-4 py-3 rounded-lg transition-colors text-lg font-medium",
              location === "/contact" ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
            )}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="https://wa.me/254712700008" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors mt-2"
          >
            <Phone className="w-5 h-5" />
            Order via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
