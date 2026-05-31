'use client'

import { useEffect, useRef } from 'react'

function Counter({ target, suffix = '' }) {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const duration = 1800
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.round(eased * target) + suffix
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function AnimatedCounters() {
  return (
    <div className="stats-row">
      <div className="stat-item">
        <div className="stat-num"><Counter target={40} suffix="+" /></div>
        <div className="stat-label">Websites Optimized</div>
      </div>
      <div className="stat-item">
        <div className="stat-num"><Counter target={3} suffix="+" /></div>
        <div className="stat-label">Years of SEO Practice</div>
      </div>
      <div className="stat-item">
        <div className="stat-num"><Counter target={100} suffix="%" /></div>
        <div className="stat-label">White-Hat, Ethical Methods</div>
      </div>
      <div className="stat-item">
        <div className="stat-num"><Counter target={3} suffix="x" /></div>
        <div className="stat-label">Avg. Traffic Growth</div>
      </div>
    </div>
  )
}
