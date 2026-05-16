import Link from "next/link";
import { ArrowRight, BookOpen, HandHeart, Sparkles, UsersRound } from "lucide-react";
import { BlogCard } from "@/components/cards/blog-card";
import { EventCard } from "@/components/cards/event-card";
import { ProgramCard } from "@/components/cards/program-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, events, impactStats, partners, programs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="african-pattern overflow-hidden border-b">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <Reveal>
            <Badge variant="secondary">Tech training / AI education / community impact</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-normal sm:text-6xl lg:text-7xl">
              Skills, access, and opportunity for the next generation of builders.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              ImpactNest Academy helps women, youth, schools, and local communities build practical digital skills through sponsored cohorts, outreach, events, and project-based learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link href="/cohorts">Join Training <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/donate">Donate Now</Link></Button>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
              <Card className="relative overflow-hidden rounded-3xl border-primary/20">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {([
                      ["AI Lab", Sparkles],
                      ["School Clubs", BookOpen],
                      ["Women in Tech", UsersRound],
                      ["Sponsor Desk", HandHeart],
                    ] as const).map(([label, Icon]) => (
                      <div key={String(label)} className="rounded-2xl border bg-background/70 p-5">
                        <Icon className="h-7 w-7 text-primary" />
                        <p className="mt-8 text-sm font-semibold">{String(label)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl bg-primary p-6 text-primary-foreground">
                    <p className="text-sm uppercase tracking-[0.18em] opacity-80">Current focus</p>
                    <p className="mt-3 text-3xl font-black">5,000 sponsored learners by 2027</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <Card>
                <CardContent className="p-6">
                  <p className="text-4xl font-black text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Programs" title="Featured learning pathways" description="Focused training tracks that combine practical skills, mentorship, and community projects.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 5).map((program) => <ProgramCard key={program.slug} program={program} />)}
        </div>
      </Section>

      <Section eyebrow="Events" title="Upcoming convenings" className="bg-muted/50">
        <div className="grid gap-6 lg:grid-cols-2">
          {events.filter((event) => event.status === "Upcoming").map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
      </Section>

      <Section eyebrow="About" title="Built for access, dignity, and measurable outcomes">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="text-lg leading-8 text-muted-foreground">
            We design programs around local constraints: device access, mentorship, school calendars, safety, community trust, and funder accountability. Every cohort connects learning with a practical project and a visible next step.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Community-led delivery", "Scholarship-ready reporting", "Accessible learning design", "Volunteer mentor network"].map((item) => (
              <Card key={item}><CardContent className="p-5 font-semibold">{item}</CardContent></Card>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Voices" title="What learners and partners say">
        <div className="grid gap-6 md:grid-cols-3">
          {["The AI cohort helped me teach faster and prepare better lessons.", "Our sponsored seats produced visible confidence in only six weeks.", "The school club model gave our students a safe place to build."].map((quote, index) => (
            <Card key={quote}><CardContent className="p-6"><p className="text-sm leading-6 text-muted-foreground">“{quote}”</p><p className="mt-5 font-semibold">Impact partner {index + 1}</p></CardContent></Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Partners" title="Trusted by mission-aligned institutions" className="bg-muted/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => <Card key={partner}><CardContent className="grid h-24 place-items-center p-4 text-center font-bold">{partner}</CardContent></Card>)}
        </div>
      </Section>

      <Section>
        <Card className="overflow-hidden bg-primary text-primary-foreground">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black">Sponsor a learner, a school lab, or a full cohort.</h2>
              <p className="mt-3 max-w-2xl text-primary-foreground/80">Your support funds training materials, facilitator time, internet access, devices, mentorship, and impact reporting.</p>
            </div>
            <Button asChild size="lg" variant="secondary"><Link href="/donate">Give with impact</Link></Button>
          </CardContent>
        </Card>
      </Section>

      <Section eyebrow="News" title="Latest insights">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <Card>
          <CardContent className="grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold">Get cohort announcements and impact reports</h2>
              <p className="mt-2 text-sm text-muted-foreground">Join the newsletter for program openings, events, and transparent results.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input aria-label="Email address" className="h-11 rounded-md border bg-background px-4 text-sm" placeholder="you@example.com" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
