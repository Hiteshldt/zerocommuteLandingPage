'use client'

import { useState } from 'react'


// Contact page with form and contact information
export default function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // For now, just log to console as specified in requirements
    console.log('Contact form submission:', formData)
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your interest! We\'ll be in touch within 24 hours.')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  // Contact information data
  const contactInfo = [
    {
      type: "Phone",
      value: "+971 55 845 5065",
      href: "tel:+971558455065",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: "Email",
      value: "mail@zerocommute.io",
      href: "mailto:mail@zerocommute.io",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: "WhatsApp",
      value: "wa.me/918590325180",
      href: "https://wa.me/918590325180",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-deep-navy to-dark-green text-white">
        <div className="container-max text-center">
          <h1 className="heading-xl mb-6">
            Contact Us
          </h1>
          <p className="body-lg text-gray-200 max-w-4xl mx-auto">
            Ready to reclaim commutes and cut global Scope 3 emissions?
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="heading-lg text-deep-navy mb-8">
                Get In Touch
              </h2>
              
              <p className="body-lg text-gray-600 mb-8">
                Join the world's first net-zero corporate shuttle network and lead the way in sustainable transportation.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-dark-green hover:bg-soft-mint hover:bg-opacity-20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-dark-green to-muted-aqua rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="heading-sm text-deep-navy">{contact.type}</p>
                      <p className="body-base text-gray-600">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-gradient-to-r from-soft-mint to-light-beige rounded-2xl">
                <h3 className="heading-sm text-deep-navy mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                    Schedule a Pilot Demo
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                    Request Impact Calculator
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                    Download Case Studies
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card">
                <h3 className="heading-md text-deep-navy mb-6">
                  Send Us a Message
                </h3>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-700">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block body-base font-semibold text-deep-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block body-base font-semibold text-deep-navy mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block body-base font-semibold text-deep-navy mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-colors duration-300"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block body-base font-semibold text-deep-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-dark-green transition-colors duration-300 resize-vertical"
                      placeholder="Tell us about your corporate transportation needs, employee count, or specific sustainability goals..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="body-sm text-gray-500 text-center">
                    (We respect your privacy and never share your information.)
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}