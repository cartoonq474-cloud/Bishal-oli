'use client'
import { useState } from 'react'

export default function ReadMoreText({ initialText, moreText }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {initialText}
      {!expanded ? (
        <>
          ... <button onClick={() => setExpanded(true)} className="read-more-btn">
            See More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </>
      ) : (
        <>
          {' '}{moreText}
          <button onClick={() => setExpanded(false)} className="read-more-btn" aria-label="Show less" style={{ marginLeft: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        </>
      )}
    </>
  )
}
