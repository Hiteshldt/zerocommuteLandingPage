import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Configure Inter font
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap'
})

// SEO metadata for ZeroCommute
export const metadata: Metadata = {
  title: 'ZeroCommute - Net Zero Corporate Commutes, Made Real',
  description: 'Electric double-decker shuttles + real-time CO₂ tracking for UAE corporates. Transforming corporate transportation with sustainable mobility solutions.',
  keywords: 'zero commute, corporate transport, electric shuttles, sustainable mobility, UAE transport, carbon neutral, ESG solutions',
  authors: [{ name: 'ZeroCommute Team' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'ZeroCommute - Net Zero Corporate Commutes, Made Real',
    description: 'Electric double-decker shuttles + real-time CO₂ tracking for UAE corporates',
    url: 'https://zerocommute.ae',
    siteName: 'ZeroCommute',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white text-gray-900">
        {/* Navigation header */}
        <Header />
        
        {/* Main content */}
        <main role="main">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}