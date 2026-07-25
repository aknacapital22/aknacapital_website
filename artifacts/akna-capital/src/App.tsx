import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingCTA } from "@/components/FloatingCTA";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const AboutPage = lazy(() => import("@/pages/About"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const MarketToolsPage = lazy(() => import("@/pages/MarketTools"));
const BlogPage = lazy(() => import("@/pages/Blog"));
const BlogPostPage = lazy(() => import("@/pages/BlogPost"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const ResearchRanking = lazy(() => import("@/pages/businesses/ResearchRanking"));
const MutualFundInvesting = lazy(() => import("@/pages/businesses/MutualFundInvesting"));
const AknaPrivateWealth = lazy(() => import("@/pages/businesses/AknaPrivateWealth"));
const StockmarketWorkshop = lazy(() => import("@/pages/businesses/StockmarketWorkshop"));
const Insurance = lazy(() => import("@/pages/businesses/Insurance"));
const AlgoTrading = lazy(() => import("@/pages/businesses/AlgoTrading"));
const SipCalculator = lazy(() => import("@/pages/market-tools/SipCalculator"));
const SipDelayCalculator = lazy(() => import("@/pages/market-tools/SipDelayCalculator"));
const EducationCalculator = lazy(() => import("@/pages/market-tools/EducationCalculator"));
const MarriageCalculator = lazy(() => import("@/pages/market-tools/MarriageCalculator"));
const RetirementCalculator = lazy(() => import("@/pages/market-tools/RetirementCalculator"));
const LoanEmiCalculator = lazy(() => import("@/pages/market-tools/LoanEmiCalculator"));
const SipStepUpCalculator = lazy(() => import("@/pages/market-tools/SipStepUpCalculator"));
const LumpsumSipCalculator = lazy(() => import("@/pages/market-tools/LumpsumSipCalculator"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/businesses/research-ranking" component={ResearchRanking} />
        <Route path="/businesses/mutual-fund-investing" component={MutualFundInvesting} />
        <Route path="/businesses/akna-private-wealth" component={AknaPrivateWealth} />
        <Route path="/businesses/stockmarket-workshop" component={StockmarketWorkshop} />
        <Route path="/businesses/insurance" component={Insurance} />
        <Route path="/businesses/algo-trading" component={AlgoTrading} />
        <Route path="/market-tools" component={MarketToolsPage} />
        <Route path="/market-tools/sip-calculator" component={SipCalculator} />
        <Route path="/market-tools/sip-delay-calculator" component={SipDelayCalculator} />
        <Route path="/market-tools/education-calculator" component={EducationCalculator} />
        <Route path="/market-tools/marriage-calculator" component={MarriageCalculator} />
        <Route path="/market-tools/retirement-calculator" component={RetirementCalculator} />
        <Route path="/market-tools/loan-emi-calculator" component={LoanEmiCalculator} />
        <Route path="/market-tools/sip-step-up-calculator" component={SipStepUpCalculator} />
        <Route path="/market-tools/lumpsum-sip-calculator" component={LumpsumSipCalculator} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <FloatingCTA />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
