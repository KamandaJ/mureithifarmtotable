import { ArrowRight, Leaf, Sun, Sprout, Heart } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@assets/generated_images/hero_image_with_all_vegetables_together.png";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Fresh organic vegetables harvest including amaranth, managu, and more" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 md:to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col justify-center h-full">
        <div className="max-w-2xl text-white space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-white text-sm font-medium w-fit border border-white/10 shadow-lg">
            <Leaf className="w-4 h-4 text-green-300" />
            <span>100% Organic & Local Kenyan Produce</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight drop-shadow-lg">
            Nourishing Communities,<br />
            <span className="text-green-400">One Harvest at a Time</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed drop-shadow-md font-medium">
            From our nutrient-rich soil directly to your kitchen. We specialize in indigenous greens like Terere and Managu, alongside fresh daily vegetables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/products">
              <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Order Fresh Produce
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/about">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Values Strip */}
      <div className="relative z-20 bg-primary text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sun className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Sun-Grown</h3>
              <p className="text-sm text-white/70">Naturally ripened under the Kenyan sun</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sprout className="w-6 h-6 text-green-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Chemical-Free</h3>
              <p className="text-sm text-white/70">100% Organic farming practices</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-red-300" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Health Focused</h3>
              <p className="text-sm text-white/70">Nutrient-dense indigenous vegetables</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
