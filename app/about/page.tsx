import Image from 'next/image'

// About page showcasing the ZeroCommute team and company mission
export default function About() {
  // Founders data with corresponding images and information
  const founders = [
    {
      name: "Adel Aljaberi",
      role: "CEO",
      image: "/images/Founder1Adel.webp",
      bio: "Sustainability visionary with 15+ years in clean transportation. Former Tesla and Emirates executive leading the UAE's green mobility revolution.",
      expertise: ["Clean Transportation", "Strategic Leadership", "Sustainability"]
    },
    {
      name: "Franklin Francis", 
      role: "COO",
      image: "/images/Founder2Franklin.webp",
      bio: "Operations expert with deep experience in UAE corporate market. Former McKinsey consultant specializing in mobility and logistics optimization.",
      expertise: ["Operations Excellence", "Corporate Strategy", "Market Development"]
    },
    {
      name: "Anas Jalal",
      role: "CSO", 
      image: "/images/founder3Anas.webp",
      bio: "Strategic operations leader with expertise in scaling businesses across the Middle East. Previously led strategic initiatives at major UAE corporates.",
      expertise: ["Strategic Operations", "Business Scaling", "Regional Markets"]
    },
    {
      name: "Hitesh Gupta",
      role: "CTO",
      image: "/images/Founder4Hitesh.webp", 
      bio: "Technology innovator specializing in IoT, fleet management, and smart city solutions. Built carbon tracking platforms for Fortune 500 companies.",
      expertise: ["IoT Systems", "Fleet Technology", "Carbon Analytics"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-deep-navy to-dark-green text-white">
        <div className="container-max text-center">
          <h1 className="heading-xl mb-6">
            Who We Are
          </h1>
          <p className="body-lg text-gray-200 max-w-4xl mx-auto">
            A passionate team of sustainability experts, technology innovators, and mobility specialists 
            dedicated to transforming corporate transportation in the UAE.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="heading-lg text-deep-navy mb-6">
                Our Mission
              </h2>
              <p className="body-lg text-gray-600 mb-6">
                To accelerate the UAE's transition to net-zero corporate transportation by providing 
                sustainable, comfortable, and technology-enabled shuttle services that benefit both 
                businesses and employees.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-dark-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-deep-navy">Sustainability First</p>
                    <p className="text-gray-600 text-sm">Every decision prioritizes environmental impact and carbon reduction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-dark-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-deep-navy">Employee Experience</p>
                    <p className="text-gray-600 text-sm">Transforming commute time into productive, comfortable experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-dark-green flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-deep-navy">Data-Driven Impact</p>
                    <p className="text-gray-600 text-sm">Measurable results and transparent reporting for all stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-soft-mint to-light-beige rounded-3xl p-8">
              <h3 className="heading-lg text-deep-navy mb-4">Our Vision</h3>
              <p className="body-lg text-gray-700 mb-6">
                To become the leading sustainable mobility platform across the Middle East, 
                setting the standard for corporate transportation that prioritizes people and planet.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-dark-green">2024</div>
                  <p className="text-sm text-gray-600">UAE Launch</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark-green">2026</div>
                  <p className="text-sm text-gray-600">Regional Expansion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Meet Our Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A diverse team combining deep expertise in sustainability, technology, operations, 
              and product development to drive the future of corporate mobility.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="card text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role}`}
                    width={200}
                    height={200}
                    className="w-32 h-32 mx-auto rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-dark-green to-muted-aqua opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-deep-navy mb-2">
                  {founder.name}
                </h3>
                <p className="text-dark-green font-semibold mb-4">
                  {founder.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {founder.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-soft-mint text-deep-navy text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-dark-green to-muted-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Sustainability</h3>
              <p className="text-gray-600">Environmental responsibility guides every decision we make</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-muted-aqua to-soft-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Innovation</h3>
              <p className="text-gray-600">Cutting-edge technology to solve tomorrow's mobility challenges</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-soft-mint to-light-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Partnership</h3>
              <p className="text-gray-600">Collaborative approach with corporates, employees, and communities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}