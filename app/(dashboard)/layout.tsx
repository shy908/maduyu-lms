import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/components/providers/sidebar-provider";

// Ensure title and icon are strings
export const metadata: Metadata = {
  title: "Maduyu Academy || Course", 
  description: "Learning management system for all ages",
  icons: "/logo1.svg",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <div className="h-full">{children}</div>
        </SidebarProvider>
      </ThemeProvider>

      <SanityLive />
    </ClerkProvider>
  );
}
