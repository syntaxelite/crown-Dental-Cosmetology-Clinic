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
  title: "Dhiya Physiocare and Childtherapy Clinic | Physiotherapy & Child Therapy in Erode",
  description:
    "Physiotherapy and child therapy care in Erode, Tamil Nadu. Patient-centered rehabilitation support, movement care, and a comfortable family-friendly clinic experience.",
  keywords: [
    "Physiotherapy clinic in Erode",
    "Child therapy in Erode",
    "Physiocare Erode",
    "Rehabilitation clinic Erode",
    "Movement therapy Erode",
    "Physiotherapy and child therapy Tamil Nadu",
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
