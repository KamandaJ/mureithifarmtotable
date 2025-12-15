import { Product } from "@/lib/products";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onAddToOrder: (product: Product) => void;
  isAdded?: boolean;
}

export default function ProductCard({ product, onAddToOrder, isAdded = false }: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false);

  const handleClick = () => {
    onAddToOrder(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
            {product.category}
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
        <p className="text-muted-foreground text-sm mb-4">
          Fresh, organic {product.name.toLowerCase()}
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
            per {product.priceUnit}
          </span>
          
          <button
            onClick={handleClick}
            disabled={isAdded}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
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
  );
}
