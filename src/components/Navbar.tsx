"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary-500 focus:text-sable-50 focus:px-4 focus:py-2 focus:rounded-button"
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "h-14 bg-sable-950/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "h-[72px] bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-main h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <svg
              width="24"
              height="28"
              viewBox="0 0 280 336"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent-500"
              aria-hidden="true"
            >
              <path
                d="M140 4 L268 50 Q272 52 272 56 L272 170 Q272 220 240 262 Q208 304 144 332 Q142 333 140 333 Q138 333 136 332 Q72 304 40 262 Q8 220 8 170 L8 56 Q8 52 12 50 Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-cinzel font-semibold text-sable-50 text-lg tracking-wide">
              HERALDEX
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-inter text-body text-sable-400 hover:text-accent-500 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="accent" size="default" href="/editor">
              Design Your Blazon
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-sable-400 hover:text-sable-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-sable-950/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-sable-900 border-l border-sable-700 p-6 pt-20 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-inter text-body-lg text-sable-300 hover:text-accent-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                variant="accent"
                size="lg"
                className="w-full"
                href="/editor"
                onClick={() => setMobileOpen(false)}
              >
                Design Your Blazon
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
