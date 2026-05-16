import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/simple-forms";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero badge="Contact" title="Talk to us about training, partnerships, volunteering, or support." description="Send a message and the right team member will follow up." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card><CardContent className="p-6"><ContactForm /></CardContent></Card>
          <div className="grid gap-4">
            {([["Email", "hello@impactnest.org", Mail], ["Phone", "+234 000 000 0000", Phone], ["Office", "Lagos, Nigeria", MapPin]] as const).map(([label, value, Icon]) => <Card key={String(label)}><CardContent className="flex gap-4 p-6"><Icon className="h-6 w-6 text-primary" /><div><h3 className="font-bold">{label}</h3><p className="text-sm text-muted-foreground">{value}</p></div></CardContent></Card>)}
          </div>
        </div>
      </Section>
      <Section eyebrow="Map" title="Office and community hub" className="bg-muted/50"><div className="grid h-80 place-items-center rounded-xl border bg-card text-muted-foreground">Embedded map placeholder</div></Section>
      <Section eyebrow="FAQ" title="Contact questions"><div className="grid gap-4 md:grid-cols-2">{["How do I sponsor a cohort?", "Can schools request a project?", "How do volunteers join?", "Do you work outside Lagos?"].map((item) => <Card key={item}><CardContent className="p-6"><h3 className="font-bold">{item}</h3><p className="mt-2 text-sm text-muted-foreground">Use the form above and select the most relevant subject so we can route your message.</p></CardContent></Card>)}</div></Section>
    </>
  );
}
