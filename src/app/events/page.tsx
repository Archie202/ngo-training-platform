import { EventCard } from "@/components/cards/event-card";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { events } from "@/data/site";

export const metadata = { title: "Events" };

export default function EventsPage() {
  const upcoming = events.filter((event) => event.status === "Upcoming");
  const past = events.filter((event) => event.status === "Past");
  return (
    <>
      <PageHero badge="Events" title="Workshops, conferences, school launches, and community gatherings." description="Register for upcoming events or explore past program moments and galleries." />
      <Section eyebrow="Upcoming" title="Register for upcoming events"><div className="grid gap-6 md:grid-cols-2">{upcoming.map((event) => <EventCard key={event.slug} event={event} />)}</div></Section>
      <Section eyebrow="Archive" title="Past events" className="bg-muted/50"><div className="grid gap-6 md:grid-cols-2">{past.map((event) => <EventCard key={event.slug} event={event} />)}</div></Section>
    </>
  );
}
