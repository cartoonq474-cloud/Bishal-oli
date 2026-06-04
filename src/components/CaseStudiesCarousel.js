'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const caseStudies = [
  {
    id: 'ecommerce-store',
    image: '/ecommerce-dashboard.png',
    client: 'E-Commerce Store',
    description: 'Built a full topical authority framework that tripled organic sessions in under 6 months.',
    metrics: [
      { label: '+312% Organic Traffic' },
      { label: '#1 Rankings, 40+ Keywords' },
      { label: '+89% Organic Revenue' },
    ],
    industry: 'E-Commerce',
  },
  {
    id: 'saas-brand',
    image: '/saas-dashboard.png',
    client: 'SaaS Brand',
    description: 'Semantic SEO overhaul and AI search optimization resulting in consistent LLM citations.',
    metrics: [
      { label: '+163.7% Organic Traffic' },
      { label: '+371.1% Search Visibility' },
      { label: 'AI Citations in 3 LLMs' },
    ],
    industry: 'SaaS',
  },
  {
    id: 'travel-blog',
    image: '/travel-dashboard.png',
    client: 'Travel Publisher',
    description: 'Topical map & content architecture redesign that turned a stagnant blog into an authority site.',
    metrics: [
      { label: '+313.7% Organic Traffic' },
      { label: '+561.6% Search Visibility' },
      { label: '60+ Topic Clusters Owned' },
    ],
    industry: 'Travel',
  },
  {
    id: 'b2b-services',
    image: '/b2b-dashboard.png',
    client: 'B2B Services Firm',
    description: 'End-to-end SEO strategy from audit to implementation — doubling qualified lead flow.',
    metrics: [
      { label: '+195.8% Organic Traffic' },
      { label: '+98.0% Search Visibility' },
      { label: '+200% Organic Leads' },
    ],
    industry: 'Professional Services',
  },
]

export default function CaseStudiesCarousel() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir === 'next' ? 340 : -340, behavior: 'smooth' })
  }

  return (
    <section className="cs-section" aria-labelledby="csHeading">
      <div className="container">

        {/* Header */}
        <div className="cs-header">
          <div>
            <p className="eyebrow">Proven Results</p>
            <h2 id="csHeading" className="cs-title">
              Success You <span className="cs-title-accent">Can See</span>
            </h2>
            <p className="cs-subtitle">
              A glimpse into some of the most impactful SEO projects I&apos;ve worked on.
            </p>
          </div>
          <div className="cs-controls">
            <button className="cs-arrow" onClick={() => scroll('prev')} aria-label="Scroll left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
              </svg>
            </button>
            <button className="cs-arrow" onClick={() => scroll('next')} aria-label="Scroll right">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="cs-track" ref={trackRef}>
          {caseStudies.map((cs) => (
            <article key={cs.id} className="cs-card">
              {/* Image */}
              <div className="cs-card__img-wrap">
                <Image
                  src={cs.image}
                  alt={`${cs.client} SEO case study`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="300px"
                />
                {/* Overlay gradient */}
                <div className="cs-card__overlay" aria-hidden="true" />
                {/* Metric badges */}
                <div className="cs-card__badges">
                  {cs.metrics.map((m) => (
                    <span key={m.label} className="cs-badge">{m.label}</span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="cs-card__body">
                <span className="cs-card__industry">{cs.industry}</span>
                <h3 className="cs-card__client">{cs.client}</h3>
                <p className="cs-card__desc">{cs.description}</p>
              </div>
            </article>
          ))}

          {/* View All card */}
          <div className="cs-card cs-card--cta">
            <Link href="/case-studies" id="caseStudiesViewAll">
              <span className="cs-cta-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
              <span className="cs-cta-text">View All<br />Case Studies</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
