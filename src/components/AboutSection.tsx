import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Leaf, Flame, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Every dish is made with hand-picked, fresh ingredients — no shortcuts, no compromises.",
  },
  {
    icon: Flame,
    title: "Fusion Menu",
    description: "Where street flavors meet global tastes. Shawarma burgers, Arabian lassi, and more!",
  },
  {
    icon: Sparkles,
    title: "Youth-First Vibe",
    description: "Great music, cozy ambiance, and an Instagrammable aesthetic — made for Gen-Z.",
  },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 section-reveal">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            More Than Just a <span className="text-gradient">Café</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Born in Pune, Lassi Wassi is where bold flavors meet modern vibes. We're not just serving food —
            we're crafting experiences. From our signature shawarmas to thick, creamy lassis,
            every item is a celebration of taste, crafted fresh for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="section-reveal text-center p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
