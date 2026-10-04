import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crown Dental & Cosmetology Clinic | Dental & Cosmetic Care in Erode",
  description:
    "Premium dental and cosmetic care in Erode, Tamil Nadu. Comprehensive dental services, cosmetic dentistry, and permanent makeup under one roof.",
  keywords: [
    "Dental clinic in Erode",
    "Dentist in Erode",
    "Dental implants Erode",
    "Invisalign Erode",
    "Cosmetic dentistry Erode",
    "Permanent makeup Erode",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
