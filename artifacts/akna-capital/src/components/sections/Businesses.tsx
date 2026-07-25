import { motion } from "framer-motion";
import { TrendingUp, PieChart, Gem, GraduationCap, ShieldCheck, Bot, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

const businesses = [
  {
    title: "Research and Ranking",
    tagline: "Suitable for an investment surplus of 3 Lacs to 1 Crore. An investment plan for 5-6 years.",
    icon: TrendingUp,
    href: "/businesses/research-ranking",
    items: [
      { title: "Ranked stock recommendations", description: "Backed by our in-house Quant Engine and 30+ smart algorithms." },
      { title: "Fundamental & technical research", description: "Every recommendation comes with the reasoning behind it." },
      { title: "Regular portfolio reviews", description: "Stay on track as markets and your goals evolve." },
    ],
  },
  {
    title: "Mutual Fund Investing",
    tagline: "Stop your normal SIP and start enhanced SIP with our algorithms.",
    icon: PieChart,
    href: "/businesses/mutual-fund-investing",
    items: [
      { title: "Enhanced SIP", description: "Algorithm assisted fund selection and rebalancing, not a fixed SIP amount forever." },
      { title: "Goal based investing", description: "Map your mutual fund investments to real goals like retirement or education." },
      { title: "Ongoing fund review", description: "We track fund performance so you don't have to." },
    ],
  },
  {
    title: "AKNA Private Wealth",
    tagline: "Suitable for an investment surplus of 1 Crore & above. An investment plan for 8 – 10 years.",
    icon: Gem,
    href: "/businesses/akna-private-wealth",
    items: [
      { title: "Dedicated wealth advisory", description: "A tailored, high-touch approach for high net worth investors." },
      { title: "Diversified strategy", description: "Equity, mutual funds, and alternate assets working together." },
      { title: "Long term wealth planning", description: "Built around an 8-10 year horizon and multi-generational goals." },
    ],
  },
  {
    title: "Stockmarket Workshop",
    tagline: "Learn all about fundamental, technical and quantitative investing.",
    icon: GraduationCap,
    href: "/businesses/stockmarket-workshop",
    items: [
      { title: "Fundamental analysis", description: "Learn to read businesses, not just charts." },
      { title: "Technical analysis", description: "Understand price action, trends, and market timing." },
      { title: "Quantitative investing", description: "See how data driven, algorithmic models are built." },
    ],
  },
  {
    title: "Insurance",
    tagline: "Get the right Health and Term Life Insurance.",
    icon: ShieldCheck,
    href: "/businesses/insurance",
    items: [
      { title: "Term life insurance", description: "Protect your family's financial future for the years that matter most." },
      { title: "Health insurance", description: "Coverage matched to your family's needs and medical history." },
      { title: "Unbiased comparison", description: "We help you compare plans, not just sell one." },
    ],
  },
  {
    title: "Algo-Trading",
    tagline: "Make your trading automated using your rules and logic.",
    icon: Bot,
    href: "/businesses/algo-trading",
    items: [
      { title: "Rule based automation", description: "Convert your own trading logic into an automated strategy." },
      { title: "Backtesting", description: "See how a strategy would have performed before you run it live." },
      { title: "Built on our Quant Engine", description: "The same 30+ algorithm engine that powers our research." },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.0, 0.0, 0.58, 1.0] as const } },
};

export function Businesses() {
  return (
    <section id="businesses" className="py-14 md:py-24 relative bg-muted/30 border-y border-border/40 section-lazy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What we do?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Our <span className="text-primary">Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            This is how our Research Analysts can help you. Pick what fits your goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {businesses.map((biz, index) => {
            const Icon = biz.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 p-6 md:p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">
                        {biz.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{biz.tagline}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {biz.items.map((item, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-primary mt-1.5 shrink-0 text-xs">●</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">{item.title}.</span>{" "}
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {biz.href && (
                    <Link
                      href={biz.href}
                      className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-primary hover:underline no-underline"
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
