import { Card, CardContent } from "@/components/ui/card";

export const metadata = { title: "Admin Dashboard" };

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin dashboard architecture</h1>
      <p className="mt-2 text-muted-foreground">Prepared for program, event, student, volunteer, donation, blog, and analytics management.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {["Active cohorts", "Pending volunteers", "Donation pipeline", "Event registrations", "Blog drafts", "Impact analytics"].map((item, index) => <Card key={item}><CardContent className="p-6"><p className="text-3xl font-black text-primary">{index * 12 + 8}</p><p className="mt-2 text-sm text-muted-foreground">{item}</p></CardContent></Card>)}
      </div>
    </div>
  );
}
