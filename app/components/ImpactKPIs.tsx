// Impact KPIs section showing environmental and business benefits in matrix format
export default function ImpactKPIs() {

  return (
    <section id="impact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center subsection-gap">
          <h2 className="heading-md text-deep-navy mb-4">
            Global Impact Metrics
          </h2>
        </div>

        {/* Impact Metrics Cards - 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto subsection-gap">
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

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-deep-navy to-dark-green rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="heading-lg mb-4">
            Ready to Make This Impact Real?
          </h3>
          <p className="body-lg text-gray-200 mb-6 max-w-3xl mx-auto">
            Join the world's first net-zero corporate shuttle network and lead the way in sustainable transportation.
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