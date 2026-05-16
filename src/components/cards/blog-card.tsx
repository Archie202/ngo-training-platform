import Link from "next/link";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card className="h-full transition hover:-translate-y-1 hover:shadow-xl">
        <CardContent className="p-6">
          <Badge variant="secondary">{post.category}</Badge>
          <h3 className="mt-5 text-2xl font-bold">{post.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
          <p className="mt-6 text-sm text-muted-foreground">{post.author} / {formatDate(post.date)} / {post.readTime}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
