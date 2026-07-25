import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Equity Research": "bg-blue-50 text-blue-700",
  "Mutual Funds": "bg-purple-50 text-purple-700",
  "Personal Finance": "bg-green-50 text-green-700",
  "Insurance": "bg-orange-50 text-orange-700",
  "Algo-Trading": "bg-violet-50 text-violet-700",
  "Market Education": "bg-sky-50 text-sky-700",
  "Wealth Planning": "bg-amber-50 text-amber-700",
};

const blogSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AKNA Capital Blog",
    "url": "https://www.aknacapital.com/blog",
    "description":
      "Insights on equity research, mutual fund investing, wealth planning, insurance, and algo-trading from the AKNA Capital team.",
    "publisher": {
      "@type": "Organization",
      "name": "AKNA Capital",
      "url": "https://www.aknacapital.com/",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aknacapital.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aknacapital.com/blog" },
    ],
  },
];

export default function Blog() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Blog | Investing & Wealth Insights"
        description="Expert articles from AKNA Capital on equity research, mutual fund investing, wealth planning, insurance, and algo-trading."
        path="/blog"
        keywords="investing blog India, mutual fund investing tips, wealth planning articles, SEBI research analyst blog, algo trading basics, term insurance guide"
        jsonLd={blogSchemas}
      />
      <Navbar />
      <main className="flex-grow pt-24">

        {/* Page Hero */}
        <section className="py-20 bg-muted/30 border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Tag className="w-3.5 h-3.5" /> Insights & Resources
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                The AKNA Capital <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Perspectives on equity research, mutual fund investing, wealth planning, and the decisions that shape long term investing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Featured Article</p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/blog/${featured.slug}`}>
                <div className="group bg-card border border-border rounded-3xl p-8 md:p-12 hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] || "bg-primary/10 text-primary"}`}>
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">{featured.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-muted-foreground">By {featured.author.name}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">All Articles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-primary/10 text-primary"}`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug flex-grow">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">By {post.author.name}</span>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
