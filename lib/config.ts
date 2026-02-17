/**
 * Configuration file for DCNL Website
 * Update these values to customize the website content and images
 */

// ============================================================================
// HERO SECTION CONFIGURATION
// ============================================================================

export const HERO_CONFIG = {
  // Replace these URLs with your actual Cloudinary image URLs
  // Format: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v{version}/image-name.jpg
  slides: [
    {
      title: 'Destinyt Company Nigerian Limited',
      subtitle: 'Pioneering Excellence in Construction & Fabrication',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566261/IMG-20251015-WA0003_wwzihd.jpg',
    },
    {
      title: 'Steel Fabrication Excellence',
      subtitle: 'Precision Engineering for Modern Infrastructure',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566260/IMG-20251015-WA0006_o8zhh6.jpg',
    },
    {
      title: 'Offshore & Marine Solutions',
      subtitle: 'Specialized Services for Challenging Environments',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566261/IMG-20251015-WA0005_qlchfc.jpg',
    },
  ],
  // Rotating feature points shown in bottom-left of hero
  features: [
    'We specialize in Fabrications',
    'Offshore Activities',
    'Experienced Welders and Personnel',
    'Safety Compliance Excellence',
    'Timely Project Delivery',
  ],
  // Animation timings (in milliseconds)
  featureRotationInterval: 3000, // Time between feature rotations
  autoPlayInterval: 6000, // Time before slides auto-advance
};

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT_INFO = {
  phone: '+234 (0) 8060 314 497',
  phoneRaw: '2348060314497', // For tel: links
  email: 'info@dcnl.com',
  address: 'Oyigbo, Nigeria',
  // Optional: Full address for maps
  fullAddress: 'Port Harcourt - Aba Road, Oyigbo, Nigeria.',
};

// ============================================================================
// SOCIAL MEDIA LINKS
// ============================================================================

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/dcnlcompany',
  twitter: 'https://twitter.com/dcnlcompany',
  linkedin: 'https://linkedin.com/company/dcnlcompany',
  instagram: 'https://instagram.com/dcnlcompany',
};

// ============================================================================
// COMPANY INFORMATION
// ============================================================================

export const COMPANY_INFO = {
  name: 'Destinyt Company Nigerian Limited',
  shortName: 'DCNL',
  tagline: 'Excellence in Construction & Fabrication',
  description:
    'Destinyt Company Nigerian Limited - Excellence in construction, fabrication, and industrial solutions since 2009.',
  foundedYear: 2009,
  headquarters: 'Oyigbo, Nigeria',
};

// ============================================================================
// STATS CONFIGURATION
// ============================================================================

export const STATS_CONFIG = {
  stats: [
    {
      value: '15',
      label: 'Years of Experience',
      suffix: '+',
    },
    {
      value: '250',
      label: 'Projects Completed',
      suffix: '+',
    },
    {
      value: '25',
      label: 'Skilled Personnel',
      suffix: '+',
    },
    {
      value: '100',
      label: 'Safety Compliance Score',
      suffix: '%',
    },
  ],
};

// ============================================================================
// PROJECTS CONFIGURATION
// ============================================================================

export const PROJECTS_CONFIG = {
  projects: [
    {
      id: 1,
      title: 'Offshore Platform Fabrication',
      description: 'Complete fabrication and assembly of offshore oil platform structures',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566258/IMG-20251015-WA0028_l5juni.jpg',
      category: 'Offshore',
    },
    {
      id: 2,
      title: 'Industrial Complex Construction',
      description: 'Large-scale steel structure and industrial facility construction',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566258/IMG-20251015-WA0022_ixt9kt.jpg',
      category: 'Structural',
    },
    {
      id: 3,
      title: 'Bridge & Overpass Project',
      description: 'Design and construction of modern highway bridge infrastructure',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566259/IMG-20251015-WA0010_mo0jh5.jpg',
      category: 'Infrastructure',
    },
    {
      id: 4,
      title: 'Pipeline Installation',
      description: 'Comprehensive pipeline fabrication and offshore installation',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566258/IMG-20251015-WA0021_lekx5e.jpg',
      category: 'Fabrication',
    },
    {
      id: 5,
      title: 'Storage Tank Fabrication',
      description: 'High-capacity steel storage tanks for industrial applications',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566258/IMG-20251015-WA0020_pnrpmz.jpg',
      category: 'Fabrication',
    },
    {
      id: 6,
      title: 'Commercial Building Development',
      description: 'Modern commercial structures with advanced fabrication techniques',
      image:
        'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566258/IMG-20251015-WA0027_ddiy8y.jpg',
      category: 'Commercial',
    },
  ],
};

// ============================================================================
// SERVICES CONFIGURATION
// ============================================================================

