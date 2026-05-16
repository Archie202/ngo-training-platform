import type { ReactNode } from "react";
import Link from "next/link";
import { BarChart3, Calendar, GraduationCap, HandCoins, Newspaper, Users } from "lucide-react";

const adminLinks = [
  ["Overview", "/admin", BarChart3],
  ["Programs", "/admin/programs", GraduationCap],
  ["Events", "/admin/events", Calendar],
  ["Students", "/admin/students", Users],
  ["Donations", "/admin/donations", HandCoins],
  ["Blog", "/admin/blog", Newspaper],
] as const;

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
      <aside className="h-fit rounded-xl border bg-card p-4">
        <h2 className="px-2 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Admin</h2>
        <nav className="mt-4 grid gap-1">
          {adminLinks.map(([label, href, Icon]) => <Link key={String(href)} href={String(href)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"><Icon className="h-4 w-4" />{String(label)}</Link>)}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
