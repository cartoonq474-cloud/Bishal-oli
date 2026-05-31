import Link from 'next/link'
import FaqSection from '@/components/FaqSection'

export const metadata = {
  title: 'SEO Services — Bishal Oli',
  description: 'Explore Bishal Oli\'s SEO services: SEO audits, semantic SEO strategy, AI search optimization, topical mapping, content strategy, and technical SEO.',
  alternates: { canonical: 'https://bishaloli.com/services/' },
}

const services = [
  { id: 'audit', title: 'SEO Audit', deliverables: ['Technical SEO health check', 'Content gap analysis', 'On-page optimization review', 'Competitive landscape mapping', 'Actionable priority report'], text: 'A comprehensive review of your site\'s technical foundation, content quality, on-page signals, and competitive landscape. You get a clear, prioritized action plan — not a 200-page PDF you\'ll never read.' },
  { id: 'topical-map', title: 'Topical Map Creation', deliverables: ['Full topic cluster architecture', 'Intent-mapped keyword strategy', 'Entity relationship mapping', 'Content priority sequencing', 'Internal linking blueprint'], text: 'A strategic blueprint of every topic your brand should own — organized by user intent, entity relationships, and search opportunity. This becomes the foundation of everything you publish.' },
  { id: 'ai-search', title: 'AI Search Optimization', deliverables: ['AI visibility audit', 'Entity positioning strategy', 'Structured data implementation', 'Citation optimization', 'LLM content formatting'], text: 'Restructuring and repositioning your content to earn citations and visibility within AI-generated answers. As AI-powered search grows, being cited in these responses is the new first-page ranking.' },
  { id: 'semantic-seo', title: 'Semantic SEO Strategy', deliverables: ['Entity identification & mapping', 'Semantic content brief creation', 'Schema markup strategy', 'Knowledge panel optimization', 'Topical authority framework'], text: 'Moving beyond keywords to build entity-based content that demonstrates context, expertise, and topical depth. This is the foundation of how modern search engines understand and rank content.' },
  { id: 'content-strategy', title: 'Content Strategy', deliverables: ['Editorial calendar planning', 'Intent-matched content briefs', 'E-E-A-T signal strategy', 'Content refresh prioritization', 'Performance tracking framework'], text: 'A comprehensive editorial plan that aligns every piece of content with search intent, topical authority goals, and E-E-A-T signals — so every article moves you closer to recognized expertise.' },
  { id: 'technical-seo', title: 'Technical SEO', deliverables: ['Core Web Vitals audit & fix', 'Crawlability & indexation review', 'Schema markup implementation', 'Site architecture optimization', 'Mobile & speed optimization'], text: 'Addressing the structural issues that limit crawlability, indexation, Core Web Vitals, and overall search engine accessibility. Technical SEO is the foundation that all other work builds on.' },
  { id: 'off-page-seo', title: 'Off-Page SEO', deliverables: ['Digital PR & brand mentions', 'High-authority link prospecting', 'Guest post strategy & outreach', 'Unlinked brand mention reclamation', 'E-E-A-T authority building'], text: 'Building the external trust signals that search engines use to evaluate your site\'s authority and credibility. Off-page SEO goes beyond link building — it\'s about earning genuine recognition across the web through digital PR, strategic outreach, and brand entity strengthening.' },
  { id: 'retainer', title: 'Monthly SEO Retainer', deliverables: ['Ongoing strategy management', 'Monthly performance reporting', 'Content brief development', 'Technical monitoring', 'Regular strategy sessions'], text: 'For brands serious about long-term growth, a monthly retainer gives you ongoing access to strategic SEO support — keeping your strategy current, your content optimized, and your visibility growing.' },
]

export default function Services() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="servicesHeading">
        <div className="container">
          <p className="page-hero__label">What I Offer</p>
          <h1 id="servicesHeading">SEO services built around real outcomes.</h1>
          <p>Every engagement is tailored to where you are and where you need to go. No generic audits, no cookie-cutter templates — just honest, strategic work that moves the needle.</p>
        </div>
      </section>

      <section className="section" aria-label="Service offerings">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s8)' }}>
            {services.map((s, i) => (
              <div key={s.id} id={s.id} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s8)', alignItems: 'start', padding: 'var(--s8) 0', borderTop: '1px solid var(--border)' }}>
                <div>
                  <div style={{ marginBottom: 'var(--s4)' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--lime-dark)' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', marginBottom: 'var(--s4)' }}>{s.title}</h2>
                  <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: 'var(--s6)' }}>{s.text}</p>
                  <Link href="/contact" className="btn btn-primary" id={`service${s.id}Cta`}>Enquire About This</Link>
                </div>
                <div style={{ background: 'var(--sage)', padding: 'var(--s6)', borderRadius: '2px' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 'var(--s4)', color: 'var(--lime-dark)' }}>What&apos;s included</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {s.deliverables.map(d => (
                      <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9375rem' }}>
                        <span style={{ color: 'var(--lime-dark)', fontWeight: 700, flexShrink: 0 }}>✓</span>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      <section className="cta-section" aria-labelledby="servicesCtaHeading">
        <div className="container">
          <p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>Not Sure Where to Start?</p>
          <h2 id="servicesCtaHeading">Let's figure out what you need.</h2>
          <p>Book a free discovery call and I'll help you understand exactly what kind of SEO support will move the needle for your specific situation.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary" id="servicesCtaBtn">Book a Discovery Call</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
