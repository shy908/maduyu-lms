import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ensure title and icon are strings
export const metadata: Metadata = {
  title: "Maduyu Academy", 
  description: "Learning management system for all ages",
  icons: "/logo1.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const icon = typeof metadata.icons === "string" ? metadata.icons : "/favicon.ico";

  const title = typeof metadata.title === "string" ? metadata.title : "Default Title";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Title tag now has a safe, string value */}
        <title>{title}</title>
        {/* Use the resolved icon */}
        <link rel="icon" href={icon} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
