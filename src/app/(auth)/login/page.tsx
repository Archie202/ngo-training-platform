import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <>
      <PageHero badge="Authentication" title="Role-aware access for admins, students, and volunteers." description="Supabase Auth integration points are prepared for email magic links, password login, and protected dashboards." />
      <Section>
        <Card className="mx-auto max-w-md">
          <CardContent className="p-6">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h2 className="mt-5 text-2xl font-bold">Sign in</h2>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" /></div>
              <div className="grid gap-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" /></div>
              <Button type="submit">Continue</Button>
            </form>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
