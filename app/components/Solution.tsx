// Solution section showcasing ZeroCommute's key features and benefits
export default function Solution() {
  // Solution feature tiles data
  const solutionFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "96+ Comfortable Seats",
      description: "Replace ~80 cars daily per bus with spacious double-decker electric buses featuring premium comfort for productive commutes.",
      benefits: ["Ergonomic seating", "Climate control", "Quiet operation"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      title: "High-Speed Wi-Fi",
      description: "Transform commute time into productive work hours with reliable internet connectivity throughout the journey.",
      benefits: ["5G connectivity", "Stable connection", "Work-ready environment"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-Time ESG Dashboard",
      description: "Live CO₂ tracking, compliance-ready reporting with real-time monitoring for corporate ESG goals.",
      benefits: ["Live CO₂ tracking", "ESG reporting", "Sustainability metrics"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Smart Safety & Security",
      description: "Advanced safety monitoring and emergency protocols ensuring passenger security and driver assistance throughout the journey.",
      benefits: ["Real-time safety monitoring", "Emergency protocols", "Passenger security"]
    }
  ]

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center subsection-gap">
          <h2 className="heading-xl text-deep-navy mb-4">
            The ZeroCommute Solution
          </h2>
          <p className="body-lg text-gray-600 max-w-4xl mx-auto">
            Reimagining global corporate transportation with sustainable, comfortable, and technology-enabled electric double-decker shuttles.
          </p>
        </div>

        {/* Solution Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 subsection-gap max-w-6xl mx-auto">
          {solutionFeatures.map((feature, index) => (
            <div key={index} className="card group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-dark-green to-muted-aqua rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="heading-md text-deep-navy mb-2">
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="body-base text-gray-600 mb-4">
                {feature.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-dark-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="body-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits Summary */}
        <div className="bg-gradient-to-r from-soft-mint to-light-beige rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="heading-md text-deep-navy mb-6">
                Why Choose ZeroCommute?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-dark-green mb-2">100%</div>
                  <p className="body-base text-deep-navy font-semibold">Electric & Sustainable</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-dark-green mb-2">96+</div>
                  <p className="body-base text-deep-navy font-semibold">Comfortable Seats</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-dark-green mb-2">5G</div>
                  <p className="body-base text-deep-navy font-semibold">High-Speed Connectivity</p>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-dark-green mb-2">24/7</div>
                  <p className="body-base text-deep-navy font-semibold">Real-time Monitoring</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-right">
              <h4 className="heading-sm text-deep-navy mb-4">
                Ready to Transform Your Corporate Commute?
              </h4>
              <p className="body-base text-gray-700 mb-6">
                Join the world's first net-zero corporate shuttle network and lead the way in sustainable transportation.
              </p>
              <a 
                href="https://wa.me/918590325180?text=Hello%20ZeroCommute!%20I'm%20interested%20in%20learning%20more%20about%20your%20corporate%20shuttle%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488z"/>
                </svg>
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}