import Image from 'next/image'
import Link from 'next/link'
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel'
import TestimonialsSection from '@/components/TestimonialsSection'
import FaqAccordion from './FaqAccordion'

export const metadata = {
  title: 'SEO Expert in Nepal — Bishal Oli | AI & Semantic SEO Strategist',
  description: 'Looking for the best SEO expert in Nepal? Bishal Oli combines semantic SEO, topical authority, and AI search optimization (GEO/AEO) to drive organic growth.',
  alternates: { canonical: 'https://bishaloli.com/seo-expert-nepal/' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What makes you different from other SEO experts in Nepal?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'I specialize in Semantic SEO and AI Search Optimization (GEO/AEO). While traditional SEOs in Nepal focus on basic keyword density and backlinks, I build entity-relationship maps and structure content to get cited in AI systems like ChatGPT, Perplexity, and Gemini. Additionally, I have a developer background and implement technical fixes directly.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you only work with businesses in Nepal?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'No. While I am based in Nepal and help local businesses (hotels, trekking agencies, startups) dominate search, I work with clients globally, including tech companies and e-commerce stores in Australia, the US, and Europe.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How much do your SEO services cost in Nepal?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'I offer four packages: Starter (NPR 25,000/mo) for local companies, Growth (NPR 45,000/mo) for e-commerce and scaling brands, Enterprise (NPR 80,000/mo) for advanced SaaS, and Corporate / Elite (NPR 150,000/mo) for large enterprise groups and hydropower networks.'
      }
    }
  ]
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Bishal Oli',
  'jobTitle': 'SEO & AI Search Optimization Expert',
  'url': 'https://bishaloli.com/seo-expert-nepal/',
  'email': 'bishaloli610@gmail.com',
  'sameAs': ['https://www.linkedin.com/in/bishal-oli/'],
  'knowsAbout': ['Semantic SEO', 'AI Search Optimization', 'Topical Authority', 'Technical SEO', 'E-E-A-T Strategy']
}

