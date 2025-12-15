import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import ContactFooter from "@/components/ContactFooter";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
              Ready to Taste the Difference?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Explore our wide variety of fresh, organic vegetables and greens. Order today and experience true farm-to-table freshness.
            </p>
            <Link href="/products">
              <button className="px-10 py-5 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3">
                Shop Our Produce
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
