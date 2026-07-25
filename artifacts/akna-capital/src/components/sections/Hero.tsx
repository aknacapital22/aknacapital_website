import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import { useCountUp } from "@/hooks/use-count-up";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 1600);
  return (
    <motion.div whileHover={{ scale: 1.07 }} className="text-center">
      <p className="text-3xl md:text-4xl font-extrabold text-primary tabular-nums">
        <span ref={ref}>{count}</span>{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1 font-medium">{label}</p>
    </motion.div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (isTouch) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  }, [isTouch]);

  const handleMouseLeave = useCallback(() => {
    setSpotlight((s) => ({ ...s, active: false }));
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 bg-background min-h-[90vh]"
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(700px circle at ${spotlight.x}px ${spotlight.y}px, rgba(200,146,42,0.118), transparent 70%)`,
        }}
      />

      {/* Ambient orbs — static on touch/mobile, animated on desktop */}
      {isTouch ? (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        </>
      ) : (
        <>
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none"
          />
        </>
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10 pointer-events-none" />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground max-w-5xl leading-[1.08]"
        >
          Making Wealth Creation
          <br />
          <span className="text-primary drop-shadow-sm">Easy &amp; Reliable</span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 md:mt-5 text-lg md:text-2xl font-semibold text-muted-foreground tracking-tight"
        >
          Financial Planning. Equity Investing.{" "}
          <span className="text-primary">Made Easy.</span>
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl font-light leading-relaxed px-2 md:px-0"
        >
          We grow wealth for individuals, families, and businesses by leveraging advanced fundamental, technical and quantitative models, data analytics, and AI to identify market opportunities and optimize investment strategies with unmatched precision and reliability.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_14px_rgba(212,143,37,0.3)] hover:shadow-[0_6px_20px_rgba(212,143,37,0.45)] group"
            >
              Create Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-full border-border bg-background/50 backdrop-blur-sm hover:bg-muted text-foreground font-medium text-lg hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              Join Our Community
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-20 flex flex-row gap-6 sm:gap-12 md:gap-16 items-center justify-center flex-wrap"
        >
          <motion.div whileHover={{ scale: 1.07 }} className="text-center">
            <p className="text-3xl md:text-4xl font-extrabold text-primary flex items-center justify-center gap-1">
              4.6 <Star className="w-6 h-6 fill-primary text-primary" />
            </p>
            <p className="text-sm text-muted-foreground mt-1 font-medium">Rating, 1,000+ Reviews</p>
          </motion.div>
          <div className="hidden sm:block w-px h-10 bg-border/60" />
          <StatItem value={30} suffix="+" label="Smart Algorithms" />
          <div className="hidden sm:block w-px h-10 bg-border/60" />
          <StatItem value={100} suffix="+" label="Happy Investors" />
        </motion.div>

      </div>
    </section>
  );
}
