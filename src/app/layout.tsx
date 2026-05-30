import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileNav } from "@/components/sidebar/MobileNav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Padhle | Next-Gen Learning",
  description: "Futuristic student dashboard for premium learning experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} antialiased mesh-bg min-h-screen flex flex-col md:flex-row`}
      >
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 lg:p-10 w-full overflow-y-auto overflow-x-hidden mb-16 md:mb-0">
          {children}
        </main>
        <MobileNav />
      </body>
    </html>
  );
}
