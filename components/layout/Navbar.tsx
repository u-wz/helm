"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

function getNavColor(pathname: string) {
  if (pathname.startsWith("/roadmaps")) return "bg-[#4361EE] text-white"; // neo-blue
  if (pathname.startsWith("/courses")) return "bg-[#06D6A0] text-black"; // neo-green
  if (pathname.startsWith("/careers")) return "bg-[#FF6B35] text-black"; // neo-orange
  if (pathname.startsWith("/tools")) return "bg-[#9B5DE5] text-black"; // neo-purple
  if (pathname.startsWith("/cv-projects")) return "bg-[#FF0F80] text-black"; // neo-pink
  return "bg-neo-amber dark:bg-neo-dark"; // Default for home page
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "w-9 h-9 border-2  border-black dark:border-white",
        "flex items-center justify-center",
        "hover:-translate-x-0.5 hover:-translate-y-0.5",
        "hover:shadow-neo dark:hover:shadow-neo-white",
        "transition-all duration-150 bg-white dark:bg-neo-card text-black dark:text-white",
        "flex-shrink-0 cursor-pointer",
      )}
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide if scrolling down past 100px, otherwise show
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    // passive: true for scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          getNavColor(pathname),
          "border-b-2 border-black dark:border-white",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-14">
            <Link
              href="/"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Image
                src="/Helm.svg"
                alt="Helm Logo"
                width={76}
                height={32}
                className="h-8 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 font-body font-medium text-sm transition-all cursor-pointer",
                    "hover:underline underline-offset-4",
                    pathname === link.href &&
                      "font-bold underline underline-offset-4",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setDrawerOpen(true)}
                className={cn(
                  "md:hidden w-9 h-9 border-2 border-black dark:border-white",
                  "flex items-center justify-center bg-white dark:bg-neo-card",
                  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo dark:hover:shadow-neo-white",
                  "transition-all duration-150 cursor-pointer text-black dark:text-white",
                )}
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden cursor-pointer"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] z-50 md:hidden transition-all duration-300",
          getNavColor(pathname),
          "border-l-2 border-black dark:border-white",
          "transform",
          drawerOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-4 right-4 p-2 border-2 border-black dark:border-white bg-white dark:bg-neo-card cursor-pointer"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>

        <div className="pt-16 px-6 flex flex-col">
          <Link
            href="/"
            className="flex items-center gap-2 pb-4 mb-2 group cursor-pointer"
          >
            <Image
              src="/Helm.svg"
              alt="Helm Logo"
              width={114}
              height={48}
              className="h-12 w-auto drop-shadow-[4px_4px_0px_#0A0A0A] dark:drop-shadow-[4px_4px_0px_#FF0F80]"
            />
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-4 font-heading font-bold text-lg border-b-2 border-black dark:border-white",
                "hover:pl-2 transition-all duration-150 cursor-pointer",
                pathname === link.href && "pl-2 text-black dark:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-8 left-6">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
