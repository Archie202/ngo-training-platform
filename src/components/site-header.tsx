"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ImpactNest home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground shadow-sm">
            IN
          </span>
          <span className="hidden text-base font-bold tracking-normal sm:inline">ImpactNest Academy</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                pathname === link.href && "bg-muted text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/cohorts">Join Training</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 h-dvh w-[86vw] max-w-sm border-l bg-background p-5 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold">Menu</span>
                <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="mt-8 grid gap-2" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      pathname === link.href && "bg-muted text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 grid gap-3">
                <Button asChild>
                  <Link href="/cohorts" onClick={() => setOpen(false)}>
                    Join Training
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/donate" onClick={() => setOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
