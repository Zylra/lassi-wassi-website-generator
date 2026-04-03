import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { menuCategories } from "@/data/menuData";
import { Badge } from "@/components/ui/badge";

export default function MenuSection() {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  const active = menuCategories.find((c) => c.name === activeCategory)!;

  return (
    <section id="menu" className="py-24 bg-muted/50 relative overflow-hidden" ref={ref}>
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob-delay-2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 section-reveal">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            What's <span className="text-gradient">Cooking?</span>
          </h2>
          <p className="text-muted-foreground text-lg">Explore our full menu — something for every craving.</p>
        </div>

        {/* Category Filter */}
        <div className="section-reveal flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground/70 hover:bg-primary/10 border border-border"
              }`}
            >
              <span className="mr-1">{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 section-reveal">
          {active.items.map((item, i) => (
            <div
              key={item.name}
              className="group bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </h4>
                    {item.tag && (
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                        {item.tag}
                      </Badge>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  )}
                </div>
                <span className="text-lg font-bold text-primary whitespace-nowrap group-hover:scale-110 transition-transform duration-200">₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
