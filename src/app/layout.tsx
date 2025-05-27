import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nationwide Adjusters of America, LLC | Professional Insurance Claims Adjusters",
  description: "Expert insurance claims adjusting services nationwide. We help policyholders maximize their insurance claims for residential, commercial, and catastrophe losses.",
  keywords: "insurance adjusters, public adjusters, claims adjusting, property damage, insurance claims, nationwide adjusters",
  openGraph: {
    title: "Nationwide Adjusters of America, LLC",
    description: "Expert insurance claims adjusting services nationwide",
    url: "https://nationwideadjusters.com",
    siteName: "Nationwide Adjusters of America",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nationwide Adjusters of America",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
