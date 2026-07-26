import { Search } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "buy-side-ma-advisory",
  pillarLabel: "Buy-side M&A Advisory",
  metaTitle: "Buy-side M&A Advisory | AKNA Capital",
  metaDescription:
    "AKNA Capital represents acquirers through target identification, valuation, due diligence, negotiation, and close, protecting your side of the table throughout.",
  keywords:
    "buy-side M&A advisory India, acquisition advisory, M&A due diligence, business acquisition advisor India, target identification advisory",
  icon: Search,
  h1: "Buy-side M&A Advisory",
  heroSubheading: "Finding, Structuring, and Closing the Right Acquisition",
  heroParagraph:
    "Acquiring a business is rarely the hard part; finding the right target, structuring a fair deal, and getting it across the line without overpaying or inheriting hidden liabilities is. We work on the acquirer's side of the table, from target identification through to deal close.",
  secondaryHeading: "An Advisor Who Works for the Buyer",
  secondaryParagraph:
    "Most M&A advisors in a deal are working for the seller. On the buy-side, we represent your interests specifically: sourcing targets that fit your strategy, running disciplined valuation and diligence, and negotiating terms that protect you after the deal closes, not just at signing.",
  plainEnglish:
    "In simple terms: if you want to grow by buying another business rather than building organically, we act as your side's advisor from start to finish, finding suitable targets, telling you what a business is actually worth, coordinating the accountants and lawyers doing due diligence, and negotiating terms that protect you after the deal closes, not just on signing day.",
  trustHeading: "",
  trustParagraph: "",
  bullets: [],
  notForYou: {
    items: [
      "You're looking to sell your own business rather than acquire one — see our Sell-side M&A Advisory instead.",
      "You already have a signed term sheet and just need legal drafting — that's a job for transaction counsel, not an M&A advisor.",
      "You want to make an opportunistic, informal approach to one specific company without a broader process — we can still help, but the engagement looks different from a full buy-side mandate.",
    ],
  },
  whoItsFor: {
    heading: "When You Need Us",
    items: [
      "You are looking to grow through acquisition rather than organically.",
      "You have identified a target but need independent valuation and deal structuring support.",
      "You need a disciplined process to screen and compare multiple acquisition targets.",
      "You want representation in negotiations, not just a valuation report.",
      "You need coordination across legal, financial, and tax diligence workstreams.",
    ],
  },
  deliverables: {
    heading: "What We Deliver",
    items: [
      { title: "Target identification and screening", description: "Sourcing and prioritizing acquisition targets against your strategic and financial criteria." },
      { title: "Valuation and deal structuring", description: "Independent valuation, and structuring the deal across price, earn-outs, and consideration mix." },
      { title: "Due diligence coordination", description: "Managing financial, legal, and tax diligence workstreams and surfacing what actually matters." },
      { title: "Negotiation support", description: "Representing your interests through term sheet and definitive agreement negotiations." },
      { title: "Financing coordination", description: "Structuring the acquisition financing mix where external funding is involved." },
      { title: "Post-deal integration planning", description: "Early integration planning so the deal creates value after close, not just at signing." },
    ],
  },
  approach: {
    heading: "Our Approach",
    steps: [
      { title: "Strategy and criteria", description: "Defining what a good target actually looks like for your business before searching for one." },
      { title: "Sourcing and screening", description: "Identifying and prioritizing targets, whether from a known shortlist or a broader search." },
      { title: "Valuation and structuring", description: "Independent valuation work and an initial deal structure to open discussions with." },
      { title: "Diligence management", description: "Coordinating financial, legal, and tax diligence, and flagging deal-breakers early." },
      { title: "Negotiation and close", description: "Representing you through term sheet, definitive agreement, and closing." },
      { title: "Integration handoff", description: "A first-100-days plan so the acquisition starts delivering value immediately." },
    ],
  },
  caseStudy: {
    heading: "A Typical Buy-side Mandate",
    scenario:
      "A mid-market business wants to expand into an adjacent product category and decides acquiring an existing player is faster than building the capability from scratch, but has no in-house team to run a search or diligence process.",
    approach:
      "We define what a good target looks like against the company's strategy, screen and prioritize a shortlist, run independent valuation, and coordinate financial, legal, and tax diligence once a target is chosen.",
    outcome:
      "The acquirer negotiates from an informed position, with valuation and diligence findings in hand, rather than relying on the seller's own numbers, and walks away from targets where diligence uncovers real deal-breakers.",
  },
  differentHeading: "Why This Is Different",
  differentParagraph:
    "Buy-side mandates are where conflicted incentives show up most: an advisor paid to close deals is incentivized to close any deal. We are structured to walk away from a bad one, because our job is to protect your side of the table, not to force a transaction.",
  whyChooseUs: {
    heading: "Why Acquirers Choose AKNA Capital",
    items: [
      "We work exclusively for the buyer in the mandate, with no conflicting sell-side relationship on the same deal",
      "Independent valuation, not a number engineered to justify a deal",
      "Senior team involvement through negotiation and close, not just the pitch",
      "Integration planning starts before signing, not after",
    ],
  },
  faqs: [
    {
      q: "How do you source acquisition targets?",
      a: "Depending on your strategy, we combine a structured screen of known players in your sector with direct, confidential outreach to companies that fit your acquisition criteria but aren't actively marketed for sale.",
    },
    {
      q: "Do you only work on deals above a certain size?",
      a: "We work with mid-market acquirers across a range of deal sizes. The right fit depends more on whether you need genuine deal structuring and negotiation support than on the transaction size itself.",
    },
    {
      q: "Can you help even if we've already found a target?",
      a: "Yes. Many buy-side mandates start exactly there: you've identified a target and need independent valuation, structuring, and negotiation support rather than a search process.",
    },
    {
      q: "How do you get paid for buy-side mandates?",
      a: "Fee structures vary by mandate and are agreed upfront, typically a combination of a retainer for search and advisory work plus a success fee tied to closing. We discuss the specific structure once we understand your mandate.",
    },
    {
      q: "Do you help arrange acquisition financing?",
      a: "We help structure the financing mix and coordinate with lenders or investors where external funding is part of the deal, though the financing itself is arranged through the relevant regulated lenders or investors.",
    },
    {
      q: "What's the difference between buy-side and sell-side M&A advisory?",
      a: "Buy-side advisory represents the company making the acquisition, sourcing targets and negotiating to pay a fair price. Sell-side advisory represents the company being sold, running a competitive process to get the best terms for the seller. The two roles have opposite incentives, which is why the same advisor typically isn't hired by both sides in the same deal.",
    },
    {
      q: "How do you value a potential target?",
      a: "We typically triangulate across comparable transaction multiples, discounted cash flow analysis, and comparable listed-company benchmarks, adjusted for the target's specific growth profile, customer concentration, and working capital dynamics.",
    },
  ],
  glossary: {
    terms: [
      { term: "Due Diligence", definition: "A structured review of a target's financial, legal, and tax records before a deal closes, to confirm the business is what it appears to be." },
      { term: "Earn-out", definition: "A deal term where part of the purchase price is paid later, contingent on the acquired business hitting agreed performance targets." },
      { term: "Term Sheet", definition: "A non-binding document outlining the key terms of a proposed deal, before lawyers draft the definitive agreement." },
      { term: "Definitive Agreement", definition: "The final, legally binding contract that governs the actual transaction, signed after due diligence and negotiation." },
    ],
  },
  relatedServices: [
    { label: "Sell-side M&A Advisory", href: "/services/sell-side-ma-advisory" },
    { label: "Pre-IPO Advisory", href: "/services/pre-ipo-advisory" },
    { label: "IPO and SME IPO Advisory", href: "/services/ipo-and-sme-ipo-advisory" },
  ],
};

export default function BuySideMaAdvisory() {
  return <ServiceDetailPage config={config} />;
}
