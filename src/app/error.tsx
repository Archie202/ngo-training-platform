"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">Refresh the page or try again.</p>
        <Button onClick={reset} className="mt-6">Try again</Button>
      </div>
    </div>
  );
}
