"use client";

import { useState } from 'react';
import Image from 'next/image';

const stepsData = [
  {
    num: "01",
    tabName: "Discovery & Audit",
    title: "Discovery, Audit & Research",
    desc: "Every successful SEO campaign starts with understanding the business, market, competitors, and search landscape. I perform a comprehensive analysis to uncover opportunities, weaknesses, and growth potential.",
    subtitle: "What I Analyze",
    items: [
      "Technical SEO Audit",
      "Competitor Intelligence Analysis",
      "Keyword & Topic Research",
      "Search Intent Mapping",
      "Entity Research",
      "Current Rankings Review",
      "Content Audit",
      "Internal Linking Audit",
      "Search Console Analysis",
      "Topical Gap Analysis",
      "User Journey Analysis",
      "Conversion Funnel Review"
    ],
    image: "/seo-audit-dashboard.png",
    cta: "Request Free Audit & Kickstart Discovery"
  },
  {
    num: "02",
    tabName: "Strategy & Architecture",
    title: "Strategy & SEO Architecture",
    desc: "Based on research findings, I create a customized SEO strategy aligned with business goals, search demand, and revenue opportunities.",
    subtitle: "What I Create",
    items: [
      "SEO Growth Roadmap",
      "Semantic SEO Framework",
      "Topic Cluster Strategy",
      "Topical Authority Plan",
      "Content Hub Architecture",
      "Internal Link Strategy",
      "Entity Optimization Plan",
      "Technical SEO Roadmap",
      "AI Search Optimization Strategy",
      "KPI & Success Metrics",
      "Priority Action Framework"
    ],
    image: "/seo-strategy-mindmap.png",
    cta: "Build My Custom SEO Strategy"
  },
  {
    num: "03",
    tabName: "Implementation",
    title: "Implementation & Optimization",
    desc: "This is where strategy turns into execution. As both an SEO specialist and developer, I personally implement technical improvements, optimize content, and strengthen search visibility.",
    subtitle: "What I Implement",
    items: [
      "Technical SEO Fixes",
      "Core Web Vitals Optimization",
      "Schema Markup Implementation",
      "On-Page SEO Optimization",
      "Semantic SEO Enhancements",
      "Entity-Based Optimization",
      "Internal Link Optimization",
      "Content Creation & Optimization",
      "Crawl & Indexation Improvements",
      "Conversion Rate Optimization",
      "Digital PR & Authority Building",
      "Link Acquisition Strategy"
    ],
    image: "/seo-implementation-code.png",
    cta: "Start Optimizing My Website"
  },
  {
    num: "04",
    tabName: "Measure & Learn",
    title: "Measure & Learn",
    desc: "SEO decisions should be driven by real data, not assumptions. I continuously monitor performance, identify patterns, and uncover new growth opportunities.",
    subtitle: "What I Measure",
    items: [
      "Organic Traffic Growth",
      "Keyword Visibility",
      "AI Search Visibility",
      "Google AI Overview Presence",
      "Search Console Performance",
      "Conversion Tracking",
      "User Engagement Signals",
      "Revenue Attribution",
      "Content Performance",
      "Competitor Movements",
      "Technical Health Monitoring",
      "User Behavior Insights"
    ],
    image: "/seo-analytics-growth.png",
    cta: "Track My Search Visibility"
  },
  {
    num: "05",
    tabName: "Refine & Scale",
    title: "Refine & Scale",
    desc: "SEO is an ongoing growth system. Once data reveals what works, I refine successful strategies, eliminate inefficiencies, and scale winning initiatives for long-term growth.",
    subtitle: "How I Scale Growth",
    items: [
      "Content Expansion",
      "Topical Authority Development",
      "Advanced Internal Linking",
      "Entity & Brand Strengthening",
      "High-Performing Content Scaling",
      "New Opportunity Identification",
      "Conversion Optimization",
      "Search Demand Expansion",
      "Market Share Growth",
      "Continuous SEO Testing",
      "Quarterly Strategy Reviews",
      "Long-Term Organic Growth Planning"
    ],
    image: "/seo-scaling-roadmap.png",
    cta: "Scale My Search Rankings"
  }
];

export default function SeoProcess() {
  const [activeTab, setActiveTab] = useState(0);
  const currentStep = stepsData[activeTab];

  return (
    <section className="process-section" id="seo-process" aria-labelledby="processHeading">
      <div className="container">
        {/* Section Header */}
        <div className="process-badge-wrap">
          <span className="process-badge">Methodology</span>
        </div>
        <h2 className="process-title" id="processHeading">
          My SEO Process – How I do SEO for Businesses <span style={{ color: 'var(--lime)' }}>to Rank?</span>
        </h2>
        <p className="process-subtitle">
          Successful search engine optimization is not about tricks or quick shortcuts. It is a systematic, data-driven cycle of deep market research, custom semantic architecture, technical implementation, rigorous measurement, and continuous scaling designed to compound organic growth over time.
        </p>

        {/* Quote overlay from screenshot theme */}
        <p className="process-quote">
          &ldquo;True organic growth requires research, strategy, execution, measurement, and continuous optimization rather than quick fixes.&rdquo;
        </p>

        {/* Tabbed Layout Card Container */}
        <div className="process-card">
          {/* Left Side: Vertical Tab List */}
          <div className="process-tabs-list" role="tablist" aria-label="SEO Process Phases">
            {stepsData.map((step, idx) => (
              <button
                key={step.num}
                role="tab"
                aria-selected={activeTab === idx}
                aria-controls={`panel-${step.num}`}
                id={`tab-${step.num}`}
                className={`process-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span>{step.num}. {step.tabName}</span>
                <span className="process-tab-btn__arrow" aria-hidden="true">&rarr;</span>
              </button>
            ))}
          </div>

          {/* Right/Center Area: Active Tab Panel */}
          <div
            id={`panel-${currentStep.num}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentStep.num}`}
            className="process-content-grid"
          >
            {/* Info Column */}
            <div className="process-info-col">
              <div>
                <h3 className="process-step-title">
                  {currentStep.num}. {currentStep.title}
                </h3>
                <p className="process-step-desc">
                  {currentStep.desc}
                </p>

                {/* Checklist Title */}
                <h4 className="process-checklist-title">
                  {currentStep.subtitle}
                </h4>

                {/* 2-Column Grid Checklist */}
                <div className="process-checklist">
                  {currentStep.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="process-check-item">
                      {/* Brand green checkmark SVG */}
                      <svg
                        className="process-check-icon"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Button */}
              <a href="/contact" className="process-cta-btn">
                <span>{currentStep.cta}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Visual Column */}
            <div className="process-visual-col">
              <span className="process-visual-overlay">
                Phase {currentStep.num}
              </span>
              <Image
                src={currentStep.image}
                alt={`${currentStep.title} illustration showing SEO dashboard analytics`}
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                style={{ objectFit: 'cover' }}
                priority={activeTab === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
