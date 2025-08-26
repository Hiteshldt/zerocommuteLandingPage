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
            <a 
              href="https://wa.me/918590325180?text=Hello%20ZeroCommute!%20I'm%20interested%20in%20learning%20more%20about%20your%20corporate%20shuttle%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-deep-navy transition-all duration-300 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488z"/>
              </svg>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}