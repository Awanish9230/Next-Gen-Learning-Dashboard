import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { Course } from "@/types/course";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { Skeleton } from "@/components/ui/Skeleton";

export const revalidate = 0; // Dynamic route

async function CoursesList() {
  const supabase = await createClient();
  
  // Try to fetch courses, if it fails due to no credentials, return mock data
  // so the UI can still be rendered for demonstration purposes.
  let courses: Course[] | null = null;
  let error = null;
  
  try {
    const { data, error: supaError } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });
      
    courses = data;
    error = supaError;
  } catch (err) {
    console.error("Supabase connection error:", err);
  }

  // Fallback to mock data if there's an error (e.g., Supabase not configured yet)
  if (error) {
    console.error("Supabase returned an error:", error);
  }
  
  if (error || !courses || courses.length === 0) {
    courses = [
      { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Code2", created_at: new Date().toISOString() },
      { id: "2", title: "Next.js Architecture", progress: 60, icon_name: "Layers3", created_at: new Date().toISOString() },
      { id: "3", title: "Database Systems", progress: 85, icon_name: "Database", created_at: new Date().toISOString() },
      { id: "4", title: "System Design Fundamentals", progress: 40, icon_name: "Network", created_at: new Date().toISOString() },
    ];
  }

  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <BentoGrid>
        <HeroTile />
        <Suspense fallback={
          <>
            <Skeleton className="h-[200px]" />
            <Skeleton className="h-[200px]" />
            <Skeleton className="h-[200px]" />
            <Skeleton className="h-[200px]" />
          </>
        }>
          <CoursesList />
        </Suspense>
        <ActivityTile />
      </BentoGrid>
    </DashboardShell>
  );
}
