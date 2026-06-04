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
        'text': 'I offer three packages: Starter (NPR 25,000/mo) for local companies, Growth (NPR 45,000/mo) for e-commerce and scaling brands, and Enterprise (NPR 80,000/mo) for advanced SaaS and AI-ready technical implementations.'
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
            <p className="hero__eyebrow">Bishal Oli - SEO &amp; AI Search Optimization Expert</p>
            <h1 className="hero__headline" id="heroHeadline" style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)' }}>
              Rank on Google.<br />Dominate in AI Search.
            </h1>
            <p className="hero__body">
              Outdate the competition. Rebuild your search presence with modern Semantic SEO, Topical Authority, and Generative Engine Optimization (GEO) structured for ChatGPT, Gemini, and Perplexity citations.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="hero__btn-primary" id="heroCtaPrimary">Request Free SEO Audit</Link>
              <Link href="/services" className="hero__btn-ghost" id="heroCtaSecondary">Explore Services</Link>
            </div>
            
            <div className="hero__trust" style={{ marginTop: 'var(--s4)' }}>
              <p className="hero__trust-label">Core Differentiators</p>
              <div className="hero__trust-row">
                <span>AI Search Engine Ready</span><span className="hero__trust-sep">·</span>
                <span>Semantic Entity Mapping</span><span className="hero__trust-sep">·</span>
                <span>Direct Code Execution</span>
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

      {/* WHAT MAKES ME DIFFERENT */}
      <section className="section" aria-labelledby="differentiatorsHeading" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Why Work With Me</p>
            <h2 id="differentiatorsHeading" style={{ maxWidth: '20ch' }}>SEO built for the future of search.</h2>
            <p className="text-gray" style={{ maxWidth: '52ch', marginTop: 'var(--s3)' }}>
              Traditional SEO agencies in Nepal rely on keyword density and link farms. My strategy is built on search meaning, structured schema graphs, and LLM readability.
            </p>
          </div>

          <div className="pillars-grid">
            {[
              {
                n: '01',
                title: 'Generative Engine Ready',
                text: 'Optimizing your content structure so it gets cited directly as the trusted source in AI-generated answers (ChatGPT, Perplexity, Google AI Overviews).',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10" /><circle cx="19" cy="5" r="3" fill="currentColor" stroke="none" /></svg>
              },
              {
                n: '02',
                title: 'Semantic & Entity Focus',
                text: 'Mapping search intent to concepts and entities rather than plain keywords. We build search relevance Google\'s BERT and MUM algorithms understand.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><line x1="12" y1="7" x2="5" y2="17" /><line x1="12" y1="7" x2="19" y2="17" /></svg>
              },
              {
                n: '03',
                title: 'Developer Implementation',
                text: 'No wait times or back-and-forth. With a solid frontend development background, I implement schema graphs, speed fixes, and code changes myself.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
              },
              {
                n: '04',
                title: 'Verifiable Metrics',
                text: 'Real-time performance tracking focused on conversions, lead generation, and organic revenue growth — not vanity keyword charts.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
              }
            ].map((p) => (
              <div key={p.n} className="pillar">
                <div className="pillar-num">{p.n}</div>
                <div className="pillar-icon" aria-hidden="true">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
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

          <div className="services-grid">
            <div className="service-card">
              <span className="cs-card__industry">NPR 25,000 / month</span>
              <h3 style={{ margin: 'var(--s2) 0', fontSize: '1.25rem' }}>Starter Package</h3>
              <p>Ideal for local businesses and professional service clinics looking to dominate neighborhood searches and Google Maps in Nepal.</p>
              <ul style={{ margin: 'var(--s3) 0', fontSize: '0.875rem', color: 'var(--gray)', lineStyleType: 'none', padding: 0 }}>
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
              <ul style={{ margin: 'var(--s3) 0', fontSize: '0.875rem', color: 'var(--gray)', lineStyleType: 'none', padding: 0 }}>
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
              <ul style={{ margin: 'var(--s3) 0', fontSize: '0.875rem', color: 'var(--gray)', lineStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}>✔ Generative Engine Optimization (GEO)</li>
                <li style={{ marginBottom: '8px' }}>✔ Direct codebase developer implementations</li>
                <li style={{ marginBottom: '8px' }}>✔ Product-led growth SEO mapping</li>
                <li style={{ marginBottom: '8px' }}>✔ Dedicated Slack channel &amp; weekly sync calls</li>
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
