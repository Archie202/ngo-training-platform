import { Building2, GraduationCap, HandCoins, Network } from "lucide-react";
import { PartnershipForm } from "@/components/forms/simple-forms";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { partners } from "@/data/site";

export const metadata = { title: "Partnership" };

export default function PartnershipPage() {
  return (
    <>
      <PageHero badge="Partnerships" title="Build measurable learning impact with us." description="Partner through sponsored cohorts, school labs, employee volunteering, event sponsorship, or technical support." />
      <Section eyebrow="Categories" title="Partnership paths">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {([["Cohort sponsorship", HandCoins], ["School projects", GraduationCap], ["Corporate volunteering", Building2], ["Ecosystem events", Network]] as const).map(([title, Icon]) => <Card key={String(title)}><CardContent className="p-6"><Icon className="h-8 w-8 text-primary" /><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">Fund, support, or co-create high-quality learning access.</p></CardContent></Card>)}
        </div>
      </Section>
      <Section eyebrow="Benefits" title="What partners receive" className="bg-muted/50"><div className="grid gap-4 md:grid-cols-3">{["Transparent reporting", "Brand-safe impact stories", "Learner outcome dashboards"].map((item) => <Card key={item}><CardContent className="p-6 font-semibold">{item}</CardContent></Card>)}</div></Section>
      <Section eyebrow="Current partners" title="Mission-aligned supporters"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{partners.map((partner) => <Card key={partner}><CardContent className="grid h-24 place-items-center p-4 text-center font-bold">{partner}</CardContent></Card>)}</div></Section>
      <Section eyebrow="Inquiry" title="Start a partnership conversation" className="bg-muted/50"><Card className="max-w-3xl"><CardContent className="p-6"><PartnershipForm /></CardContent></Card></Section>
    </>
  );
}
