import Navbar from "@/components/Navbar";
import MissionSection from "@/components/MissionSection";
import ContactFooter from "@/components/ContactFooter";
import { Leaf, User } from "lucide-react";
import heroImg from "@assets/generated_images/hero_image_with_all_vegetables_together.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* About Hero */}
        <section className="relative py-24 bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={heroImg} alt="Farm background" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Mureithi's Farm</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              A story of passion, soil, and sustenance.
            </p>
          </div>
        </section>

        {/* The Farmer Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-muted">
                  {/* Placeholder for Farmer's Photo - Using a generic farm image for now if specific one not provided, or hero crop */}
                  <img 
                    src={heroImg} 
                    alt="John Mureithi" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold font-heading">John Mureithi</h3>
                      <p className="text-white/90">Founder & Head Farmer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wide">
                  <User className="w-4 h-4" />
                  The Founder
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Rooted in Passion
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "Mureithi's Farm To Table" started with a simple belief: that everyone deserves access to fresh, chemical-free food. John Mureithi founded this farm to bring the nutritional power of indigenous vegetables back to the modern table.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience and a deep respect for nature, John oversees every seed planted and every leaf harvested. We don't just grow food; we cultivate health.
                </p>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-4 bg-muted/30 rounded-xl border border-border">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Organic Practices</div>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-xl border border-border">
                    <div className="text-3xl font-bold text-primary mb-1">Local</div>
                    <div className="text-sm text-muted-foreground">Community Focused</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MissionSection />
      </main>
      <ContactFooter />
    </div>
  );
}
