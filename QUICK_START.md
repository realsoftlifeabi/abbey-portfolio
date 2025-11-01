# LiftOff Portfolio - Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the redesigned portfolio.

---

## 🎨 What's New

### Homepage Sections (in order)

1. **Hero** - Conversion-focused headline with animated background
2. **Case Studies** - Featured projects (first 3)
3. **Offer Stack** - Three service tiers with pricing
4. **Process** - 4-step timeline (Discovery → Design → Build → Launch)
5. **Testimonials** - Founder quotes with outcomes
6. **FAQ** - Accordion-style questions
7. **CTA** - Contact section with WhatsApp/Email

### Navigation

- **Header**: Sticky with theme toggle and "Book a LiftOff Audit" CTA
- **Footer**: Service links, social links, trust badges

### Theme

- Light/dark mode toggle (top right)
- LiftOff brand colors (electric blue, orange)
- Smooth animations throughout

---

## 📝 Next Actions

### Content Updates Needed

#### 1. Update Project Frontmatter

Add these fields to your project MDX files (e.g., `/projects/FI-Options/index.mdx`):

```yaml
---
title: 'FI Options'
description: 'Multilingual trading platform for European and African markets'
category: 'fintech'
outcomeType: 'conversion_lift'
problem: 'Existing multi-language site lacked clarity for European vs. African traders; inconsistent conversion tracking.'
approach: 'Conducted messaging workshop, produced modular Next.js layout, built locale-aware components, embedded analytics events.'
result: 'Faster bilingual onboarding, reduced bounce rate on pricing page, launch-ready CMS structure.'
outcome: 'Reduced bounce rate by 25% on pricing page'
metrics:
  - label: 'Bounce Rate Reduction'
    value: '25%'
  - label: 'Launch Time'
    value: '7 days'
---
```

#### 2. Add Cover Images

Ensure each project has:

```
/projects/[slug]/images/cover.jpg
```

#### 3. Update Contact Links

In `components/sections/CTA.tsx` and `components/ui/Footer.tsx`:

- Update WhatsApp number
- Update email address
- Update social media links

#### 4. Add Company Logos (Optional)

For the trust bar, add logos to:

```
/public/logos/fi-options.svg
/public/logos/fin-sync.svg
/public/logos/portal-apply.svg
```

---

## 🧪 Testing

### Run Linter

```bash
npm run lint
```

### Type Check

```bash
npm run type-check
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## 🎯 Key Features

### Conversion Optimization

- Clear value proposition in hero
- Multiple CTAs throughout
- Social proof (testimonials, trust bar)
- Pricing transparency
- FAQ to handle objections

### Performance

- Framer Motion animations
- Scroll-triggered reveals
- Optimized images (when using Next.js Image)
- Code splitting

### Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast theme support

---

## 🔧 Customization

### Change Brand Colors

Edit `app/globals.css`:

```css
:root {
  --liftoff-blue: oklch(0.55 0.22 250);
  --liftoff-orange: oklch(0.68 0.18 45);
  /* ... */
}
```

### Update Service Offerings

Edit `components/sections/OfferStack.tsx`:

- Modify `offers` array
- Update pricing, features, timelines

### Add/Remove Testimonials

Edit `lib/testimonials.ts`:

- Add new testimonial objects
- Update company names, quotes, outcomes

### Modify FAQ

Edit `lib/faqs.ts`:

- Add new questions
- Update answers
- Change categories

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections are fully responsive with mobile-first design.

---

## 🐛 Troubleshooting

### Issue: Lint errors about missing modules

**Solution**: Run `npm install` to install dependencies

### Issue: Images not loading

**Solution**: Ensure images exist at `/projects/[slug]/images/cover.jpg`

### Issue: Theme toggle not working

**Solution**: Check browser console for errors, ensure ThemeProvider is wrapping app

### Issue: Animations not smooth

**Solution**: Check browser performance, reduce motion in OS settings may disable animations

---

## 📦 File Structure

```
abbey-portfolio/
├── app/
│   ├── layout.tsx (Root layout with theme)
│   ├── page.tsx (Homepage with all sections)
│   ├── globals.css (Theme colors)
│   └── portfolio/
│       └── page.tsx (Portfolio index)
├── components/
│   ├── sections/ (Hero, OfferStack, Process, etc.)
│   ├── ui/ (Header, Footer, Button, Card)
│   └── providers/ (ThemeProvider)
├── lib/
│   ├── testimonials.ts
│   ├── faqs.ts
│   ├── logos.ts
│   ├── motion-variants.ts
│   └── projects.ts
├── types/
│   └── project.ts (Extended with case study fields)
└── projects/
    └── [slug]/
        ├── index.mdx
        └── images/
            └── cover.jpg
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm run start
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics 4

1. Get GA4 tracking ID
2. Add to `app/layout.tsx`:

```tsx
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
```

### PostHog (Optional)

1. Sign up at posthog.com
2. Add PostHog script to layout
3. Track custom events on CTAs

---

## ✅ Pre-Launch Checklist

- [ ] All project cover images added
- [ ] Contact information updated
- [ ] Social media links verified
- [ ] Testimonials reviewed for accuracy
- [ ] Pricing confirmed
- [ ] FAQ answers updated
- [ ] Build passes without errors
- [ ] Tested on mobile, tablet, desktop
- [ ] Light/dark theme tested
- [ ] All CTAs tested
- [ ] Lighthouse score > 90

---

## 📞 Support

For questions or issues:

- Review `IMPLEMENTATION_SUMMARY.md`
- Check the scope of work document
- Test in development mode first

---

**Ready to launch!** 🚀
