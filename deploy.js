#!/usr/bin/env node

/**
 * ZeroCommute Production Deployment Script
 * Optimizes and builds the application for production deployment
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 ZeroCommute Production Deployment Starting...\n');

try {
  // Step 1: Clean previous builds
  console.log('📦 Cleaning previous builds...');
  if (fs.existsSync('.next')) {
    execSync('rm -rf .next', { stdio: 'inherit' });
  }
  if (fs.existsSync('out')) {
    execSync('rm -rf out', { stdio: 'inherit' });
  }

  // Step 2: Install production dependencies
  console.log('📚 Installing production dependencies...');
  execSync('npm ci --only=production', { stdio: 'inherit' });

  // Step 3: Build the application
  console.log('🔨 Building application for production...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 4: Check build size
  console.log('📊 Analyzing build size...');
  execSync('npm run build:analyze', { stdio: 'inherit' });

  console.log('\n✅ Production build completed successfully!');
  console.log('🌐 Ready for deployment to Vercel, Netlify, or any static host');
  console.log('📁 Build output available in .next/ directory');

} catch (error) {
  console.error('\n❌ Production build failed:', error.message);
  process.exit(1);
}