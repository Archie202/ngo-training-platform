"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/cards/blog-card";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/data/site";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const filtered = useMemo(() => blogPosts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return (
    <>
      <PageHero badge="Blog" title="Stories, guides, and impact updates." description="Read about AI education, school projects, community outreach, sponsored learning, and nonprofit technology practice." />
      <Section>
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]"><div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input className="pl-9" placeholder="Search articles" value={query} onChange={(event) => setQuery(event.target.value)} /></div><div className="flex flex-wrap gap-2">{categories.map((item) => <Button key={item} variant={category === item ? "default" : "outline"} onClick={() => setCategory(item)}>{item}</Button>)}</div></div>
        <div className="grid gap-6 md:grid-cols-3">{filtered.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
      </Section>
    </>
  );
}
