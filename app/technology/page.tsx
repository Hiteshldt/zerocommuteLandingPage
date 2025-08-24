import Image from 'next/image'
import HowItWorks from '../components/HowItWorks'

// Technology page showcasing ZeroCommute's technical capabilities and innovations
export default function Technology() {
  // Technology overview cards data
  const techFeatures = [
    {
      title: "Employee App & QR System",
      description: "Intuitive mobile app for route booking, real-time tracking, and seamless QR code boarding experience.",
      features: [
        "One-tap route booking",
        "Live GPS tracking",
        "QR code generation",
        "Push notifications",
        "Carbon footprint tracking"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Fleet Operations Management",
      description: "Advanced fleet management system with predictive maintenance, route optimization, and driver performance analytics.",
      features: [
        "AI-powered route optimization",
        "Predictive maintenance alerts",
        "Driver performance dashboard",
        "Real-time fleet monitoring",
        "Fuel efficiency tracking"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "ESG Dashboard & Analytics",
      description: "Comprehensive sustainability reporting platform with real-time carbon tracking and ESG compliance metrics.",
      features: [
        "Real-time CO₂ monitoring",
        "ESG compliance reporting",
        "Sustainability metrics",
        "Carbon offset calculations",
        "Executive dashboards"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Bio-Facade Air Purification",
      description: "Integrated air purification system using bio-facade technology to actively clean air and generate oxygen during operation.",
      features: [
        "Active air filtration",
        "Oxygen generation",
        "Pollutant absorption",
        "Air quality monitoring",
        "Environmental impact tracking"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  // Market insights data
  const marketInsights = [
    {
      title: "UAE Corporate Transport Market",
      value: "AED 2.3B",
      description: "Annual corporate transportation spending in UAE",
      trend: "+12% YoY"
    },
    {
      title: "Employee Commute Costs",
      value: "AED 800",
      description: "Average monthly per-employee transportation allowance",
      trend: "+8% YoY"
    },
    {
      title: "Carbon Reduction Demand",
      value: "85%",
      description: "UAE corporates seeking carbon reduction solutions",
      trend: "Growing"
    }
  ]

  // Revenue model data
  const revenueStreams = [
    {
      model: "Corporate Subscription",
      description: "Monthly per-employee fees for shuttle services",
      pricing: "AED 300-500/month per employee"
    },
    {
      model: "Route Licensing",
      description: "Licensing fees for popular corporate routes",
      pricing: "AED 50K-100K per route annually"
    },
    {
      model: "ESG Analytics Platform",
      description: "Software-as-a-Service for sustainability reporting",
      pricing: "AED 10K-25K monthly per enterprise"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-deep-navy to-dark-green text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technology Overview
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Advanced technology stack powering the UAE's first net-zero corporate shuttle network, 
            combining IoT, AI, and sustainability analytics for maximum impact.
          </p>
        </div>
      </section>

      {/* Technology Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four integrated technology pillars that deliver seamless user experience, 
              operational efficiency, and measurable sustainability impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="card group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-dark-green to-muted-aqua rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-deep-navy text-sm uppercase tracking-wide">Key Features</h4>
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-dark-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Reuse component */}
      <HowItWorks />

      {/* Market Insights */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Market Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the UAE corporate transportation landscape and market opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-dark-green mb-2">
                  {insight.value}
                </div>
                <h3 className="font-semibold text-deep-navy mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {insight.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-soft-mint text-deep-navy text-xs font-medium rounded-full">
                  {insight.trend}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Revenue Model
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diversified revenue streams ensuring sustainable business growth and market scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="bg-gradient-to-r from-soft-mint to-light-beige rounded-2xl p-6 md:p-8 text-center">
                <h3 className="text-xl font-bold text-deep-navy mb-3">
                  {stream.model}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {stream.description}
                </p>
                <div className="text-lg font-bold text-dark-green">
                  {stream.pricing}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-deep-navy to-dark-green rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Implement ZeroCommute Technology?
              </h3>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Partner with us to deploy cutting-edge transportation technology and achieve 
                your sustainability goals with measurable impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Schedule Tech Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
                  Download Technical Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}