'use client'

import { useState } from 'react'

const faqData = {
  General: [
    {
      q: 'What makes you different from other SEO experts in Nepal?',
      a: 'Two major things: (1) I specialize in Semantic SEO and AI Search Optimization (GEO/AEO). While traditional SEOs in Nepal focus on basic keyword stuffing and link packages, I build entity-relationship maps and structure content to get cited in AI systems like ChatGPT, Perplexity, and Gemini. (2) I have a strong developer background, meaning I audit and implement technical fixes directly without developer bottlenecks.'
    },
    {
      q: 'Do you guarantee #1 rankings?',
      a: "No professional SEO expert can guarantee #1 rankings on Google. Search engine algorithms change continuously and search platforms are owned by third parties. However, I guarantee complete transparency, clean strategic execution based on entity authority, and a focus on commercial metrics that drive actual revenue and citations."
    },
    {
      q: 'Do you handle both local and global SEO?',
      a: 'Yes. I handle local SEO campaigns (dominating the Google Map pack and localized search queries in Kathmandu, Pokhara, Biratnagar, etc.) as well as highly competitive global SEO campaigns (targeting international markets for SaaS startups, travel directories, and large-scale E-commerce brands).'
    },
    {
      q: 'Do you only work with businesses in Nepal?',
      a: 'No. While I am based in Nepal and help local businesses (hotels, trekking agencies, startups) dominate search, I work with clients globally, including tech companies and e-commerce stores in Australia, the US, and Europe. SEO is borderless, and remote collaboration is seamless.'
    },
    {
      q: 'How long does it take to see results?',
      a: 'Typically, you will see initial improvements in organic visibility and search impressions within 3 months. Significant revenue, rankings for competitive keywords, and brand citations in AI answers usually build over 6 to 12 months of consistent strategy execution.'
    }
  ],
  Pricing: [
    {
      q: 'How much do your SEO services cost in Nepal?',
      a: 'I offer four clear packages tailored to your business scale: Starter (NPR 25,000/mo) for local companies, Growth (NPR 45,000/mo) for e-commerce and scaling brands, Enterprise (NPR 80,000/mo) for advanced SaaS, and Corporate / Elite (NPR 150,000/mo) for enterprise networks. Custom consulting is also available.'
    },
    {
      q: 'Do you require a long-term contract?',
      a: 'No. All my services are structured as month-to-month retainers. SEO is a continuous process, but I believe in retaining clients through verifiable growth and transparency rather than locking them into long-term contracts.'
    },
    {
      q: 'What is included in the Free SEO Audit?',
      a: "The free audit is a manual overview of your website's current crawlability, indexation status, speed, core semantic structure, and immediate organic ranking opportunities. It comes with a 15-minute video walkthrough."
    }
  ],
  Process: [
    {
      q: 'Can you implement technical SEO fixes yourself?',
      a: 'Yes! Unlike consultants who just send a PDF audit list of things for your developer to do, I can access your codebase (WordPress, Shopify, Next.js, Webflow, etc.) and directly implement schema graphs, page speed optimization, robots.txt, and Core Web Vitals fixes.'
    },
    {
      q: 'How do you measure and report progress?',
      a: 'Every month you receive a clear, commercial-focused report detailing organic search impressions growth, clicks/traffic, conversions, and citations earned in AI search engines. I connect SEO metrics directly to your business outcomes.'
    },
    {
      q: 'How does AI Search / GEO optimization work?',
      a: 'Generative Engine Optimization (GEO) involves structuring content with Schema JSON-LD graphs, optimizing entity associations, writing clear and direct answers for LLM ingestion, and earning citations on authoritative context sources that AI models index.'
    },
    {
      q: 'How do you handle content creation and link building?',
      a: 'I establish a topical map framework and write semantic briefs for your writers. If needed, I can provide copywriters. For authority building, I reject link farms; instead, we build high-quality linkable content assets and perform clean digital PR outreach.'
    }
  ]
}

function FaqIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

export default function FaqAccordion() {
  const [activeTab, setActiveTab] = useState('General')
  const [openIndex, setOpenIndex] = useState(0)

  const categories = Object.keys(faqData)
  const currentFaqs = faqData[activeTab]

  return (
    <div className="faq-accordion-wrap">
      {/* Category Tabs */}
      <div className="faq-tabs" role="tablist" aria-label="FAQ categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeTab === cat}
            className={`faq-tab${activeTab === cat ? ' faq-tab--active' : ''}`}
            onClick={() => {
              setActiveTab(cat)
              setOpenIndex(0)
            }}
            id={`faqTab-${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="faq-accordion" role="tabpanel" aria-labelledby={`faqTab-${activeTab}`}>
        {currentFaqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div key={`${activeTab}-${i}`} className={`faq-card${isOpen ? ' faq-card--open' : ''}`}>
              <button
                className="faq-card__trigger"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                id={`faq-trigger-${activeTab}-${i}`}
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
  )
}