export const SERVICES_CONFIG = {
  // Service categories (can be extended)
  services: [
    {
      id: 1,
      icon: 'Wrench',
      title: 'Steel Fabrication',
      description:
        'Custom steel fabrication and welding services for industrial and structural applications with precision engineering.',
    },
    {
      id: 2,
      icon: 'Building2',
      title: 'Structural Construction',
      description:
        'Comprehensive structural construction solutions for buildings, bridges, and industrial structures.',
    },
    {
      id: 3,
      icon: 'Zap',
      title: 'Industrial Installations',
      description:
        'Expert installation of industrial equipment, piping systems, and manufacturing infrastructure.',
    },
    {
      id: 4,
      icon: 'Anchor',
      title: 'Offshore Solutions',
      description:
        'Specialized fabrication and installation services for offshore platforms and marine projects.',
    },
    {
      id: 5,
      icon: 'Shield',
      title: 'Safety & Compliance',
      description:
        'Full compliance with international safety standards and certifications for all projects.',
    },
    {
      id: 6,
      icon: 'Cog',
      title: 'Maintenance Services',
      description:
        'Ongoing maintenance, repair, and optimization services to keep your infrastructure running smoothly.',
    },
  ],
};

// ============================================================================
// PROCESS WORKFLOW CONFIGURATION
// ============================================================================

export const PROCESS_CONFIG = {
  steps: [
    {
      number: 1,
      title: 'Consultation & Planning',
      description:
        'We meet with clients to understand requirements, conduct site assessments, and develop comprehensive project plans.',
    },
    {
      number: 2,
      title: 'Design & Engineering',
      description:
        'Our expert engineers create detailed designs using CAD and advanced modeling tools, ensuring compliance with standards.',
    },
    {
      number: 3,
      title: 'Fabrication',
      description:
        'Using state-of-the-art equipment and skilled personnel, we fabricate components with precision and quality control.',
    },
    {
      number: 4,
      title: 'Installation & Assembly',
      description:
        'On-site installation and assembly with rigorous safety protocols and professional project management.',
    },
    {
      number: 5,
      title: 'Testing & Inspection',
      description:
        'Comprehensive testing and third-party inspections to ensure all safety and quality standards are met.',
    },
    {
      number: 6,
      title: 'Maintenance & Support',
      description:
        'Ongoing support, maintenance, and optimization services to maximize your infrastructure longevity.',
    },
  ],
};

// ============================================================================
// FOOTER CONFIGURATION
// ============================================================================

export const FOOTER_CONFIG = {
  quickLinks: ['Home', 'Services', 'Projects', 'About', 'Contact'],
  services: [
    'Steel Fabrication',
    'Structural Construction',
    'Industrial Installation',
    'Offshore Solutions',
    'Maintenance',
  ],
  policyLinks: {
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
  },
};

// ============================================================================
// COLOR SCHEME (Tailwind classes)
// ============================================================================

export const COLORS = {
  primary: 'blue', // Primary color for main CTAs and accents
  base: 'zinc', // Base neutral color for backgrounds and text
  accent: 'red', // Accent color for logo/branding
  // Specific color values if needed
  primaryHex: '#2563eb', // Blue 600
  accentHex: '#dc2626', // Red 600
};

// ============================================================================
// METADATA & SEO
// ============================================================================

export const METADATA = {
  title: 'DCNL - Destinyt Company Nigerian Limited',
  description:
    'Premier construction, fabrication, and industrial solutions. Specializing in steel fabrication, structural construction, and offshore projects across Nigeria.',
  keywords:
    'construction, fabrication, steel, structural engineering, offshore, Nigeria, DCNL',
  ogImage: 'https://res.cloudinary.com/dwo5dlbmw/image/upload/v1769566261/IMG-20251015-WA0003_wwzihd.jpg',
  twitterHandle: '@dcnl',
};

// ============================================================================
// COMMON CUSTOMIZATION CHECKLIST
// ============================================================================

/*
 * BEFORE DEPLOYING, MAKE SURE TO UPDATE:
 *
 * 1. [ ] HERO_CONFIG.slides - Replace all Cloudinary image URLs with your own
 * 2. [ ] CONTACT_INFO - Update phone, email, and address
 * 3. [ ] SOCIAL_LINKS - Add your actual social media URLs
 * 4. [ ] COMPANY_INFO - Update company name, description, founding year
 * 5. [ ] STATS_CONFIG - Update with your actual metrics
 * 6. [ ] PROJECTS_CONFIG - Replace with your actual projects and images
 * 7. [ ] SERVICES_CONFIG - Customize service descriptions if needed
 * 8. [ ] FOOTER_CONFIG - Update policy links and footer content
 * 9. [ ] METADATA - Update SEO information and OG image
 * 10.[ ] Test all links (social media, contact forms, internal links)
 *
 * CLOUDINARY SETUP:
 * - Create a Cloudinary account at https://cloudinary.com
 * - Upload your images
 * - Copy the URL from the dashboard
 * - Replace the demo URLs with your actual URLs
 *
 * DEPLOYMENT:
 * - Build: npm run build
 * - Test: npm start
 * - Deploy to Vercel, Netlify, or your hosting provider
 */
