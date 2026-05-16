"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProgramCard } from "@/components/cards/program-card";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { programs } from "@/data/site";

const categories = ["All", "Technology Training", "Community Outreach", "Sponsored Programs", "School Projects"];

export default function ProgramsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => programs.filter((program) => {
    const matchesCategory = category === "All" || program.category === category;
    const matchesQuery = `${program.title} ${program.description} ${program.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, query]);

  return (
    <>
      <PageHero badge="Programs" title="Training and outreach programs built for practical outcomes." description="Explore technology training, community outreach, sponsored programs, and school projects with clear learning goals." />
      <Section>
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search programs" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => <Button key={item} variant={category === item ? "default" : "outline"} onClick={() => setCategory(item)}>{item}</Button>)}
          </div>
        </div>
        {filtered.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((program) => <ProgramCard key={program.slug} program={program} />)}</div> : <p className="rounded-xl border p-8 text-center text-muted-foreground">No programs match your search.</p>}
      </Section>
    </>
  );
}
