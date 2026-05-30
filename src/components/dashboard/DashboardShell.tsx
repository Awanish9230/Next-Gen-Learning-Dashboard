"use client";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-[calc(100vh-2rem)] flex flex-col">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Overview</h1>
          <p className="text-gray-400 mt-1 text-sm">Your learning progress and analytics</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex h-10 items-center justify-center rounded-full glass-panel px-4 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
            System Online
          </div>
        </div>
      </header>
      
      {children}
    </div>
  );
}
