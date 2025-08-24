'use client'

import { useState, useEffect } from 'react'

// Impact KPIs section showing environmental and business benefits
export default function ImpactKPIs() {
  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [end, duration])

    return count
  }

  // KPI metrics data
  const kpiMetrics = [
    {
      value: useCounter(1200),
      suffix: '+',
      label: 'Cars Off Road',
      description: 'Per corporate shuttle deployed',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-dark-green to-muted-aqua'
    },
    {
      value: useCounter(85000),
      suffix: 'L',
      label: 'Petrol Saved',
      description: 'Monthly fuel reduction per route',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-muted-aqua to-soft-mint'
    },
    {
      value: useCounter(180),
      suffix: ' tons',
      label: 'CO₂ Avoided',
      description: 'Annual carbon emissions reduction',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-soft-mint to-light-beige'
    },
    {
      value: useCounter(960),
      suffix: ' hrs',
      label: 'Hours Reclaimed',
      description: 'Monthly productivity time saved',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-light-beige to-muted-aqua'
    },
    {
      value: useCounter(450),
      suffix: ' trees',
      label: 'Oxygen Equivalent',
      description: 'Fresh air production capacity',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-dark-green to-soft-mint'
    },
    {
      value: useCounter(25),
      suffix: ' tons',
      label: 'CO₂ Captured',
      description: 'Bio-facade air purification impact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-muted-aqua to-dark-green'
    }
  ]

  return (
    <section id="impact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center subsection-gap">
          <h2 className="heading-xl text-deep-navy mb-4">
            Measurable Impact, Real Results
          </h2>
          <p className="body-lg text-gray-600 max-w-4xl mx-auto">
            Every ZeroCommute shuttle delivers quantifiable environmental and business benefits 
            that directly support your ESG goals and operational efficiency.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 subsection-gap max-w-6xl mx-auto">
          {kpiMetrics.map((kpi, index) => (
            <div key={index} className="card text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              {/* Icon and Gradient Background */}
              <div className={`w-16 h-16 bg-gradient-to-r ${kpi.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {kpi.icon}
              </div>

              {/* Metric Value */}
              <div className="mb-3">
                <div className="heading-lg text-deep-navy mb-1">
                  {kpi.value.toLocaleString()}{kpi.suffix}
                </div>
                <h3 className="text-dark-green font-semibold heading-sm">
                  {kpi.label}
                </h3>
              </div>

              {/* Description */}
              <p className="body-base text-gray-600">
                {kpi.description}
              </p>

              {/* Progress Bar Animation */}
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${kpi.color} rounded-full transition-all duration-2000 ease-out`}
                  style={{ width: `${Math.min((kpi.value / (index === 1 ? 100000 : index === 2 ? 200 : 1000)) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-deep-navy to-dark-green rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="heading-lg mb-4">
            Ready to Make This Impact Real?
          </h3>
          <p className="body-lg text-gray-200 mb-6 max-w-3xl mx-auto">
            Join leading UAE corporates in pioneering sustainable transportation. 
            These aren't projections – they're proven results from our pilot programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View Impact Calculator
            </button>
            
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
              Schedule Pilot Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}