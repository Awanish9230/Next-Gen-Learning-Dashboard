import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { Course } from "@/types/course";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { CourseMarquee } from "@/components/dashboard/CourseMarquee";
import { ActivityTile } from "@/components/dashboard/ActivityTile";
import { Skeleton } from "@/components/ui/Skeleton";

export const revalidate = 0; // Dynamic route

async function CoursesSection() {
  const supabase = await createClient();
  
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

  return <CourseMarquee courses={courses} />;
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col space-y-8 w-full">
        <section>
          <HeroTile />
        </section>

        <section className="w-full">
          <h2 className="text-xl font-bold text-white mb-2 px-2">Your Courses</h2>
          <Suspense fallback={
            <div className="flex gap-4 overflow-hidden py-4 px-2">
              <Skeleton className="w-[300px] h-[180px] shrink-0 rounded-3xl" />
              <Skeleton className="w-[300px] h-[180px] shrink-0 rounded-3xl" />
              <Skeleton className="w-[300px] h-[180px] shrink-0 rounded-3xl" />
              <Skeleton className="w-[300px] h-[180px] shrink-0 rounded-3xl hidden md:block" />
            </div>
          }>
            <CoursesSection />
          </Suspense>
        </section>

        <section>
          <ActivityTile />
        </section>
      </div>
    </DashboardShell>
  );
}