export default function SeoExpertNepal() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      {/* HERO */}
      <section className="hero" aria-labelledby="heroHeadline">
        <div className="container hero__container">
          <div className="hero__content">
            <p className="hero__eyebrow">Bishal Oli — Authority-First SEO Specialist</p>
            <h1 className="hero__headline" id="heroHeadline" style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)' }}>
              SEO Expert in Nepal.<br />Built for AI &amp; Google Search.
            </h1>
            <p className="hero__body">
              Outrank the competition. Rebuild your search visibility with modern Semantic SEO, Topical Authority, and Generative Engine Optimization (GEO) engineered for Google, ChatGPT Search, Gemini, and Perplexity.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="hero__btn-primary" id="heroCtaPrimary">Request Free SEO Audit</Link>
              <Link href="/services" className="hero__btn-ghost" id="heroCtaSecondary">Explore Services</Link>
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

            <div className="hero__trust" style={{ marginTop: 'var(--s4)' }}>
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
              <Image src="/bishal-oli.png" alt="Bishal Oli — SEO and AI Search Optimization Expert in Nepal" width={440} height={560} priority />
            </div>
            <div className="hero__stat-card hero__stat-card--bottom" aria-hidden="true" style={{ bottom: '40px' }}>
              <div className="hero__stat-label-row"><span className="hero__stat-pulse"></span>Active Campaigns</div>
              <div className="hero__stat-value">+561.6% Search Visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: WHY NEPAL BUSINESSES NEED SEO NOW */}
      <section className="section" aria-labelledby="whySeoHeading" style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Market Dynamics</p>
            <h2 id="whySeoHeading" style={{ maxWidth: '24ch' }}>Why SEO is the high-ROI growth channel in Nepal today.</h2>
            <p className="text-gray" style={{ maxWidth: '56ch', marginTop: 'var(--s3)' }}>
              With rising advertising costs on Facebook and Google Ads, buying clicks is no longer sustainable. Capturing high-intent organic searchers is how businesses compound growth.
            </p>
          </div>

          <div className="pillars-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 'var(--s6)' }}>
            <div className="pillar">
              <div className="pillar-num">01</div>
              <h3>Rising Ads Competition</h3>
              <p>Every business in Kathmandu, Pokhara, and Biratnagar is bidding for Google Ads. Runaway ad costs are crushing margins. Building organic authority secures long-term market share for zero cost per click.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">02</div>
              <h3>Mobile Search Dominance</h3>
              <p>Over 85% of queries in Nepal originate on smartphones. Being invisible on localized search grids means losing clients directly to competitors who prioritize fast mobile index optimization.</p>
            </div>
            <div className="pillar">
              <div className="pillar-num">03</div>
              <h3>High-Intent Lead Value</h3>
              <p>Organic search captures buyers at the exact moment they seek solutions (e.g., &quot;trek agency Kathmandu&quot;, &quot;fintech solution Nepal&quot;). These convert up to 5× higher than standard social media campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT AN SEO EXPERT SHOULD DO */}
      <section className="section" aria-labelledby="whatExpertDoesHeading" style={{ background: 'var(--ivory)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', margin: '0 auto var(--s6)' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Professional Deliverables</p>
            <h2 id="whatExpertDoesHeading">SEO is more than writing metadata.</h2>
            <p className="text-gray" style={{ maxWidth: '56ch', margin: 'var(--s3) auto 0' }}>
              A modern SEO specialist does not just give you a PDF checklist. They actively shape your index depth, structured graph schemas, and search engines integrations.
            </p>
          </div>

          <div className="pillars-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 'var(--s4)' }}>
            {[
              {
                n: '01',
                title: 'Technical Crawl Optimization',
                text: 'Fixing indexation errors, duplicate parameters, internal links waterfalls, schema JSON-LD loops, and rendering performance variables directly in your site codebase.',
              },
              {
                n: '02',
                title: 'Topical Authority Mapping',
                text: 'Building conceptual semantic maps. Instead of chasing singular keywords, we build deep topic clusters that establish absolute contextual relevance.',
              },
              {
                n: '03',
                title: 'Conversion Flow Audits',
                text: 'Tracking user interaction paths, testing local checkout gateways conversion scripts, and implementing credibility blocks to maximize page signups.',
              },
              {
                n: '04',
                title: 'Generative Engine citation (GEO)',
                text: 'Structuring content entities so your brand gets referenced directly as the primary citation in ChatGPT Search, Gemini, Perplexity, and AI Overviews.',
              }
            ].map((p) => (
              <div key={p.n} className="pillar">
                <div className="pillar-num">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHAT CAN I BRING TO YOUR PROJECT? (EXPERTISE) */}
      <section className="expertise-section" aria-labelledby="expertiseHeading">
        <div className="container">
          <div className="expertise-header">
            <span className="expertise-badge">Expertise</span>
            <h2 className="expertise-title" id="expertiseHeading">What can I bring to your project?</h2>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="6" cy="18" r="3" />
                  <path d="M8.5 15.5L15 9M11.5 12.5l1.5 1.5M13.5 10.5l1.5 1.5" />
                  <rect x="13" y="14" width="2" height="6" rx="0.5" />
                  <rect x="17" y="11" width="2" height="9" rx="0.5" />
                  <rect x="21" y="8" width="2" height="12" rx="0.5" />
                  <path d="M11 15l4-4 5 5" />
                  <path d="M17 11h3v3" />
                </svg>
              </div>
              <h3>Increase in indexed keywords and impression</h3>
              <p>By optimizing your content and aligning it with search intent, I can significantly expand the number of indexed keywords and impressions for your site. This leads to greater visibility across search engines and attracts more organic traffic.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M5 14v-1M9 14V10M13 14V6M17 14V4" />
                  <path d="M5 11l4-3 4-2 4-3" />
                  <path d="M14 3h3v3" />
                </svg>
              </div>
              <h3>Increase in ranking and traffic</h3>
              <p>I'll implement proven SEO strategies to improve your site's rankings for high-value keywords. As your site climbs in search engine results, you'll experience a steady increase in targeted traffic, driving more potential customers to your content.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M6 18a6 6 0 0 1 8.8-5.3" />
                  <path d="M17 17a5 5 0 0 0 3-8" />
                  <path d="M19 6h3.5v3.5" />
                  <circle cx="19" cy="14" r="4" />
                  <path d="M19 12v4M17.5 13h3c.5 0 1 .5 1 1s-.5 1-1 1h-2c-.5 0-1 .5-1 1s.5 1 1 1h3" />
                </svg>
              </div>
              <h3>Increase in conversion (month over month)</h3>
              <p>Through a combination of on-page optimization, enhanced user experience, and conversion-focused strategies, I'll work to boost your conversion rate month over month, ensuring that more visitors take the desired actions on your site.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="6" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeDasharray="3 3" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
                  <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
                  <text x="12" y="15" fontFamily="var(--font-display), sans-serif" fontSize="8" fontWeight="800" textAnchor="middle" fill="currentColor">AI</text>
                </svg>
              </div>
              <h3>Get yourself featured in AI overviews</h3>
              <p>I structure your content using semantic schema, entity tags, and direct answer formats optimized for search engine AI models. This positions your site to win Google's AI Overview answers and drive high-authority search placements.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M3.6 9h16.8M3.6 15h16.8" />
                </svg>
              </div>
              <h3>Ensure your site has 100% health score</h3>
              <p>Through deep technical audits, I resolve crawling errors, fix broken links, optimize site performance (Core Web Vitals), and secure your indexation pathways. A clean, healthy site ranks faster and crawls more efficiently.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 20h18" />
                  <path d="M3 16l5-4 5 1 8-9" />
                  <path d="M19 2l.5 1.5L21 4l-1.5.5L19 6l-.5-1.5L17 4l1.5-.5z" fill="currentColor" />
                  <path d="M13 3l.3 1L14 4.3l-1 .3-.3 1-.3-1-1-.3 1-.3z" fill="currentColor" opacity="0.8" />
                  <circle cx="8" cy="8" r="1" fill="currentColor" />
                  <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3>Rank in LLMs (ChatGPT, Gemini and Perplexity)</h3>
              <p>I optimize your brand's data footprint for Large Language Models. By targeting conversational context, structured facts, and citation loops, I ensure your business is recommended as a top reference when users query AI assistants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW TO CHOOSE A TRUE SEO EXPERT */}
      <section className="section" aria-labelledby="howToChooseHeading" style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Hiring Framework</p>
            <h2 id="howToChooseHeading" style={{ maxWidth: '24ch' }}>How to evaluate an SEO expert in Nepal.</h2>
            <p className="text-gray" style={{ maxWidth: '56ch', marginTop: 'var(--s3)' }}>
              Avoid generalist freelancers who offer guaranteed top spots or spam backlinks. Demand transparency, actual analytics dashboards, and direct technical code access.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--s6)', marginTop: 'var(--s6)' }}>
            <div style={{ border: '1px solid var(--border)', padding: 'var(--s4)', background: 'var(--ivory)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--s3)', color: '#c0392b', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }} aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Red Flags to Avoid
              </h3>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.9375rem', color: 'var(--gray)' }}>
                <li style={{ marginBottom: '16px' }}><strong>Guaranteed Rankings:</strong> Search engines modify their ranking systems daily. Anyone promising concrete position numbers is selling outdated black-hat strategies.</li>
                <li style={{ marginBottom: '16px' }}><strong>Backlink Packages:</strong> Buying bundles of hundreds of links from networks leads directly to manual algorithmic search penalties.</li>
                <li style={{ marginBottom: '16px' }}><strong>Checklist-Only Audits:</strong> Sending PDF lists of issues for your developers to fix creates bottlenecks. Expect direct code adjustments instead.</li>
              </ul>
            </div>

            <div style={{ border: '1px solid var(--border)', padding: 'var(--s4)', background: 'var(--ivory)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--s3)', color: 'var(--lime-dark)', display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }} aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Proof to Demand
              </h3>
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontSize: '0.9375rem', color: 'var(--gray)' }}>
                <li style={{ marginBottom: '16px' }}><strong>Live GSC Traffic Charts:</strong> Request real, unedited Google Search Console dashboards showing sustained click growth.</li>
                <li style={{ marginBottom: '16px' }}><strong>Topical Map Architecture:</strong> Ask to see how they structure semantic topic models and site maps for entities.</li>
                <li style={{ marginBottom: '16px' }}><strong>Technical Code Capability:</strong> Test if they can read and edit your CMS structure (WordPress, Next.js, Shopify) to apply modifications directly.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BISHAL */}
      <section className="section section--dark" aria-labelledby="whyChooseBishalHeading" style={{ padding: '80px 0', background: 'var(--black)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--s8)', alignItems: 'center' }}>
          {/* Left: Framed Image */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', minHeight: '440px', alignItems: 'center' }}>
            {/* Background offset block acting as the accent frame */}
            <div style={{ 
              position: 'absolute', 
              width: '100%', 
              maxWidth: '340px', 
              height: '420px', 
              background: 'var(--lime)', 
              borderRadius: '8px', 
              transform: 'translate(12px, 12px)', 
              zIndex: 1 
            }}></div>
            
            {/* Framed Image Container */}
            <div style={{ 
              position: 'relative', 
              zIndex: 2, 
              width: '100%', 
              maxWidth: '340px', 
              height: '420px', 
              background: '#ffffff',
              border: '12px solid var(--black)', 
              borderRadius: '8px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <Image 
                src="/bishal-oli.png" 
                alt="Bishal Oli — SEO Expert in Nepal" 
                fill 
                style={{ objectFit: 'cover', objectPosition: 'top center' }} 
              />
            </div>
          </div>

          {/* Right: Content */}
          <div style={{ zIndex: 2 }}>
            <p className="eyebrow eyebrow--light" style={{ marginBottom: '16px' }}>SEO Expert in Nepal</p>
            <h2 id="whyChooseBishalHeading" style={{ color: '#ffffff', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15, marginBottom: '24px' }}>
              Why choose <span style={{ color: 'var(--lime)' }}>Bishal</span> as your <span style={{ color: 'var(--lime)' }}>SEO Expert</span>?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Bishal helps businesses rank their websites on the first page of Google by optimizing their topical authority and semantic search footprints.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '32px' }}>
              He specializes in E-Commerce SEO, SaaS SEO, and travel platform architectures. Bishal also offers custom topical maps mapping entities directly to local and international search intent.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px 24px' }}>
              {[
                '3+ Years of SEO Experience',
                'AI and Semantic Search Expert',
                '40+ Successful SEO Projects',
                'Proven SEO Strategies for Nepali Markets (Ecommerce, SaaS, Local Businesses)',
                'Local, National, and International SEO Specialization',
                'Data-driven, ROI-focused, and client-centric SEO strategies.'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lime)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARISON TABLE */}
      <section className="section section--dark" aria-labelledby="hiringComparisonHeading" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow eyebrow--light">Buying Guidance</p>
            <h2 id="hiringComparisonHeading" style={{ color: 'var(--ivory)', maxWidth: '24ch' }}>Comparing SEO Solutions: Which fits your business?</h2>
            <p style={{ color: 'rgba(243,237,228,0.6)', maxWidth: '56ch', marginTop: 'var(--s3)' }}>
              Evaluate the tradeoffs in execution speed, depth of technical mapping, and cost structure before choosing a delivery model.
            </p>
          </div>

          <div style={{ overflowX: 'auto', marginTop: 'var(--s6)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: '#122622', color: 'var(--ivory)' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', borderBottom: '2px solid var(--lime)' }}>Feature</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', borderBottom: '2px solid var(--lime)' }}>Freelancer</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', borderBottom: '2px solid var(--lime)' }}>General Agency</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', borderBottom: '2px solid var(--lime)' }}>In-House Team</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold', borderBottom: '2px solid var(--lime)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>Bishal Oli (SEO Expert)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: 'Average Monthly Cost', fr: 'NPR 15K - 30K', ag: 'NPR 60K - 120K+', ih: 'NPR 150K+ (Salaries)', bo: 'NPR 25K - 80K (Retainers)' },
                  { f: 'Execution Speed', fr: 'Slow (Solo capacity)', ag: 'Slow (Multi-layered approvals)', ih: 'Medium (Internal priorities)', bo: 'Fast (Direct code access)' },
                  { f: 'Technical & Schema Updates', fr: 'Rarely (Need your dev)', ag: 'No (Sends checklist task)', ih: 'Depends on internal devs', bo: 'Yes (Direct codebase changes)' },
                  { f: 'AI/GEO Citation Strategy', fr: 'No (Traditional keywords)', ag: 'No (Standard templates)', ih: 'Requires constant training', bo: 'Yes (Structured Entity graphs)' },
                  { f: 'Reporting Detail', fr: 'Low (Basic pdf list)', ag: 'Medium (Automated templates)', ih: 'High (Meetings)', bo: 'High (Commercial GSC clicks & ROI)' },
                  { f: 'Best-Fit Business', fr: 'Micro local stores', ag: 'Mid-market static websites', ih: 'Massive portal operations', bo: 'SaaS, E-commerce, Hydro, Travel & B2B' }
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: idx % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'none' }}>
                    <td style={{ padding: '16px', fontWeight: 'bold', color: 'var(--ivory)' }}>{row.f}</td>
                    <td style={{ padding: '16px', color: 'rgba(243,237,228,0.6)' }}>{row.fr}</td>
                    <td style={{ padding: '16px', color: 'rgba(243,237,228,0.6)' }}>{row.ag}</td>
                    <td style={{ padding: '16px', color: 'rgba(243,237,228,0.6)' }}>{row.ih}</td>
                    <td style={{ padding: '16px', color: 'var(--lime)', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>{row.bo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: NEPAL-SPECIFIC SEO CHALLENGES */}
      <section className="section" aria-labelledby="nepalChallengesHeading" style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Local Nuances</p>
            <h2 id="nepalChallengesHeading" style={{ maxWidth: '24ch' }}>Technical realities of optimizing websites in Nepal.</h2>
            <p className="text-gray" style={{ maxWidth: '56ch', marginTop: 'var(--s3)' }}>
              Standard global SEO strategies ignore local connectivity limits, checkout flow redirections, and multi-regional Nepalese search dynamics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--s4)', marginTop: 'var(--s6)' }}>
            <div style={{ border: '1px solid var(--border)', padding: 'var(--s4)', display: 'flex', flexDirection: 'column' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--lime)', marginBottom: '12px' }} aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Low-Bandwidth Mobile Speed</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray)', lineHeight: 1.6 }}>Many regional users browse on unstable 3G/4G connections. We compress files, structure layout parameters, and resolve rendering blocks so pages open instantly on weak mobile networks.</p>
            </div>

            <div style={{ border: '1px solid var(--border)', padding: 'var(--s4)', display: 'flex', flexDirection: 'column' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--lime)', marginBottom: '12px' }} aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>eSewa &amp; Khalti Analytics</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray)', lineHeight: 1.6 }}>Gateway redirects break default purchase tracking loops. We write custom Javascript tracking layers to capture conversion signals and ROI from local checkouts.</p>
            </div>

            <div style={{ border: '1px solid var(--border)', padding: 'var(--s4)', display: 'flex', flexDirection: 'column' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--lime)', marginBottom: '12px' }} aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Local Hosting &amp; Edge Latency</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray)', lineHeight: 1.6 }}>Server distances cause network delays. We implement CDN edge configurations (Cloudflare edge nodes) to minimize response routing latency inside Nepal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: MULTILINGUAL & SEARCH INTENT DEPTH */}
      <section className="section" aria-labelledby="multilingualHeading" style={{ background: 'var(--ivory)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Search Intent Architecture</p>
            <h2 id="multilingualHeading" style={{ maxWidth: '24ch' }}>Capturing bilingual and Romanized Nepali search patterns.</h2>
            <p className="text-gray" style={{ maxWidth: '56ch', marginTop: 'var(--s3)' }}>
              Nepalese search intent is highly hybrid. Users switch dynamically between English, Devnagari script, and Romanized Nepali phonetic queries.
            </p>
          </div>

          <div className="pillars-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 'var(--s6)' }}>
            <div className="pillar">
              <h3>Romanized Nepali Intent</h3>
              <p>Optimizing content structure for phonetically typed local terms (e.g., &quot;sasto ticket Kathmandu to Pokhara&quot; or &quot;ghar bhada ma Kathmandu&quot;), aligning with natural search patterns.</p>
            </div>
            <div className="pillar">
              <h3>Devnagari Script Targeting</h3>
              <p>Structuring clean bilingual layouts to capture script search parameters, preventing index errors and ensuring Google reads separate translation nodes correctly.</p>
            </div>
            <div className="pillar">
              <h3>Local Voice Query Formatting</h3>
              <p>Structuring FAQ JSON schemas to capture mobile conversational voice queries (e.g., &quot;Kathmandu ko best hotel kun ho?&quot;) which are rapidly expanding in Nepal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PROFESSIONAL SEO TOOLS I USE */}
      <section className="section" aria-labelledby="toolsHeading" style={{ background: 'var(--ivory)', borderBottom: '1px solid var(--border)', padding: '80px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', margin: '0 auto var(--s8)' }}>
            <h2 id="toolsHeading">Professional SEO Tools I Use</h2>
            <p className="text-gray" style={{ maxWidth: '56ch', margin: 'var(--s3) auto 0' }}>
              I use industry-leading SEO tools and platforms to deliver data-driven results for my clients.
            </p>
          </div>

          <div className="tools-grid">
            {[
              {
                name: 'Google Search Console',
                logo: (
                  <svg width="150" height="32" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Search Console Radar Icon */}
                    <g transform="translate(4, 2)">
                      <circle cx="12" cy="12" r="10" stroke="#E2E8F0" strokeWidth="2" />
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#4285F4" />
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5 16.5 9.52 16.5 12s-2.02 4.5-4.5 4.5z" fill="#34A853" />
                      <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#FBBC05" />
                      <path d="M12 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" fill="#EA4335" />
                    </g>
                    {/* Text */}
                    <text x="36" y="15" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="#757575">Google</text>
                    <text x="36" y="27" fontFamily="var(--font-display)" fontSize="11" fontWeight="800" fill="var(--black)">Search Console</text>
                  </svg>
                )
              },
              {
                name: 'Google Analytics 4',
                logo: (
                  <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Analytics graph bars */}
                    <path d="M8 24c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6z" fill="#F9AB00" />
                    <path d="M15 24c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v12z" fill="#E37400" />
                    <path d="M22 24c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v18z" fill="#F57C00" />
                    {/* Text */}
                    <text x="36" y="15" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="#757575">Google</text>
                    <text x="36" y="27" fontFamily="var(--font-display)" fontSize="11" fontWeight="800" fill="var(--black)">Analytics 4</text>
                  </svg>
                )
              },
              {
                name: 'Ahrefs',
                logo: (
                  <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <text x="50%" y="24" fontFamily="var(--font-display), 'Inter', sans-serif" fontSize="26" fontWeight="900" letterSpacing="-0.06em" textAnchor="middle">
                      <tspan fill="#FF8000">a</tspan>
                      <tspan fill="#3557EC">hrefs</tspan>
                    </text>
                  </svg>
                )
              },
              {
                name: 'SEMrush',
                logo: (
                  <svg width="110" height="32" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Semrush Fireball Icon */}
                    <g transform="translate(0, 4)" fill="#FF642D">
                      <path d="M20.698 11.911c0 .444-.226.516-.79.516-.596 0-.706-.1-.77-.554-.118-1.152-.896-2.13-2.201-2.24-.418-.034-.518-.19-.518-.706 0-.48.074-.708.446-.708 2.265.01 3.833 1.832 3.833 3.69v.002zm3.3 0c0-3.456-2.338-7.11-7.74-7.11H5.52c-.218 0-.354.11-.354.31 0 .109.082.209.156.26.388.31.97.654 1.73 1.036.743.372 1.323.616 1.903.852.246.1.336.208.336.344 0 .19-.136.308-.4.308H.372c-.254 0-.372.164-.372.326 0 .136.044.254.162.372.69.726 1.796 1.596 3.4 2.604 1.466.91 2.98 1.74 4.533 2.492.236.11.308.236.308.372-.008.154-.126.28-.4.28H4.1c-.216 0-.344.12-.344.3 0 .1.08.226.19.326.888.808 2.311 1.688 4.207 2.494 2.53 1.08 5.094 1.721 7.98 1.721 5.465 0 7.867-4.087 7.867-7.289l-.002.002zm-7.133 5.104c-2.794 0-5.132-2.276-5.132-5.114 0-2.794 2.33-5.04 5.132-5.04 2.863 0 5.111 2.24 5.111 5.04a5.086 5.086 0 0 1-5.111 5.114z"/>
                    </g>
                    {/* Text SEMRUSH */}
                    <text x="28" y="21" fontFamily="var(--font-display), 'Inter', sans-serif" fontSize="13" fontWeight="900" fill="var(--black)" letterSpacing="0.04em">SEMRUSH</text>
                  </svg>
                )
              },
              {
                name: 'Screaming Frog',
                logo: (
                  <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Screaming Frog Logo */}
                    <text x="0" y="22" fontFamily="var(--font-display), 'Inter', sans-serif" fontSize="17" fontWeight="800" fill="#383D3B" letterSpacing="-0.03em">Scre</text>
                    <text x="36" y="24" fontFamily="var(--font-display), 'Inter', sans-serif" fontSize="26" fontWeight="800" fill="#61A229">@</text>
                    <g transform="translate(34, 4) scale(0.042)" fill="#000000">
                      <path d="M446.53 97.43C439.67 60.23 407.19 32 368 32c-39.23 0-71.72 28.29-78.54 65.54C126.75 112.96-.5 250.12 0 416.98.11 451.9 29.08 480 64 480h304c8.84 0 16-7.16 16-16 0-17.67-14.33-32-32-32h-79.49l35.8-48.33c24.14-36.23 10.35-88.28-33.71-106.6-23.89-9.93-51.55-4.65-72.24 10.88l-32.76 24.59c-7.06 5.31-17.09 3.91-22.41-3.19-5.3-7.08-3.88-17.11 3.19-22.41l34.78-26.09c36.84-27.66 88.28-27.62 125.13 0 10.87 8.15 45.87 39.06 40.8 93.21L469.62 480H560c8.84 0 16-7.16 16-16 0-17.67-14.33-32-32-32h-53.63l-98.52-104.68 154.44-86.65A58.16 58.16 0 0 0 576 189.94c0-21.4-11.72-40.95-30.48-51.23-40.56-22.22-98.99-41.28-98.99-41.28zM368 136c-13.26 0-24-10.75-24-24 0-13.26 10.74-24 24-24 13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"/>
                    </g>
                    <text x="64" y="22" fontFamily="var(--font-display), 'Inter', sans-serif" fontSize="17" fontWeight="800" fill="#61A229" letterSpacing="-0.03em">mingfrog</text>
                  </svg>
                )
              },
              {
                name: 'Claude AI',
                logo: (
                  <svg width="100" height="32" viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Claude Handburst Icon */}
                    <g transform="translate(0, 4)" fill="#D27357">
                      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/>
                    </g>
                    {/* Text */}
                    <text x="28" y="22" fontFamily="'Georgia', serif" fontSize="18" fontWeight="700" fill="var(--black)">Claude</text>
                  </svg>
                )
              },
              {
                name: 'Notion',
                logo: (
                  <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Notion Icon */}
                    <g transform="translate(0, 4)" fill="var(--black)">
                      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
                    </g>
                    {/* Text */}
                    <text x="28" y="21" fontFamily="var(--font-display), 'Inter', sans-serif" fontSize="15" fontWeight="800" fill="var(--black)" letterSpacing="-0.02em">Notion</text>
                  </svg>
                )
              },
              {
                name: 'VS Code',
                logo: (
                  <svg width="36" height="36" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* VS Code blue icon only, centered inside the card */}
                    <path d="M198.8 33.6L113.7 100.4l-31.5-23.8L13.1 133.7c-3.1 4.5-3.1 10.5 0 15l69.1 57.1 31.5-23.8 85.1 66.8c6.6 5.2 16.3.5 16.3-7.9V41.5c0-8.4-9.7-13.1-16.3-7.9z" fill="#0066B3" />
                    <path d="M198.8 33.6l-85.1 66.8-40.2-30.4c-4.9-3.7-11.8-2.6-15.3 2.5L13.1 133.7c-3.1 4.5-3.1 10.5 0 15l45.1 61.2c3.5 5.1 10.4 6.2 15.3 2.5l40.2-30.4 85.1 66.8c6.6 5.2 16.3.5 16.3-7.9V41.5c0-8.4-9.7-13.1-16.3-7.9z" fill="#007ACC" />
                    <path d="M198.8 33.6L113.7 100.4l-42.5-32.1L13.1 133.7c-3.1 4.5-3.1 10.5 0 15l69.1 57.1 42.5-32.1 74.1 58.2c6.6 5.2 16.3.5 16.3-7.9V41.5c0-8.4-9.7-13.1-16.3-7.9z" fill="#1F9CF0" />
                    <path d="M198.8 41.5v173c0 8.4-9.7 13.1-16.3 7.9L71.2 125.6l111.3-87.1c6.6-5.2 16.3-.5 16.3 3z" fill="#3C9FEF" />
                  </svg>
                )
              },
              {
                name: 'PageSpeed Insights',
                logo: (
                  <svg width="150" height="32" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Speed dial gauge */}
                    <g transform="translate(4, 2)">
                      <circle cx="14" cy="14" r="11" stroke="#E2E8F0" strokeWidth="2" />
                      <path d="M14 3a11 11 0 0 1 11 11" stroke="#4285F4" strokeWidth="2.5" />
                      <path d="M25 14a11 11 0 0 1-11 11" stroke="#34A853" strokeWidth="2.5" />
                      <path d="M14 25a11 11 0 0 1-11-11" stroke="#FBBC05" strokeWidth="2.5" />
                      <path d="M3 14A11 11 0 0 1 14 3" stroke="#EA4335" strokeWidth="2.5" />
                      <path d="M14 14l6-6" stroke="var(--black)" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="14" cy="14" r="1.5" fill="var(--black)" />
                    </g>
                    {/* Text */}
                    <text x="36" y="15" fontFamily="var(--font-body)" fontSize="9" fontWeight="500" fill="#757575">Google</text>
                    <text x="36" y="27" fontFamily="var(--font-display)" fontSize="11" fontWeight="800" fill="var(--black)">PageSpeed</text>
                  </svg>
                )
              }
            ].map((tool, idx) => (
              <div key={idx} className="tool-item">
                <div className="tool-card">
                  {tool.logo}
                </div>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGY COMPARISON */}
      <section className="section section--dark" aria-labelledby="comparisonHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow eyebrow--light">Strategic Alignment</p>
            <h2 id="comparisonHeading" style={{ color: 'var(--ivory)', maxWidth: '20ch' }}>Traditional SEO vs. Semantic Strategy</h2>
            <p style={{ color: 'rgba(243,237,228,0.6)', maxWidth: '52ch', marginTop: 'var(--s3)' }}>
              See how modern semantic and AI-ready architecture outclasses outdated 2015-style keyword audits.
            </p>
          </div>

          <div style={{ overflowX: 'auto', marginTop: 'var(--s6)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(255,255,255,0.08)' }}>
              <thead>
                <tr style={{ background: '#122622', color: 'var(--ivory)' }}>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: 'bold', borderBottom: '2px solid var(--lime)' }}>Traditional SEO in Nepal</th>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: 'bold', borderLeft: '1px solid rgba(255,255,255,0.08)', borderBottom: '2px solid var(--lime)' }}>My Semantic &amp; AI Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ padding: '20px', color: 'rgba(243,237,228,0.6)' }}>Focuses on high-volume keywords and writing shallow blog posts around them.</td>
                  <td style={{ padding: '20px', borderLeft: '1px solid rgba(255,255,255,0.08)', color: 'var(--ivory)' }}>
                    <strong>Entity Mapping:</strong> Connects concepts and answers search intent to build complete topical authority.
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '20px', color: 'rgba(243,237,228,0.6)' }}>Relying solely on traditional search page rankings.</td>
                  <td style={{ padding: '20px', borderLeft: '1px solid rgba(255,255,255,0.08)', color: 'var(--ivory)' }}>
                    <strong>AI Engine Readiness:</strong> Formats schema structures to rank in ChatGPT Search, Gemini, and Perplexity answers.
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ padding: '20px', color: 'rgba(243,237,228,0.6)' }}>Uses generic PDF lists of errors for your developers to fix.</td>
                  <td style={{ padding: '20px', borderLeft: '1px solid rgba(255,255,255,0.08)', color: 'var(--ivory)' }}>
                    <strong>Direct Implementation:</strong> I go directly into the codebase to implement technical speed, schema, and React/Next.js fixes.
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '20px', color: 'rgba(243,237,228,0.6)' }}>Spam backlinks packages that trigger Google search manual penalties.</td>
                  <td style={{ padding: '20px', borderLeft: '1px solid rgba(255,255,255,0.08)', color: 'var(--ivory)' }}>
                    <strong>Authority Earning:</strong> Focus on E-E-A-T building, authoritative digital PR references, and linkable content assets.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CASE STUDIES CAROUSEL */}
      <CaseStudiesCarousel />

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* SERVICE PACKAGES & PRICING */}
      <section className="section" aria-labelledby="pricingHeading" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', margin: '0 auto var(--s8)' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>SEO Packages</p>
            <h2 id="pricingHeading">Transparent Pricing, Honest Results</h2>
            <p className="text-gray" style={{ maxWidth: '52ch', margin: 'var(--s3) auto 0' }}>
              Choose a strategic package built around actual business outcomes. All retainers operate on a month-to-month basis.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div className="service-card">
              <span className="cs-card__industry">NPR 25,000 / month</span>
              <h3 style={{ margin: 'var(--s2) 0', fontSize: '1.25rem' }}>Starter Package</h3>
              <p>Ideal for local businesses and professional service clinics looking to dominate neighborhood searches and Google Maps in Nepal.</p>
              <ul style={{ margin: 'var(--s3) 0', fontSize: '0.875rem', color: 'var(--gray)', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>✔ Google Business Profile Setup</li>
                <li style={{ marginBottom: '8px' }}>✔ Local Citation Building</li>
                <li style={{ marginBottom: '8px' }}>✔ 10-15 Target Entity Mapping</li>
                <li style={{ marginBottom: '8px' }}>✔ Monthly SEO Audit &amp; Performance Reports</li>
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ marginTop: 'auto', textAlign: 'center', width: '100%', display: 'block' }}>Get Started</Link>
            </div>

            <div className="service-card" style={{ borderColor: 'var(--lime-dark)', transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(31,27,26,0.08)' }}>
              <span className="cs-card__industry" style={{ color: 'var(--lime-dark)', fontWeight: 'bold' }}>NPR 45,000 / month (Recommended)</span>
              <h3 style={{ margin: 'var(--s2) 0', fontSize: '1.25rem' }}>Growth Package</h3>
              <p>Best for active E-commerce stores, travel companies, and scaling platforms targeting high-intent topic clusters in competitive spaces.</p>
              <ul style={{ margin: 'var(--s3) 0', fontSize: '0.875rem', color: 'var(--gray)', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>✔ Complete Topical Map blueprint</li>
                <li style={{ marginBottom: '8px' }}>✔ Semantic Content strategy &amp; brief building</li>
                <li style={{ marginBottom: '8px' }}>✔ Technical speed &amp; Core Web Vitals optimization</li>
                <li style={{ marginBottom: '8px' }}>✔ Strategic Link building outreach</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 'auto', textAlign: 'center', width: '100%', display: 'block' }}>Get Started</Link>
            </div>

            <div className="service-card">
              <span className="cs-card__industry">NPR 80,000 / month</span>
              <h3 style={{ margin: 'var(--s2) 0', fontSize: '1.25rem' }}>Enterprise / SaaS</h3>
              <p>For SaaS tech platforms and companies targeting highly competitive global markets demanding advanced AI search positioning.</p>
              <ul style={{ margin: 'var(--s3) 0', fontSize: '0.875rem', color: 'var(--gray)', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>✔ Generative Engine Optimization (GEO)</li>
                <li style={{ marginBottom: '8px' }}>✔ Direct codebase developer implementations</li>
                <li style={{ marginBottom: '8px' }}>✔ Product-led growth SEO mapping</li>
                <li style={{ marginBottom: '8px' }}>✔ Dedicated Slack channel &amp; weekly sync calls</li>
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ marginTop: 'auto', textAlign: 'center', width: '100%', display: 'block' }}>Get Started</Link>
            </div>

            <div className="service-card">
              <span className="cs-card__industry">NPR 150,000 / month</span>
              <h3 style={{ margin: 'var(--s2) 0', fontSize: '1.25rem' }}>Corporate / Elite</h3>
              <p>Built for large scale conglomerates, remittance platforms, banking networks, telecom grids, and hydropower operations in Nepal.</p>
              <ul style={{ margin: 'var(--s3) 0', fontSize: '0.875rem', color: 'var(--gray)', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>✔ Compliance &amp; Multi-Dept Reporting</li>
                <li style={{ marginBottom: '8px' }}>✔ Data Warehouse &amp; Analytics Integration</li>
                <li style={{ marginBottom: '8px' }}>✔ High Authority Digital PR Assets</li>
                <li style={{ marginBottom: '8px' }}>✔ Weekly Sync Meeting &amp; Dedicated Dev Team</li>
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ marginTop: 'auto', textAlign: 'center', width: '100%', display: 'block' }}>Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" aria-labelledby="faqHeading" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="faq-header">
            <div className="faq-pill" aria-hidden="true">FAQ</div>
            <h2 id="faqHeading" className="faq-title">
              Frequently Asked <span className="faq-title-accent">Questions</span>
            </h2>
            <p className="faq-subtitle">
              Everything you need to know about working with an SEO consultant in Nepal.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" aria-labelledby="ctaHeading">
        <div className="container">
          <p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>Ready to Scale?</p>
          <h2 id="ctaHeading">Let&apos;s build a search engine strategy that compounds.</h2>
          <p>Request a manual, zero-obligation SEO audit of your website to find immediate organic growth opportunities today.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary" id="ctaContactBtn">Book a Discovery Call</Link>
            <a href="https://wa.me/9779848149842" className="btn btn-outline-white" id="ctaWhatsappBtn" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
          </div>
        </div>
      </section>
    </main>
  )
}
