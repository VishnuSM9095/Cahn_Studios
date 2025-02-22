// "use client";
import { notFound } from "next/navigation"

import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { LoggedInNav } from "@/components/loggedin-nav"
import { ModeToggle } from "@/components/toggle"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center py-4 justify-between">
          <LoggedInNav />
          <div className="flex items-center gap-4 mx-2">
            <ModeToggle />
          </div>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col justify-center">
        {children}
      </main>

      <SiteFooter className="border-t" />
    </div>
  )
}
