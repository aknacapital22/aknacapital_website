import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  BarChart3, 
  LineChart, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  Cpu, 
  ChevronRight,
  TrendingUp,
  Globe,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

// Assets
import heroImg from "@assets/generated_images/hero_abstract.jpg";
import valueSysImg from "@assets/generated_images/value_system.jpg";
import test1Img from "@assets/generated_images/testimonial_1.jpg";
import test2Img from "@assets/generated_images/testimonial_2.jpg";
import test3Img from "@assets/generated_images/testimonial_3.jpg";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Dynamic Noise Overlay for texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-xl border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-serif tracking-tight text-white">AKNA <span className="text-primary">Capital</span></span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">About</a>
            <a href="#businesses" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Businesses</a>
            <a href="#tools" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Market Tools</a>
            <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Blog</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button className="font-semibold px-6 hover-elevate bg-primary text-white border border-primary hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(74,58,253,0.3)] hover:shadow-[0_0_30px_rgba(74,58,253,0.5)]">
              Create Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl">
            <a href="#about" className="text-lg font-medium text-muted-foreground hover:text-white" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#businesses" className="text-lg font-medium text-muted-foreground hover:text-white" onClick={() => setMobileMenuOpen(false)}>Businesses</a>
            <a href="#tools" className="text-lg font-medium text-muted-foreground hover:text-white" onClick={() => setMobileMenuOpen(false)}>Market Tools</a>
            <a href="#blog" className="text-lg font-medium text-muted-foreground hover:text-white" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <Button className="w-full mt-4 bg-primary text-white">Create Portfolio</Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                SEBI Registered Investment Advisor
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-serif leading-[1.1] mb-6 tracking-tight text-balance">
                Making <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Financial Planning</span> <br/>
                and equity investing easy.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                We grow wealth for individuals, families, and businesses. Powered by an in-house Quant Engine and 300+ smart algorithms to ensure data-driven, precise decisions.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Button size="lg" className="text-base h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(74,58,253,0.3)] hover:shadow-[0_0_40px_rgba(74,58,253,0.5)] transition-all">
                  Create Portfolio
                </Button>
                <Button size="lg" variant="outline" className="text-base h-14 px-8 border-border hover:bg-secondary text-white transition-colors">
                  Join our community
                </Button>
              </div>
              
              <div className="flex items-center gap-4 border-t border-border/50 pt-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                    <img src={test1Img} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                    <img src={test2Img} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                    <img src={test3Img} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-card flex items-center justify-center text-xs font-bold text-white">
                    +1k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-primary">
                    {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">4.6 Ratings based on 1,000+ reviews</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square rounded-full border border-border/30 flex items-center justify-center p-8">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-8 rounded-full border border-secondary/40 animate-[spin_40s_linear_infinite_reverse]"></div>
                
                <div className="w-full h-full rounded-full overflow-hidden relative z-10 ring-1 ring-border shadow-2xl">
                  <img src={heroImg} alt="Data visualization" className="w-full h-full object-cover opacity-80 mix-blend-lighten" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20 mix-blend-overlay"></div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-10 bg-card border border-border p-4 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-mono text-muted-foreground">ALGO_042</span>
                  </div>
                  <div className="text-2xl font-bold font-serif">+14.2%</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 -right-12 bg-card border border-border p-4 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-xs font-mono text-muted-foreground">QUANT_ENGINE</span>
                  </div>
                  <div className="w-32 h-10 flex items-end gap-1">
                    {[40, 70, 45, 90, 65, 100, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/80" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card/30 relative z-20">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-x divide-border/50 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold font-serif text-white mb-1">₹500Cr+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">AUM Advised</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold font-serif text-white mb-1">5,000+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Satisfied Investors</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold font-serif text-primary mb-1">300+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Algorithms</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl font-bold font-serif text-white mb-1">SEBI</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Registered</div>
            </div>
            <div className="flex flex-col items-center justify-center hidden md:flex">
              <div className="text-3xl font-bold font-serif text-white mb-1">8+ Years</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses Section */}
      <section id="businesses" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Our Businesses</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-serif text-white">What we do?</h3>
            </div>
            <p className="text-muted-foreground max-w-md">
              Comprehensive financial solutions powered by technology, designed to scale with your wealth journey from ₹3 Lacs to multi-crore portfolios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.0 }}>
              <BusinessCard 
                icon={<BarChart3 className="w-8 h-8" />}
                title="Research & Ranking"
                desc="For ₹3 Lacs–₹1 Cr investment. 5-6 year plan. Analyst-driven stock picks with fundamental + quant scoring."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <BusinessCard 
                icon={<LineChart className="w-8 h-8" />}
                title="Mutual Fund Investing"
                desc="Enhanced SIP driven by proprietary algorithms. Beat standard SIPs through smart rebalancing."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <BusinessCard 
                icon={<Briefcase className="w-8 h-8" />}
                title="AKNA Private Wealth"
                desc="For ₹1 Cr+ corpus. 8–10 year wealth creation. High-touch, personalized advisory."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <BusinessCard 
                icon={<GraduationCap className="w-8 h-8" />}
                title="Stockmarket Workshop"
                desc="Learn fundamental, technical, and quantitative investing. For aspiring and active investors."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <BusinessCard 
                icon={<ShieldCheck className="w-8 h-8" />}
                title="Insurance"
                desc="Right Health + Term Life Insurance. Protection that complements your wealth strategy."
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <BusinessCard 
                icon={<Cpu className="w-8 h-8" />}
                title="Algo-Trading"
                desc="Automate your trading with custom rules and logic. Your strategy, running 24/7."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value System */}
      <section className="py-24 md:py-32 bg-card relative overflow-hidden border-y border-border">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
           <img src={valueSysImg} alt="Network" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight text-balance">
              We Don't Just Offer Advisory — We Offer Wealth Creation
            </h2>
            <p className="text-xl text-muted-foreground">
              Our value system is built on precision, impact, and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col">
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-4">Innovation / Algorithms</h4>
              <p className="text-muted-foreground leading-relaxed">
                Powered by our in-house Quant Engine. We deploy 300+ smart quant algorithms to identify opportunities before they become obvious.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col">
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-4">Growth & Scaling</h4>
              <p className="text-muted-foreground leading-relaxed">
                We focus on multi-year compound growth, driving positive financial change across our investor community.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col">
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-4">Realistic / Data-Driven</h4>
              <p className="text-muted-foreground leading-relaxed">
                Transparent, ethical, honest. No false promises, just clean, authentic data and realistic expectation setting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why AKNA? Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Why AKNA?</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-serif text-white mb-8">The algorithmic advantage in your portfolio.</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">AI + Human Research</h4>
                    <p className="text-muted-foreground">We don't replace humans with AI; we supercharge our analysts with quantitative data, removing emotional bias from investing.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">SEBI Registered & Compliant</h4>
                    <p className="text-muted-foreground">Operating under INH000023515. Complete regulatory compliance ensures your capital is advised with the highest ethical standards.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Personalized execution</h4>
                    <p className="text-muted-foreground">Risk profiles aren't generic boxes. Our systems tailor asset allocation to your specific timeline, goals, and risk tolerance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] border border-border bg-card p-8 flex flex-col justify-between group hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start">
                  <Globe className="w-10 h-10 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="px-3 py-1 bg-secondary text-xs font-mono text-muted-foreground border border-border">LIVE_DATA</div>
                </div>
                
                <div>
                  <div className="text-6xl font-serif font-bold text-white mb-2">85.4%</div>
                  <div className="text-lg text-muted-foreground">Historical accuracy on algorithmic signals across mid-cap sectors (2022-2024).</div>
                </div>
                
                <div className="h-1 w-full bg-secondary overflow-hidden mt-8">
                  <div className="h-full bg-primary w-[85.4%]"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Client Success</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-white">Trust built on returns.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="pt-8 flex flex-col h-full">
                <div className="mb-6 text-primary">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <p className="text-muted-foreground text-lg flex-grow mb-8 leading-relaxed">
                  "I am writing this review after 1 Year usage of Research and Ranking services. Initially was not sure if the stock recommendations were good and I took small qty only to avoid any risk and gradually I kept increasing my position size in new recommendation."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-none bg-secondary overflow-hidden border border-border">
                    <img src={test1Img} alt="Prahlad Pawar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white font-serif">Prahlad Pawar</div>
                    <div className="text-sm text-primary">High Net Worth Individual</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="pt-8 flex flex-col h-full">
                <div className="mb-6 text-primary">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <p className="text-muted-foreground text-lg flex-grow mb-8 leading-relaxed">
                  "I highly recommend R&R if someone wants to get good stock recommendation with perfect Research. Their approach is fundamentally sound and the quant overlays give an extra edge."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-none bg-secondary overflow-hidden border border-border">
                    <img src={test2Img} alt="Kshitij Mishra" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white font-serif">Kshitij Mishra</div>
                    <div className="text-sm text-primary">Trader / Investor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="pt-8 flex flex-col h-full">
                <div className="mb-6 text-primary">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <p className="text-muted-foreground text-lg flex-grow mb-8 leading-relaxed">
                  "Their recommendations are the only ones I trust at this point as they are well researched and so far, all the stocks they've recommended have given me returns."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-none bg-secondary overflow-hidden border border-border">
                    <img src={test3Img} alt="Gaurav Jain" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white font-serif">Gaurav Jain</div>
                    <div className="text-sm text-primary">Business Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Clear answers for complex financial decisions.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-border">
            <AccordionTrigger className="text-lg font-serif hover:text-primary py-6">What is investment advisory?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Professional guidance to help individuals and organizations make informed investment decisions. We provide insights on asset allocation, portfolio management, and market trends.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-border">
            <AccordionTrigger className="text-lg font-serif hover:text-primary py-6">What are the benefits of investment advisors?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Expert market insights, personalized investment strategies, risk management, and ability to navigate complex financial markets.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-border">
            <AccordionTrigger className="text-lg font-serif hover:text-primary py-6">What should I expect from our service?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Regular stock recommendations backed by deep research, portfolio tracking, and dedicated support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-border">
            <AccordionTrigger className="text-lg font-serif hover:text-primary py-6">Can advisory help in retirement planning?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Yes — we build long-horizon strategies aligned with your retirement goals, adjusting as your life evolves.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-border">
            <AccordionTrigger className="text-lg font-serif hover:text-primary py-6">Are investment advisory services worth the cost?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Absolutely. A well-advised portfolio consistently outperforms self-directed investing over 5-10 year horizons.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-border">
            <AccordionTrigger className="text-lg font-serif hover:text-primary py-6">What role does an advisor play during volatility?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              We provide clarity and discipline when markets are emotional, preventing costly panic decisions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="border-border">
            <AccordionTrigger className="text-lg font-serif hover:text-primary py-6">How do I get started?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
              Choose a service tier, fill in your details, and our analysts will reach out within 24 hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 border-y border-primary/30 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6">Invest once with us and <br/>Scale When You're Ready.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Get started without limits. Increase investments at your own pace — only when your capital grows.
          </p>
          <Button size="lg" className="text-lg h-16 px-12 bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_rgba(74,58,253,0.4)]">
            Try Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background pt-20 pb-10 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <span className="text-2xl font-bold font-serif tracking-tight text-white block mb-6">AKNA <span className="text-primary">Capital</span></span>
              <p className="text-muted-foreground max-w-md mb-8">
                Data-driven equity investing, mutual funds, algo-trading, and private wealth management. We engineer wealth creation.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-card text-xs font-mono text-muted-foreground">
                SEBI Registered RA – INH000023515
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Career</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Contact</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="leading-relaxed">
                  A-201, Ishwar Swaroop CHSL, <br/>
                  3rd Mamletdar wadi road, <br/>
                  Malad (west), Mumbai – 400064
                </li>
                <li className="pt-2">
                  <a href="tel:+918989496800" className="hover:text-primary transition-colors block">+91-8989496800</a>
                  <a href="tel:+919768943840" className="hover:text-primary transition-colors block">+91-9768943840</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AKNA Capital. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BusinessCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <CardHeader>
        <div className="w-14 h-14 bg-secondary border border-border flex items-center justify-center text-white mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
          {icon}
        </div>
        <CardTitle className="text-2xl font-serif text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-muted-foreground line-clamp-3">
          {desc}
        </CardDescription>
        <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Explore Service <ChevronRight className="ml-1 w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  );
}