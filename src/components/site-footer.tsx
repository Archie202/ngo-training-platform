import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-sm font-black text-primary-foreground">
                IN
              </span>
              <span className="font-bold">ImpactNest Academy</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              A nonprofit training platform advancing tech skills, AI education, school innovation, and inclusive community programs.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Github].map((Icon, index) => (
                <Button key={index} variant="outline" size="icon" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" /> Lagos, Nigeria. Serving communities across Africa.
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> hello@impactnest.org
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ImpactNest Academy. All rights reserved.</p>
          <p>Built for transparent nonprofit impact and scalable learning programs.</p>
        </div>
      </div>
    </footer>
  );
}
