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

  // Modern gradient header classes
  const getHeaderClasses = () => {
    const baseClasses = 'sticky top-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-sm'
    const gradientBg = 'bg-gradient-to-r from-white via-soft-mint/10 to-light-beige/20'
    const scrolledBg = 'bg-gradient-to-r from-white via-soft-mint/20 to-light-beige/30'
    
    return isScrolled 
      ? `${baseClasses} ${scrolledBg} shadow-xl border-b border-gray-300`
      : `${baseClasses} ${gradientBg} shadow-lg border-b border-gray-200`
  }

  // Modern text colors with gradients
  const getTextColor = () => 'text-gray-900 font-semibold'
  const getHoverColor = () => 'hover:text-dark-green transform hover:scale-105'
  const getUnderlineColor = () => 'bg-gradient-to-r from-dark-green to-muted-aqua'

  // Logo classes
  const getLogoClasses = () => 'h-8 w-auto md:h-10'

  // Modern CTA button styling
  const getCTAClasses = () => 'bg-gradient-to-r from-dark-green to-muted-aqua text-white hover:shadow-xl hover:scale-105 transform border border-transparent hover:border-white/20'

  // Modern mobile menu styling
  const getMobileMenuClasses = () => {
    const baseClasses = 'md:hidden transition-all duration-500 ease-in-out'
    return `${baseClasses} ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'}`
  }

  const getMobileMenuBgClasses = () => 'bg-gradient-to-b from-white to-soft-mint backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg'

  return (
    <header className={getHeaderClasses()}>
      <nav className="container-max" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 px-4">
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
                className={`${getTextColor()} ${getHoverColor()} transition-all duration-300 relative group px-3 py-2 rounded-lg hover:bg-soft-mint hover:bg-opacity-20`}
              >
                {link.label}
                {/* Underline animation */}
                <span className={`absolute -bottom-1 left-3 w-0 h-0.5 ${getUnderlineColor()} transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] rounded-full`}></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className={`${getCTAClasses()} px-6 py-3 rounded-xl font-semibold transition-all duration-300 ml-6 shadow-md`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`${getTextColor()} ${getHoverColor()} focus:outline-none transition-all duration-300 p-2 rounded-lg hover:bg-soft-mint hover:bg-opacity-30`}
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
                className="block px-4 py-3 text-deep-navy hover:text-dark-green hover:bg-soft-mint hover:bg-opacity-40 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-dark-green to-muted-aqua text-white px-6 py-3 rounded-xl font-semibold hover:from-muted-aqua hover:to-dark-green hover:shadow-lg hover:scale-105 transform transition-all duration-300"
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