# Aspirantix - Production Landing Page

A modern, responsive landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Update the Calendly URL and other settings in `.env.local`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Features

- **Modern Design System**: Custom Tailwind CSS with Aspirantix brand colors
- **Smooth Animations**: Framer Motion with scroll-triggered animations
- **Responsive**: Mobile-first design with perfect tablet/desktop scaling
- **Performance Optimized**: Lazy loading, optimized images, <2.5s LCP
- **SEO Ready**: Meta tags, structured data, sitemap.xml
- **Contact Form**: Working form with validation and honeypot protection
- **Calendly Integration**: Inline widget and popup modal support
- **Dark/Light Mode**: Theme toggle with localStorage persistence

## 📋 Sections

1. **Hero** - Animated headline with value proposition
2. **About** - Company story and key highlights
3. **Services** - 5 core service offerings with CTAs
4. **Products** - 4 flagship products showcase
5. **Case Studies** - 6 project highlights with results
6. **Tech Stack** - Organized by category with hover effects
7. **Testimonials** - Rotating testimonials with navigation
8. **Contact** - Contact form + Calendly integration

## ⚙️ Configuration

### Calendly Setup
Update `NEXT_PUBLIC_CALENDLY_URL` in `.env.local` with your Calendly link.

### Analytics
Set `NEXT_PUBLIC_ANALYTICS` to "plausible" or "ga4" to enable tracking.

### Email (Production)
Configure SMTP settings in `.env.local` for contact form functionality.

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy!

## 🎨 Design System

The design system uses:
- **Primary Green**: #2E7D32 (from logo)
- **Accent Lime**: #7ED957
- **Navy**: #0D1B2A
- **Fonts**: Poppins (headings), Inter (body)
- **Animations**: Spring easing, hover effects, scroll reveals

Built with ❤️ by Aspirantix