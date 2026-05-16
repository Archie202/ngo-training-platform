import { CreditCard, HandHeart, Repeat, ShieldCheck, UserRoundCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = { title: "Donate" };

export default function DonationPage() {
  return (
    <>
      <PageHero badge="Donate" title="Fund training access with transparent impact." description="Give once, sponsor monthly, or fund a student pathway. Payment components are structured for Paystack and Flutterwave integration." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {([["One-time donation", CreditCard], ["Monthly sponsorship", Repeat], ["Sponsor a student", UserRoundCheck]] as const).map(([title, Icon]) => <Card key={String(title)}><CardContent className="p-6"><Icon className="h-8 w-8 text-primary" /><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-3 text-sm text-muted-foreground">Support devices, internet, facilitator costs, learning kits, mentorship, and reporting.</p><Button className="mt-5 w-full">Give now</Button></CardContent></Card>)}
        </div>
      </Section>
      <Section eyebrow="Impact" title="What donations make possible" className="bg-muted/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["$25 learning data bundle", "$75 mentor-supported seat", "$250 laptop repair pool", "$2,500 full cohort support"].map((item) => <Card key={item}><CardContent className="p-6"><Badge variant="secondary">Impact</Badge><p className="mt-4 font-bold">{item}</p></CardContent></Card>)}</div>
      </Section>
      <Section eyebrow="Transparency" title="Fund usage"><div className="grid gap-6 md:grid-cols-3">{["70% program delivery", "20% learner support", "10% administration"].map((item) => <Card key={item}><CardContent className="p-6"><ShieldCheck className="h-7 w-7 text-primary" /><p className="mt-4 text-xl font-bold">{item}</p></CardContent></Card>)}</div></Section>
      <Section eyebrow="Integration-ready" title="Payment provider placeholders" className="bg-muted/50"><Card><CardContent className="grid gap-4 p-6 md:grid-cols-2"><div className="rounded-xl border p-5"><HandHeart className="h-6 w-6 text-primary" /><h3 className="mt-3 font-bold">Paystack</h3><p className="mt-2 text-sm text-muted-foreground">Component boundary ready for Paystack inline or redirect checkout.</p></div><div className="rounded-xl border p-5"><HandHeart className="h-6 w-6 text-primary" /><h3 className="mt-3 font-bold">Flutterwave</h3><p className="mt-2 text-sm text-muted-foreground">Component boundary ready for Flutterwave payment initialization.</p></div></CardContent></Card></Section>
    </>
  );
}
