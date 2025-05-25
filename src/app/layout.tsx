import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syam Gowtham Geddam | Portfolio",
  description:
    "Portfolio of Syam Gowtham Geddam, showcasing skills in software engineering, design, machine learning, web development, and data science.",
  keywords:
    "Syam Gowtham Geddam, Portfolio, Software Engineer, Developer, Data Scientist, Machine Learning, Web Developer, Designer",
  authors: [{ name: "Syam Gowtham Geddam" }],
  // Add Open Graph meta tags for better social sharing
  openGraph: {
    title: "Syam Gowtham Geddam | Portfolio",
    description: "Explore the work and skills of Syam Gowtham Geddam.",
    type: "website",
    // url: "https://yourdomain.com", // Replace with your actual domain
    // images: [
    //   {
    //     url: "https://yourdomain.com/og-image.png", // Replace with your OG image URL
    //     width: 1200,
    //     height: 630,
    //     alt: "Syam Gowtham Geddam Portfolio",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 container mx-auto max-w-screen-xl py-8 md:py-12">
              {children}
            </main>
            {/* Optional Footer can be added here */}
            {/* <footer className="py-6 md:px-8 md:py-0 border-t">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                  <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Syam Gowtham Geddam. All rights
                    reserved.
                  </p>
                </div>
              </footer> */}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
