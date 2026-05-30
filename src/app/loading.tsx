import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <DashboardShell>
      <div className="flex flex-col space-y-8 w-full">
        {/* Hero Tile Skeleton */}
        <Skeleton className="w-full rounded-3xl h-[380px]" />
        
        {/* Courses Section Skeleton */}
        <div className="w-full">
          <Skeleton className="w-32 h-6 mb-4 rounded-md" />
          <div className="flex gap-4 overflow-hidden py-4 px-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-[300px] h-[180px] shrink-0 rounded-3xl" />
            ))}
          </div>
        </div>
        
        {/* Activity Tile Skeleton */}
        <Skeleton className="w-full rounded-3xl h-[220px]" />
      </div>
    </DashboardShell>
  );
}
