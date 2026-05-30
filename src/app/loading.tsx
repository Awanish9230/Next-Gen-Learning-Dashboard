import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        {/* Hero Tile Skeleton */}
        <Skeleton className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 rounded-3xl min-h-[380px]" />
        
        {/* Course Card Skeletons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="col-span-1 row-span-1 rounded-3xl min-h-[180px]" />
        ))}
        
        {/* Activity Tile Skeleton */}
        <Skeleton className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl min-h-[220px]" />
      </div>
    </DashboardShell>
  );
}
