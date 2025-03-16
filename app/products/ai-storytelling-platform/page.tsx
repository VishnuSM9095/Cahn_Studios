"use client";

import Link from "next/link";
import { Raleway } from "next/font/google";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MainNav } from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";
import { ModeToggle } from "@/components/toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight-new"; 


const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export default function MeteorsPage() {
  return (
    <div className={`relative min-h-screen flex flex-col ${raleway.className}`}>
      {/* 🔹 Sticky Navbar */}
      <header className="h-16 sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-6 w-full max-w-screen-2xl mx-auto">
          <MobileNav />
          <div className="flex-1">
            <MainNav />
          </div>
          <nav className="flex gap-4">
            <ModeToggle />
            <Link href="/login" className={cn(buttonVariants({ variant: "default", size: "sm" }), "px-4")}>
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* 🌌 Background Beams */}
       <div className="fixed inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
                <Spotlight
                  gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)"
                  gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)"
                  gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
                  translateY={-350}
                  width={560}
                  height={1380}
                  smallWidth={240}
                  duration={7}
                  xOffset={100}
                />
              </div>

      {/* ✨ Centered Gradient Text */}
      <div className="flex flex-1 items-center justify-center text-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
