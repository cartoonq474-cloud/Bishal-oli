import Link from 'next/link'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: 'SEO & AI Search Insights — Bishal Oli',
  description: 'Articles on semantic SEO, AI search optimization, topical authority, and the future of search visibility. Practical insights from Bishal Oli.',
  alternates: { canonical: 'https://bishaloli.com/blog/' },
}

const articles = [
  { slug: 'semantic-seo', cat: 'Semantic SEO', date: 'May 12, 2025', title: 'What Is Semantic SEO? A Practical Guide for 2025', text: 'Semantic SEO is about helping search engines understand meaning — not just match keywords. Here\'s how to build content that search engines and AI systems truly comprehend, from entity mapping to topical depth.' },
  { slug: 'how-to-get-cited-in-ai-search', cat: 'AI Search', date: 'Apr 28, 2025', title: 'How to Get Your Brand Cited in AI Search Answers', text: 'AI systems like ChatGPT, Perplexity, and Google\'s AI Overviews are changing how people discover brands. Here\'s what it takes to earn citations in AI-generated responses and why traditional SEO alone isn\'t enough.' },
  { slug: 'building-topical-authority', cat: 'Topical Authority', date: 'Apr 10, 2025', title: 'Building Topical Authority: The Structured Approach', text: 'Topical authority isn\'t built by publishing a lot — it\'s built by publishing the right things in the right structure. Here\'s how to design a content ecosystem that earns trust from search engines and readers alike.' },
  { slug: 'core-web-vitals-2025', cat: 'Technical SEO', date: 'Mar 25, 2025', title: 'Core Web Vitals in 2025: What Actually Matters', text: 'Core Web Vitals have evolved significantly. LCP, INP, and CLS still matter — but how they\'re measured and weighted has changed. Here\'s what to focus on and what you can safely deprioritize.' },
  { slug: 'eeat-signals', cat: 'E-E-A-T', date: 'Mar 8, 2025', title: 'E-E-A-T Signals: How to Demonstrate Real Expertise', text: 'Google\'s E-E-A-T framework is more important than ever, but most guides confuse signals with substance. Here\'s how to build genuine expertise signals that actually influence how search engines assess your content.' },
  { slug: 'content-gap-analysis', cat: 'Content Strategy', date: 'Feb 20, 2025', title: 'The Content Gap Analysis That Actually Works', text: 'Most content gap analyses only compare keywords. Real gap analysis maps entire topic areas, user intent stages, and entity coverage — identifying what\'s missing from your content ecosystem, not just your rankings.' },
]

export default function Blog() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="blogHeading">
        <div className="container">
          <p className="page-hero__label">Insights &amp; Thinking</p>
          <h1 id="blogHeading">Practical SEO insights for the modern search landscape.</h1>
          <p>Articles on semantic SEO, AI search, topical authority, and how search is evolving — written for practitioners who want depth, not clickbait.</p>
        </div>
      </section>

      <section className="section" aria-label="Blog articles">
        <div className="container">
          <div className="blog-grid">
            {articles.map((a) => (
              <article key={a.title} className="blog-card">
                <div className="blog-card__cat">{a.cat}</div>
                <div className="blog-card__body">
                  <div className="blog-card__date">{a.date}</div>
                  <h2 style={{ fontSize: '1.0625rem', lineHeight: 1.3, marginBottom: 'var(--s2)', letterSpacing: '-0.02em', fontWeight: 700 }}>{a.title}</h2>
                  <p>{a.text}</p>
                  <Link href={a.slug ? `/blog/${a.slug}` : '#'} className="blog-card__read" aria-label={`Read article: ${a.title}`}>Read article →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section" style={{ background: 'var(--sage)' }} aria-labelledby="newsletterHeading">
        <div className="container" style={{ maxWidth: '640px' }}>
          <div style={{ textAlign: 'center' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Stay Current</p>
            <h2 id="newsletterHeading" style={{ marginBottom: 'var(--s4)' }}>Get the latest insights.</h2>
            <p className="text-gray" style={{ marginBottom: 'var(--s6)' }}>No noise — just practical articles on semantic SEO, AI search, and search visibility. Delivered when it matters.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  )
}
