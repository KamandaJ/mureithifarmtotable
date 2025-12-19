import { Phone, MapPin, MessageCircle } from "lucide-react";
import logoImg from "@assets/generated_images/enhanced_Farm_To_Table_logo.png";
import { Link } from "wouter";

export default function ContactFooter() {
  const helpMessage = "Hello Mureithi's Farm, I am interested in your produce and have a question.";
  const helpLink = `https://wa.me/254712700008?text=${encodeURIComponent(helpMessage)}`;

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="Logo" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl">Mureithi's Farm</h3>
                <span className="text-sm text-primary-foreground/80">To Table</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Dedicated to bringing you the freshest, organically grown vegetables. 
              We believe in sustainable farming and healthy families.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+254712700008" className="flex items-center gap-3 hover:text-accent transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </span>
                  +254 712 700 008
                </a>
              </li>
              <li>
                <a href={helpLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  Message on WhatsApp
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </span>
                Thome, Nairobi, Kenya
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Our Produce</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-heading font-bold text-xl mb-4 text-white">Need Help?</h4>
            <p className="text-sm text-primary-foreground/70 mb-6">
              Have questions about our produce or delivery? We're here to help you get the best organic vegetables.
            </p>
            <a 
               href={helpLink} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center w-full px-4 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            © 2025 Mureithi's Farm To Table. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
