import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

export function PageHero({
  badge,
  title,
  description,
  children,
}: {
  badge: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="african-pattern border-b">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Badge variant="secondary">{badge}</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
