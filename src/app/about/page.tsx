import { Camera, Compass, Eye, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  const values = [
    ["Access", "We design for real-world constraints and underserved learners.", Target],
    ["Dignity", "Programs are practical, respectful, and locally informed.", HeartHandshake],
    ["Trust", "Partners receive transparent outcomes and clear reporting.", ShieldCheck],
    ["Curiosity", "Learners build confidence through projects and mentorship.", Compass],
  ] as const;

  return (
    <>
      <PageHero badge="About us" title="A nonprofit academy turning technology access into community progress." description="We combine training, AI education, school projects, outreach, and sponsored learning to help communities participate in the digital economy." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card><CardContent className="p-6"><Target className="h-8 w-8 text-primary" /><h2 className="mt-5 text-2xl font-bold">Mission</h2><p className="mt-3 text-muted-foreground">Equip women, youth, schools, and community groups with practical technology skills, mentorship, and pathways to opportunity.</p></CardContent></Card>
          <Card><CardContent className="p-6"><Eye className="h-8 w-8 text-primary" /><h2 className="mt-5 text-2xl font-bold">Vision</h2><p className="mt-3 text-muted-foreground">An Africa where every learner can access relevant digital education and use technology to solve local problems.</p></CardContent></Card>
        </div>
      </Section>
      <Section eyebrow="Values" title="How we work" className="bg-muted/50">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text, Icon]) => <Card key={String(title)}><CardContent className="p-6"><Icon className="h-7 w-7 text-primary" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></CardContent></Card>)}
        </div>
      </Section>
      <Section eyebrow="Story" title="From local workshops to scalable sponsored learning">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <p className="text-lg leading-8 text-muted-foreground">ImpactNest began with weekend digital literacy workshops for young people and educators. Today, the organization supports structured cohorts, school innovation labs, women-focused learning communities, and convenings for social-impact technology.</p>
          <div className="grid gap-4">
            {["2019: Community computer literacy labs", "2021: Youth web development cohorts", "2023: Girls in Tech mentorship network", "2026: AI education and school innovation programs"].map((item) => <Card key={item}><CardContent className="p-5 font-medium">{item}</CardContent></Card>)}
          </div>
        </div>
      </Section>
      <Section eyebrow="Team" title="Meet the team" className="bg-muted/50">
        <div className="grid gap-6 md:grid-cols-3">
          {["Executive Director", "Head of Programs", "Community Partnerships Lead"].map((role) => <Card key={role}><CardContent className="p-6"><div className="h-28 rounded-lg bg-secondary" /><h3 className="mt-5 font-bold">{role}</h3><p className="mt-2 text-sm text-muted-foreground">Experienced nonprofit, education, and technology operator.</p></CardContent></Card>)}
        </div>
      </Section>
      <Section eyebrow="Gallery" title="Learning in action">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => <div key={item} className="grid aspect-square place-items-center rounded-xl border bg-muted"><Camera className="h-8 w-8 text-primary" /></div>)}
        </div>
      </Section>
      <Section>
        <Card className="bg-primary text-primary-foreground"><CardContent className="grid gap-5 p-8 md:grid-cols-[1fr_auto] md:items-center"><h2 className="text-3xl font-black">Help us expand access to practical technology education.</h2><Button asChild variant="secondary"><Link href="/partnership">Partner with us</Link></Button></CardContent></Card>
      </Section>
    </>
  );
}
