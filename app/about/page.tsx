import Image from 'next/image'

// About page showcasing the ZeroCommute CEO message
export default function About() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-deep-navy to-dark-green text-white">
        <div className="container-max text-center">
          <h1 className="heading-xl mb-6">
            Who We Are
          </h1>
          <p className="body-lg text-gray-200 max-w-4xl mx-auto">
            CEO's Message – Adel Saif Al Jaberi
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="heading-lg text-deep-navy mb-6">
                CEO's Message
              </h2>
              <p className="body-lg text-gray-600 mb-6">
                "ZeroCommute was founded on a simple truth: commuting should not cost the planet its future. Around the world, millions of employees waste hours in traffic, while corporations struggle with Scope 3 emissions and rising costs. At ZeroCommute, we've built a solution that is both climate-positive and productivity-enhancing. Our electric double-decker shuttles and real-time ESG dashboards give businesses a way to achieve net zero while improving employee well-being. This is not just about transport — it's about shaping a global standard for sustainable corporate mobility. Together, we can redefine how the world commutes, and accelerate the transition to a carbon-free economy."
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="/images/Founder1Adel.webp"
                alt="Adel Saif Al Jaberi - CEO of ZeroCommute"
                width={200}
                height={240}
                className="rounded-2xl shadow-lg w-full h-auto max-w-xs mx-auto"
              />
              <div className="absolute top-6 right-6 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="body-sm font-semibold text-deep-navy">CEO & Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section - from home page */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-md text-deep-navy mb-4">
              Global Impact Metrics
            </h2>
          </div>

          {/* Impact Metrics Cards - 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {/* Card 1 - Cars off the road */}
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-gradient-to-r from-dark-green to-muted-aqua rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-deep-navy">21,000</div>
                  <div className="body-sm text-gray-500">/ year</div>
                </div>
              </div>
              <h3 className="body-lg font-semibold text-gray-700 mt-3">Cars off the road</h3>
            </div>

            {/* Card 2 - Petrol saved */}
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-gradient-to-r from-muted-aqua to-soft-mint rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-deep-navy">850,000L</div>
                  <div className="body-sm text-gray-500">/ year</div>
                </div>
              </div>
              <h3 className="body-lg font-semibold text-gray-700 mt-3">Petrol saved</h3>
            </div>

            {/* Card 3 - CO₂ avoided */}
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-gradient-to-r from-soft-mint to-light-beige rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-deep-navy">2,200</div>
                  <div className="body-sm text-gray-500">tonnes / year</div>
                </div>
              </div>
              <h3 className="body-lg font-semibold text-gray-700 mt-3">CO₂ avoided</h3>
            </div>

            {/* Card 4 - Hours reclaimed */}
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-gradient-to-r from-light-beige to-muted-aqua rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-deep-navy">200,000</div>
                  <div className="body-sm text-gray-500">hrs / year</div>
                </div>
              </div>
              <h3 className="body-lg font-semibold text-gray-700 mt-3">Hours reclaimed</h3>
            </div>

            {/* Card 5 - Oxygen generated */}
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-gradient-to-r from-dark-green to-soft-mint rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-deep-navy">20 trees</div>
                  <div className="body-sm text-gray-500">equiv. / year</div>
                </div>
              </div>
              <h3 className="body-lg font-semibold text-gray-700 mt-3">Oxygen generated</h3>
            </div>

            {/* Card 6 - CO₂ captured */}
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-gradient-to-r from-muted-aqua to-dark-green rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-deep-navy">0.5</div>
                  <div className="body-sm text-gray-500">tonnes / year</div>
                </div>
              </div>
              <h3 className="body-lg font-semibold text-gray-700 mt-3">CO₂ captured (Bio-facade)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features - from home page */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-deep-navy mb-6">
              Why Choose ZeroCommute?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="heading-md text-dark-green mb-2">100%</div>
              <p className="body-base text-deep-navy font-semibold">Electric & Sustainable</p>
            </div>
            
            <div className="text-center">
              <div className="heading-md text-dark-green mb-2">96+</div>
              <p className="body-base text-deep-navy font-semibold">Comfortable Seats</p>
            </div>
            
            <div className="text-center">
              <div className="heading-md text-dark-green mb-2">5G</div>
              <p className="body-base text-deep-navy font-semibold">High-Speed Connectivity</p>
            </div>
            
            <div className="text-center">
              <div className="heading-md text-dark-green mb-2">24/7</div>
              <p className="body-base text-deep-navy font-semibold">Real-time Monitoring</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}