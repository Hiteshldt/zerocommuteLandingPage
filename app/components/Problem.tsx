import Image from 'next/image'

// Problem section showing corporate commute challenges with statistics
export default function Problem() {
  // Problem statistics data
  const problemStats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: "2.5 Hours",
      label: "Daily commute time wasted",
      description: "UAE employees spend over 2.5 hours daily in traffic, reducing productivity and life quality"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: "65%",
      label: "Of corporate Scope 3 emissions",
      description: "Employee commuting represents the largest portion of corporate carbon footprint"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      ),
      stat: "AED 800",
      label: "Monthly fuel cost per employee",
      description: "Rising fuel prices burden employees with increasing transportation costs"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stat: "40%",
      label: "Office parking shortage",
      description: "Limited parking creates stress and forces remote work, reducing collaboration"
    }
  ]

  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center subsection-gap">
          <h2 className="heading-xl text-deep-navy mb-4">
            The Corporate Commute Crisis
          </h2>
          <p className="body-lg text-gray-600 max-w-4xl mx-auto">
            UAE corporations face mounting pressure from inefficient commuting that impacts 
            productivity, sustainability goals, and employee satisfaction.
          </p>
        </div>

        {/* Problem Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 subsection-gap">
          {problemStats.map((item, index) => (
            <div key={index} className="card text-center group hover:bg-gradient-to-br hover:from-white hover:to-light-beige">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-dark-green to-muted-aqua rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Statistic */}
              <div className="mb-3">
                <h3 className="heading-md text-deep-navy mb-1">
                  {item.stat}
                </h3>
                <p className="text-dark-green font-semibold body-base uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
              
              {/* Description */}
              <p className="body-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Section with People Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/PeopleImage.webp"
              alt="People facing commute challenges"
              width={640}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-deep-navy">High Carbon Impact</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="heading-lg text-deep-navy">
              Your Employees Deserve Better
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-deep-navy">Stress and Burnout</p>
                  <p className="text-gray-600 text-sm">Daily traffic stress impacts mental health and productivity</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-deep-navy">ESG Compliance Pressure</p>
                  <p className="text-gray-600 text-sm">Failing to meet sustainability targets and carbon reduction goals</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-deep-navy">Rising Operational Costs</p>
                  <p className="text-gray-600 text-sm">Employee transport allowances and parking costs continue to increase</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-dark-green font-semibold">
                It's time for a sustainable, scalable solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}