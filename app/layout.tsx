import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "n8nGalaxy — AI Automation & Chatbot Studio",
  description:
    "Premium AI automation, chatbot, and workflow studio built on Next.js with a galaxy-inspired experience.",
  metadataBase: new URL("https://n8ngalaxy.com"),
  openGraph: {
    title: "n8nGalaxy — AI Automation & Chatbot Studio",
    description:
      "Discover solutions, request custom automations, and explore our AI workflow gallery.",
    url: "https://n8ngalaxy.com",
    siteName: "n8nGalaxy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased text-[var(--ink)]`}>
        <div className="relative min-h-screen overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(246,199,105,0.14),transparent_42%),radial-gradient(circle_at_12%_25%,rgba(39,197,255,0.2),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(39,197,255,0.18),transparent_40%)] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative z-10 flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1 pb-16 pt-8">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
