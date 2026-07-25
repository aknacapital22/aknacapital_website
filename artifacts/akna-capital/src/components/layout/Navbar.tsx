import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowRight,
  TrendingUp, PieChart, Gem, GraduationCap, ShieldCheck, Bot,
  UserCircle, Users, MessageCircle,
  Calculator, Clock, Heart, PiggyBank, Landmark, Layers,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
const logoUrl = "/logo.jpg";

const businesses = [
  {
    name: "Research and Ranking",
    href: "/businesses/research-ranking",
    icon: TrendingUp,
    description: "Equity research for an investment surplus of 3 Lacs to 1 Crore, over 5-6 years",
    tag: "Equity",
  },
  {
    name: "Mutual Fund Investing",
    href: "/businesses/mutual-fund-investing",
    icon: PieChart,
    description: "Stop your normal SIP and start enhanced SIP with our algorithms",
    tag: "Mutual Funds",
  },
  {
    name: "AKNA Private Wealth",
    href: "/businesses/akna-private-wealth",
    icon: Gem,
    description: "For an investment surplus of 1 Crore & above, over 8-10 years",
    tag: "Private Wealth",
  },
  {
    name: "Stockmarket Workshop",
    href: "/businesses/stockmarket-workshop",
    icon: GraduationCap,
    description: "Learn fundamental, technical and quantitative investing",
    tag: "Education",
  },
  {
    name: "Insurance",
    href: "/businesses/insurance",
    icon: ShieldCheck,
    description: "Get the right health and term life insurance",
    tag: "Insurance",
  },
  {
    name: "Algo-Trading",
    href: "/businesses/algo-trading",
    icon: Bot,
    description: "Make your trading automated using your own rules and logic",
    tag: "Algo",
  },
];

const aboutLinks = [
  { name: "Who are we?", href: "/about", icon: UserCircle, description: "Our story, mission and values" },
  { name: "Our Team", href: "/about#team", icon: Users, description: "Research analysts and advisors behind AKNA" },
  { name: "Contact Us", href: "/contact", icon: MessageCircle, description: "Reach out with your questions" },
];

const calculators = [
  { name: "SIP Calculator", href: "/market-tools/sip-calculator", icon: Calculator, description: "Estimate how a monthly SIP grows over time" },
  { name: "SIP Delay Calculator", href: "/market-tools/sip-delay-calculator", icon: Clock, description: "See what delaying your SIP actually costs you" },
  { name: "Education Calculator", href: "/market-tools/education-calculator", icon: GraduationCap, description: "Plan for your child's future education costs" },
  { name: "Marriage Calculator", href: "/market-tools/marriage-calculator", icon: Heart, description: "Plan for a wedding's future cost after inflation" },
  { name: "Retirement Calculator", href: "/market-tools/retirement-calculator", icon: PiggyBank, description: "Estimate the corpus you'll need to retire" },
  { name: "Loan / EMI Calculator", href: "/market-tools/loan-emi-calculator", icon: Landmark, description: "Calculate EMI, total interest, and total payment" },
  { name: "SIP Step Up Calculator", href: "/market-tools/sip-step-up-calculator", icon: TrendingUp, description: "See the impact of increasing your SIP every year" },
  { name: "Lumpsum + SIP", href: "/market-tools/lumpsum-sip-calculator", icon: Layers, description: "Combine a lumpsum investment with an ongoing SIP" },
];

