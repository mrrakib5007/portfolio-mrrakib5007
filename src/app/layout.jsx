import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://mrrakib5007.vercel.app"),
  title: {
    default: "Mahabub Rahman Rakib | Full Stack Developer",
    template: "%s | Mahabub Rahman Rakib",
  },
  description:
    "Portfolio of Mahabub Rahman Rakib - MERN Stack & Next.js Full Stack Web Developer specializing in building modern, scalable, and responsive web applications.",
  keywords: [
    "Mahabub Rahman Rakib",
    "Full Stack Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "Web Developer Bangladesh",
    "Web Developer Dhaka",
    "JavaScript Developer",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [
    { name: "Mahabub Rahman Rakib", url: "https://mrrakib5007.vercel.app" },
  ],
  creator: "Mahabub Rahman Rakib",
  publisher: "Mahabub Rahman Rakib",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahabub Rahman Rakib | Full Stack Developer",
    description:
      "Explore production-grade full-stack web applications, interactive case studies, and engineering solutions built with Next.js and MERN stack.",
    url: "https://mrrakib5007.vercel.app",
    siteName: "Mahabub Rahman Rakib Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahabub Rahman Rakib - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahabub Rahman Rakib | Full Stack Web Developer",
    description:
      "Building high-performance, scalable web applications with MERN stack and Next.js.",
    creator: "@mrrakib5007",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className={`${plusJakartaSans.className} min-h-full flex flex-col antialiased bg-dark-bg selection:bg-cyan-500 selection:text-slate-950`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
