import Link from "next/link";
import { CalendarClock, MapPin } from "lucide-react";
import type { Event } from "@/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-4">
          <Badge variant={event.status === "Upcoming" ? "default" : "secondary"}>{event.status}</Badge>
          <span className="text-sm text-muted-foreground">{event.type}</span>
        </div>
        <h3 className="mt-5 text-2xl font-bold">{event.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{event.description}</p>
        <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><CalendarClock className="h-4 w-4 text-primary" />{formatDate(event.date)}</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{event.location}</span>
        </div>
        <Button asChild className="mt-6 w-full" variant={event.status === "Upcoming" ? "default" : "outline"}>
          <Link href={`/events/${event.slug}`}>{event.status === "Upcoming" ? "Register" : "View recap"}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
