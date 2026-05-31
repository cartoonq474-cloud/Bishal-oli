'use client'

import { useRef } from 'react'
import Link from 'next/link'

import { posts as relatedPosts } from '@/data/posts'

export default function RelatedReads() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('.related-card')
    if (card) {
      const cardWidth = card.offsetWidth
      const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 32
      const scrollAmount = cardWidth + gap
      trackRef.current.scrollBy({ left: dir === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' })
    } else {
      trackRef.current.scrollBy({ left: dir === 'next' ? 340 : -340, behavior: 'smooth' })
    }
  }

  return (
    <section className="related-reads" aria-labelledby="relatedHeading">
      <div className="container">
        <header className="related-reads__header">
          <button className="related-reads__arrow" onClick={() => scroll('prev')} aria-label="Previous posts">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
            </svg>
          </button>
          
          <h2 id="relatedHeading" className="related-reads__title">Related Reads to Boost Your SEO Knowledge</h2>
          
          <button className="related-reads__arrow" onClick={() => scroll('next')} aria-label="Next posts">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
            </svg>
          </button>
        </header>

        <div className="related-reads__grid" ref={trackRef}>
          {relatedPosts.map((post) => (
            <article key={post.id} className="related-card">
              <div className="related-card__img-wrap">
                <div className="related-card__logo">Bishal Oli</div>
                <div className="related-card__overlay-title">{post.overlayTitle}</div>
                <span className="related-card__tag">{post.tag}</span>
              </div>
              <h3 className="related-card__title">
                <Link href={post.href}>{post.title}</Link>
              </h3>
              <div className="related-card__date">{post.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
