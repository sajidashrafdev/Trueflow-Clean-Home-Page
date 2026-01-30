# TrueFlow Cleaning Landing Page (React)

A modern, conversion-focused landing page for a window + solar panel cleaning business. Built with **React**, styled with **Tailwind CSS**, and powered by **lucide-react** icons. Includes a before/after gallery slider, service packages, FAQ accordion, quote form, blog cards, and a floating contact bubble.

---

## ✨ Features

- **Hero section + promotional banner**
- **Sticky navigation** with anchor links
- **Trust badges** (insured, experience, same-day quotes, etc.)
- **Services** cards with hover animations
- **Before / After gallery** with next/prev controls + dot navigation
- **Packages/pricing** section (includes “Most Popular” highlight)
- **Quick quote form** (UI ready)
- **Service area** section (map placeholder + served locations list)
- **Testimonials** section (widget placeholder)
- **4-stage process** interactive step selector
- **FAQ accordion**
- **Team section**
- **Blog/resources** cards
- **Final CTA**
- **Floating contact bubble** (call/email/chat)

---

## 🧰 Tech Stack

- **React**
- **Tailwind CSS**
- **lucide-react** (icons)

---

## 📦 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/trueflow-cleaning.git
   cd trueflow-cleaning
Install dependencies:

npm install
Run the dev server:

npm run dev
(or npm start if using CRA)

🔧 Required Dependencies
Install these if not already included:

npm i lucide-react
Tailwind setup (if not already configured):

npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
🗂️ Project Structure (Suggested)
src/
  components/
    SqueegeeCTAButton.jsx
    TrustBadge.jsx
    BenefitCard.jsx
    FloatingContactBubble.jsx
    ServiceCard.jsx
    PackageCard.jsx
  pages/
    TrueFlowCleaning.jsx
  App.jsx
  main.jsx
Your current code has all components in one file—totally fine. This structure is just recommended for maintainability.

▶️ Usage
Import and render the page component:

import TrueFlowCleaning from "./pages/TrueFlowCleaning";

export default function App() {
  return <TrueFlowCleaning />;
}
⚙️ Customization Guide
Update Business Info
Search and replace:

Phone: (555) 123-4567

Email: info@trueflowcleaning.com

Address: 123 Main Street...

Change Service Areas
Edit the list inside Areas We Serve section:

['Downtown', 'North End', 'South Side', ...]
Replace Images
All images are from Unsplash. Replace any image: URL in:

services

beforeAfterGallery

teamMembers

blogPosts

hero background image

Edit Pricing Packages
Modify the packages array:

const packages = [
  { name: "Basic Clean", price: "$149", benefits: [...] },
  ...
];
🧩 Embeds To Add (Optional)
Google Reviews Widget
Replace the placeholder text in the Testimonials section with:

Google Reviews embed script, or

an iframe from a reviews provider.

Google Maps Embed
Replace the map placeholder div with a Google Maps iframe:

<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="384"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
/>
✅ Notes / Tips
The quote form is currently UI-only. To make it functional, connect it to:

Formspree, Getform, Firebase, Supabase, or your own API.

Consider adding:

input validation

success/error states

spam protection (honeypot / reCAPTCHA)

📄 License
MIT License — feel free to use and modify.

🙌 Credits
Images: Unsplash

Icons: lucide-react


If you want, paste your repo name + deployment link (Vercel/Netlify) and I’ll tailor the README (badges, live demo section, screenshots, etc.).
You said:
give me githu b readme file complete content please
ChatGPT said:
# TrueFlow Cleaning — React Landing Page

A modern, high-converting landing page for a **window cleaning + solar panel cleaning** business. Built with **React**, styled with **Tailwind CSS**, and using **lucide-react** icons. Includes interactive sections like **before/after gallery**, **FAQ accordion**, **4-stage process tabs**, and a **floating contact bubble**.

---

## 🚀 Live Demo

> Add your deployed link here (Vercel/Netlify):
- **Demo:** https://your-demo-link.com

---

## 🧩 What’s Included

