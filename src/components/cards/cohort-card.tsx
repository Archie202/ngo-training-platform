import Link from "next/link";
import { CalendarDays, Monitor, Users } from "lucide-react";
import type { Cohort } from "@/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CohortCard({ cohort }: { cohort: Cohort }) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{cohort.price}</Badge>
          <Badge variant="outline">{cohort.level}</Badge>
        </div>
        <h3 className="mt-5 text-2xl font-bold">{cohort.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{cohort.course}</p>
        <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />Starts {formatDate(cohort.startDate)}</span>
          <span className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" />{cohort.availableSeats} of {cohort.seats} seats available</span>
          <span className="flex items-center gap-2"><Monitor className="h-4 w-4 text-primary" />{cohort.format}</span>
        </div>
        <Button asChild className="mt-6 w-full">
          <Link href={`/cohorts/${cohort.slug}`}>View details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
