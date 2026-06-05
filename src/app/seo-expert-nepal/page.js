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
