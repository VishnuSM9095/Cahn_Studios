import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { fontSans } from "@/lib/fonts";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/toggle";
import { SiteFooter } from "@/components/site-footer";
import MobileNav from "@/components/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cahn Studios",
  description: "Cahn studios - AI story telling platform",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-16 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6 w-full max-w-screen-2xl mx-auto">
          <MobileNav />
          <div className="flex-1">
            <MainNav />
          </div>
          <nav className="flex gap-4">
            <ModeToggle />
            
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
