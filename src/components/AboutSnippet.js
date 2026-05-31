import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  {
    title: 'Experience You Can Trust',
    desc: "3+ years building SEO strategies across e-commerce, SaaS, travel, and professional services — every project sharpened my understanding of how search actually works.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: 'Results You Can See',
    desc: "Organic traffic growth, topical authority gains, and AI citation rates — not vanity metrics. Every engagement ends with data you can point to.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    title: 'Semantic & AI-Ready',
    desc: "Entity-based content systems that communicate your expertise to both traditional search engines and the new generation of AI-powered discovery tools.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: 'Transparent Collaboration',
    desc: "You always know what I'm doing and why. Clear communication, honest timelines, and regular reporting — no black-box strategies.",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

const stats = [
  { value: '3+', label: 'Years of SEO' },
  { value: '40+', label: 'Sites Optimized' },
  { value: '3×', label: 'Avg. Traffic Growth' },
]

export default function AboutSnippet() {
  return (
    <div className="about-snippet">

      {/* ── Banner ────────────────────────────────── */}
      <section className="as-banner" aria-labelledby="asHeading">
        <div className="container as-banner__inner">

          {/* Photo column */}
          <div className="as-photo-col">
            <div className="as-photo-frame">
              <Image
                src="/bishal-oli.png"
                alt="Bishal Oli — SEO Strategist"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                sizes="(max-width: 768px) 100vw, 460px"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="as-badge" aria-hidden="true">
              <span className="as-badge__dot" />
              Available for New Projects
            </div>
          </div>

          {/* Content column */}
          <div className="as-content-col">
            <p className="as-eyebrow">
              <span className="as-eyebrow__line" />
              About Me
            </p>

            <h2 id="asHeading" className="as-heading">
              I help brands earn real visibility in search —{' '}
              <span className="as-accent">the&nbsp;right&nbsp;way.</span>
            </h2>

            <p className="as-body">
              I&apos;m Bishal Oli, an SEO strategist and AI search optimization specialist based in Nepal, working with clients globally. I combine semantic SEO, topical authority frameworks, and AI-readiness strategies to build search visibility that compounds over time.
            </p>

            {/* Mini stats */}
            <div className="as-stats">
              {stats.map((s) => (
                <div key={s.label} className="as-stat">
                  <span className="as-stat__value">{s.value}</span>
                  <span className="as-stat__label">{s.label}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="as-btn" id="aboutSnippetBtn">
              More About Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* ── Value Pillars ────────────────────────── */}
      <section className="as-pillars" aria-label="Why work with Bishal Oli">
        <div className="container">
          <div className="as-pillars__grid">
            {pillars.map((p) => (
              <div key={p.title} className="as-pillar">
                <div className="as-pillar__icon" aria-hidden="true">
                  {p.svg}
                </div>
                <h3 className="as-pillar__title">{p.title}</h3>
                <p className="as-pillar__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
