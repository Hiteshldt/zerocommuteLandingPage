'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Header component with responsive navigation and dynamic colors for ZeroCommute
export default function Header() {
  // State for mobile menu toggle and static white styling
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Navigation links configuration
  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/technology', label: 'Technology' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  // Simple scroll detection for header shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Static white header classes
  const getHeaderClasses = () => {
    const baseClasses = 'sticky top-0 z-50 transition-all duration-300 ease-in-out bg-white'
    return isScrolled 
      ? `${baseClasses} shadow-lg border-b border-gray-100`
      : `${baseClasses} shadow-sm border-b border-gray-50`
  }

  // Static text colors
  const getTextColor = () => 'text-gray-800'
  const getHoverColor = () => 'hover:text-dark-green'
  const getUnderlineColor = () => 'bg-dark-green'

  // Logo classes
  const getLogoClasses = () => 'h-7 w-auto md:h-9'

  // CTA button styling
  const getCTAClasses = () => 'bg-dark-green text-white hover:bg-opacity-90 hover:shadow-lg'

  // Mobile menu styling
  const getMobileMenuClasses = () => {
    const baseClasses = 'md:hidden transition-all duration-300 ease-in-out'
    return `${baseClasses} ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'}`
  }

  const getMobileMenuBgClasses = () => 'bg-white'

  return (
    <header className={getHeaderClasses()}>
      <nav className="container-max" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="ZeroCommute Logo"
                width={120}
                height={40}
                className={getLogoClasses()}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${getTextColor()} ${getHoverColor()} font-medium transition-colors duration-300 relative group`}
              >
                {link.label}
                {/* Underline animation */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${getUnderlineColor()} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className={`${getCTAClasses()} px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 ml-4`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`${getTextColor()} ${getHoverColor()} focus:outline-none transition-colors duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={getMobileMenuClasses()}
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 ${getMobileMenuBgClasses()} rounded-lg mt-2 shadow-lg`}>
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-deep-navy hover:text-dark-green hover:bg-gray-100 rounded-md font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-dark-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}