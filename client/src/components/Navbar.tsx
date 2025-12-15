import { Link } from "wouter";
import { Phone, ShoppingBasket } from "lucide-react";
import logoImg from "@assets/generated_images/logo_for_organic_farm_mureithi's_farm_to_table.png";

export default function Navbar() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={logoImg} 
            alt="Mureithi's Farm To Table" 
            className="h-10 w-10 object-contain rounded-full" 
          />
          <span className="font-heading font-bold text-xl md:text-2xl text-primary tracking-tight hidden sm:block">
            Mureithi's Farm
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <button 
            onClick={scrollToProducts}
            className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            Our Produce
          </button>
          
          <a 
            href="https://wa.me/254712700008" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Order via WhatsApp</span>
            <span className="sm:hidden">Order</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
