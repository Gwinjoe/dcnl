# DCNL Website - Destinyt Company Nigerian Limited

A modern, performant, responsive website built with Next.js, Tailwind CSS, and shadcn UI components for a Nigerian construction and fabrication company.

## Project Structure

```
components/
├── HeroSection.tsx          # Animated hero slider with rotating features
├── ServicesSection.tsx      # Service cards (6 core services)
├── StatsSection.tsx         # Trust metrics with animated counters
├── ProjectsSection.tsx      # Project grid with hover effects
├── ProcessSection.tsx       # Timeline/step-based workflow
├── CTASection.tsx          # Call-to-action banner
├── Footer.tsx              # Footer with links and contact info
└── ui/                     # shadcn UI components (pre-installed)
    ├── button.tsx
    ├── card.tsx
    └── ... (other components)

app/
├── page.tsx                # Main page - assembles all sections
├── layout.tsx              # Root layout with metadata
└── globals.css             # Global Tailwind & styling

lib/
├── utils.ts                # Utility functions (cn helper for className merging)
```

## Key Features

### 1. **Hero Section** (`HeroSection.tsx`)
- **Animated Image Slider**: Smooth transitions between multiple images from Cloudinary
- **Dynamic Text**: Coordinated text changes with image transitions
- **Rotating Features**: Bottom-left box with rotating feature points (3s interval)
- **CTA Buttons**: "Request a Quote" and "View Projects" buttons
- **Navigation Controls**: Previous/Next arrows and dot indicators
- **Auto-play**: Automatically advances slides every 6 seconds

**Customization:**
- Edit `heroSlides` array to add/modify slides with different titles and images
- Update `rotatingFeatures` array to change feature points
- Adjust animation timings (lines with intervals like 3000, 6000)

### 2. **Services Section** (`ServicesSection.tsx`)
- **6 Service Cards**: Grid layout with icons, titles, and descriptions
- **Hover Effects**: Cards highlight on hover with smooth transitions
- **Icon Integration**: Uses lucide-react icons
- **Responsive Grid**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)

**Services Included:**
- Steel Fabrication
- Structural Construction
- Industrial Installations
- Offshore Solutions
- Safety & Compliance
- Maintenance Services

### 3. **Stats Section** (`StatsSection.tsx`)
- **Animated Counters**: Numbers animate when section comes into view
- **4 Key Metrics**: Years of experience, projects completed, personnel, safety score
- **Glassmorphism Design**: Semi-transparent cards with backdrop blur
- **Gradient Background**: Blue gradient background

**Customization:**
- Edit `stats` array to change metrics, values, or labels
- Modify animation speed in the `AnimatedCounter` component

### 4. **Projects Section** (`ProjectsSection.tsx`)
- **Project Grid**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Hover Effects**: Image zoom and overlay reveal project description
- **Category Badges**: Color-coded badges for project types
- **6 Featured Projects**: With images from Cloudinary

**Customization:**
- Add/edit projects in the `projects` array
- Update `category` field for different project types
- Replace `image` URLs with your Cloudinary links

### 5. **Process Section** (`ProcessSection.tsx`)
- **6-Step Timeline**: Consultation → Design → Fabrication → Installation → Testing → Maintenance
- **Visual Timeline**: Vertical line connecting steps (desktop view)
- **Step Numbers**: Circular numbered badges for each step
- **Responsive Layout**: Adapts from single column to 3-column grid

**Customization:**
- Edit `processSteps` array to modify workflow steps
- Adjust number of steps as needed

### 6. **CTA Section** (`CTASection.tsx`)
- **Full-Width Banner**: Gradient blue background
- **Primary and Secondary CTAs**: Buttons with different styles
- **Contact Info**: Phone and email with icons
- **Call to Action**: Encourages quote requests and consultations

**Customization:**
- Update heading and subheading text
- Replace placeholder phone and email

### 7. **Footer** (`Footer.tsx`)
- **4-Column Layout**: Company info, quick links, services, contact details
- **Social Media Links**: Facebook, Twitter, LinkedIn, Instagram
- **Quick Links**: Home, Services, Projects, About, Contact
- **Contact Details**: Address, phone, email with icons
- **Bottom Bar**: Copyright, privacy links, terms of service

**Customization:**
- Update company description
- Replace placeholder contact information
- Update social media links (currently placeholder `#`)
- Modify footer links and services list

## Color Scheme

