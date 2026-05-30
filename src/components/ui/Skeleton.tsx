import { cn } from "@/utils/cn";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-shimmer bg-[linear-gradient(110deg,#1e1e1e,45%,#2e2e2e,55%,#1e1e1e)] bg-[length:200%_100%] rounded-md",
        className
      )}
      {...props}
    />
  );
}
