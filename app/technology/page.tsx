import Image from 'next/image'
import HowItWorks from '../components/HowItWorks'

// Technology page showcasing ZeroCommute's technical capabilities and innovations
export default function Technology() {
  // Technology overview cards data
  const techFeatures = [
    {
      title: "Employee App & QR System",
      description: "Booking, GPS tracking, seamless QR boarding, CO₂ savings view",
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
      description: "AI route optimization, predictive maintenance, driver analytics",
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
      description: "Real-time CO₂ monitoring, ESG compliance reporting, audit-ready exports",
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
      title: "Smart Safety & Security System",
      description: "Advanced safety monitoring, emergency protocols, and passenger security features",
      features: [
        "Real-time safety monitoring",
        "Emergency communication system",
        "Passenger security alerts",
        "Driver safety assistance",
        "Incident reporting"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  // Market insights data
  const marketInsights = [
    {
      title: "Global Corporate Transport Spend",
      value: "$2T+",
      description: "Global corporate transport spend",
      trend: "8% Annual Growth in sustainable corporate mobility"
    },
    {
      title: "Carbon Reduction Demand",
      value: "85%",
      description: "Of corporates demand carbon reduction solutions",
      trend: "Growing"
    }
  ]

  // Revenue model data
  const revenueStreams = [
    {
      model: "Corporate Subscriptions",
      description: "Per bus/month or per seat/month",
      pricing: "Flexible pricing model"
    },
    {
      model: "ESG & Data Services",
      description: "CO₂ dashboards, audit-ready reporting",
      pricing: "Analytics and compliance tools"
    },
    {
      model: "Carbon Credits",
      description: "Monetization via international carbon trading platforms",
      pricing: "Revenue through carbon markets"
    },
    {
      model: "Ad Panels",
      description: "Digital/physical ads on shuttles",
      pricing: "Advertising revenue stream"
    },
    {
      model: "Partnership Revenue",
      description: "Sponsored routes, EV OEM collaborations",
      pricing: "Strategic partnerships"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-deep-navy to-dark-green text-white">
        <div className="container-max text-center">
          <h1 className="heading-xl mb-6">
            Technology Overview
          </h1>
          <p className="body-lg text-gray-200 max-w-4xl mx-auto">
            A global-first technology stack combining IoT, AI, and sustainability analytics to power the transition to net-zero commuting worldwide.
          </p>
        </div>
      </section>

      {/* Technology Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-deep-navy mb-6">
              Our Technology Stack
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
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
                  <h3 className="heading-sm text-deep-navy">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="body-base text-gray-600 mb-6">
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
                      <span className="body-sm text-gray-700">{item}</span>
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
            <h2 className="heading-lg text-deep-navy mb-6">
              Global Market Insights
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the global corporate transportation landscape and market opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketInsights.map((insight, index) => (
              <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300">
                <div className="heading-md text-dark-green mb-2">
                  {insight.value}
                </div>
                <h3 className="heading-sm text-deep-navy mb-3">
                  {insight.title}
                </h3>
                <p className="body-base text-gray-600 mb-3">
                  {insight.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-soft-mint text-deep-navy body-sm font-medium rounded-full">
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
            <h2 className="heading-lg text-deep-navy mb-6">
              Revenue Model
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Diversified revenue streams ensuring sustainable business growth and market scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="bg-gradient-to-r from-soft-mint to-light-beige rounded-2xl p-6 md:p-8 text-center">
                <h3 className="heading-sm text-deep-navy mb-3">
                  {stream.model}
                </h3>
                <p className="body-base text-gray-700 mb-4">
                  {stream.description}
                </p>
                <div className="heading-sm text-dark-green">
                  {stream.pricing}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-deep-navy to-dark-green rounded-3xl p-8 md:p-12 text-white">
              <h3 className="heading-lg mb-4">
                Ready to Transform Your Corporate Commute?
              </h3>
              <p className="body-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Join the world's first net-zero corporate shuttle network and lead the way in sustainable transportation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  👉 [Schedule Tech Demo]
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300">
                  👉 [Download Technical Specs]
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}