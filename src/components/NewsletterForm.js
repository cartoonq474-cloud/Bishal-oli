'use client'

export default function NewsletterForm() {
  return (
    <form
      style={{ display: 'flex', gap: 'var(--s2)', flexWrap: 'wrap', justifyContent: 'center' }}
      onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!') }}
    >
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email address"
        required
        style={{ flex: 1, minWidth: '240px', padding: '14px 16px', fontFamily: 'var(--font-body)', fontSize: '1rem', background: 'var(--ivory)', border: '1px solid var(--border)', borderRadius: '2px', outline: 'none' }}
      />
      <button type="submit" className="btn btn-primary" id="newsletterSubmitBtn">Subscribe</button>
    </form>
  )
}
