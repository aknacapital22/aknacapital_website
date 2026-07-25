import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Brain, Handshake, LineChart, Users2, BadgeCheck } from "lucide-react";

const values = [
  {
    title: "Transparency",
    description: "We are dedicated to being honest, transparent, and ethical in everything we do, including being upfront about risk, not just potential upside.",
    icon: ShieldCheck,
  },
  {
    title: "Data-Driven Discipline",
    description: "Every recommendation runs through our in-house Quant Engine of 30+ smart algorithms before our analysts review it. We follow the process, not the mood of the market.",
    icon: Brain,
  },
  {
    title: "Client First",
    description: "We aspire to make a genuine difference in the investor community. Your goals and time horizon come before any single product or recommendation.",
    icon: Handshake,
  },
];

const team = [
  {
    name: "Smit Ruparel",
    jobTitle: "Head of Fundamental Research",
    points: [
      "MBA in Finance (Mumbai University)",
      "10+ Years of Fundamental experience",
      "Previously worked at Crisil and Axis Securities",
      "SEBI and NISM registered Research Analyst",
      "Head of Fundamental Research",
    ],
  },
  {
    name: "Akshat Nahata",
    jobTitle: "Quant & Technical Research",
    points: [
      "IIT Indore Alumni",
      "5+ Years of Technical and Quant Experience",
      "Previously worked at Walmart and Axis Securities",
      "Built proprietary quant models now managing client capital",
      "AMFI Registered Advisor and NISM Registered Research Analyst",
    ],
  },
  {
    name: "CA Prajvi Nahata",
    jobTitle: "Equity Research & Multibagger Hunting",
    points: [
      "Member at ICAI",
      "8+ Years of finding Multibaggers",
      "Previously worked at Ernst & Young",
      "Passionate about Value investing",
      "Drives Equity Research & Multibagger Hunting",
    ],
  },
];

const reasons = [
  { text: "SEBI Registered Research Analyst, registration INH000023515", icon: BadgeCheck },
  { text: "In-house Quant Engine built on 30+ smart algorithms", icon: LineChart },
  { text: "4.6 rating based on 1,000+ client reviews", icon: ShieldCheck },
  { text: "Research analysts, portfolio advisors, and a dedicated support team", icon: Users2 },
];

const aboutSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aknacapital.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://aknacapital.com/about" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About AKNA Capital",
    "url": "https://aknacapital.com/about",
    "description":
      "AKNA Capital is a SEBI Registered Research Analyst helping individuals, families, and businesses grow wealth through data-driven, algorithm-backed equity research and wealth advisory.",
    "publisher": {
      "@type": "Organization",
      "name": "AKNA Capital",
      "url": "https://aknacapital.com/",
    },
  },
  ...team.map((member) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name.replace(/^CA\s+/, ""),
    "jobTitle": member.jobTitle,
    "worksFor": { "@type": "Organization", "name": "AKNA Capital", "url": "https://aknacapital.com/" },
    "url": "https://aknacapital.com/about#team",
  })),
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="About AKNA Capital | Wealth Advisory"
        description="AKNA Capital is a SEBI Registered Research Analyst (INH000023515) helping individuals, families, and businesses grow wealth through data-driven, algorithm-backed equity research and wealth advisory."
        path="/about"
        keywords="about AKNA Capital, SEBI registered research analyst Mumbai, wealth advisory team, investment research company India"
        jsonLd={aboutSchemas}
      />
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
                SEBI Registered Research Analyst · INH000023515
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-4 md:mb-6">
                Who Are <span className="text-primary">We?</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
                AKNA Capital makes financial planning and equity investing easy. We grow wealth for individuals, families, and businesses by leveraging fundamental, technical and quantitative models, data analytics, and AI, delivered by a team that takes research seriously.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10 md:py-20 bg-muted/30 border-y border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in moving ahead of time. That's why we built an in-house Quant Engine using 30+ smart algorithms to help us arrive at the right stock recommendations for our customers. Whether you're just starting out with a Research and Ranking subscription or growing into AKNA Private Wealth, we bring the same research discipline to every client.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-border bg-card hover:border-primary/50 transition-colors shadow-sm text-center">
                      <CardHeader className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-foreground">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-12 md:py-24 bg-muted/30 border-y border-border/40 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Every recommendation you receive has been through both an algorithmic screen and a human review, so you get the consistency of data with the judgement of an experienced analyst.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center bg-card border border-border/60 rounded-2xl p-6 md:p-8"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-2xl mb-5 shrink-0">
                    {member.name
                      .replace(/^CA\s+/, "")
                      .split(" ")
                      .map((n) => n.charAt(0))
                      .join("")}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{member.name}</h3>
                  <ul className="space-y-2 text-left w-full">
                    {member.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5 shrink-0 text-xs">●</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-12 md:py-24 bg-foreground text-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-background/80 text-lg">Here's the honest version of why clients stay with us.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-background/10 p-4 md:p-6 rounded-2xl"
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg font-medium">{reason.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Ready to start your wealth journey?</h2>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
