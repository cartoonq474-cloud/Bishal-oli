'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submit — replace with Formspree / Resend API route
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', background: 'var(--sage)', borderRadius: '4px' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--lime-dark)', margin: '0 auto 16px', display: 'block' }}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h3>Message sent!</h3>
        <p style={{ color: 'var(--gray)', marginTop: '8px' }}>I&apos;ll get back to you within 1–2 business days.</p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit} id="contactForm" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="contactName">Your Name</label>
          <input className="form-input" type="text" id="contactName" name="name" placeholder="John Smith" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contactEmail">Email Address</label>
          <input className="form-input" type="email" id="contactEmail" name="email" placeholder="john@company.com" required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contactService">What do you need help with?</label>
        <select className="form-select" id="contactService" name="service">
          <option value="">Select a service...</option>
          <option>SEO Audit</option>
          <option>Topical Map Creation</option>
          <option>AI Search Optimization</option>
          <option>Semantic SEO Strategy</option>
          <option>Content Strategy</option>
          <option>Technical SEO</option>
          <option>Monthly Retainer</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contactMessage">Tell me about your project</label>
        <textarea className="form-textarea" id="contactMessage" name="message" placeholder="Share what you're working on, your current challenges, and what you're hoping to achieve..." required />
      </div>
      <button type="submit" className="btn btn-primary" id="contactSubmitBtn" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
