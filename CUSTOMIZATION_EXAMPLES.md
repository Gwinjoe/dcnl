# DCNL Website - Customization Examples

This file contains ready-to-use code snippets for common customizations.

## Table of Contents
1. [Update Hero Section](#update-hero-section)
2. [Update Contact Information](#update-contact-information)
3. [Update Projects](#update-projects)
4. [Update Stats](#update-stats)
5. [Update Services](#update-services)
6. [Change Colors](#change-colors)
7. [Add New Sections](#add-new-sections)

---

## Update Hero Section

### Example 1: Customize Hero Slides

**File**: `components/HeroSection.tsx`

Replace the `heroSlides` array with your content:

```typescript
const heroSlides = [
  {
    title: 'Welcome to DCNL',
    subtitle: 'Building Tomorrow\'s Infrastructure Today',
    image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/your-hero-1.jpg',
  },
  {
    title: 'Quality Steel Fabrication',
    subtitle: 'Precision Engineering for Every Project',
    image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/your-hero-2.jpg',
  },
  {
    title: 'Trusted by Industry Leaders',
    subtitle: 'Over 15 Years of Excellence',
    image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/your-hero-3.jpg',
  },
];
```

### Example 2: Change Rotating Features

Replace the `rotatingFeatures` array:

```typescript
const rotatingFeatures = [
  '✓ ISO 9001 Certified',
  '✓ 24/7 Customer Support',
  '✓ Fastest Delivery Times',
  '✓ Competitive Pricing',
  '✓ Sustainable Practices',
];
```

### Example 3: Adjust Animation Timing

```typescript
// In useEffect hook (around line 30):
const featureTimer = setInterval(() => {
  setFeatureIndex((prev) => (prev + 1) % rotatingFeatures.length);
}, 4000); // Change from 3000 to 4000 (4 seconds)

// Auto-advance slides (around line 37):
const slideTimer = setInterval(() => {
  handleNextSlide();
}, 8000); // Change from 6000 to 8000 (8 seconds)
```

---

## Update Contact Information

### Centralized Update (Recommended)

**File**: `lib/config.ts`

```typescript
export const CONTACT_INFO = {
  phone: '+234 701 234 5678',
  phoneRaw: '+2347012345678',
  email: 'contact@dcnlng.com',
  address: 'Lekki, Lagos, Nigeria',
  fullAddress: '5 Industrial Road, Lekki Phase 1, Lagos 100001, Nigeria',
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/destinytngl',
  twitter: 'https://twitter.com/dcnl_ng',
  linkedin: 'https://linkedin.com/company/dcnl-ng',
  instagram: 'https://instagram.com/dcnl_official',
};
```

### Direct Update in Footer

**File**: `components/Footer.tsx`

Find and replace around line 100:

```typescript
// Old
<p className="text-zinc-400 text-sm">+234 (0) XXX XXX XXXX</p>

// New
<p className="text-zinc-400 text-sm">+234 701 234 5678</p>
```

---

## Update Projects

### Add/Replace Projects

**File**: `components/ProjectsSection.tsx`

Replace the `projects` array:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Lekki Phase 2 Commercial Complex',
    description: 'Design and construction of a 50,000 sqm commercial hub with 8 anchor tenants',
    image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/lekki-complex.jpg',
    category: 'Commercial',
  },
  {
    id: 2,
    title: 'Gulf of Guinea Drilling Platform',
    description: 'Complete offshore platform fabrication, testing, and installation for Chevron',
    image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/drilling-platform.jpg',
    category: 'Offshore',
  },
  {
    id: 3,
    title: 'Lekki-Epe Expressway Expansion',
    description: 'Structural fabrication and installation of 8 major bridge structures',
    image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/expressway.jpg',
    category: 'Infrastructure',
  },
  // Add more as needed
];
```

### Extend Grid Layout

If you add more than 6 projects and want a different layout:

```typescript
// In the grid className (line ~60):
// Change from:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// To (for 4 columns on desktop):
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

---

## Update Stats

### Change Statistics

**File**: `components/StatsSection.tsx`

Replace the `stats` array:

```typescript
const stats: StatItem[] = [
  {
    value: '20',
    label: 'Years in Business',
    suffix: '+',
  },
  {
    value: '500',
    label: 'Projects Delivered',
    suffix: '+',
  },
  {
    value: '300',
    label: 'Team Members',
    suffix: '+',
  },
  {
    value: '99.8',
    label: 'Client Satisfaction',
    suffix: '%',
  },
];
```

### Adjust Animation Speed

```typescript
// In AnimatedCounter component (around line 35):
// Change increment calculation:
const increment = target / 50; // More frames = slower animation
// or
const increment = target / 15; // Fewer frames = faster animation

// Change timer interval:
}, 25); // Default is 50ms, lower = faster
```

---

## Update Services

### Modify Service Cards

**File**: `components/ServicesSection.tsx`

Replace the `services` array:

```typescript
const services = [
  {
    icon: Wrench,
    title: 'Bespoke Fabrication Services',
    description:
      'Custom-designed steel structures tailored to your exact specifications with CAD modeling and precision engineering.',
  },
  {
    icon: Building2,
    title: 'Large-Scale Construction',
    description:
      'From residential to industrial complexes, we handle projects of any scale with professional project management.',
  },
  {
    icon: Zap,
    title: 'Industrial Equipment Installation',
    description:
      'Expert installation of heavy machinery, piping systems, and automated manufacturing equipment.',
  },
  {
    icon: Anchor,
    title: 'Marine & Offshore Expertise',
    description:
      'Specialized in offshore drilling platforms, marine vessels, and subsea structures with international certifications.',
  },
  {
    icon: Shield,
    title: 'Safety & Environmental Compliance',
    description:
      'Full adherence to ISO 14001 environmental and OHSAS 18001 safety standards on all projects.',
  },
  {
    icon: Cog,
    title: 'Equipment Maintenance Contracts',
    description:
      'Preventive and corrective maintenance programs to maximize uptime and extend asset lifespan.',
  },
];
```

### Add a 7th Service

Add to the array:

```typescript
{
  icon: Zap, // Choose appropriate icon from lucide-react
  title: 'Your Service Title',
  description: 'Your service description here',
}
```

Then update the grid:

```typescript
// Change from:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// To:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
```

---

## Change Colors

### Option 1: Update All Blue References

Find and replace throughout components:

| Old Class | New Class | Effect |
|-----------|-----------|--------|
| `bg-blue-600` | `bg-red-600` | Red primary buttons |
| `text-blue-300` | `text-red-300` | Red text accents |
| `border-blue-300` | `border-red-300` | Red borders |
| `bg-blue-100` | `bg-red-100` | Light red backgrounds |
| `from-blue-600 to-blue-900` | `from-red-600 to-red-900` | Red gradients |

### Option 2: Create Color Configuration

Add to `lib/config.ts`:

```typescript
// Color mapping for easy theme switching
export const THEME_COLORS = {
  primary: {
    50: 'blue-50',
    100: 'blue-100',
    300: 'blue-300',
    600: 'blue-600',
    700: 'blue-700',
    900: 'blue-900',
  },
  secondary: {
    50: 'zinc-50',
    900: 'zinc-900',
  },
};
```

### Option 3: Tailwind Theme Extension

Edit `tailwind.config.ts` (if it exists):

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        'dcnl-primary': '#2563eb',
        'dcnl-accent': '#dc2626',
      },
    },
  },
};
```

---

## Add New Sections

### Example 1: Add Testimonials Section

Create new file: `components/TestimonialsSection.tsx`

```typescript
'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Okonkwo',
      company: 'Chevron Nigeria',
      content: 'DCNL delivered our offshore platform on schedule and within budget.',
      stars: 5,
    },
    {
      name: 'Amara Adeyemi',
      company: 'Dangote Industries',
      content: 'Professional team, excellent craftsmanship, highly recommended.',
      stars: 5,
    },
    {
      name: 'Ibrahim Hassan',
      company: 'MTN Nigeria',
      content: 'Reliable partner for our infrastructure needs. Great communication.',
      stars: 5,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-zinc-900 text-center mb-16">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-zinc-900">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Then import and add to `app/page.tsx`:

```typescript
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection /> {/* Add here */}
      <StatsSection />
      {/* ... rest of sections */}
    </>
  );
}
```

### Example 2: Add Team Section

Create new file: `components/TeamSection.tsx`

```typescript
'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function TeamSection() {
  const team = [
    {
      name: 'Dr. Michael Okafor',
      role: 'Chief Executive Officer',
      image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/michael.jpg',
    },
    {
      name: 'Eng. Fatima Aliyu',
      role: 'Chief Technical Officer',
      image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/fatima.jpg',
    },
    {
      name: 'David Ejiro',
      role: 'Operations Manager',
      image: 'https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/v1/david.jpg',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-zinc-900 text-center mb-16">
          Our Leadership Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Advanced Customizations

### Add Contact Form

Use a service like:
- **Formspree**: https://formspree.io
- **Basin**: https://usebasin.com
- **Web3Forms**: https://web3forms.com

Example with Web3Forms in `components/ContactForm.tsx`:

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
      
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full mb-4 p-3 border rounded"
        required
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full mb-4 p-3 border rounded"
        required
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        className="w-full mb-4 p-3 border rounded"
        rows={5}
        required
      />
      
      {submitted && <p className="text-green-600 mb-4">Thank you! We'll be in touch.</p>}
      
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
```

---

## Need More Help?

Check the full documentation in:
- `WEBSITE_DEVELOPMENT.md` - Comprehensive guide
- `QUICKSTART.md` - Quick reference
- Component files - Inline comments explain the code

All components are well-commented and follow React best practices!
