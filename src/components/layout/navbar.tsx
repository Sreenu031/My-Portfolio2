"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* You can use a logo image here or text */}
          {/* <Image src="/logo.png" alt="Geddam Portfolio Logo" width={32} height={32} /> */}
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Syam Gowtham Geddam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              asChild
              className="text-foreground hover:text-foreground hover:bg-muted"
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
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background p-6"
            >
              <div className="flex flex-col space-y-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Syam G. Geddam
                  </span>
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-md font-medium transition-colors hover:text-primary py-2 px-3 rounded-md",
                          pathname === link.href
                            ? "bg-muted text-primary"
                            : "text-foreground/80"
                        )}
                      >
                        <div className="flex items-center">
                          <link.icon className="mr-2 h-5 w-5" />
                          {link.label}
                        </div>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">
                      Theme & Socials
                    </span>
                    <ThemeToggleButton />
                  </div>
                  <div className="flex space-x-2 mb-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        asChild
                        className="text-foreground/60 hover:text-primary flex-1"
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
