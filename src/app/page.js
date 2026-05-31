import Image from 'next/image'
import Link from 'next/link'
import AnimatedCounters from '@/components/AnimatedCounters'
import TestimonialsSection from '@/components/TestimonialsSection'
import FaqSection from '@/components/FaqSection'
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel'
import AboutSnippet from '@/components/AboutSnippet'
import ComparisonSection from '@/components/ComparisonSection'
import ReadMoreText from '@/components/ReadMoreText'
import { posts } from '@/data/posts'


export const metadata = {
  title: 'Bishal Oli — SEO & AI Search Optimization Expert',
  description: 'Bishal Oli is an SEO strategist and AI search optimization expert specializing in semantic SEO, topical authority, and search visibility for traditional and AI-powered search engines.',
  alternates: { canonical: 'https://bishaloli.com/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Bishal Oli',
  jobTitle: 'SEO & AI Search Optimization Expert',
  url: 'https://bishaloli.com',
  email: 'bishaloli610@gmail.com',
  sameAs: ['https://www.linkedin.com/in/bishal-oli/'],
  knowsAbout: ['SEO Strategy', 'Semantic SEO', 'AI Search Optimization', 'Topical Authority', 'E-E-A-T', 'Content Strategy'],
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="hero" aria-labelledby="heroHeadline">
        <div className="container hero__container">
          <div className="hero__content">
            <p className="hero__eyebrow">Bishal Oli - SEO &amp; AI Search Optimization Expert</p>
            <h1 className="hero__headline" id="heroHeadline">
              Grow your visibility,<br />master every search.
            </h1>
            <p className="hero__body">
              <ReadMoreText 
                initialText="Helping businesses earn real, lasting visibility by combining semantic SEO, topical authority, and content structure built for how search actually works."
                moreText="My approach focuses on deep data analysis, entity-based content mapping, and adapting to modern AI-driven search behaviors to ensure your brand stands out."
              />
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="hero__btn-primary" id="heroCtaPrimary">Book a Call</Link>
              <Link href="/services" className="hero__btn-ghost" id="heroCtaSecondary">Learn More</Link>
            </div>

            {/* GOOGLE REVIEWS TRUST BADGE */}
            <div className="hero__reviews" aria-label="Google Reviews rating">
              <div className="hero__reviews-google">
                {/* Google G SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div className="hero__reviews-right">
                  <div className="hero__reviews-stars" aria-label="5 stars">★★★★★</div>
                  <div className="hero__reviews-label">Reviews</div>
                </div>
              </div>
              <div className="hero__reviews-divider" aria-hidden="true"></div>
              <div className="hero__reviews-score">
                <span className="hero__reviews-text">Excellent <strong>4.9</strong> out of 5</span>
                <div className="hero__reviews-stars-row" aria-hidden="true">
                  <span>★</span><span>★</span><span>★</span><span>★</span>
                  <span className="hero__reviews-star-half">★</span>
                </div>
              </div>
            </div>

            <div className="hero__trust">
              <p className="hero__trust-label">Core specializations</p>
              <div className="hero__trust-row">
                <span>Semantic SEO</span><span className="hero__trust-sep">·</span>
                <span>Topical Authority</span><span className="hero__trust-sep">·</span>
                <span>AI Search</span><span className="hero__trust-sep">·</span>
                <span>E-E-A-T Strategy</span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__photo-wrap">
              <Image src="/bishal-oli.png" alt="Bishal Oli — SEO and AI Search Optimization Expert" width={440} height={560} priority />
            </div>
            <div className="hero__stat-card hero__stat-card--top" aria-hidden="true">
              <span className="hero__stat-icon">🏆</span>
              <span className="hero__stat-text">40+ Websites Optimized</span>
            </div>
            <div className="hero__stat-card hero__stat-card--bottom" aria-hidden="true">
              <div className="hero__stat-label-row"><span className="hero__stat-pulse"></span>Search Growth, My Mission</div>
              <div className="hero__stat-value">↑ +180% Organic Traffic</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {['SEO Strategy', 'Semantic SEO', 'AI Search Optimization', 'Topical Authority', 'E-E-A-T Framework', 'Content Strategy', 'Technical SEO', 'Entity Optimization', 'Search Intent Alignment',
            'SEO Strategy', 'Semantic SEO', 'AI Search Optimization', 'Topical Authority', 'E-E-A-T Framework', 'Content Strategy', 'Technical SEO', 'Entity Optimization', 'Search Intent Alignment'].map((item, i) => (
              <span key={i} className="marquee-item">{item} <span className="marquee-dot"></span></span>
            ))}
        </div>
      </div>

      {/* ABOUT SNIPPET */}
      <AboutSnippet />

      {/* WHAT I DO */}
      <section className="section" aria-labelledby="pillarsHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What I Specialize In</p>
            <h2 id="pillarsHeading" style={{ maxWidth: '16ch' }}>Four disciplines. One unified strategy.</h2>
            <p className="text-gray" style={{ maxWidth: '50ch', marginTop: 'var(--s3)' }}>
              Modern search isn't just about keywords. It's about meaning, context, structure, and trust — across both traditional and AI-powered search systems.
            </p>
          </div>
          <div className="pillars-grid">
            {[
              {
                n: '01',
                title: 'SEO Strategy',
                text: 'Building the foundation: technical health, crawlability, structured data, and a long-term ranking framework that grows with your brand.',
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              },
              {
                n: '02',
                title: 'Semantic SEO',
                text: 'Going beyond keywords into meaning. Mapping entities, relationships, and topics so search engines understand what your content is truly about.',
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 1 0 0 16A8 8 0 0 0 12 2z" /><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" /></svg>
              },
              {
                n: '03',
                title: 'AI Search Optimization',
                text: 'Structuring content so it surfaces in AI-generated answers — ChatGPT, Perplexity, Google SGE, and the next generation of discovery engines.',
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /><path d="M7 8h10M7 12h6" /></svg>
              },
              {
                n: '04',
                title: 'Content Architecture',
                text: 'Designing information hierarchies, topical maps, and internal linking systems that build demonstrable expertise and authority at scale.',
                svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              },
            ].map((p) => (
              <div key={p.n} className="pillar">
                <div className="pillar-num">{p.n}</div>
                <div className="pillar-icon" aria-hidden="true">{p.svg}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section--sm" aria-label="Key numbers">
        <div className="container">
          <AnimatedCounters />
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section section--dark" aria-labelledby="problemsHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow eyebrow--light">The Real Challenges</p>
            <h2 id="problemsHeading" style={{ color: 'var(--ivory)', maxWidth: '18ch' }}>Do any of these sound familiar?</h2>
          </div>
          <div className="problem-grid">
            {[
              { title: 'Traffic that doesn\'t convert', text: 'You rank for keywords, but visitors don\'t engage or convert. The issue is usually misaligned intent — your content answers the wrong question.', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg> },
              { title: 'Invisible in AI search results', text: 'Your competitors are getting cited in AI-generated answers while you\'re nowhere. AI systems need structured, trustworthy, entity-rich content.', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg> },
              { title: 'Content that doesn\'t build authority', text: 'Publishing consistently but rankings stay flat. Without topical depth and logical content structure, search engines can\'t assess your expertise.', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
              { title: 'Technical issues blocking visibility', text: 'Crawl errors, poor Core Web Vitals, missing schema, and weak internal linking — often invisible problems with significant ranking consequences.', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg> },
              { title: 'No clear content roadmap', text: 'Publishing content without a strategic topical map means random coverage instead of the coherent expertise Google and AI systems reward.', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg> },
              { title: 'Strategy that feels outdated', text: 'Tactics that worked three years ago aren\'t enough now. Modern SEO requires semantic understanding, entity relationships, and AI-readiness.', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
            ].map((p) => (
              <div key={p.title} className="problem-item">
                <div className="problem-icon">{p.svg}</div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section" aria-labelledby="servicesPreviewHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">How I Can Help</p>
            <h2 id="servicesPreviewHeading" style={{ maxWidth: '16ch' }}>Services built around real search outcomes.</h2>
            <p className="text-gray" style={{ maxWidth: '50ch', marginTop: 'var(--s3)' }}>Every engagement is tailored to where you are and where you need to go — no generic audits, no cookie-cutter templates.</p>
          </div>
          <div className="services-grid">
            {[
              { title: 'SEO Audit', text: 'A comprehensive review of your technical foundation, content quality, on-page signals, and competitive landscape — with a clear action plan.', href: '/services#audit', id: 'serviceAuditLink', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg> },
              { title: 'Topical Map Creation', text: 'A strategic blueprint of every topic your brand should own — mapped by user intent, entity relationships, and search opportunity.', href: '/services#topical-map', id: 'serviceTopicalLink', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></svg> },
              { title: 'AI Search Optimization', text: 'Restructuring and repositioning your content to earn citations and visibility within AI-generated answers and LLM-powered discovery.', href: '/services#ai-search', id: 'serviceAILink', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" /><circle cx="19" cy="5" r="3" fill="currentColor" stroke="none" /></svg> },
              { title: 'Semantic SEO Strategy', text: 'Moving beyond keywords to build entity-based content that demonstrates context, expertise, and topical depth search engines trust.', href: '/services#semantic-seo', id: 'serviceSemanticLink', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><line x1="12" y1="7" x2="5" y2="17" /><line x1="12" y1="7" x2="19" y2="17" /><line x1="5" y1="19" x2="19" y2="19" /></svg> },
              { title: 'Content Strategy', text: 'A comprehensive editorial plan that aligns every piece of content with search intent, topical authority goals, and E-E-A-T signals.', href: '/services#content-strategy', id: 'serviceContentLink', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg> },
              { title: 'Technical SEO', text: 'Addressing the structural issues that limit crawlability, indexation, Core Web Vitals, and overall search engine accessibility.', href: '/services#technical-seo', id: 'serviceTechnicalLink', svg: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /></svg> },
            ].map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-card__icon" aria-hidden="true">{s.svg}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href} className="service-card__link" id={s.id}>Learn more →</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--s8)' }}>
            <Link href="/services" className="btn btn-outline" id="allServicesBtn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--sage)' }} aria-labelledby="processHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">My Approach</p>
            <h2 id="processHeading" style={{ maxWidth: '14ch' }}>How I work with you.</h2>
          </div>
          <div className="process-list">
            {[
              { n: '01', title: 'Discovery & Audit', text: 'I start by understanding your business, audience, and current SEO position — uncovering gaps, opportunities, and hidden obstacles.' },
              { n: '02', title: 'Strategy & Structure', text: 'I design a custom roadmap: your topical map, content priorities, technical requirements, and AI-readiness plan.' },
              { n: '03', title: 'Implementation', text: 'I guide or execute the work — optimizing existing content, building new content, and fixing technical foundations.' },
              { n: '04', title: 'Measure & Refine', text: 'I track meaningful metrics — not just rankings, but topical coverage, E-E-A-T signals, and AI citation rates — adjusting as we learn.' },
              { n: '05', title: 'Scale', text: 'After measuring and refining, I identify what works and scale those successful strategies for maximum growth.' },
            ].map((s) => (
              <div key={s.n} className="process-step">
                <div className="process-step__num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <ComparisonSection />

      {/* CASE STUDIES */}
      <CaseStudiesCarousel />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection />

      {/* BLOG PREVIEW */}
      <section className="section" aria-labelledby="insightsHeading">
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--s4)' }}>
            <div>
              <p className="eyebrow">Fresh Thinking</p>
              <h2 id="insightsHeading">Latest Insights</h2>
            </div>
            <Link href="/blog" className="btn btn-outline" id="allInsightsBtn">All Articles →</Link>
          </div>
          <div className="blog-grid">
            {posts.slice(0, 3).map((a) => (
              <article key={a.title} className="blog-card">
                <div className="blog-card__cat">{a.cat}</div>
                <div className="blog-card__body">
                  <div className="blog-card__date">{a.date}</div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <Link href={a.href} className="blog-card__read" aria-label={`Read article: ${a.title}`}>Read article →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="ctaHeading">
        <div className="container">
          <p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>Ready to Get Visible?</p>
          <h2 id="ctaHeading">Let's build a search strategy that actually works.</h2>
          <p>Whether you need a full SEO strategy, a topical map, or just a clear-headed second opinion — I'm here to help.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary" id="ctaContactBtn">Start a Conversation</Link>
            <Link href="/services" className="btn btn-outline-white" id="ctaServicesBtn">View Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