const navLinks = [
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessesOpen, setBusinessesOpen] = useState(false);
  const [mobileBusinessesOpen, setMobileBusinessesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [location] = useLocation();
  const businessesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (businessesRef.current && !businessesRef.current.contains(e.target as Node)) {
        setBusinessesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isBusinessesActive = location.startsWith("/businesses");
  const isAboutActive = location.startsWith("/about") || location === "/contact";
  const isToolsActive = location.startsWith("/market-tools");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/90 backdrop-blur-xl border-border/50 shadow-sm" : "bg-background/80 backdrop-blur-sm py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group relative z-50 no-underline">
          <img
            src={logoUrl}
            alt="AKNA Capital Logo"
            className="h-10 w-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-bold tracking-tight text-foreground hidden sm:block">
            AKNA Capital
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* About dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              onClick={() => setAboutOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isAboutActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-haspopup="true"
              aria-expanded={aboutOpen}
            >
              About
              <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-card border border-border/70 rounded-2xl shadow-2xl overflow-hidden"
                  role="menu"
                >
                  <div className="p-2">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setAboutOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/70 transition-all duration-150 no-underline group"
                        role="menuitem"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Businesses mega-menu dropdown */}
          <div ref={businessesRef} className="relative">
            <button
              onClick={() => setBusinessesOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isBusinessesActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-haspopup="true"
              aria-expanded={businessesOpen}
            >
              Businesses
              <motion.span animate={{ rotate: businessesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {businessesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[620px] bg-card border border-border/70 rounded-2xl shadow-2xl overflow-hidden"
                  role="menu"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/50 bg-muted/40">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Our Businesses</p>
                      <p className="text-[11px] text-muted-foreground/50 mt-0.5">How our Research Analysts can help you</p>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                      6 Businesses
                    </span>
                  </div>

                  {/* 2-column grid */}
                  <div className="p-3 grid grid-cols-2 gap-1">
                    {businesses.map((biz) => (
                      <Link
                        key={biz.name}
                        href={biz.href}
                        onClick={() => setBusinessesOpen(false)}
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-muted/70 transition-all duration-150 no-underline group"
                        role="menuitem"
                        title={`${biz.name}: ${biz.description}`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <biz.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                              {biz.name}
                            </p>
                            <span className="text-[10px] font-semibold text-primary/70 bg-primary/8 px-1.5 py-0.5 rounded-full whitespace-nowrap hidden lg:block">
                              {biz.tag}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                            {biz.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-5 py-3.5 border-t border-border/50 bg-muted/30 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Not sure what fits your goals?
                    </p>
                    <Link
                      href="/contact"
                      onClick={() => setBusinessesOpen(false)}
                      className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline no-underline whitespace-nowrap ml-3"
                    >
                      Talk to us <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Market Tools mega-menu dropdown */}
          <div ref={toolsRef} className="relative">
            <button
              onClick={() => setToolsOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isToolsActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-haspopup="true"
              aria-expanded={toolsOpen}
            >
              Market Tools
              <motion.span animate={{ rotate: toolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {toolsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[620px] bg-card border border-border/70 rounded-2xl shadow-2xl overflow-hidden"
                  role="menu"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/50 bg-muted/40">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">Calculators</p>
                      <p className="text-[11px] text-muted-foreground/50 mt-0.5">Free tools to plan your investments and goals</p>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                      8 Calculators
                    </span>
                  </div>

                  {/* 2-column grid */}
                  <div className="p-3 grid grid-cols-2 gap-1">
                    {calculators.map((calc) => (
                      <Link
                        key={calc.name}
                        href={calc.href}
                        onClick={() => setToolsOpen(false)}
                        className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-muted/70 transition-all duration-150 no-underline group"
                        role="menuitem"
                        title={`${calc.name}: ${calc.description}`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <calc.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {calc.name}
                          </p>
                          <p className="text-xs text-muted-foreground leading-snug line-clamp-2 mt-0.5">
                            {calc.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-5 py-3.5 border-t border-border/50 bg-muted/30 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Want the full picture?
                    </p>
                    <Link
                      href="/market-tools"
                      onClick={() => setToolsOpen(false)}
                      className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline no-underline whitespace-nowrap ml-3"
                    >
                      See all market tools <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors no-underline ${
                location === link.href || (link.href !== "/" && location.startsWith(link.href))
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link href="/contact">
            <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg">
              Signup Today
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {/* Mobile About */}
              <div className="flex flex-col items-center gap-3 w-full px-6">
                <button
                  onClick={() => setMobileAboutOpen((v) => !v)}
                  className={`flex items-center gap-1 text-lg font-medium transition-colors ${isAboutActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  About
                  <motion.span animate={{ rotate: mobileAboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden w-full"
                    >
                      <div className="flex flex-col gap-1 pt-1">
                        {aboutLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => { setMobileMenuOpen(false); setMobileAboutOpen(false); }}
                            className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 no-underline transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                              <item.icon className="w-4 h-4 text-primary" />
                            </div>
                            <p className="text-sm font-semibold text-foreground leading-tight">{item.name}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Businesses */}
              <div className="flex flex-col items-center gap-3 w-full px-6">
                <button
                  onClick={() => setMobileBusinessesOpen((v) => !v)}
                  className={`flex items-center gap-1 text-lg font-medium transition-colors ${isBusinessesActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  Businesses
                  <motion.span animate={{ rotate: mobileBusinessesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileBusinessesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden w-full"
                    >
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {businesses.map((biz) => (
                          <Link
                            key={biz.name}
                            href={biz.href}
                            onClick={() => { setMobileMenuOpen(false); setMobileBusinessesOpen(false); }}
                            className="flex flex-col gap-2 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 no-underline transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                              <biz.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground leading-tight">{biz.name}</p>
                              <p className="text-[10px] font-medium text-primary/70 mt-0.5">{biz.tag}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Market Tools */}
              <div className="flex flex-col items-center gap-3 w-full px-6">
                <button
                  onClick={() => setMobileToolsOpen((v) => !v)}
                  className={`flex items-center gap-1 text-lg font-medium transition-colors ${isToolsActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  Market Tools
                  <motion.span animate={{ rotate: mobileToolsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileToolsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden w-full"
                    >
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {calculators.map((calc) => (
                          <Link
                            key={calc.name}
                            href={calc.href}
                            onClick={() => { setMobileMenuOpen(false); setMobileToolsOpen(false); }}
                            className="flex flex-col gap-2 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 no-underline transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                              <calc.icon className="w-4 h-4 text-primary" />
                            </div>
                            <p className="text-sm font-semibold text-foreground leading-tight">{calc.name}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors no-underline ${
                    location === link.href || (link.href !== "/" && location.startsWith(link.href))
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link href="/contact">
                <Button
                  onClick={() => setMobileMenuOpen(false)}
                  size="lg"
                  className="rounded-full w-[80%] max-w-[250px] bg-primary text-primary-foreground font-semibold"
                >
                  Signup Today
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
