import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "@assets/generated_images/logo_for_organic_farm_mureithi's_farm_to_table.png";

export default function ContactFooter() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="Logo" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-heading font-bold text-2xl">Mureithi's Farm</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Dedicated to bringing you the freshest, organically grown vegetables. 
              We believe in sustainable farming and healthy communities.
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
                <a href="mailto:johnmureithi331@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </span>
                  johnmureithi331@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </span>
                Local Farm, Kenya
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Our Produce</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-accent">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Subscribe to get updates on harvest days and new produce.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-accent text-white placeholder:text-white/50"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Mureithi's Farm To Table. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
