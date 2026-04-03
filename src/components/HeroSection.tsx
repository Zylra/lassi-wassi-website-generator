import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background image setup */}
      <div 
        className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-60"
      />
      {/* Light overlay to keep the white aesthetic but ensure readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
          Pune's Favorite Café Chain
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-charcoal leading-tight mb-6 font-sans">
          Sip the Vibe.
          <br />
          <span className="text-gradient drop-shadow-sm">Bite the Flavor.</span>
        </h1>
        <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-10">
          Fresh shawarmas, thick lassis, bold burgers & more — crafted for the ones who live to eat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform" asChild>
            <a href="#menu">View Menu</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary bg-white shadow-sm hover:bg-primary/10 hover:scale-105 transition-transform" asChild>
            <a href="#locations">Find Nearest Outlet</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-primary/70 transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
