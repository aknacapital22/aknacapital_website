import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp, PieChart, Gem, GraduationCap, ShieldCheck, Bot,
  Rocket, Building2, Search, Handshake, ArrowRight, User, Briefcase,
} from "lucide-react";

const individualServices = [
  { name: "Research and Ranking", href: "/services/research-ranking", icon: TrendingUp, description: "Ranked equity research for an investment surplus of 3 Lacs to 1 Crore, over a 5-6 year horizon.", tag: "3L – 1Cr, 5-6 yrs" },
  { name: "Mutual Fund Investing", href: "/services/mutual-fund-investing", icon: PieChart, description: "Algorithm assisted enhanced SIP investing, mapped to specific life goals.", tag: "Goal-based SIP" },
  { name: "AKNA Private Wealth", href: "/services/akna-private-wealth", icon: Gem, description: "Dedicated wealth management for an investment surplus of 1 Crore and above, over 8-10 years.", tag: "1Cr+, 8-10 yrs" },
  { name: "Stockmarket Workshop", href: "/services/stockmarket-workshop", icon: GraduationCap, description: "Learn fundamental, technical, and quantitative investing from our own research team.", tag: "Education" },
  { name: "Insurance", href: "/services/insurance", icon: ShieldCheck, description: "Unbiased guidance on the right health and term life insurance cover.", tag: "Protection" },
  { name: "Algo-Trading", href: "/services/algo-trading", icon: Bot, description: "Convert your own trading rules into a backtested, automated strategy.", tag: "Automation" },
];

const corporateServices = [
  { name: "Pre-IPO Advisory", href: "/services/pre-ipo-advisory", icon: Rocket, description: "IPO readiness, governance, and cap table clean-up, 12-24 months before a potential listing.", tag: "Pre-listing" },
  { name: "IPO and SME IPO Advisory", href: "/services/ipo-and-sme-ipo-advisory", icon: Building2, description: "Issuer-side advisory for Main-Board and SME IPOs, from merchant banker selection to listing.", tag: "Going public" },
  { name: "Buy-side M&A Advisory", href: "/services/buy-side-ma-advisory", icon: Search, description: "Target identification, valuation, diligence, and negotiation support for acquirers.", tag: "Acquiring" },
  { name: "Sell-side M&A Advisory", href: "/services/sell-side-ma-advisory", icon: Handshake, description: "Sale readiness, valuation benchmarking, and confidential buyer outreach for promoters selling.", tag: "Selling" },
];

const servicesHubSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aknacapital.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://aknacapital.com/services" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AKNA Capital Services",
    itemListElement: [...individualServices, ...corporateServices].map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `https://aknacapital.com${s.href}`,
    })),
  },
];

type Audience = "individuals" | "businesses";

export default function Services() {
  const [audience, setAudience] = useState<Audience>("individuals");
  const list = audience === "individuals" ? individualServices : corporateServices;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Our Services | Wealth Advisory & Corporate M&A Advisory | AKNA Capital"
        description="AKNA Capital's services, in one place: equity research, mutual funds, and private wealth for individuals; and Pre-IPO, IPO, and M&A advisory for business owners. Find the right fit for you."
        path="/services"
        keywords="AKNA Capital services, wealth advisory services India, corporate advisory services India, financial services for individuals and businesses"
        jsonLd={servicesHubSchema}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="py-12 md:py-20 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5"
            >
              Services Built Around <span className="text-primary">Where You Are</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Whether you're growing your personal wealth or preparing your business for its next big step,
              tell us which one you are and we'll show you the services built for it.
            </motion.p>

            {/* Audience toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex p-1.5 rounded-full bg-card border border-border shadow-sm"
              role="tablist"
              aria-label="Choose your audience"
            >
              <button
                role="tab"
                aria-selected={audience === "individuals"}
                onClick={() => setAudience("individuals")}
                className={`flex items-center gap-2 px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                  audience === "individuals"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="w-4 h-4" />
                For Individuals &amp; Families
              </button>
              <button
                role="tab"
                aria-selected={audience === "businesses"}
                onClick={() => setAudience("businesses")}
                className={`flex items-center gap-2 px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                  audience === "businesses"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                For Business Owners &amp; Promoters
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8 text-center">
                  {audience === "individuals"
                    ? "Retail Wealth Advisory — 6 Services"
                    : "M&A Advisory and IPO Advisory — 4 Services"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {list.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
                      >
                        <Link href={item.href} className="no-underline group">
                          <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                            <CardContent className="pt-6 flex flex-col items-start gap-3">
                              <div className="flex items-center justify-between w-full">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-[11px] font-semibold text-primary/70 bg-primary/8 px-2 py-1 rounded-full whitespace-nowrap">
                                  {item.tag}
                                </span>
                              </div>
                              <div>
                                <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                  {item.name}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.description}</p>
                              </div>
                              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-1">
                                Learn more <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-12 md:py-20 bg-primary/5 border-y border-primary/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Still not sure which one fits?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Tell us your goal and we'll point you to the right service, or the right combination of them.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg group font-semibold no-underline transition-colors">
                Talk to an Advisor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
