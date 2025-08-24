import Image from 'next/image'

// How It Works component showing the 6-step process flow
export default function HowItWorks() {
  // Process steps data with corresponding images
  const processSteps = [
    {
      step: "01",
      title: "Employee Registration",
      description: "Employees register through the ZeroCommute app, providing route preferences and schedule requirements.",
      image: "/images/Process1.webp",
      details: ["QR code registration", "Route selection", "Schedule preferences"]
    },
    {
      step: "02", 
      title: "Route Optimization",
      description: "AI-powered system optimizes routes based on employee locations, traffic patterns, and demand.",
      image: "/images/Process2.webp",
      details: ["AI route planning", "Traffic analysis", "Demand optimization"]
    },
    {
      step: "03",
      title: "Real-time Tracking",
      description: "Live GPS tracking allows employees to monitor shuttle arrival times and plan their commute.",
      image: "/images/Process3.webp",
      details: ["GPS tracking", "Live updates", "Arrival notifications"]
    },
    {
      step: "04",
      title: "Seamless Boarding",
      description: "QR code scanning ensures quick, contactless boarding while maintaining security and passenger manifest.",
      image: "/images/Process4.webp", 
      details: ["QR code scanning", "Contactless boarding", "Passenger verification"]
    },
    {
      step: "05",
      title: "Productive Journey",
      description: "High-speed Wi-Fi and comfortable seating transform commute time into productive work hours.",
      image: "/images/Process5.webp",
      details: ["5G connectivity", "Ergonomic seating", "Work environment"]
    },
    {
      step: "06",
      title: "ESG Impact Reporting",
      description: "Real-time dashboard tracks carbon savings, fuel reduction, and sustainability metrics for corporate reporting.",
      image: "/images/Process6.webp",
      details: ["Carbon tracking", "Sustainability metrics", "ESG reporting"]
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center subsection-gap">
          <h2 className="heading-xl text-deep-navy mb-4">
            How ZeroCommute Works
          </h2>
          <p className="body-lg text-gray-600 max-w-4xl mx-auto">
            Six simple steps to transform your corporate transportation from carbon-heavy 
            to net-zero, while improving employee experience and productivity.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {processSteps.map((process, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Step Number and Title */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-dark-green to-muted-aqua rounded-full flex items-center justify-center text-white font-bold text-base">
                    {process.step}
                  </div>
                  <h3 className="heading-lg text-deep-navy">
                    {process.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="body-lg text-gray-600">
                  {process.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2">
                  {process.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-dark-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="flex items-center space-x-2 pt-4">
                  <div className="text-sm text-gray-500">Step {index + 1} of {processSteps.length}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-dark-green to-muted-aqua h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative group w-fit">
                  <Image
                    src={process.image}
                    alt={`${process.title} process illustration`}
                    width={300}
                    height={300}
                    className="rounded-2xl shadow-sm w-full h-auto max-w-80 max-h-80 object-cover group-hover:shadow-md transition-all duration-300 aspect-square border border-gray-200/60 group-hover:border-gray-300"
                  />
                  
                  {/* Overlay with step number */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-deep-navy">
                    {process.step}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark-green bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-soft-mint to-light-beige rounded-3xl p-8 md:p-12">
            <h3 className="heading-lg text-deep-navy mb-4">
              Ready to Pilot ZeroCommute?
            </h3>
            <p className="body-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Join the UAE's first net-zero corporate shuttle network. Start with a pilot program 
              and see immediate impact on your sustainability goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Book Strategy Call
              </button>
              
              <button className="btn-secondary">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}