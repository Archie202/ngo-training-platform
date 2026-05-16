import Image from "next/image";
import Link from "next/link";
import { Clock, GraduationCap, UserRound } from "lucide-react";
import type { Program } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Card className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={program.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <CardContent className="p-5">
        <Badge variant="secondary">{program.category}</Badge>
        <h3 className="mt-4 text-xl font-bold">{program.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{program.description}</p>
        <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{program.duration}</span>
          <span className="flex items-center gap-2"><UserRound className="h-4 w-4 text-primary" />{program.instructor}</span>
          <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" />{program.tags.join(" / ")}</span>
        </div>
        <Button asChild className="mt-5 w-full">
          <Link href="/cohorts">Apply for program</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
