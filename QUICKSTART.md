# Quick Start Guide - DCNL Website

## ✅ What's Been Built

Your DCNL website is now complete with all required sections:

### Sections Implemented:
1. ✅ **Hero Section** - Animated hero with sliding images and text
2. ✅ **Services Section** - 6 service cards with icons and hover effects
3. ✅ **Stats Section** - Animated counters showing key metrics
4. ✅ **Projects Section** - Grid showcasing completed projects
5. ✅ **Process Section** - 6-step workflow timeline
6. ✅ **CTA Section** - Full-width call-to-action banner
7. ✅ **Footer** - Complete footer with links and contact info

## 🚀 Getting Started

### 1. Run Development Server
```bash
cd /workspaces/dcnl
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. View the Website
The site should load with:
- Beautiful hero section with animated slides
- Professional layout with proper spacing
- Responsive design for all devices
- All sections properly assembled

## 🎨 Customization Priority

### IMMEDIATE (Must Update):
1. **Company Information** (`lib/config.ts`)
   - Phone number
   - Email address
   - Physical address
   - Social media links

2. **Images** (Replace Cloudinary URLs)
   - Hero section images (3 images)
   - Project showcase images (6 images)
   - Use your own Cloudinary account or replace with actual image URLs

3. **Statistics** (`StatsSection.tsx` or `lib/config.ts`)
   - Update years of experience
   - Update number of projects
   - Update number of personnel
   - Update safety compliance percentage

### RECOMMENDED (Should Update):
4. **Services** (`ServicesSection.tsx`)
   - Verify service descriptions match your offerings
   - Update if you have different/additional services

5. **Process Steps** (`ProcessSection.tsx`)
   - Ensure the 6 steps match your workflow

6. **Featured Projects** (`ProjectsSection.tsx`)
   - Add your actual completed projects with proper descriptions

### OPTIONAL (Nice to Have):
7. **Colors** - Change primary/accent colors if needed
8. **Animations** - Adjust animation speeds
9. **Content** - Refine all text for your brand voice

## 📋 File Locations for Quick Edits

### Update Hero Images
File: `components/HeroSection.tsx` (lines 15-30)
```typescript
const heroSlides = [
  {
    title: 'Your Title',
    subtitle: 'Your Subtitle',
    image: 'https://your-cloudinary-url.jpg',
  },
  // ... more slides
];
```

### Update Contact Info
File: `lib/config.ts` or directly in `components/Footer.tsx`
```typescript
export const CONTACT_INFO = {
  phone: '+234 (0) XXX XXX XXXX',
  email: 'info@dcnl.com',
  address: 'Lagos, Nigeria',
};
```

### Update Projects
File: `components/ProjectsSection.tsx` (lines 35-65)
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Your description',
    image: 'https://your-cloudinary-url.jpg',
    category: 'Category',
  },
  // ... more projects
];
```

### Update Stats
File: `components/StatsSection.tsx` (lines 15-32)
```typescript
const stats: StatItem[] = [
  { value: '15', label: 'Years of Experience', suffix: '+' },
  // ... more stats
];
```

## 🖼️ Cloudinary Setup (For Images)

