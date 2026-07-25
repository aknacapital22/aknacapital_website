import { Bot } from "lucide-react";
import { BusinessDetailPage, BusinessDetailConfig } from "@/components/BusinessDetailPage";

const config: BusinessDetailConfig = {
  slug: "algo-trading",
  pillarLabel: "Algo-Trading",
  metaTitle: "Algo-Trading | Automate Your Strategy | AKNA Capital",
  metaDescription:
    "Make your trading automated using your own rules and logic. AKNA Capital helps you convert, backtest, and run algo-trading strategies built on our Quant Engine.",
  keywords:
    "algo trading India, automated trading strategy, algorithmic trading platform, backtesting strategy India, rule based trading",
  icon: Bot,
  h1: "Algo-Trading",
  heroSubheading: "Make Your Trading Automated, Using Your Own Rules and Logic",
  heroParagraph:
    "If you already trade with a defined set of rules, Algo-Trading helps you convert that logic into an automated strategy, built on the same Quant Engine that powers our research, so execution stops depending on you watching the screen all day.",
  secondaryHeading: "Your Rules, Executed Consistently",
  secondaryParagraph:
    "Algo-trading is not about handing over decisions to a black box. It is about taking the rules you already trust and having them executed consistently, without hesitation, fatigue, or emotion getting in the way.",
  trustHeading: "How We Help",
  trustParagraph: "From a trading idea to a running, tested strategy.",
  bullets: [
    { title: "Rule based automation", description: "we help convert your own trading logic into an automated, rule based strategy." },
    { title: "Backtesting", description: "see how a strategy would have performed on historical data before you run it live." },
    { title: "Built on our Quant Engine", description: "the same 30+ algorithm engine that powers our equity research, applied to your strategy." },
    { title: "Ongoing monitoring", description: "strategies are tracked so you know how they are performing, not left to run unattended." },
  ],
  differentHeading: "Why This Is Different",
  differentParagraph:
    "We are not selling a fixed, one-size-fits-all trading bot. We work with the specific rules and logic you already trade with, or want to test, and help you turn that into something automated and backtested. Algo-trading carries the same market risk as any trading activity, and past backtested performance does not guarantee future results.",
  faqs: [
    {
      q: "Do I need to know how to code?",
      a: "No. You bring the trading logic and rules; we handle converting that into an automated strategy on our platform.",
    },
    {
      q: "Can you backtest my strategy before it goes live?",
      a: "Yes. Backtesting on historical data is a standard part of the process before any strategy is run live.",
    },
    {
      q: "Is algo-trading risk free?",
      a: "No. Algo-trading automates execution of a strategy, but it does not remove market risk. Past or backtested performance does not guarantee future results.",
    },
    {
      q: "Can I still monitor or adjust my strategy once it's live?",
      a: "Yes. You retain visibility into how your strategy is performing, and can request adjustments as market conditions or your rules change.",
    },
    {
      q: "How do I get started with Algo-Trading?",
      a: "Share your existing trading rules or idea through our contact form, and we'll walk through how it could be backtested and automated.",
    },
  ],
};

export default function AlgoTrading() {
  return <BusinessDetailPage config={config} />;
}
