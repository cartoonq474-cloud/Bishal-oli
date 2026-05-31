import Image from 'next/image'
import Link from 'next/link'
import FaqSection from '@/components/FaqSection'

export const metadata = {
  title: 'About Bishal Oli — SEO & AI Search Strategist',
  description: 'Learn about Bishal Oli — SEO strategist and AI search optimization specialist helping businesses earn real search visibility through semantic SEO and topical authority.',
  alternates: { canonical: 'https://bishaloli.com/about/' },
}

const iconChart = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>;
const iconGlobe = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;
const iconBrain = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45c.019-.104.039-.208.06-.311m-2.7-2.699a15.2 15.2 0 01-1.077 1.076M14.5 10.5c.386.386.386 1.014 0 1.4s-1.014.386-1.4 0-.386-1.014 0-1.4 1.014-.386 1.4 0z" /></svg>;
const iconSparkles = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>;
const iconStack = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}><path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>;
const iconCode = <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 24, height: 24}}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>;

export default function About() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="aboutHeading">
        <div className="container">
          <p className="page-hero__label">About Me</p>
          <h1 id="aboutHeading">I help brands earn visibility they actually deserve.</h1>
          <p>I'm Bishal Oli, an SEO strategist and AI search optimization specialist. I work with businesses and content teams who want to build real search visibility — not gaming algorithms, but earning genuine authority.</p>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="section" aria-label="My story">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__photo">
              <Image src="/bishal-oli.png" alt="Bishal Oli — SEO Strategist" width={420} height={520} />
            </div>
            <div>
              <p className="eyebrow">My Story</p>
              <h2 style={{ maxWidth: '14ch', marginBottom: 'var(--s4)' }}>How I got here.</h2>
              <p style={{ marginBottom: 'var(--s4)' }}>I came to SEO through curiosity — trying to understand why some websites get found and others don't. What started as a technical interest became a professional focus when I realized that most SEO advice was either surface-level or short-sighted.</p>
              <p style={{ marginBottom: 'var(--s4)' }}>Over the years, I've worked across niches — from local businesses and e-commerce to content publishers and professional services. Each project taught me something different about how search engines think, how users actually search, and how to build content systems that earn lasting trust.</p>
              <p style={{ marginBottom: 'var(--s6)' }}>Today, my work sits at the intersection of semantic SEO, AI search optimization, and content strategy. I'm not chasing algorithms — I'm building frameworks that work regardless of what Google updates next.</p>
              <div className="trust-row">
                {['Semantic SEO Expert', 'AI Search Optimization', 'E-E-A-T Practitioner', 'Topical Authority Builder', 'Technical SEO'].map(b => (
                  <div key={b} className="trust-badge"><span>✓</span><span>{b}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section--dark" aria-labelledby="philosophyHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow eyebrow--light">How I Think</p>
            <h2 id="philosophyHeading" style={{ color: 'var(--ivory)', maxWidth: '14ch' }}>My philosophy on search.</h2>
          </div>
          <div className="about-values">
            {[
              { title: 'Search is about intent, not keywords.', text: 'Every search query represents a human need. My job is to create content that genuinely serves that need — structured in a way that search engines can understand and trust.' },
              { title: 'Authority is earned, not engineered.', text: 'Topical authority comes from demonstrating real expertise across a subject area — not from tricks. I build content ecosystems that make your depth of knowledge visible.' },
              { title: 'AI search is a new kind of visibility.', text: 'AI-powered search systems surface information differently. I help brands structure their content so it gets cited in AI answers — not just ranked in traditional results.' },
              { title: 'Long-term beats short-term, always.', text: "I don't chase quick wins that fade after the next algorithm update. Every strategy I build is designed to compound — growing stronger with time, not more fragile." },
            ].map(v => (
              <div key={v.title} className="value-card">
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section" aria-labelledby="credentialsHeading">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Experience & Credentials</p>
            <h2 id="credentialsHeading" style={{ maxWidth: '14ch' }}>What I've built and learned.</h2>
          </div>
          <div className="services-grid">
            {[
              { icon: iconChart, title: '3+ Years in SEO', text: 'Practical, hands-on experience across multiple industries — building strategies that have delivered measurable, lasting improvements in organic visibility.' },
              { icon: iconGlobe, title: '40+ Websites Optimized', text: 'From local business sites to content publishers and e-commerce platforms. Each project added new dimensions to how I approach search strategy.' },
              { icon: iconBrain, title: 'Semantic SEO Focus', text: 'Deep specialization in entity-based optimization, knowledge graph strategy, and semantic content structure — the foundation of modern search.' },
              { icon: iconSparkles, title: 'AI Search Pioneer', text: 'Early mover in AI search optimization — understanding how LLM-powered systems process, trust, and cite information to build visibility in this new search landscape.' },
              { icon: iconStack, title: 'Content Architecture', text: 'Designed topical authority frameworks and content hierarchies that enable brands to demonstrate comprehensive expertise across their subject areas.' },
              { icon: iconCode, title: 'Technical SEO Proficiency', text: 'Comfortable with Core Web Vitals, structured data implementation, crawl optimization, and the technical foundations that make content discoverable.' },
            ].map(c => (
              <div key={c.title} className="service-card">
                <div className="service-card__icon" aria-hidden="true">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* CTA */}
      <section className="cta-section" aria-labelledby="aboutCtaHeading">
        <div className="container">
          <p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>Let's Work Together</p>
          <h2 id="aboutCtaHeading">Ready to build a search strategy that lasts?</h2>
          <p>If you're looking for an SEO partner who thinks in systems, not shortcuts — let's talk.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary" id="aboutCtaBtn">Start a Conversation</Link>
            <Link href="/services" className="btn btn-outline-white" id="aboutServicesBtn">View My Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