### Quick Setup:
1. Go to [cloudinary.com](https://cloudinary.com) and create a free account
2. Upload your images to the Media Library
3. Copy the image URLs
4. Replace the demo URLs in the components

### Example URL Format:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1234567890/image-name.jpg
```

Or use the simple transform URL if you have direct image links:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/fetch/w_1200,h_600,c_fill/https://your-image-url.jpg
```

## 🔧 Important Files to Know

| File | Purpose | Customization Level |
|------|---------|-------------------|
| `app/page.tsx` | Main page (assembles all sections) | Low - usually no change |
| `app/layout.tsx` | Metadata & layout | Medium - update title/description |
| `lib/config.ts` | Centralized configuration | High - update frequently |
| `components/HeroSection.tsx` | Hero slider | High - update images & text |
| `components/Footer.tsx` | Footer | High - update contact info |
| `components/ProjectsSection.tsx` | Projects showcase | High - add your projects |
| `components/StatsSection.tsx` | Metrics | Medium - update your numbers |
| `app/globals.css` | Global styling | Low - only if changing colors |

## 🎯 Key Features Explained

### Hero Section
- **3 Slides**: Images and text change together
- **Auto-play**: Advances every 6 seconds
- **Rotating Features**: Bottom-left box shows rotating feature points (3s each)
- **Navigation**: Manual controls with arrows and dot indicators

### Services Section
- **6 Cards**: Grid layout, responsive
- **Icons**: From lucide-react library
- **Hover Effects**: Cards highlight when hovered

### Stats Section
- **Animated Numbers**: Count up when you scroll to this section
- **4 Metrics**: Customizable values and labels
- **Blue Gradient**: Professional background

### Projects Section
- **Grid Layout**: 1-3 columns depending on screen size
- **Hover Effects**: Image zooms and shows description
- **Categories**: Badges show project type

### Process Section
- **6 Steps**: Shows your workflow from start to finish
- **Timeline**: Visual line connecting steps (on desktop)
- **Numbers**: Each step clearly numbered

### CTA Section
- **Call-to-Action**: Encourages quote requests
- **Contact Info**: Quick access to phone and email
- **Buttons**: Primary (white) and secondary (outline) options

### Footer
- **4 Columns**: Company info, quick links, services, contact
- **Social Links**: Facebook, Twitter, LinkedIn, Instagram
- **Bottom Bar**: Copyright, privacy, terms

## ✨ Performance Features

- ✅ Optimized images with Next.js Image component
- ✅ Cloudinary CDN for fast image delivery
- ✅ Smooth CSS transitions and animations
- ✅ Responsive design for all devices
- ✅ Accessibility features included

## 🚀 Deployment

### Build for Production:
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended):
1. Push code to GitHub
2. Connect to Vercel
3. Deploy with one click
4. Environment variables handled automatically

### Deploy to Other Platforms:
- Netlify: Connect GitHub, auto-deploys on push
- AWS Amplify: Connect GitHub, configure build settings
- Traditional hosting: Run `npm run build` and upload `out/` folder

## 📱 Responsive Breakpoints

The site is fully responsive:
- **Mobile**: < 640px - Single column, touch-friendly buttons
- **Tablet**: 640px - 1024px - Two columns where applicable
- **Desktop**: > 1024px - Full three-column layouts

## 🎨 Color System

Current Color Scheme:
- **Primary**: Blue (`#2563eb`) - Buttons, highlights
- **Base**: Zinc (neutral grays) - Text, backgrounds
- **Accent**: Red (available) - Logo, special highlights

To change colors, update Tailwind classes throughout components:
- `bg-blue-600` → `bg-red-600`
- `text-zinc-900` → `text-gray-900`
- etc.

## 🐛 Troubleshooting

### Images not showing:
- Check Cloudinary URLs are correct
- Verify image exists in Cloudinary
- Check internet connection

### Layout broken on mobile:
- Clear browser cache
- Use dev tools to check responsive breakpoints
- Ensure you're using `md:`, `lg:` prefixes correctly

### Animations stuttering:
- Close other browser tabs
- Check system resources
- Reduce animation duration if needed

## 📚 Additional Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com/
- **Next.js**: https://nextjs.org/docs
- **lucide-react icons**: https://lucide.dev/
- **Cloudinary**: https://cloudinary.com/documentation

## ✅ Pre-Deployment Checklist

Before going live, ensure:

- [ ] All placeholder text replaced with real content
- [ ] All Cloudinary image URLs updated
- [ ] Contact information is correct and current
- [ ] Social media links are pointing to correct profiles
- [ ] Phone number and email are formatted correctly
- [ ] Test all links (internal and external)
- [ ] Test responsive design on mobile device
- [ ] Run `npm run build` successfully
- [ ] Check for console errors in browser dev tools
- [ ] Verify metadata/SEO in page title and description

## 🎉 You're Ready!

Your DCNL website is production-ready. Make the customizations above, test thoroughly, and deploy with confidence!

---

**Questions?** Check the detailed documentation in `WEBSITE_DEVELOPMENT.md`
