import React from 'react';

export default function ComparisonSection() {
  const badItems = [
    "Rely on outdated, keyword-stuffed content tactics",
    "Chase vanity metrics without focusing on revenue",
    "Ignore semantic search and AI optimization (AIO)",
    "Provide vague reporting with zero strategic clarity",
    "Treat SEO as a one-time checklist, not a growing ecosystem",
  ];

  const goodItems = [
    "Build comprehensive Topical Authority for lasting rankings",
    "Optimize for modern LLMs and AI Search (ChatGPT, Perplexity)",
    "Focus strictly on ROI, conversions, and qualified lead flow",
    "Provide transparent, data-backed strategic reporting",
    "Implement scalable, long-term semantic content architectures",
  ];

  return (
    <section className="section comparison-section" aria-labelledby="compareHeading">
      <div className="container">
        <div className="comparison-header">
          <h2 id="compareHeading" className="comparison-title">Why I Stand Out</h2>
          <p className="comparison-subtitle">
            Here's how I deliver more value, clarity, and results compared to typical service providers. See why choosing my approach makes the difference.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Bad Card */}
          <div className="compare-card compare-card--bad">
            <h3 className="compare-card-title text-gray">
              Other SEOs
            </h3>
            <ul className="compare-list">
              {badItems.map((item, i) => (
                <li key={i} className="compare-item">
                  <span className="compare-item-icon compare-item-icon--bad" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6M9 9l6 6" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Good Card */}
          <div className="compare-card compare-card--good">
            <h3 className="compare-card-title text-ivory" style={{ color: '#fff' }}>
              <span className="compare-item-icon--good" style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </span>
              Bishal Oli
            </h3>
            <ul className="compare-list">
              {goodItems.map((item, i) => (
                <li key={i} className="compare-item" style={{ color: '#fff' }}>
                  <span className="compare-item-icon compare-item-icon--good" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
