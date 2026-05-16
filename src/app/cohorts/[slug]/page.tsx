import { notFound } from "next/navigation";
import { CohortRegistrationForm } from "@/components/forms/cohort-registration-form";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cohorts } from "@/data/site";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return cohorts.map((cohort) => ({ slug: cohort.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cohort = cohorts.find((item) => item.slug === slug);
  return { title: cohort?.title ?? "Cohort" };
}

export default async function CohortDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cohort = cohorts.find((item) => item.slug === slug);
  if (!cohort) notFound();

  return (
    <>
      <PageHero badge={cohort.price} title={cohort.title} description={`${cohort.course} starts ${formatDate(cohort.startDate)} with ${cohort.availableSeats} seats still available.`} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Card><CardContent className="p-6"><div className="flex flex-wrap gap-2"><Badge>{cohort.level}</Badge><Badge variant="outline">{cohort.format}</Badge></div><h2 className="mt-6 text-2xl font-bold">Cohort details</h2><p className="mt-3 text-muted-foreground">This cohort combines live instruction, guided practice, mentor feedback, and a portfolio or community project. Admitted learners receive onboarding details by email.</p><div className="mt-6 rounded-lg bg-muted p-4 text-sm">{cohort.availableSeats} of {cohort.seats} seats available</div></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="mb-5 text-2xl font-bold">Register interest</h2><CohortRegistrationForm defaultCourse={cohort.course} /></CardContent></Card>
        </div>
      </Section>
    </>
  );
}
