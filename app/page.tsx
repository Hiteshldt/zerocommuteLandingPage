import Hero from './components/Hero'
import Problem from './components/Problem' 
import Solution from './components/Solution'
import ImpactKPIs from './components/ImpactKPIs'
import HowItWorks from './components/HowItWorks'

// Home page - Main landing page for ZeroCommute
export default function Home() {
  return (
    <>
      {/* Hero Section - Main value proposition with bus background */}
      <Hero />

      {/* Problem Section - Corporate commute challenges and statistics */}
      <Problem />

      {/* Solution Section - ZeroCommute features and benefits */}
      <Solution />

      {/* Impact KPIs Section - Environmental and business metrics */}
      <ImpactKPIs />

      {/* How It Works Section - 6-step process flow */}
      <HowItWorks />
    </>
  )
}