import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you requested does not exist.</p>
        <Button asChild className="mt-6"><Link href="/">Go home</Link></Button>
      </div>
    </div>
  );
}
