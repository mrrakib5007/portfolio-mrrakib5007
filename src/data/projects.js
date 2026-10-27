export const projects = [
  {
    id: "itlancerbd",
    title: "IT Lancer BD (New Version)",
    badge: "IT Resource Platform",
    categories: ["nextjs", "fullstack"],
    image: "/projects/itlancerbd.png",
    description:
      "A Bangladesh-focused IT resource platform built with Next.js 16 and React 19. It brings together practical online tools, job and admission opportunities, public-service links, downloadable resources, and productivity utilities for everyday tasks. Features include CV and document tools, photo editing, NID print preparation, bilingual content, and responsive light and dark themes, powered by MongoDB and a custom Node.js and Express.js backend.",
    role: "Full Stack Engineer & Core Architect",
    duration: "Jan 2025 - Present",
    client: "It Lancer BD",
    liveUrl: "https://pro.itlancerbd.com",
    githubUrl: "https://github.com/mrrakib5007/itlancerbd",
    tags: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "SweetAlert2",
      "next-themes",
    ],
    techStack: [
      { category: "Frontend Framework", items: ["Next.js 16 (App Router)", "React 19"] },
      { category: "Styling & UI", items: ["Tailwind CSS 4", "Lucide / React Icons", "SweetAlert2"] },
      { category: "Backend & API", items: ["Node.js", "Express.js RESTful APIs"] },
      { category: "Database & Storage", items: ["MongoDB Atlas", "Mongoose ORM"] },
      { category: "Authentication & Security", items: ["JWT Tokenization", "Secure HttpOnly Cookies"] },
      { category: "Deployment", items: ["Vercel (Frontend)", "VPS Cloud Server (Backend)"] },
    ],
    features: [
      "Dynamic CV Builder with live browser-side PDF document generation and printing tools.",
      "In-browser photo resizing and NID print layout preparation utilities.",
      "Categorized government public service directories, circulars, and educational admissions feed.",
      "Bilingual support (Bangla & English) with seamless dark and light mode synchronization.",
      "JWT-secured administrative dashboard for managing downloadable utilities and notices.",
    ],
    challenges: [
      {
        title: "Client-side PDF & High-DPI Document Generation",
        description:
          "Generating pixel-perfect PDF resumes and printable NID templates across various mobile and desktop browsers created major layout inconsistencies. Solved by decoupling document styling from DOM rendering using headless SVG canvas rendering with strict print media CSS stylesheets.",
      },
      {
        title: "Migrating to React 19 & Next.js 16",
        description:
          "Adapting to the latest Next.js 16 Partial Prerendering and Turbopack compiler introduced edge-case build errors with legacy third-party DOM-manipulating packages. Refactored dynamic imports and updated components to use Next.js 16 compatible patterns.",
      },
      {
        title: "Optimizing High-Volume Asset Loading on Low Bandwidth",
        description:
          "Users across rural Bangladesh often access the platform via 3G/4G cellular networks. Achieved sub-second initial paint by optimizing image pipelines with WebP format, aggressive edge caching on Vercel, and database query indexing in MongoDB.",
      },
    ],
    improvements: [
      {
        title: "AI-Powered CV Reviewer & Tailoring",
        description:
          "Integrating Gemini API to automatically review uploaded resumes, suggest grammar improvements, and format bullets specifically matched to job descriptions.",
      },
      {
        title: "Progressive Web App (PWA) Offline Access",
        description:
          "Adding Service Workers and IndexedDB persistence so users can access saved tools and previously downloaded circulars even with unstable internet connectivity.",
      },
      {
        title: "Integrated Micro-Payment Gateway",
        description:
          "Implementing bKash, Nagad, and SSLCommerz payment webhooks for automated premium template downloads and specialized mock examination registration.",
      },
    ],
  },
  {
    id: "dainik-sangbad",
    title: "Dainik Sangbad (দৈনিক সংবাদ)",
    badge: "News Portal",
    categories: ["nextjs", "fullstack"],
    image: "/projects/dainik-sangbad.png",
    description:
      "A modern, fast, and fully responsive Bengali online news portal application built with Next.js (App Router) and Tailwind CSS. Features live weather, real-time prayer timings, category filtering, Better Auth login/signup, and proxy-secured profile routing.",
    role: "Full Stack Developer",
    duration: "Nov 2024 - Dec 2024",
    client: "Personal / Open Source",
    liveUrl: "https://dainik-sangbad.vercel.app",
    githubUrl: "https://github.com/mrrakib5007/dainik-sangbad",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "SweetAlert2",
      "REST APIs",
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js (App Router)", "TypeScript", "Tailwind CSS"] },
      { category: "State & Data Fetching", items: ["React Server Components (RSC)", "Next.js Incremental Static Regeneration (ISR)"] },
      { category: "Authentication", items: ["Better Auth", "OAuth 2.0 (Google, GitHub)"] },
      { category: "External APIs", items: ["OpenWeatherMap API", "Aladhan Islamic Prayer Times API"] },
      { category: "Deployment", items: ["Vercel with Global Edge Network"] },
    ],
    features: [
      "Dynamic breaking news ticker with real-time headline auto-scrolling.",
      "Live city weather report and district-specific prayer timetable synchronized automatically.",
      "Multi-level news categorization (National, Politics, International, Tech, Sports, Lifestyle).",
      "Robust user authentication powered by Better Auth with session management and user bookmarks.",
      "Social share integration and reading progress indicator for engaging editorial consumption.",
    ],
    challenges: [
      {
        title: "Time-Sensitive External API Synchronization & Rate Limits",
        description:
          "Fetching external weather and prayer time data on every client page load caused API throttling. Resolved by utilizing Next.js Server Components with cached fetch revalidation intervals (`revalidate: 3600`), reducing external API consumption by over 90%.",
      },
      {
        title: "Bengali Typography Rendering & Mobile Legibility",
        description:
          "Default web fonts resulted in clipped diacritics and awkward line breaks in mobile Bengali typography. Integrated Google's Noto Serif Bengali with tailored line-height and font-smoothing rules for maximum editorial readability.",
      },
      {
        title: "Handling Concurrent Readers on Breaking News",
        description:
          "High traffic surges during breaking news cycles risked database overload. Implemented Incremental Static Regeneration (ISR) so news pages are served as static HTML from edge CDN with background updates.",
      },
    ],
    improvements: [
      {
        title: "Admin Editorial CMS Dashboard",
        description:
          "Building a complete Rich Text Markdown editorial dashboard with image drag-and-drop, revision history, and scheduled publishing.",
      },
      {
        title: "Web Push Notifications",
        description:
          "Integrating Firebase Cloud Messaging to send instant push notifications to subscribed readers when breaking news is published.",
      },
      {
        title: "Text-to-Speech (TTS) Audio Article Reader",
        description:
          "Adding a browser-based speech synthesis audio player allowing readers to listen to full Bengali articles while commuting.",
      },
    ],
  },
  {
    id: "abira-logistics",
    title: "ABIRA Logistics & Transport Service",
    badge: "Supply Chain",
    categories: ["nextjs", "frontend"],
    image: "/projects/abira-logistics.png",
    description:
      "A high-performance freight and supply chain business web platform. Showcases multimodal cargo movement, customs clearance brokerage, warehousing operations, and seamless quote acquisition flows.",
    role: "Frontend Engineer & UI Designer",
    duration: "Aug 2024 - Oct 2024",
    client: "ABIRA Logistics Group",
    liveUrl: "https://abira-logistics.netlify.app/",
    githubUrl: "https://github.com/mrrakib5007/abira-logistics",
    tags: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Next Themes",
      "SweetAlert2",
    ],
    techStack: [
      { category: "Frontend Framework", items: ["Next.js (App Router)", "React"] },
      { category: "Styling & Motion", items: ["Tailwind CSS", "Framer Motion Animations"] },
      { category: "Theme System", items: ["next-themes", "CSS Variables"] },
      { category: "Form Validation", items: ["React Hook Form", "SweetAlert2 Feedback Alerts"] },
      { category: "Hosting & CI/CD", items: ["Netlify Continuous Deployment", "Git Webhooks"] },
    ],
    features: [
      "Interactive Multimodal Freight calculator for Air, Sea, Road, and Rail cargo estimates.",
      "Step-by-step Request-A-Quote modal with instant validation and dynamic pricing indicators.",
      "Detailed service catalogs highlighting customs brokerage, bonded warehousing, and cold-chain logistics.",
      "High-contrast Dark/Light theme switching with smooth transitions and persistent preferences.",
      "Optimized hero video backgrounds and scroll-triggered entrance animations.",
    ],
    challenges: [
      {
        title: "Complex Multi-Step Quote Calculator UX",
        description:
          "Designing an intuitive quote estimator that accommodates variable cargo dimensions, weight classes, and transit types without overwhelming the user. Solved by breaking the form into an interactive step-by-step stepper with real-time feedback.",
      },
      {
        title: "Maintaining 60FPS Animations with Heavy Media Assets",
        description:
          "The client requested dynamic scroll animations alongside background video assets. Optimized GPU compositing using Tailwind `will-change-transform` and lazy-loading non-critical offscreen motion components.",
      },
    ],
    improvements: [
      {
        title: "Real-Time GPS Shipment Tracking",
        description:
          "Connecting live container tracking APIs with interactive Mapbox/Leaflet map overlays for clients to monitor consignments in real time.",
      },
      {
        title: "Client Portal & Invoice Management",
        description:
          "Adding a secured customer portal for corporate partners to access bills of lading, payment receipts, and customs clearance documents.",
      },
    ],
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id);
}
