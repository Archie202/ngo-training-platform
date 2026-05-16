export default function Loading() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-7xl place-items-center px-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" aria-label="Loading" />
    </div>
  );
}