- ✅ Promotional banner (limited-time offer)
- ✅ Sticky navigation with anchor links
- ✅ Hero section with CTA buttons
- ✅ Trust badges (insured, eco-friendly, no hidden fees, etc.)
- ✅ “Why Choose Us” benefit cards
- ✅ Services section with hover animation cards
- ✅ Before/After gallery slider with controls
- ✅ Pricing / packages (with “Most Popular” highlight)
- ✅ Quick quote form (UI ready)
- ✅ Service area section (map placeholder + area list)
- ✅ Testimonials section (widget placeholder)
- ✅ 4-stage cleaning process (interactive step selector)
- ✅ FAQ accordion
- ✅ Team section
- ✅ Blog/resources cards
- ✅ Final CTA section
- ✅ Floating contact bubble (call/email/chat)

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **lucide-react** (icons)

---

## 📦 Getting Started

### 1) Clone the Repository
```bash
git clone https://github.com/your-username/trueflow-cleaning.git
cd trueflow-cleaning
2) Install Dependencies
npm install
3) Run the Development Server
npm run dev
If you’re using Create React App (CRA), run:

npm start
4) Build for Production
npm run build
✅ Required Dependencies
Install icons:

npm i lucide-react
Tailwind CSS Setup (if not already installed)
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Update tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
Add Tailwind directives in src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
📁 Suggested Project Structure
Your current code works in a single file, but this structure helps as the project grows:

src/
  pages/
    TrueFlowCleaning.jsx
  components/
    SqueegeeCTAButton.jsx
    TrustBadge.jsx
    BenefitCard.jsx
    FloatingContactBubble.jsx
    ServiceCard.jsx
    PackageCard.jsx
  App.jsx
  main.jsx
  index.css
▶️ Usage
Render the page in App.jsx:

import TrueFlowCleaning from "./pages/TrueFlowCleaning";

export default function App() {
  return <TrueFlowCleaning />;
}
🔧 Customization
Update Business Details
Search & replace these placeholders in the component:

📞 Phone: (555) 123-4567

✉️ Email: info@trueflowcleaning.com

📍 Address: 123 Main Street, Your City, ST 12345

✅ Offer text: Get $25 OFF Your First Service! Book Before Jan 31st

Update Service Areas
Edit the list in “Areas We Serve” section:

['Downtown', 'North End', 'South Side', 'West Hills', ...]
Replace Images
All images are currently from Unsplash. Replace any image / before / after URLs in:

services

beforeAfterGallery

teamMembers

blogPosts

hero background image

🧠 Forms & Integrations (Optional)
Make the Quote Form Functional
Currently, the quote form is UI-only. Options to connect it:

Formspree / Getform (easy)

Firebase / Supabase

Custom backend API

Email sending service (SendGrid/Mailgun via backend)

Recommended additions:

input validation

success/error message states

spam prevention (honeypot or reCAPTCHA)

🗺️ Replace the Map Placeholder
Swap the placeholder div with a Google Maps embed iframe:

<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="384"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
></iframe>
⭐ Add Google Reviews Widget
The testimonials section contains a placeholder. You can embed:

Google Reviews widget provider

Elfsight / SociableKIT / Trustindex embed

Or your own fetched reviews display

📸 Screenshots
Add screenshots here (recommended for GitHub)

![Hero Screenshot](./screenshots/hero.png)
![Before After](./screenshots/before-after.png)
![Pricing](./screenshots/pricing.png)
📌 Roadmap
 Hook quote form to an API (email + CRM)

 Add booking calendar integration

 Add blog post pages + routing

 Add dark mode toggle

 Improve SEO (meta tags + Open Graph)

 Add analytics tracking (GA4 / Plausible)

🤝 Contributing
Contributions are welcome!

Fork the repo

Create a branch: git checkout -b feature/my-feature

Commit changes: git commit -m "Add my feature"

Push branch: git push origin feature/my-feature

Open a Pull Request

📄 License
This project is licensed under the MIT License.

🙌 Credits
Images: Unsplash (used via direct URLs)

Icons: lucide-react

UI: Tailwind CSS



If you want, I can also generate a **professional README** with badges (build, license, deploy), and a “Features by Section” table—just tell me your **GitHub repo name** and whether you deployed on **Vercel or Netlify**.
