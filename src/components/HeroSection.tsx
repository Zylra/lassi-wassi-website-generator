import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal via-deep-brown to-charcoal">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🥙</div>
        <div className="absolute top-40 right-20 text-5xl animate-float opacity-20" style={{ animationDelay: "0.5s" }}>🥛</div>
        <div className="absolute bottom-40 left-1/4 text-7xl animate-float opacity-15" style={{ animationDelay: "1s" }}>🍔</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-float opacity-20" style={{ animationDelay: "1.5s" }}>☕</div>
        <div className="absolute top-1/3 left-1/2 text-6xl animate-float opacity-15" style={{ animationDelay: "2s" }}>🍹</div>
      </div>

      {/* Gradient overlay circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
          Pune's Favorite Café Chain
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Sip the Vibe.
          <br />
          <span className="text-gradient">Bite the Flavor.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Fresh shawarmas, thick lassis, bold burgers & more — crafted for the ones who live to eat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Button size="lg" className="text-lg px-8 py-6 animate-pulse-glow" asChild>
            <a href="#menu">View Menu</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary bg-primary/10 hover:bg-primary/20" asChild>
            <a href="#locations">Find Nearest Outlet</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
