'use client'

import { useState, useRef } from 'react'

const videoReviews = [
  { date: '12 Jan', name: 'Ramesh Sharma', initials: 'RS', bg: 'linear-gradient(160deg,#1e3d2f 0%,#0d1f18 100%)', accent: '#2d5a40' },
  { date: '3 Mar', name: 'Priya Thapa', initials: 'PT', bg: 'linear-gradient(160deg,#1a2e3d 0%,#0d1822 100%)', accent: '#1e3a52' },
  { date: '17 May', name: 'James Wilson', initials: 'JW', bg: 'linear-gradient(160deg,#2d3a1e 0%,#18200d 100%)', accent: '#3d5228' },
  { date: '8 Aug', name: 'Anita Karki', initials: 'AK', bg: 'linear-gradient(160deg,#3a2414 0%,#201408 100%)', accent: '#522e14' },
  { date: '21 Sep', name: 'David Chen', initials: 'DC', bg: 'linear-gradient(160deg,#2a1e3d 0%,#160d22 100%)', accent: '#3d2852' },
  { date: '5 Nov', name: 'Sofia Martinez', initials: 'SM', bg: 'linear-gradient(160deg,#3d1e1e 0%,#220d0d 100%)', accent: '#522828' },
]

const textReviews = [
  { name: 'Ramesh Sharma', role: 'E-Commerce Owner', rating: 5.0, initials: 'RS', color: '#BCD424', text: 'Bishal completely transformed our organic traffic. Within 4 months we saw a 3× increase in search visibility. The topical map he created became the backbone of our entire content strategy.' },
  { name: 'Priya Thapa', role: 'SaaS Founder', rating: 4.9, initials: 'PT', color: '#4A90D9', text: "We were invisible in AI search results. After Bishal's optimization work, we started getting cited in ChatGPT and Perplexity responses. Our brand awareness has grown significantly." },
  { name: 'James Wilson', role: 'Content Publisher', rating: 5.0, initials: 'JW', color: '#E87040', text: "Bishal's semantic SEO approach is unlike anything I've seen. He doesn't chase quick wins — he builds real authority. Our site now ranks for topic clusters we hadn't even considered." },
  { name: 'Anita Karki', role: 'Local Business Owner', rating: 4.8, initials: 'AK', color: '#9B59B6', text: 'I was skeptical about SEO at first, but Bishal explained everything clearly and delivered real results. Our Google visibility doubled and we get consistent inquiries from organic search.' },
  { name: 'David Chen', role: 'B2B Service Provider', rating: 5.0, initials: 'DC', color: '#27AE60', text: 'The comprehensive SEO audit revealed issues we never knew existed. Bishal fixed them systematically and our rankings improved across every target keyword. Exceptional strategic thinking.' },
  { name: 'Sofia Martinez', role: 'Travel Blogger', rating: 4.9, initials: 'SM', color: '#E74C3C', text: 'My blog was stuck in neutral for years. Bishal built out a complete topical authority framework and now I rank for entire topic clusters. Organic traffic is up 180% in six months.' },
]

function ArrowBtn({ dir, onClick, disabled }) {
  return (
    <button
      className={`scroll-arrow scroll-arrow--${dir}${disabled ? ' disabled' : ''}`}
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Scroll left' : 'Scroll right'}
      disabled={disabled}
    >
      {dir === 'prev' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
      )}
    </button>
  )
}

function useScroll(cardWidth = 280, gap = 24) {
  const ref = useRef(null)
  const scroll = (dir) => {
    if (!ref.current) return
    const amount = (cardWidth + gap) * 2
    ref.current.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
  }
  return { ref, scroll }
}

export default function TestimonialsSection() {
  const [tab, setTab] = useState('text')
  const { ref: videoRef, scroll: scrollVideo } = useScroll(220, 16)
  const { ref: textRef, scroll: scrollText } = useScroll(340, 16)

  return (
    <section className="testimonials-section" aria-labelledby="testimonialsHeading">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 id="testimonialsHeading" className="testimonials-title">
            What My <span className="testimonials-highlight">Customers</span> Say?
          </h2>
          <p className="testimonials-subtitle">
            Real results from real clients. Here&apos;s what they have to say about working with me.
          </p>

          {/* Tab Toggle */}
          <div className="testimonials-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={tab === 'text'}
              className={`testimonials-tab${tab === 'text' ? ' active' : ''}`}
              onClick={() => setTab('text')}
              id="tabText"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
              Customer Reviews
            </button>
            <button
              role="tab"
              aria-selected={tab === 'video'}
              className={`testimonials-tab${tab === 'video' ? ' active' : ''}`}
              onClick={() => setTab('video')}
              id="tabVideo"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Video Reviews
            </button>
          </div>
        </div>

        {/* VIDEO REVIEWS — Horizontal Scroll */}
        {tab === 'video' && (
          <div className="carousel-wrapper" role="tabpanel" aria-labelledby="tabVideo">
            <div className="carousel-controls">
              <ArrowBtn dir="prev" onClick={() => scrollVideo('prev')} />
              <ArrowBtn dir="next" onClick={() => scrollVideo('next')} />
            </div>
            <div className="carousel-track" ref={videoRef}>
              {videoReviews.map((v) => (
                <div key={v.name} className="video-card">
                  <div className="video-card__thumb" style={{ background: v.bg }}>
                    <div className="video-card__avatar-bg" style={{ background: v.accent }}>
                      <span className="video-card__initials">{v.initials}</span>
                    </div>
                    <div className="video-card__date">{v.date}</div>
                    <button className="video-card__play" aria-label={`Play ${v.name}'s video review`}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div className="video-card__name-overlay">
                      <span>{v.name}</span>
                      <span className="video-card__verified">✓ Verified Client</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Fade edge hint */}
            <div className="carousel-fade-right" aria-hidden="true" />
          </div>
        )}

        {/* TEXT REVIEWS — Horizontal Scroll */}
        {tab === 'text' && (
          <div className="carousel-wrapper" role="tabpanel" aria-labelledby="tabText">
            <div className="carousel-controls">
              <ArrowBtn dir="prev" onClick={() => scrollText('prev')} />
              <ArrowBtn dir="next" onClick={() => scrollText('next')} />
            </div>
            <div className="carousel-track" ref={textRef}>
              {textReviews.map((r) => (
                <article key={r.name} className="text-review-card">
                  <div className="text-review-card__header">
                    <div className="tr-avatar" style={{ background: r.color }}>
                      {r.initials}
                    </div>
                    <div className="tr-meta">
                      <div className="tr-name">{r.name}</div>
                      <div className="tr-role">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#4A90D9" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Verified Customer
                      </div>
                    </div>
                    <div className="tr-rating-badge">
                      <span className="tr-rating-star">★</span>
                      <span className="tr-rating-num">{r.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="tr-text">{r.text}</p>
                </article>
              ))}
            </div>
            <div className="carousel-fade-right" aria-hidden="true" />
          </div>
        )}
      </div>
    </section>
  )
}
