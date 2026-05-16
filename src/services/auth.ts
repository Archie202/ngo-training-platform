import type { UserRole } from "@/types";

export type SessionUser = {
  id: string;
  email: string;
  role: UserRole;
};

export async function requireRole(roles: UserRole[]) {
  void roles;
  // Hook this into Supabase Auth server-side checks before protecting dashboards.
  return null as SessionUser | null;
}
