import { GraduationCap } from "lucide-react";
import { BusinessDetailPage, BusinessDetailConfig } from "@/components/BusinessDetailPage";

const config: BusinessDetailConfig = {
  slug: "stockmarket-workshop",
  pillarLabel: "Stockmarket Workshop",
  metaTitle: "Stockmarket Workshop | Learn Investing | AKNA Capital",
  metaDescription:
    "Learn all about fundamental, technical and quantitative investing through AKNA Capital's stockmarket workshops, taught by our own research team.",
  keywords:
    "stock market workshop India, learn technical analysis, learn fundamental analysis, quantitative investing course, stock market course Mumbai",
  icon: GraduationCap,
  h1: "Stockmarket Workshop",
  heroSubheading: "Learn Fundamental, Technical & Quantitative Investing",
  heroParagraph:
    "Our Stockmarket Workshop is built for investors who want to understand markets, not just follow recommendations. Taught by our own research team, it covers fundamental, technical, and quantitative approaches to investing.",
  secondaryHeading: "Taught by People Who Actually Research Stocks",
  secondaryParagraph:
    "This is not a generic trading course. It is taught by the same research team behind our Research and Ranking recommendations, so you learn the actual frameworks we use, not a repackaged template.",
  trustHeading: "What the Workshop Covers",
  trustParagraph: "A structured path through the three pillars of investing analysis.",
  bullets: [
    { title: "Fundamental analysis", description: "how to read a company's financials, business model, and competitive position." },
    { title: "Technical analysis", description: "understanding price action, chart patterns, and market timing." },
    { title: "Quantitative investing", description: "an introduction to how data driven, algorithmic models are built and used." },
    { title: "Practical application", description: "working through real examples, not just theory." },
  ],
  differentHeading: "Why This Is Different From a Generic Trading Course",
  differentParagraph:
    "Many trading courses focus only on chart patterns and promise quick profits. Our workshop covers all three pillars, fundamental, technical, and quantitative, because that is genuinely how our own research process works. Investing in securities markets involves risk, and no workshop can guarantee trading or investment outcomes.",
  faqs: [
    {
      q: "Do I need prior market experience to join?",
      a: "No. The workshop is structured to work for both beginners and investors who already have some market experience and want to formalize their understanding.",
    },
    {
      q: "Is this a trading tips course?",
      a: "No. The focus is on building your own understanding of fundamental, technical, and quantitative analysis, not handing out trading calls during the session.",
    },
    {
      q: "Who conducts the workshop?",
      a: "The workshop is conducted by AKNA Capital's own research team, the same team behind our Research and Ranking recommendations.",
    },
    {
      q: "Will I be able to invest on my own after this?",
      a: "You will come away with a much stronger framework for evaluating stocks and markets yourself. Many participants also continue with our other offerings for ongoing research support.",
    },
    {
      q: "How do I sign up?",
      a: "Reach out through our contact form or call us directly for upcoming workshop dates and details.",
    },
  ],
};

export default function StockmarketWorkshop() {
  return <BusinessDetailPage config={config} />;
}
