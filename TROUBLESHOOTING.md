# DCNL Website - Troubleshooting & FAQ

## Frequently Asked Questions

### Q: How do I run the website locally?
**A:** 
```bash
cd /workspaces/dcnl
npm install  # Only needed first time
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Q: How do I update the company contact information?
**A:** 
Edit the contact details in these places:
1. `lib/config.ts` - Centralized config (recommended)
2. `components/Footer.tsx` - Direct edit
3. `components/CTASection.tsx` - CTA contact info

### Q: Where do I add my images?
**A:** 
1. Create a Cloudinary account (free tier available)
2. Upload your images to Cloudinary
3. Copy the image URLs
4. Replace the demo URLs in components:
   - Hero images: `components/HeroSection.tsx`
   - Project images: `components/ProjectsSection.tsx`

### Q: How do I change the website colors?
**A:** 
Replace Tailwind color classes:
- Blue theme: `bg-blue-600`, `text-blue-300`, etc.
- Red theme: Replace `blue` with `red`
- Green theme: Replace `blue` with `green`

See `CUSTOMIZATION_EXAMPLES.md` for detailed color change guide.

### Q: Can I add more services/projects/stats?
**A:** 
Yes! Simply add more items to the arrays in the component files:
- Services: `components/ServicesSection.tsx` (line ~6)
- Projects: `components/ProjectsSection.tsx` (line ~9)
- Stats: `components/StatsSection.tsx` (line ~15)
- Process steps: `components/ProcessSection.tsx` (line ~8)

---

## Common Issues & Solutions

### Issue: Images Not Showing

**Problem:** Images appear as broken/missing

**Solutions:**

1. **Check URL validity:**
   - Copy the Cloudinary URL into your browser address bar
   - Image should load in the browser
   - If not, the URL is incorrect

2. **Verify Cloudinary account:**
   - Log into your Cloudinary account
   - Check the image exists in Media Library
   - Copy the URL directly from Cloudinary dashboard

3. **Check image format:**
   - Use supported formats: JPG, PNG, WebP, GIF
   - Ensure image file is not corrupted

4. **Network issues:**
   - Clear browser cache: Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
   - Try in incognito/private window
   - Check internet connection

**Example URL Fix:**
```javascript
// Wrong (incomplete)
image: 'https://res.cloudinary.com/demo/image/upload/my-image'

