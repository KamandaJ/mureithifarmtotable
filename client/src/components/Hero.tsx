import { ArrowRight, Leaf } from "lucide-react";
import heroImg from "@assets/generated_images/hero_image_of_fresh_organic_vegetables_on_a_table.png";

export default function Hero() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Fresh organic vegetables" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col justify-center h-full">
        <div className="max-w-2xl text-white space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-white text-sm font-medium w-fit">
            <Leaf className="w-4 h-4" />
            <span>100% Organic & Local</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight">
            Fresh from the Soil to Your Table
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
            We grow and deliver the freshest green leafy vegetables, tomatoes, and organic produce. 
            Healthy living starts with healthy eating.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={scrollToProducts}
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View Produce
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="tel:+254712700008"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
