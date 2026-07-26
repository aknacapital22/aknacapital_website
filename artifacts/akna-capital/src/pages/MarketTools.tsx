import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calculator, Clock, GraduationCap, Heart, PiggyBank, Landmark, TrendingUp, Layers, Scale,
  Gauge, LineChart, FlaskConical, ArrowRight,
} from "lucide-react";

const calculators = [
  { title: "SIP Calculator", href: "/market-tools/sip-calculator", icon: Calculator, description: "Estimate how a monthly SIP grows over time." },
  { title: "SIP Delay Calculator", href: "/market-tools/sip-delay-calculator", icon: Clock, description: "See what delaying your SIP actually costs you." },
  { title: "Education Calculator", href: "/market-tools/education-calculator", icon: GraduationCap, description: "Plan for your child's future education costs." },
  { title: "Marriage Calculator", href: "/market-tools/marriage-calculator", icon: Heart, description: "Plan for a wedding's future cost after inflation." },
  { title: "Retirement Calculator", href: "/market-tools/retirement-calculator", icon: PiggyBank, description: "Estimate the corpus you'll need to retire comfortably." },
  { title: "Loan / EMI Calculator", href: "/market-tools/loan-emi-calculator", icon: Landmark, description: "Calculate EMI, total interest, and total payment." },
  { title: "SIP Step Up Calculator", href: "/market-tools/sip-step-up-calculator", icon: TrendingUp, description: "See the impact of increasing your SIP every year." },
  { title: "Lumpsum + SIP", href: "/market-tools/lumpsum-sip-calculator", icon: Layers, description: "Combine a lumpsum investment with an ongoing SIP." },
  { title: "Business Valuation Estimator", href: "/market-tools/business-valuation-estimator", icon: Scale, description: "A quick EBITDA-multiple estimate of what your business could be worth." },
];

const otherTools = [
  {
    title: "Risk Profiler",
    description: "A short questionnaire to help understand your risk appetite before we recommend an investment mix.",
    icon: Gauge,
  },
  {
    title: "Portfolio Tracker",
    description: "A consolidated view of your holdings and recommendations, available to active clients.",
    icon: LineChart,
  },
  {
    title: "Algo Strategy Backtester",
    description: "Test a rule based trading strategy against historical data before running it live, part of our Algo-Trading offering.",
    icon: FlaskConical,
  },
];

const marketToolsSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aknacapital.com/" },
      { "@type": "ListItem", "position": 2, "name": "Market Tools", "item": "https://aknacapital.com/market-tools" },
    ],
  },
];

export default function MarketTools() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Market Tools & Calculators | AKNA Capital"
        description="Free financial calculators from AKNA Capital: SIP, SIP delay, education, marriage, retirement, loan EMI, SIP step up, lumpsum + SIP, and business valuation calculators."
        path="/market-tools"
        keywords="SIP calculator, EMI calculator, retirement calculator India, education planning calculator, marriage planning calculator, lumpsum SIP calculator, business valuation calculator, financial calculators India"
        jsonLd={marketToolsSchemas}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Page Hero */}
        <section className="py-12 md:py-20 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-6"
            >
              Market <span className="text-primary">Tools</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Free calculators to plan your investments, goals, and loans, alongside our research.
            </motion.p>
          </div>
        </section>

        {/* Calculators grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">Calculators</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {calculators.map((calc, index) => {
                const Icon = calc.icon;
                return (
                  <motion.div
                    key={calc.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
                  >
                    <Link href={calc.href} className="no-underline group">
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                        <CardContent className="pt-6 flex flex-col items-start gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                              {calc.title}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{calc.description}</p>
                          </div>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-1">
                            Calculate <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Other tools */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">Other Tools</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                        <CardTitle className="text-lg md:text-xl text-foreground pt-1">{tool.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-sm">{tool.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-12 md:py-20 bg-primary/5 border-y border-primary/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Want access to these tools?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get in touch and we'll set you up as part of the right offering for your goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
