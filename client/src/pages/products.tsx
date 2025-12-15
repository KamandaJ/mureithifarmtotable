import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import ContactFooter from "@/components/ContactFooter";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="pt-10">
        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 text-center">
            Our Fresh Produce
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Browse our selection of organic greens and vegetables. Click "Add" to build your basket, then send your order directly to us via WhatsApp.
          </p>
        </div>
        <ProductGrid />
      </main>
      <ContactFooter />
    </div>
  );
}
