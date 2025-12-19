import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import heroImg from "@assets/generated_images/farm_hero_vegetables_spread.png";
import logoImg from "@assets/generated_images/enhanced_Farm_To_Table_logo.png";
import { Target, Lightbulb, ShieldCheck, Leaf, Sprout, HeartHandshake, User } from "lucide-react";

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
                <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-muted">
                  {/* Placeholder for Farmer's Photo - Using a generic farm image for now if specific one not provided, or hero crop */}
                  <img 
                    src={logoImg}
                    alt="John Mureithi"
                    className="w-full h-full object-cover"
                  />
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

        {/*Mission Section*/}
        <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
            Cultivating a Healthier Future
          </h2>
          <p className="text-lg text-muted-foreground">
            At Mureithi's Farm, we believe that good food is the foundation of a good life.
            Our commitment goes beyond just farming; it's about nurturing our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm flex flex-col items-start gap-6 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide our community with the highest quality, accessible, and affordable organic produce while promoting sustainable farming practices that protect our environment for future generations. We strive to bring the farm directly to your table, ensuring freshness in every bite.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 shadow-lg flex flex-col items-start gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-colors"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-2 relative z-10">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-heading mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                To be the leading provider of organic indigenous vegetables in the region, fostering a society where healthy, chemical-free food is the standard, not a luxury. We envision a future where local agriculture empowers communities and restores the earth.
              </p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div>
          <h3 className="text-2xl font-bold font-heading text-center mb-12">Our Core Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl">Integrity</h4>
              <p className="text-muted-foreground">
                We are transparent about our growing methods. When we say organic, we mean it—no hidden chemicals, just pure nature.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center">
                <Leaf className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl">Sustainability</h4>
              <p className="text-muted-foreground">
                We respect the land. Our farming techniques enrich the soil and conserve water, ensuring the land stays fertile.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl">Community</h4>
              <p className="text-muted-foreground">
                We are more than a business; we are neighbors. We value our relationships with customers and support local health.
              </p>
             </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <ContactFooter />
    </div>
  );
}
