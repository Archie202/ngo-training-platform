import { HeartHandshake, Lightbulb, Users } from "lucide-react";
import { VolunteerForm } from "@/components/forms/simple-forms";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = { title: "Volunteer" };

export default function VolunteerPage() {
  return (
    <>
      <PageHero badge="Volunteer" title="Share your skills with learners and communities." description="Mentor students, support school projects, facilitate workshops, or help with events and operations." />
      <Section eyebrow="Opportunities" title="Ways to serve">
        <div className="grid gap-6 md:grid-cols-3">
          {([["Mentorship", Users], ["Workshop support", Lightbulb], ["Community outreach", HeartHandshake]] as const).map(([title, Icon]) => <Card key={String(title)}><CardContent className="p-6"><Icon className="h-8 w-8 text-primary" /><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm text-muted-foreground">Support learners with practical guidance, encouragement, and accountability.</p></CardContent></Card>)}
        </div>
      </Section>
      <Section eyebrow="Benefits" title="Volunteer with structure and support" className="bg-muted/50"><div className="grid gap-4 md:grid-cols-3">{["Clear briefs", "Flexible commitments", "Impact reporting"].map((item) => <Card key={item}><CardContent className="p-6 font-semibold">{item}</CardContent></Card>)}</div></Section>
      <Section eyebrow="Apply" title="Volunteer registration"><Card className="max-w-3xl"><CardContent className="p-6"><VolunteerForm /></CardContent></Card></Section>
    </>
  );
}
