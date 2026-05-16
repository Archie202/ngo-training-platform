import { Clock3, ImageIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { CohortRegistrationForm } from "@/components/forms/cohort-registration-form";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/data/site";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <>
      <PageHero badge={event.type} title={event.title} description={`${formatDate(event.date)} / ${event.location}. ${event.description}`} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Card><CardContent className="p-6"><Clock3 className="h-8 w-8 text-primary" /><h2 className="mt-5 text-2xl font-bold">Countdown</h2><p className="mt-3 text-muted-foreground">Countdown component is ready to connect to live event timing and reminders.</p><div className="mt-6 grid grid-cols-4 gap-2 text-center text-sm"><span className="rounded-lg bg-muted p-3">30d</span><span className="rounded-lg bg-muted p-3">12h</span><span className="rounded-lg bg-muted p-3">45m</span><span className="rounded-lg bg-muted p-3">09s</span></div></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="mb-5 text-2xl font-bold">Event registration</h2><CohortRegistrationForm defaultCourse={event.title} /></CardContent></Card>
        </div>
      </Section>
      <Section eyebrow="Gallery" title="Event gallery" className="bg-muted/50"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[1, 2, 3, 4].map((item) => <div key={item} className="grid aspect-video place-items-center rounded-xl border bg-card"><ImageIcon className="h-7 w-7 text-primary" /></div>)}</div></Section>
    </>
  );
}
