import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getBlogPost, blogPosts } from "@/data/blog";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Inline tokenizer: handles **bold** and [text](url) within a line of text.
// Internal links (starting with "/") render as client-routed wouter Links;
// external links open in a new tab.
function renderInline(text: string): React.ReactNode[] {
  const tokenPattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenPattern).filter((p) => p !== "");

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      if (href.startsWith("/")) {
        return (
          <Link key={i} href={href} className="text-primary font-semibold hover:underline">
            {label}
          </Link>
        );
      }
      return (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
          {label}
        </a>
      );
    }
    return part;
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 leading-snug">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-foreground/80 mb-2 flex gap-2">
          <span className="text-primary mt-1.5 shrink-0">•</span>
          <span>{renderInline(line.slice(2))}</span>
        </li>
      );
    } else if (line.startsWith("|")) {
      // Table row
      const cells = line.split("|").filter(c => c.trim() !== "");
      const isSeparator = cells.every(c => /^[-\s]+$/.test(c));
      if (!isSeparator) {
        const isHeader = i > 0 && lines[i + 1]?.startsWith("|---");
        elements.push(
          <tr key={i} className={isHeader ? "border-b-2 border-border" : "border-b border-border/50"}>
            {cells.map((cell, ci) => (
              isHeader
                ? <th key={ci} className="py-3 px-4 text-left text-sm font-semibold text-foreground">{cell.trim()}</th>
                : <td key={ci} className="py-3 px-4 text-sm text-muted-foreground">{cell.trim()}</td>
            ))}
          </tr>
        );
      } else {
        // wrap previous rows in table
      }
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-foreground/80 leading-relaxed mb-0">
          {renderInline(line)}
        </p>
      );
    }
    i++;
  }

  // Wrap consecutive <li> elements in a <ul>
  const wrapped: React.ReactNode[] = [];
  let listBuffer: React.ReactNode[] = [];
  let tableBuffer: React.ReactNode[] = [];

  elements.forEach((el, idx) => {
    const isLi = (el as any)?.type === "li";
    const isTr = (el as any)?.type === "tr";

    if (isLi) {
      listBuffer.push(el);
    } else {
      if (listBuffer.length > 0) {
        wrapped.push(<ul key={`ul-${idx}`} className="my-4 space-y-1">{listBuffer}</ul>);
        listBuffer = [];
      }
      if (isTr) {
        tableBuffer.push(el);
      } else {
        if (tableBuffer.length > 0) {
          wrapped.push(
            <div key={`table-${idx}`} className="overflow-x-auto my-6">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <tbody>{tableBuffer}</tbody>
              </table>
            </div>
          );
          tableBuffer = [];
        }
        wrapped.push(el);
      }
    }
  });

  if (listBuffer.length > 0) wrapped.push(<ul key="ul-end" className="my-4 space-y-1">{listBuffer}</ul>);
  if (tableBuffer.length > 0) wrapped.push(
    <div key="table-end" className="overflow-x-auto my-6">
      <table className="w-full border border-border rounded-lg overflow-hidden">
        <tbody>{tableBuffer}</tbody>
      </table>
    </div>
  );

  return wrapped;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <Link href="/blog">
              <Button className="rounded-full bg-primary text-primary-foreground">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const postUrl = `https://www.aknacapital.com/blog/${post.slug}`;

  const isPersonAuthor = post.author.name !== "AKNA Capital Research Desk";

  const articleJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription,
      "author": isPersonAuthor
        ? {
            "@type": "Person",
            "name": post.author.name.replace(/^CA\s+/, ""),
            "jobTitle": post.author.title,
            "worksFor": { "@type": "Organization", "name": "AKNA Capital", "url": "https://www.aknacapital.com/" },
            "url": "https://www.aknacapital.com/about#team",
          }
        : {
            "@type": "Organization",
            "name": "AKNA Capital",
            "url": "https://www.aknacapital.com/",
          },
      "publisher": {
        "@type": "Organization",
        "name": "AKNA Capital",
        "url": "https://www.aknacapital.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.aknacapital.com/logo.jpg",
          "width": 500,
          "height": 500,
        },
      },
      "datePublished": post.isoDate,
      "dateModified": post.isoDate,
      "url": postUrl,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": postUrl,
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.aknacapital.com/logo.jpg",
        "width": 500,
        "height": 500,
      },
      "keywords": post.category,
      "articleSection": post.category,
      "inLanguage": "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.aknacapital.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.aknacapital.com/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": postUrl },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={articleJsonLd}
      />
      <Navbar />
      <main className="flex-grow pt-24">

        {/* Article Header */}
        <section className="py-16 bg-muted/30 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.category }]} />
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 no-underline">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center gap-1.5">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-snug">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {post.author.name.replace(/^CA\s+/, "").split(" ").map((n) => n.charAt(0)).join("")}
                </div>
                <div>
                  {isPersonAuthor ? (
                    <Link href="/about#team" className="text-sm font-semibold text-foreground hover:text-primary transition-colors no-underline">
                      {post.author.name}
                    </Link>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{post.author.name}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{post.author.title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose-like space-y-2"
            >
              {renderContent(post.content)}
            </motion.div>
          </div>
        </article>

        {/* CTA Banner */}
        <section className="py-16 bg-primary/5 border-y border-primary/10">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to start investing with AKNA Capital?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're just getting started or scaling an existing portfolio, we're ready to help.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-md">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <nav className="py-12 border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-6">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="no-underline group flex-1">
                <div className="p-5 rounded-2xl border border-border hover:border-primary/40 hover:shadow-sm transition-all">
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="no-underline group flex-1">
                <div className="p-5 rounded-2xl border border-border hover:border-primary/40 hover:shadow-sm transition-all text-right">
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5 justify-end">
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {nextPost.title}
                  </p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </nav>

      </main>
      <Footer />
    </div>
  );
}
