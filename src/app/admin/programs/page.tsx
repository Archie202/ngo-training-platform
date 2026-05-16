export default function AdminProgramsPage() {
  return <AdminModule title="Program management" />;
}

function AdminModule({ title }: { title: string }) {
  return <div><h1 className="text-3xl font-bold">{title}</h1><p className="mt-2 text-muted-foreground">CRUD table, filters, editor sheets, audit trail, and Supabase persistence will live here.</p></div>;
}
