
# Swift Gym — Modern Gym Website (React + Vite + Tailwind)

Energetic, motivating, and trustworthy website for **swiftgym**.

## ✨ Features
- React + Vite + Tailwind, Framer Motion animations
- Responsive, sticky navbar, dark mode
- Hero with CTA, animated stats
- Programs grid with filters, schedule + calendar
- Trainers with social links + book session
- Membership plans with "Most Popular" highlight
- Contact form (email fallback), Google Maps embed
- Blog (SEO-friendly via `react-helmet-async`)
- PWA install support
- Accessibility-conscious markup (alt texts, labels)

## 🚀 Quick Start
```bash
npm i
npm run dev
```
Open the URL Vite prints.

## 🔧 Configure (optional)
Create `.env` in project root:
```
VITE_STRIPE_PAYMENT_LINK=your_stripe_payment_link   # (Payment Links) opens on "Choose Plan"
VITE_FORMSPREE_ID=your_formspree_id                 # if you want to use Formspree
```

If `VITE_STRIPE_PAYMENT_LINK` is not set, the **Choose Plan** buttons will call the gym (`tel:`).

## 🧾 Content
- Address: 2809 Route 88, Point Pleasant, NJ
- Phone: 732-701-3484
- Email: info@fitnessonpoint247.com
- Socials: Footer has Facebook/Instagram placeholders — add your URLs in `src/data.js`.

## 🖼️ Media
Hero and gallery images are loaded from Unsplash (hotlinked). Replace with your own assets in `src/data.js` if desired.

## 📦 Build
```bash
npm run build
npm run preview
```

## ✅ Notes
- The contact form uses a **mailto** fallback so every submit works out-of-the-box. For automated collection, set a Formspree ID.
- PWA icons are minimal placeholders; replace files in `/public` with your branding.
- This project contains only frontend code. For advanced Stripe flows (Checkout sessions, webhooks), add a small backend or use Stripe Payment Links as configured above.
