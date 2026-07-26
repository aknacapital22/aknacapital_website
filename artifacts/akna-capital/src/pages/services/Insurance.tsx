import { ShieldCheck } from "lucide-react";
import { ServiceDetailPage, ServiceDetailConfig } from "@/components/ServiceDetailPage";

const config: ServiceDetailConfig = {
  slug: "insurance",
  pillarLabel: "Insurance",
  metaTitle: "Health & Term Life Insurance | AKNA Capital",
  metaDescription:
    "Get the right health and term life insurance. AKNA Capital helps you compare plans and choose the cover that actually fits your family's needs.",
  keywords:
    "term life insurance India, health insurance advisory, best term insurance plan, family health cover, insurance comparison India",
  icon: ShieldCheck,
  h1: "Insurance",
  heroSubheading: "Get the Right Health and Term Life Insurance",
  heroParagraph:
    "Insurance is often the most overlooked part of a financial plan. We help you get the right health and term life insurance cover, matched to your family's needs, income, and medical history, not just whichever plan pays the highest commission.",
  secondaryHeading: "Protection First, Then Growth",
  secondaryParagraph:
    "Before optimizing for returns, a financial plan needs a safety net. We treat insurance as the foundation: adequate term cover and health insurance, so the rest of your wealth plan is not derailed by an unexpected event.",
  plainEnglish:
    "In simple terms: term insurance pays your family a lump sum if you pass away during the policy term, and health insurance covers hospital bills. We help you size both correctly for your situation and compare plans across insurers, instead of pushing whichever product pays us the highest commission.",
  notForYou: {
    items: [
      "You're looking for an investment-cum-insurance product that bundles market returns with cover — we deliberately separate the two and point you to our investing offerings instead.",
      "You already have a recently reviewed, adequate term and health cover in place and don't need a fresh assessment.",
    ],
  },
  trustHeading: "What We Help With",
  trustParagraph: "Straightforward guidance on the two insurance covers that matter most.",
  bullets: [
    { title: "Term life insurance", description: "sizing the right cover for your family's financial future, based on income, liabilities, and dependents." },
    { title: "Health insurance", description: "coverage matched to your and your family's medical history and hospitalization needs." },
    { title: "Unbiased plan comparison", description: "we help you compare plans across insurers, not push a single product." },
    { title: "Review of existing policies", description: "checking whether your current cover is actually adequate, underinsured, or overlapping." },
  ],
  differentHeading: "Why This Is Different",
  differentParagraph:
    "Insurance is often sold as an investment product bundled with poor returns and high costs. We separate the two: pure term and health cover for protection, and our other offerings for actual wealth creation. Insurance is subject to the terms and conditions of the respective insurer; please read the policy document carefully before purchase.",
  faqs: [
    {
      q: "Why do I need term insurance if I already have investments?",
      a: "Investments grow your wealth over time. Term insurance protects your family's financial future immediately, in case something happens to you before that wealth has had time to grow.",
    },
    {
      q: "How much term cover do I actually need?",
      a: "It depends on your income, outstanding liabilities like loans, and the number of years your family would need financial support. We work through this calculation with you rather than suggesting a flat number.",
    },
    {
      q: "Can you help review my existing insurance policies?",
      a: "Yes. We can review your existing term and health policies to check whether the cover is adequate, or whether you are paying for overlapping or unnecessary add-ons.",
    },
    {
      q: "Do you sell insurance-cum-investment plans?",
      a: "Our focus is on pure term and health insurance for protection. For investing your surplus, we point you to our Research and Ranking, Mutual Fund Investing, or AKNA Private Wealth offerings instead.",
    },
    {
      q: "How do I get started?",
      a: "Share your family details and any existing policies through our contact form, and we'll help you understand where the gaps, if any, are.",
    },
    {
      q: "At what age should I buy term insurance?",
      a: "Generally, the earlier the better, premiums are locked in lower when you're younger and healthier, and cover typically needs to be highest during your working, income-earning years when dependents rely on you.",
    },
    {
      q: "Does health insurance from my employer count as enough cover?",
      a: "Employer group health cover is useful but usually insufficient on its own; it typically ends when you leave the job and may not cover your full family adequately. We help you assess whether you need an independent policy alongside it.",
    },
    {
      q: "Do you earn commission from the plans you recommend?",
      a: "Our focus is on unbiased comparison across insurers based on your actual needs, not steering you toward a single product. We're transparent about how we're compensated when we make a specific recommendation.",
    },
  ],
  relatedServices: [
    { label: "Research and Ranking", href: "/services/research-ranking" },
    { label: "Mutual Fund Investing", href: "/services/mutual-fund-investing" },
    { label: "AKNA Private Wealth", href: "/services/akna-private-wealth" },
  ],
};

export default function Insurance() {
  return <ServiceDetailPage config={config} />;
}