- **Base**: Zinc (neutral grays)
- **Primary**: Blue (#2563eb, #3b82f6)
- **Accent**: Red (logo/branding - can be added)
- **Font**: Inter (already configured in layout.tsx)

## Cloudinary Image URLs

All images use Cloudinary demo fetch URLs. Replace them with your actual Cloudinary URLs:

**Current Pattern:**
```
https://res.cloudinary.com/demo/image/fetch/w_1200,h_600,c_fill/https://images.unsplash.com/...
```

**Replace with Your Account:**
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/your-image-name.jpg
```

### Key Image Locations:
- **Hero images**: `HeroSection.tsx` (line ~15-30)
- **Project images**: `ProjectsSection.tsx` (line ~35-65)

## Performance Optimizations

✅ **Image Optimization:**
- Next.js `<Image>` component for automatic optimization
- Cloudinary for CDN delivery
- Responsive image sizing

✅ **Animations:**
- CSS transitions for smooth effects
- Debounced state updates
- Hardware-accelerated transforms

✅ **Code Splitting:**
- 'use client' directives for interactive sections
- Component-based architecture for lazy loading

✅ **Preloading:**
- Hero images marked with `priority` prop
- Cloudinary URL preloading for instant display

## Tailwind CSS & shadcn Configuration

### Already Configured:
- Tailwind CSS v4
- shadcn/ui components
- Inter font as default sans-serif
- Responsive breakpoints (sm, md, lg, xl)
- Dark mode support (if needed)

### Common Tailwind Classes Used:
- Spacing: `px-4`, `py-16`, `gap-8`
- Colors: `text-zinc-900`, `bg-blue-600`, `border-blue-300`
- Responsive: `sm:text-lg`, `md:grid-cols-2`, `lg:px-8`
- Flexbox: `flex`, `items-center`, `justify-between`
- Transitions: `transition-all`, `duration-300`, `hover:`

## Getting Started

### Installation
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
npm start
```

## Customization Guide

### 1. **Update Company Information**
- `HeroSection.tsx`: Update hero title and subtitle
- `Footer.tsx`: Update company description, contact info, address
- `app/layout.tsx`: Update page metadata

### 2. **Replace Images**
- Get Cloudinary links for your project and product images
- Replace URLs in each section component
- Ensure images are optimized (width/height recommendations vary)

### 3. **Modify Services**
- Edit `ServicesSection.tsx` `services` array
- Add/remove service cards
- Change icons from lucide-react library

### 4. **Update Stats**
- Edit `StatsSection.tsx` `stats` array
- Modify metrics, labels, and values
- Adjust animation speed if needed

### 5. **Add More Projects**
- Edit `ProjectsSection.tsx` `projects` array
- Add new project objects with title, description, image, category
- Adjust grid columns in className if needed

### 6. **Update Process Steps**
- Edit `ProcessSection.tsx` `processSteps` array
- Modify step descriptions and titles
- Change number of steps

### 7. **Customize Colors**
- Update Tailwind color classes throughout components
- Examples: `text-blue-600` → `text-red-600`, `bg-blue-50` → `bg-red-50`
- See global.css for theme variables

### 8. **Update Links**
- Footer social media links (currently `#` placeholders)
- Quick links in footer
- Navigation URLs throughout

## Icons

This project uses **lucide-react** for all icons:
- `Wrench`, `Building2`, `Zap`, `Anchor`, `Shield`, `Cog` (Services)
- `ChevronLeft`, `ChevronRight` (Hero navigation)
- `CheckCircle2` (Process timeline)
- `Phone`, `Mail`, `MapPin` (Contact info)
- `ArrowRight` (CTAs and footer links)
- `Facebook`, `Twitter`, `Linkedin`, `Instagram` (Social media)

Browse the [lucide-react icon library](https://lucide.dev) for more icons.

## Responsive Breakpoints

All sections are optimized for:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl)

Every component uses Tailwind's responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4",
  "lucide-react": "^0.563.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0",
  "class-variance-authority": "^0.7.1",
  "shadcn": "^3.7.0"
}
```

## Tips for Further Enhancement

1. **Add Contact Form**: Create a `ContactForm` component with email integration
2. **Add Blog Section**: Showcase expertise with case studies and articles
3. **Add Team Section**: Highlight key personnel and expertise
4. **Dark Mode**: Implement dark mode toggle using Next.js theme support
5. **Analytics**: Add Google Analytics or similar for tracking
6. **SEO**: Add schema markup and OpenGraph tags
7. **Animations**: Use Framer Motion for more advanced animations
8. **Navigation Header**: Add sticky header/navbar with mobile menu
9. **Testimonials**: Add client testimonials section
10. **Certificates**: Display certifications and safety credentials

## Support & Questions

For component-specific details, check:
- **shadcn/ui**: https://ui.shadcn.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **Next.js**: https://nextjs.org/
- **lucide-react**: https://lucide.dev/

---

**Last Updated**: January 2026
**Version**: 1.0.0
