import { products, Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { ShoppingBag, MessageCircle, X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ProductGrid() {
  const [cart, setCart] = useState<Map<string, { product: Product, quantity: number }>>(new Map());

  const addToCart = (product: Product) => {
    setCart(prev => {
      const newCart = new Map(prev);
      const existing = newCart.get(product.id);
      if (existing) {
        newCart.set(product.id, { ...existing, quantity: existing.quantity + 1 });
      } else {
        newCart.set(product.id, { product, quantity: 1 });
      }
      return newCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = new Map(prev);
      newCart.delete(productId);
      return newCart;
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prev => {
      const newCart = new Map(prev);
      const item = newCart.get(productId);
      if (item) {
        const newQuantity = item.quantity + delta;
        if (newQuantity <= 0) {
          newCart.delete(productId);
        } else {
          newCart.set(productId, { ...item, quantity: newQuantity });
        }
      }
      return newCart;
    });
  };

  const cartItems = Array.from(cart.values());
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const generateWhatsAppLink = () => {
    const phone = "254712700008";
    let message = "Hello Mureithi's Farm To Table, I would like to place an order:\n\n";
    cartItems.forEach(item => {
      message += `- ${item.product.name}: ${item.quantity} x Ksh ${item.product.price} = Ksh ${item.product.price * item.quantity}\n`;
    });
    message += `\n*Total Estimated Price: Ksh ${totalPrice}*`;
    message += "\n\nPlease confirm availability and delivery.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  // Define category order
  const categoryOrder = ["Leafy Green", "Vegetable", "Spice"];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Harvest</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Fresh Organic Produce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Grown with care, harvested at peak ripeness. Select your favorites below and send us your order via WhatsApp.
          </p>
        </div>

        <div className="space-y-16">
          {categoryOrder.map((category) => {
            const categoryProducts = productsByCategory[category];
            if (!categoryProducts || categoryProducts.length === 0) return null;

            return (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                    {category}s
                  </h3>
                  <div className="h-px bg-border flex-1"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {categoryProducts.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToOrder={addToCart}
                      isAdded={cart.has(product.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Cart Button */}
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button size="lg" className="rounded-full h-16 px-6 bg-primary hover:bg-primary/90 text-white shadow-2xl flex items-center gap-3 transition-transform hover:scale-105">
                  <div className="relative">
                    <ShoppingBag className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                      {totalItems}
                    </span>
                  </div>
                  <div className="flex flex-col items-start leading-none">
                    <span className="font-bold text-lg">View Order</span>
                    <span className="text-xs opacity-90">Ksh {totalPrice}</span>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col h-full w-full sm:max-w-md">
                <SheetHeader className="border-b pb-4">
                  <SheetTitle className="text-2xl font-heading text-primary flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6" />
                    Your Basket
                  </SheetTitle>
                </SheetHeader>
                
                <ScrollArea className="flex-1 py-4">
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-muted-foreground py-12">
                      <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
                      <p>Your basket is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map(({ product, quantity }) => (
                        <div key={product.id} className="flex gap-4 items-start bg-muted/30 p-3 rounded-lg border border-transparent hover:border-primary/10 transition-colors">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-16 h-16 rounded-md object-cover bg-white"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-bold text-foreground">{product.name}</h4>
                              <span className="font-bold text-primary text-sm">Ksh {product.price * quantity}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Ksh {product.price} / {product.priceUnit}</p>
                            
                            <div className="flex items-center gap-3 mt-3">
                              <div className="flex items-center gap-2 bg-white rounded-full border border-input p-0.5">
                                <button 
                                  onClick={() => updateQuantity(product.id, -1)}
                                  className="w-6 h-6 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                                >
                                  -
                                </button>
                                <span className="font-mono font-medium w-6 text-center text-sm">{quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(product.id, 1)}
                                  className="w-6 h-6 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(product.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>

                <SheetFooter className="border-t pt-4 flex-col gap-4">
                  <div className="flex justify-between items-center w-full text-lg font-bold">
                    <span>Total Estimate:</span>
                    <span className="text-primary">Ksh {totalPrice}</span>
                  </div>
                  <a 
                    href={generateWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full h-12 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                      <MessageCircle className="w-5 h-5" />
                      Send Order via WhatsApp
                    </Button>
                  </a>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
