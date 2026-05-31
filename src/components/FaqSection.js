'use client'

import { useState } from 'react'

const faqData = {
  General: [
    {
      q: 'What exactly does an SEO consultant do?',
      a: 'An SEO consultant analyzes your website, identifies what\'s preventing you from ranking, and builds a strategy to fix it — covering technical health, content structure, entity optimization, and competitive positioning. I go beyond basic audits to build semantic content systems that work for both traditional and AI-powered search.',
    },
    {
      q: 'Do you work with businesses outside Nepal?',
      a: 'Yes — I work remotely with clients worldwide. All consultations, audits, and strategy sessions happen via video call, and all deliverables are shared digitally. Timezone differences are never a barrier.',
    },
    {
      q: 'How long does it take to see results from SEO?',
      a: 'Honest answer: most clients begin to see measurable improvements in search visibility within 3–6 months. Topical authority and AI search citation visibility typically builds over 6–12 months of consistent, strategic work. I set clear milestones so you always know where we stand.',
    },
    {
      q: 'What is AI Search Optimization and why does it matter?',
      a: 'AI Search Optimization structures your content so it gets cited in AI-generated answers from systems like ChatGPT, Perplexity, and Google\'s AI Overviews. As more users start discovery through AI, being cited in these responses is the new first-page ranking — and it requires a different approach than traditional SEO.',
    },
  ],
  Services: [
    {
      q: 'What does your SEO Audit include?',
      a: 'My SEO Audit covers technical health (crawlability, Core Web Vitals, indexation), content gap analysis, on-page signal review, internal linking structure, schema markup evaluation, and a competitive landscape scan — all delivered with a clear, prioritized action plan.',
    },
    {
      q: 'What is a Topical Map and do I need one?',
      a: 'A Topical Map is a strategic blueprint of every topic your brand should own — mapped by user intent, entity relationships, and search opportunity. If you\'re publishing content without a clear framework, you almost certainly need one. It becomes the foundation of everything you create.',
    },
    {
      q: 'Do you write content or just provide strategy?',
      a: 'Both. I can provide the strategic framework and content briefs for your team to execute, or I can develop the content directly depending on scope and budget. The approach is always tailored to your resources.',
    },
    {
      q: 'Do you offer ongoing retainers or one-time projects?',
      a: 'Both. I offer project-based engagements (audits, topical maps, strategy documents) as well as monthly retainers for ongoing SEO management, content strategy, and performance monitoring.',
    },
  ],
  Process: [
    {
      q: 'How do we get started working together?',
      a: 'Start with a free discovery call where I learn about your business, current SEO position, and goals. From there, I\'ll recommend the right engagement — whether that\'s a one-time audit, a topical map, or an ongoing retainer — and we move forward from there.',
    },
    {
      q: 'How do you measure and report on progress?',
      a: 'I track meaningful metrics — not just rankings, but topical coverage, organic traffic quality, E-E-A-T signals, and AI citation rates. You\'ll receive regular reports that explain what\'s working, what\'s next, and why it matters for your business.',
    },
    {
      q: 'How involved do I need to be in the process?',
      a: 'As involved as you want to be. Some clients prefer to be hands-on collaborators; others want to hand off the strategy entirely. I adapt to your working style and always keep you informed without overwhelming you.',
    },
  ],
  Results: [
    {
      q: 'What kind of results can I realistically expect?',
      a: 'Results depend on your site\'s current state, industry competitiveness, and how consistently the strategy is executed. Typical outcomes include significant increases in organic traffic, improved rankings across topic clusters, and measurable brand citations in AI search results within 6–12 months.',
    },
    {
      q: 'What makes your approach different from other SEO consultants?',
      a: 'My work is grounded in semantic SEO and entity-based optimization — not just keyword targeting. I build content systems designed to communicate expertise and context to both traditional search engines and AI-powered systems. The focus is always on lasting visibility, not quick wins.',
    },
    {
      q: 'Do you guarantee rankings or results?',
      a: 'No reputable SEO professional guarantees specific rankings — search engines are unpredictable. What I do guarantee is transparent, strategic work built on proven frameworks, honest reporting, and continuous refinement until we achieve your visibility goals.',
    },
  ],
}

/* Clean SVG icon — same one for every card, keeps it uniform */
function FaqIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

const categories = Object.keys(faqData)

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState('General')
  const [openIndex, setOpenIndex] = useState(0)

  const currentFaqs = faqData[activeTab]

  const handleTab = (cat) => {
    setActiveTab(cat)
    setOpenIndex(0)
  }

  return (
    <section className="faq-section" aria-labelledby="faqHeading">
      <div className="container">

        {/* Header */}
        <div className="faq-header">
          <div className="faq-pill" aria-hidden="true">Got Questions?</div>
          <h2 id="faqHeading" className="faq-title">
            Frequently Asked <span className="faq-title-accent">Questions</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know before working together.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="faq-tabs" role="tablist" aria-label="FAQ categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              className={`faq-tab${activeTab === cat ? ' faq-tab--active' : ''}`}
              onClick={() => handleTab(cat)}
              id={`faqTab${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="faq-accordion" role="tabpanel" aria-labelledby={`faqTab${activeTab}`}>
          {currentFaqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={`${activeTab}-${i}`} className={`faq-card${isOpen ? ' faq-card--open' : ''}`}>
                <button
                  className="faq-card__trigger"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  id={`faq-${activeTab}-${i}`}
                >
                  <span className="faq-card__icon" aria-hidden="true">
                    <FaqIcon />
                  </span>
                  <span className="faq-card__question">{faq.q}</span>
                  <span className="faq-card__chevron" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                    </svg>
                  </span>
                </button>
                <div className={`faq-card__body${isOpen ? ' faq-card__body--open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
