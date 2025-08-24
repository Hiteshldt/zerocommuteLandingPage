# ZeroCommute Landing Page

A professional landing page for ZeroCommute - UAE's first net-zero corporate shuttle network.

## Project Overview

This is a Next.js application built with TypeScript and Tailwind CSS, designed to showcase ZeroCommute's sustainable corporate transportation solutions.

## Features

- **Responsive Design**: Mobile-first approach with clean, professional aesthetics
- **Next.js 15**: Latest framework with App Router for optimal performance
- **TypeScript**: Type-safe development for better code quality
- **Tailwind CSS**: Utility-first styling with custom brand colors
- **Optimized Images**: WebP format images for fast loading
- **Accessibility**: Semantic HTML, focus styles, and ARIA labels
- **SEO Optimized**: Meta tags and structured content

## Pages

- **Home (/)**: Hero, problem statement, solution overview, impact KPIs, how it works
- **Technology (/technology)**: Technical features, process flow, market insights
- **About (/about)**: Company mission, founders team, values
- **Contact (/contact)**: Contact form, company information, FAQ

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /components          # Reusable UI components
  /about              # About page
  /contact            # Contact page  
  /technology         # Technology page
  globals.css         # Global styles
  layout.tsx          # Root layout
  page.tsx            # Home page
/public/images        # Optimized image assets
```

## Brand Colors

- Dark Green: `#28723e` (primary)
- Deep Navy Blue: `#002f4b` (contrast)
- Light Beige: `#c4d1bd` (accent)
- Soft Mint: `#ceebcd` (secondary)
- Muted Aqua: `#68a68c` (support)

## Key Components

- **Header**: Responsive navigation with mobile menu
- **Hero**: Full-screen hero with background image and CTA
- **Problem**: Statistics cards showing commute challenges
- **Solution**: Feature tiles highlighting ZeroCommute benefits
- **ImpactKPIs**: Animated counters for environmental metrics
- **HowItWorks**: 6-step process flow with images
- **Footer**: Contact info and navigation links

## Development Notes

- Clean, maintainable TypeScript code with comprehensive comments
- Follows Next.js best practices and performance optimization
- Uses semantic HTML for accessibility
- Implements smooth scrolling and hover animations
- Form submissions log to console (as per requirements)
- All images optimized and properly sized

## Contact

For questions about this implementation, please contact the ZeroCommute team at mail@zerocommute.ae

---

Built with ❤️ for sustainable corporate transportation in the UAE.