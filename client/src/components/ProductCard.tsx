import { Product } from "@/lib/products";
import { Plus, Check, Info, Trash2 } from "lucide-react";
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
  quantity?: number;
  onUpdateQuantity?: (productId: string, delta: number) => void;
  onRemoveFromCart?: (productId: string) => void;
}

export default function ProductCard({ product, onAddToOrder, isAdded = false, quantity = 0, onUpdateQuantity, onRemoveFromCart }: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 animate-pulse" />
              )}
              <img 
                src={product.image} 
                alt={product.name}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                  !imageLoaded ? "opacity-0" : "opacity-100"
                )}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white font-medium text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                  {product.category}
                </span>
                <span className="text-white flex items-center gap-1 text-xs bg-primary/80 px-2 py-1 rounded backdrop-blur-sm">
                  <Info className="w-3 h-3" /> Details
                </span>
              </div>
            </div>
            
            <div className="p-5 flex flex-col grow">
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

                {quantity > 0 ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white rounded-full border border-input p-0.5">
                      <button 
                        onClick={(e) => { e.stopPropagation(); onUpdateQuantity?.(product.id, -1); }}
                        className="w-7 h-7 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                        aria-label={`Decrease ${product.name}`}
                      >
                        -
                      </button>
                      <span className="font-mono font-medium w-8 text-center text-sm">{quantity}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); onUpdateQuantity?.(product.id, 1); }}
                        className="w-7 h-7 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                        aria-label={`Increase ${product.name}`}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onRemoveFromCart?.(product.id); }}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleClick(e); }}
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
                )}
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-2xl overflow-hidden p-0 gap-0">
          <div className="w-full">
            <ScrollArea className="max-h-[80vh] md:max-h-full">
              <div className="p-6 md:p-8 space-y-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-heading font-bold text-primary">{product.name}</DialogTitle>
                  <DialogDescription className="text-lg font-medium text-foreground">Ksh {product.price} / {product.priceUnit}</DialogDescription>
                </DialogHeader>

                {/* Nutritional Benefits (first) */}
                <section className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Nutritional Benefits
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.nutritionalBenefits.map((benefit, i) => (
                      <Badge key={i} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200 inline-flex">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </section>

                {/* Fun Fact (second) */}
                <section className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Fun Fact
                  </h4>
                  <p className="italic text-foreground/80 bg-accent/10 p-4 rounded-lg border-l-4 border-accent whitespace-normal break-words">
                    "{product.funFact}"
                  </p>
                </section>

                {/* Preparation (third) */}
                <section className="bg-accent/5 p-4 rounded-lg border border-accent/10">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    Preparation & Usage
                  </h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-normal break-words">
                    {product.preparation}
                  </p>
                </section>
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}
