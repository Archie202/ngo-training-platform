import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-bold tracking-normal text-foreground sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
