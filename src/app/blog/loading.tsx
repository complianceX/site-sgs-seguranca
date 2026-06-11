import { Skeleton } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="bg-white py-24 lg:py-40">
      <div className="container">
        <header className="mb-20 max-w-4xl">
          <Skeleton className="mb-6 h-4 w-32" />
          <Skeleton className="mb-8 h-12 w-full md:h-16" />
          <Skeleton className="h-6 w-2/3" />
        </header>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-6">
              <Skeleton className="aspect-video w-full rounded-[2rem]" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
