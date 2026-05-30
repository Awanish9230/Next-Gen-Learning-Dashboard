"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <DashboardShell>
      <div className="flex flex-col items-center justify-center min-h-[400px] glass-panel p-8 text-center max-w-lg mx-auto mt-20" role="alert" aria-live="assertive">
        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
          <AlertCircle className="w-8 h-8 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Something went wrong</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          {error.message || "An unexpected error occurred while loading your dashboard data. Please check your connection and try again."}
        </p>
        <button
          onClick={() => reset()}
          aria-label="Try again"
          className="flex items-center space-x-2 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white px-6 py-3 rounded-full font-medium shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303]"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Try again</span>
        </button>
      </div>
    </DashboardShell>
  );
}