// Correct
image: 'https://res.cloudinary.com/demo/image/upload/v1234567890/my-image.jpg'
```

---

### Issue: Hero Section Not Sliding

**Problem:** Hero images don't change, or text doesn't update

**Solutions:**

1. **Check browser console:**
   - Open DevTools (F12 or right-click → Inspect)
   - Check Console tab for errors
   - Screenshot any error messages

2. **Verify slideshow data:**
   ```typescript
   // In HeroSection.tsx, check this around line 15:
   const heroSlides = [
     // Should have at least 2-3 slides
     { title: '...', subtitle: '...', image: '...' },
     { title: '...', subtitle: '...', image: '...' },
   ];
   ```

3. **Check animation timings:**
   - Sliding timing: 6000ms (6 seconds) default
   - If too fast/slow, adjust the interval values
   - Max 10+ seconds for good UX

4. **Mobile responsiveness:**
   - Test on actual mobile device or DevTools mobile view
   - Ensure images load at smaller sizes

---

### Issue: Layout Broken on Mobile

**Problem:** Sections don't display correctly on phones/tablets

**Solutions:**

1. **Use Chrome DevTools:**
   - Press F12 to open DevTools
   - Click device toggle icon (top-left of DevTools)
   - Select different device sizes to test

2. **Check Tailwind responsive classes:**
   - `sm:` - 640px+
   - `md:` - 768px+
   - `lg:` - 1024px+
   - Classes without prefix apply to all sizes

3. **Common responsive fixes:**
   ```typescript
   // Wrong - no mobile styling
   className="grid grid-cols-3 gap-8"
   
   // Correct - responsive grid
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
   ```

4. **Test actual devices:**
   - Use actual phone/tablet if possible
   - Share preview link with others to test
   - Note any specific device/orientation issues

---

### Issue: Animations Laggy/Stuttering

**Problem:** Sections feel slow or animations are jittery

**Solutions:**

1. **Check system resources:**
   - Close unnecessary browser tabs
   - Close other applications
   - Restart browser if very slow

2. **Reduce animation complexity:**
   ```typescript
   // Slower animation = fewer frames = smoother
   // In AnimatedCounter component:
   const increment = target / 20; // Was 30, now 20 = faster
   }, 100); // Was 50ms, now 100ms = smoother
   ```

3. **Disable heavy effects if needed:**
   - Background images can cause lag
   - Large video backgrounds are demanding
   - Consider static backgrounds on slow devices

4. **Check network:**
   - Slow internet can delay image loading
   - Large images cause rendering delays
   - Compress images with Cloudinary transformations

---

### Issue: Text Content Not Displaying Correctly

**Problem:** Text overlaps, is cut off, or hard to read

**Solutions:**

1. **Check responsive text sizes:**
   ```typescript
   // Wrong - same size on all screens
   className="text-4xl"
   
   // Correct - responsive sizing
   className="text-3xl sm:text-4xl lg:text-5xl"
   ```

2. **Verify text contrast:**
   - Dark text on dark backgrounds not visible
   - Use proper color combinations:
     - White text on blue: ✅ Good
     - Gray text on white: ✅ Good
     - Dark gray on dark blue: ❌ Bad

3. **Check line length:**
   - Very long lines hard to read
   - Use `max-w-2xl` or `max-w-3xl` containers
   - Ensure padding around text

4. **Font loading:**
   - Check that Inter font is loaded from `layout.tsx`
   - Fallback to system fonts if needed

---

### Issue: Buttons Don't Work or Not Clickable

**Problem:** CTA buttons don't respond or aren't visible

**Solutions:**

1. **Verify button component:**
   ```typescript
   // Ensure Button is imported
   import { Button } from '@/components/ui/button';
   
   // Check component exists at:
   // /workspaces/dcnl/components/ui/button.tsx
   ```

2. **Check z-index conflicts:**
   ```typescript
   // Wrong - button hidden behind overlay
   <div className="z-0">
     <Button className="z-10">Click me</Button> {/* z-10 < z-20 overlay */}
   </div>
   <div className="z-20"> {/* This covers button */}
   
   // Correct
   <div className="z-10">
     <Button>Click me</Button>
   </div>
   ```

3. **Add click handlers:**
   ```typescript
   // Button should do something
   <Button onClick={() => window.location.href = '/contact'}>
     Request Quote
   </Button>
   ```

4. **Check mobile touch:**
   - Ensure button padding is large enough for touch
   - Use `p-4` or `px-6 py-4` minimum
   - Test with actual finger touches, not mouse

---

### Issue: Cards/Sections Not Aligned or Spaced Properly

**Problem:** Uneven spacing, misaligned columns, or overlapping elements

**Solutions:**

1. **Check gap values:**
   ```typescript
   // Wrong - inconsistent gaps
   className="grid gap-4 md:gap-8 lg:gap-4"
   
   // Correct
   className="grid gap-6 md:gap-8 lg:gap-8"
   ```

2. **Verify max-width containers:**
   ```typescript
   // Ensure all sections use max-w
   <div className="max-w-7xl mx-auto">
     {content}
   </div>
   ```

3. **Check for padding issues:**
   ```typescript
   // Section padding should be consistent
   className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
   ```

4. **Grid column issues:**
   ```typescript
   // If grid is misaligned, check columns:
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
   // Should have equal number of items or use auto-fit
   ```

---

### Issue: Hover Effects Not Working

**Problem:** Cards don't highlight on hover, or hover effects are weak

**Solutions:**

1. **Verify hover classes:**
   ```typescript
   // Correct hover implementation
   className="border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
   ```

2. **Check for `pointer-events` conflicts:**
   ```typescript
   // Wrong - element not interactable
   className="pointer-events-none"
   
   // Correct
   className="hover:cursor-pointer" // Explicitly add if needed
   ```

3. **Mobile hover limitation:**
   - Hover doesn't work on touch devices
   - Consider adding focus states for mobile
   - Use `group` and `group-hover:` for complex interactions

4. **Transition timing:**
   ```typescript
   // Very fast - might not be noticeable
   className="transition-all duration-100"
   
   // Better
   className="transition-all duration-300"
   ```

---

### Issue: Stats Counter Not Animating

**Problem:** Numbers don't count up, stuck at 0 or final value

**Solutions:**

1. **Check Intersection Observer:**
   - Stats animation should trigger when scrolled to
   - Component uses basic state (no scroll detection currently)
   - Add IntersectionObserver if needed (see advanced example below)

2. **Verify counter configuration:**
   ```typescript
   // Check stat values are numbers
   const stats = [
     { value: '15', label: '...', suffix: '+' }, // ✅ Good
     { value: 'fifteen', label: '...', suffix: '+' }, // ❌ Bad
   ];
   ```

3. **Animation speed adjustment:**
   ```typescript
   // In StatsSection.tsx, AnimatedCounter component:
   const increment = target / 30; // Increase divisor for slower
   }, 50); // Increase interval for smoother
   ```

---

### Issue: Images Loading Slowly

**Problem:** Hero or project images take time to load, causing layout shift

**Solutions:**

1. **Use Cloudinary transformations:**
   ```javascript
   // Optimize image sizing
   const url = `https://res.cloudinary.com/YOUR_ACCOUNT/image/upload/w_1200,h_600,c_fill,q_80/image.jpg`;
   // w_1200 = width 1200px
   // q_80 = quality 80% (smaller file)
   // c_fill = crop to fit
   ```

2. **Preload hero images:**
   ```typescript
   // Already done with priority prop
   <Image
     src={heroImage}
     alt="Hero"
     priority  // ✅ This preloads the image
     unoptimized // Used for Cloudinary
   />
   ```

3. **Add placeholder/skeleton:**
   - Show gray placeholder while loading
   - Prevents layout shift (CLS - Cumulative Layout Shift)

4. **Use WebP format if possible:**
   ```javascript
   // Cloudinary auto-serves best format
   // WebP for modern browsers, PNG for older ones
   ```

---

### Issue: Console Errors

**Problem:** Red errors in browser console

**Common errors & fixes:**

1. **"Cannot find module":**
   ```
   Error: Cannot find module '@/components/ui/button'
   Fix: Check file path, ensure file exists
   ```

2. **"useEffect missing dependency":**
   ```
   Warning: useEffect has a missing dependency
   Fix: Add missing variables to dependency array
   ```

3. **"Hydration mismatch":**
   ```
   Error: Hydration failed
   Fix: Ensure no state changes during SSR render
   ```

**How to report console errors:**
1. Open DevTools (F12)
2. Click Console tab
3. Take screenshot of error message
4. Note what action caused it
5. Check WEBSITE_DEVELOPMENT.md for that feature

---

## Performance Optimization Tips

### Images
- [ ] Compress images with Cloudinary (add `q_80` to URL)
- [ ] Use appropriate dimensions (not 4K images for thumbnails)
- [ ] Preload hero images
- [ ] Use `unoptimized` prop only for Cloudinary

### Animations
- [ ] Keep animations under 500ms
- [ ] Use `transition-all duration-300` as default
- [ ] Avoid animating `left`, `top` properties
- [ ] Use `transform` and `opacity` instead

### Code
- [ ] Use 'use client' only where needed
- [ ] Lazy load heavy components
- [ ] Minimize state updates in loops
- [ ] Cache static content

### Deployment
- [ ] Run `npm run build` before deploying
- [ ] Check build size: `npm run build -- --analyze`
- [ ] Enable gzip compression on server
- [ ] Use CDN for image delivery

---

## Getting Help

### When stuck, check in this order:
1. **Browser console** - Look for error messages (F12 → Console)
2. **Component file** - Read inline comments and code
3. **WEBSITE_DEVELOPMENT.md** - Detailed documentation
4. **CUSTOMIZATION_EXAMPLES.md** - Code examples for your use case
5. **External resources** - Next.js, Tailwind, React documentation

### Provide these details when asking for help:
- [ ] What are you trying to do?
- [ ] What error/issue do you see?
- [ ] Screenshot of problem
- [ ] Console errors (if any)
- [ ] What did you change recently?

---

## Quick Reference

### File Locations
| Task | File | Line |
|------|------|------|
| Change hero images | HeroSection.tsx | 15-30 |
| Update contact info | Footer.tsx or config.ts | 100+ |
| Add projects | ProjectsSection.tsx | 35-65 |
| Update stats | StatsSection.tsx | 15-32 |
| Change colors | Any component | varies |

### Important Links
- Cloudinary: https://cloudinary.com
- Tailwind Colors: https://tailwindcss.com/docs/customizing-colors
- Next.js Image: https://nextjs.org/docs/app/api-reference/components/image
- shadcn/ui: https://ui.shadcn.com/

### Common Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Check code for errors
npm start         # Run production build
```

---

**Still having issues? Reread this guide, check the documentation, then reach out with specific details!**
