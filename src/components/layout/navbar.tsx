"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { navLinks, socialLinks, RESUME_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeLink, setActiveLink] = useState(navLinks[0]?.href || "/#about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Adjust threshold as needed

      let currentSection = navLinks[0]?.href || "/#about";
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport, considering navbar height (approx 64px or 4rem)
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentSection = link.href;
            break;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    // To prevent hydration mismatch for activeLink derived from scroll
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16" />
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        isScrolled
          ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link
          href="/#about"
          className="flex items-center space-x-2"
          onClick={() => setActiveLink("/#about")}
        >
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Syam Gowtham Geddam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary px-3 py-2",
                activeLink === link.href
                  ? "text-primary bg-muted"
                  : "text-foreground/70 hover:text-foreground/90"
              )}
            >
              <Link href={link.href} onClick={() => setActiveLink(link.href)}>
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              asChild
              className="text-foreground/70 hover:text-primary"
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
          <ThemeToggleButton />
          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={RESUME_PATH} target="_blank" download>
              Resume
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <ThemeToggleButton />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background p-6 flex flex-col"
            >
              <Link
                href="/#about"
                className="flex items-center space-x-2 mb-6"
                onClick={() => setActiveLink("/#about")}
              >
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Syam Gowtham Geddam
                </span>
              </Link>
              <nav className="flex flex-col space-y-3 mb-auto">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                      className={cn(
                        "text-md font-medium transition-colors hover:text-primary py-2 px-3 rounded-md flex items-center",
                        activeLink === link.href
                          ? "bg-muted text-primary"
                          : "text-foreground/80"
                      )}
                    >
                      <link.icon className="mr-3 h-5 w-5 text-primary/80" />
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="border-t border-border pt-6 mt-6">
                <div className="flex justify-center space-x-2 mb-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      asChild
                      className="text-foreground/70 hover:text-primary flex-1"
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link href={RESUME_PATH} target="_blank" download>
                    Download Resume
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
