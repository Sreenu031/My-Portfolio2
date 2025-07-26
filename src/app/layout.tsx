import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
other : {
"google-site-verification":"pHWE_WHrHJbW-0uKUqmgTQibTW31hpqDLAFZcRuk8Pk",},};

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
  openGraph: {
    title: "Syam Gowtham Geddam | Portfolio",
    description: "Explore the work and skills of Syam Gowtham Geddam.",
    type: "website",
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
              <SpeedInsights />
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
