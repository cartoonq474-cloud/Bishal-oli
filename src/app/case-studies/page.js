import Link from 'next/link'

export const metadata = {
  title: 'Case Studies — Bishal Oli',
  description: 'Real-world SEO results: how Bishal Oli helped businesses grow organic traffic through semantic SEO, topical authority, and AI search optimization.',
  alternates: { canonical: 'https://bishaloli.com/case-studies/' },
}

const cases = [
  { tag: 'Semantic SEO', title: 'E-Commerce Site: 3x Organic Traffic in 8 Months', challenge: 'A mid-size e-commerce store was generating traffic but struggling with high bounce rates and poor conversion from organic search. Rankings were inconsistent and content had no strategic structure.', strategy: 'Conducted a full semantic SEO audit and rebuilt the content architecture around product category intent clusters. Implemented entity optimization and structured data across all category and product pages.', results: [{ n: '+312%', l: 'Organic Traffic' }, { n: '-38%', l: 'Bounce Rate' }, { n: '+89%', l: 'Organic Revenue' }] },
  { tag: 'AI Search Optimization', title: 'B2B SaaS: First Citations in AI-Generated Answers', challenge: 'A B2B SaaS company was completely absent from AI-generated answers despite ranking on page one for several target keywords. Competitors were being cited regularly in ChatGPT and Perplexity responses.', strategy: 'Restructured key pillar pages with entity-dense, citation-ready content formats. Implemented FAQ schema, added authoritative source citations, and built a comprehensive knowledge base that AI systems could reference.', results: [{ n: '15+', l: 'AI Citations Earned' }, { n: '+67%', l: 'Brand Search Volume' }, { n: '+140%', l: 'Inbound Lead Quality' }] },
  { tag: 'Topical Authority', title: 'Content Publisher: Topical Authority in 6 Months', challenge: 'A content publisher in the personal finance space had published hundreds of articles but was stuck in the "sandbox" — good content with poor rankings due to lack of topical cohesion and authority signals.', strategy: 'Built a comprehensive topical map covering the full personal finance subject area. Identified and filled critical content gaps, restructured internal linking around topic clusters, and developed a content sequencing plan.', results: [{ n: '+220%', l: 'Indexed Pages Ranking' }, { n: '4.2x', l: 'Featured Snippets' }, { n: '+180%', l: 'Organic Sessions' }] },
]

export default function CaseStudies() {
  return (
    <main>
      <section className="page-hero" aria-labelledby="caseStudiesHeading">
        <div className="container">
          <p className="page-hero__label">Proof of Work</p>
          <h1 id="caseStudiesHeading">Real results. Real strategies.</h1>
          <p>These case studies show how I approach SEO challenges — the thinking behind the strategy, not just the numbers. Every project is different, but the principles are consistent.</p>
        </div>
      </section>

      <section className="section" aria-label="Case studies">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s12)' }}>
            {cases.map((c) => (
              <article key={c.title} style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--s8)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s3)', marginBottom: 'var(--s4)' }}>
                  <span style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--lime)', color: 'var(--black)', padding: '4px 10px', borderRadius: '2px' }}>{c.tag}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', marginBottom: 'var(--s8)' }}>{c.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--s4)', marginBottom: 'var(--s8)' }}>
                  {c.results.map(r => (
                    <div key={r.l} style={{ textAlign: 'center', background: 'var(--black)', padding: 'var(--s4)', borderRadius: '2px' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--lime)', lineHeight: 1 }}>{r.n}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(243,237,228,0.6)', marginTop: '6px' }}>{r.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s6)' }}>
                  <div>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lime-dark)', marginBottom: 'var(--s2)' }}>The Challenge</p>
                    <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>{c.challenge}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lime-dark)', marginBottom: 'var(--s2)' }}>The Strategy</p>
                    <p style={{ color: 'var(--gray)', lineHeight: 1.7 }}>{c.strategy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="caseCtaHeading">
        <div className="container">
          <p className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>Your Turn</p>
          <h2 id="caseCtaHeading">Ready to write your own case study?</h2>
          <p>Let's talk about what measurable results could look like for your business.</p>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary" id="caseCtaBtn">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
