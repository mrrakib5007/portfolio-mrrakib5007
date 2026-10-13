import { Plus_Jakarta_Sans, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  title: "Developer Mahabub Rahman Rakib",
  description: "Full Stack Developer in Dhaka",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className={`${plusJakartaSans.className} min-h-full flex flex-col antialiased bg-dark-bg`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
