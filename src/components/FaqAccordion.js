'use client'

import { useState } from 'react'

const faqs = [
  { q: 'Do you work with businesses outside Nepal?', a: 'Yes — I work remotely with clients worldwide. All consultations, audits, and strategy sessions happen via video call, and all deliverables are shared digitally.' },
  { q: 'How long does it take to see results from SEO?', a: 'Honest answer: most clients begin to see measurable improvements in search visibility within 3–6 months. Topical authority and AI search citation visibility typically builds over 6–12 months of consistent, strategic work.' },
  { q: 'Do you write content or just provide strategy?', a: 'Both. I can provide the strategic framework and content briefs for your team to execute, or I can develop the content directly depending on scope and budget.' },
  { q: 'What makes your approach different from other SEO consultants?', a: 'My work is grounded in semantic SEO and entity-based optimization — not just keyword targeting. I build content systems designed to communicate expertise and context to both traditional search engines and AI-powered systems.' },
  { q: 'Do you offer ongoing retainers or one-time projects?', a: 'Both. I offer project-based engagements (audits, topical maps, strategy documents) as well as monthly retainers for ongoing SEO management, content strategy, and performance monitoring.' },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            {faq.q}
            <span className="faq-icon">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div className="faq-answer"><p>{faq.a}</p></div>}
        </div>
      ))}
    </div>
  )
}
