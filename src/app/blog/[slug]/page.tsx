import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/site";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <>
      <PageHero badge={post.category} title={post.title} description={post.excerpt} />
      <Section>
        <article className="prose prose-neutral max-w-3xl dark:prose-invert">
          <Badge variant="secondary">{post.author} / {formatDate(post.date)} / {post.readTime}</Badge>
          <p className="mt-8 text-lg leading-8 text-muted-foreground">This article layout is ready for CMS-backed content from Supabase or a headless CMS. It supports featured posts, categories, search, metadata, and individual article pages.</p>
          <h2 className="mt-8 text-2xl font-bold">A practical nonprofit technology lens</h2>
          <p className="mt-4 leading-7 text-muted-foreground">Strong education programs combine local context, clear curriculum, mentor support, and transparent measurement. The same architecture can later load markdown, MDX, or rich text from the blog_posts table.</p>
        </article>
      </Section>
    </>
  );
}
