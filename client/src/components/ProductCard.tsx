import { Product } from "@/lib/products";
import { Plus, Check, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductCardProps {
  product: Product;
  onAddToOrder: (product: Product) => void;
  isAdded?: boolean;
}

export default function ProductCard({ product, onAddToOrder, isAdded = false }: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToOrder(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <Dialog>
      <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20 flex flex-col h-full relative">
        <DialogTrigger asChild>
          <div className="cursor-pointer flex flex-col h-full">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white font-medium text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                  {product.category}
                </span>
                <span className="text-white flex items-center gap-1 text-xs bg-primary/80 px-2 py-1 rounded backdrop-blur-sm">
                  <Info className="w-3 h-3" /> Details
                </span>
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <span className="font-bold text-primary text-lg">
                  Ksh {product.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {product.funFact}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  per {product.priceUnit}
                </span>
                
                <button
                  onClick={handleClick}
                  disabled={isAdded}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm z-10",
                    isAdded 
                      ? "bg-green-600 text-white scale-100" 
                      : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground active:scale-95"
                  )}
                  aria-label={`Add ${product.name} to order`}
                >
                  {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl overflow-hidden p-0 gap-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-full bg-muted">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden flex items-end p-6">
                <h2 className="text-white font-heading font-bold text-2xl">{product.name}</h2>
              </div>
            </div>
            
            <ScrollArea className="max-h-[80vh] md:max-h-full">
              <div className="p-6 md:p-8 space-y-6">
                <DialogHeader className="hidden md:block">
                  <DialogTitle className="text-3xl font-heading font-bold text-primary">{product.name}</DialogTitle>
                  <DialogDescription className="text-lg font-medium text-foreground">
                    Ksh {product.price} / {product.priceUnit}
                  </DialogDescription>
                </DialogHeader>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Fun Fact
                  </h4>
                  <p className="italic text-foreground/80 bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                    "{product.funFact}"
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Nutritional Benefits
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.nutritionalBenefits.map((benefit, i) => (
                      <Badge key={i} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Preparation & Usage
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.preparation}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border">
                  <button
                    onClick={() => {
                       onAddToOrder(product);
                       // We can optionally close dialog here, or let user keep reading
                    }}
                    disabled={isAdded}
                    className={cn(
                      "w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
                      isAdded 
                        ? "bg-green-600 text-white" 
                        : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    )}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-5 h-5" /> Added to Basket
                      </>
                    ) : (
                      <>
                        <Plus className="w-5 h-5" /> Add to Basket - Ksh {product.price}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
