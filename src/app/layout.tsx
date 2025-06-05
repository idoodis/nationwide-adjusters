import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <ThemeProvider>
          <Navigation />
          <main className="pt-16 bg-white dark:bg-gray-900">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
