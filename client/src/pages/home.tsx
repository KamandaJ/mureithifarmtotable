import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactFooter from "@/components/ContactFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Truck } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import farmerImage from "@assets/generated_images/farm_hero_vegetables_spread.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <section className="py-20 bg-linear-to-br from-green-50 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={farmerImage}
                alt="Farmer tending to vegetables at Mureithi's Farm"
                className="w-full h-auto object-cover"
                data-testid="img-farmer-story"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary" data-testid="text-story-headline">
                Our Farm Story
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                At Mureithi's Farm To Table, we believe in preserving Kenya's rich agricultural heritage 
                while nourishing our community with the healthiest produce possible.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Our indigenous vegetables — from the iron-rich <strong>Terere</strong> (Amaranth) to 
                the beloved <strong>Sukuma Wiki</strong> — are grown using time-honored sustainable methods 
                that respect both the land and our traditions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Every leaf we harvest carries the dedication of our family's commitment to quality. 
                We grow only what we would proudly serve on our own table.
              </p>
              <Link href="/about">
                <Button variant="secondary" size="lg" data-testid="button-learn-more">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-why-choose-headline">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6" data-testid="card-benefit-fresh">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  100% Fresh
                </h3>
                <p className="text-muted-foreground">
                  Harvested fresh every morning and delivered the same day. 
                  No cold storage, no preservatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6" data-testid="card-benefit-indigenous">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Indigenous Varieties
                </h3>
                <p className="text-muted-foreground">
                  Traditional African vegetables packed with nutrients 
                  our ancestors have valued for generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6" data-testid="card-benefit-direct">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Direct From Farm
                </h3>
                <p className="text-muted-foreground">
                  No middlemen. Buy directly from us and get the best quality 
                  at fair prices while supporting local farming.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
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
