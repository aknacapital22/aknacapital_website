import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

const points = [
  {
    title: "Innovation",
    tagline: "Algorithms",
    description: "We believe in moving ahead of time, so we've built an in-house Quant Engine using 30+ smart algorithms that help us arrive at the right stock recommendations for our customers.",
    icon: Sparkles,
  },
  {
    title: "Growth & Scaling",
    tagline: "Impact",
    description: "We aspire to make a difference in the industry and investor community, becoming a driving force for positive change. Wealth creation becomes easy with us.",
    icon: TrendingUp,
  },
  {
    title: "Realistic",
    tagline: "Data-Driven",
    description: "We are dedicated to always being honest, transparent, and ethical in everything we do. Even if you want to buy the data, we are the providers of clean and authentic data.",
    icon: ShieldCheck,
  },
];

export function FeaturedSections() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="why-us" className="py-14 md:py-24 relative bg-background overflow-hidden section-lazy">

      {/* Background orb — static when reduced motion or mobile */}
      {reduceMotion ? (
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      ) : (
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Sections
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            We Don't Just Offer Advisory —<br className="hidden sm:block" /> We Offer <span className="text-primary">Wealth Creation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our value system: the foundation of our success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center gap-4 group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-lg transition-shadow duration-300 cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{point.title}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{point.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
