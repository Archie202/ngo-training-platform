import { Card, CardContent } from "@/components/ui/card";

export const metadata = { title: "Student Portal" };

export default function StudentPortalPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Student portal architecture</h1>
      <p className="mt-2 text-muted-foreground">Prepared for enrolled learners to access cohorts, lessons, assignments, events, certificates, and support.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["My cohort", "Assignments", "Mentor notes", "Certificates", "Events", "Support"].map((item) => <Card key={item}><CardContent className="p-6 font-semibold">{item}</CardContent></Card>)}
      </div>
    </div>
  );
}
