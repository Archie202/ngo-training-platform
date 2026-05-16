import { CohortCard } from "@/components/cards/cohort-card";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { cohorts } from "@/data/site";

export const metadata = { title: "Training Cohorts" };

export default function CohortsPage() {
  return (
    <>
      <PageHero badge="Training cohorts" title="Apply for structured cohorts with mentorship and project support." description="Find upcoming free, sponsored, online, hybrid, and in-person learning opportunities." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cohorts.map((cohort) => <CohortCard key={cohort.slug} cohort={cohort} />)}
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Cohort questions" className="bg-muted/50">
        <div className="grid gap-4 md:grid-cols-2">
          {["Are programs free?", "Do I need a laptop?", "Can beginners apply?", "Will I receive a certificate?"].map((question) => <div key={question} className="rounded-xl border bg-card p-6"><h3 className="font-bold">{question}</h3><p className="mt-2 text-sm text-muted-foreground">Details vary by cohort. Each application page lists requirements, format, and support available.</p></div>)}
        </div>
      </Section>
    </>
  );
}
