"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MainNav } from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";
import { ModeToggle } from "@/components/toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Static Data for Services Page
const servicesData = {
  title: "Professional Video Editing Services – Transform Your Raw Footage into Stunning Visual Stories",
  description:
    "Looking for high-quality video editing that enhances your content and keeps your audience engaged? We provide professional video editing services tailored to your needs, whether you’re a content creator, business, or filmmaker.",
  services: [
    { name: "Cinematic Editing", description: "Smooth transitions, color correction, and storytelling techniques." },
    { name: "Corporate & Business Videos", description: "Engaging promos, brand stories, and advertisements." },
    { name: "Social Media Content", description: "Reels, YouTube videos, and short-form content optimized for engagement." },
    { name: "Event & Wedding Edits", description: "Beautifully crafted highlight reels and full-event edits." },
    { name: "Motion Graphics & Effects", description: "Titles, animations, and special effects to elevate your visuals." },
    { name: "AI-Enhanced Editing", description: "Smart enhancements for fast and high-quality results." },
  ],
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* 🔹 Sticky Navbar */}
      <header className="h-16 sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <BackgroundBeams className="fixed inset-0 -z-20 backdrop-blur-xl" />

      {/* 🏗️ Services Hero Section */}
      <div className="relative z-10 text-center px-6 mt-[150px]">
        <h1 className="text-4xl font-extrabold text-white max-w-4xl mx-auto">{servicesData.title}</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{servicesData.description}</p>
      </div>

      {/* 🏗️ Stacked Services Section */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-[100px]">
        {servicesData.services.map((service, index) => {
          const zIndex = index + 1;
          const isOdd = index % 2 !== 0;

          return (
            <section
              key={`service-${index}`}
              className="sticky top-[50%] transform -translate-y-1/2 flex items-center justify-center min-h-screen"
              style={{ zIndex }}
            >
              <div
                className="w-[90vw] max-w-[1200px] mx-auto p-3 md:p-12 rounded-xl shadow-xl border border-white 
                bg-black/40 backdrop-blur-xl"
                style={{
                  minHeight: "450px",
                  height: "auto",
                  position: "relative",
                  transform: `translateY(${index * 60}px)`,
                }}
              >
                <div className="grid items-center gap-1 md:grid-cols-2">
                  {/* 📝 Service Content */}
                  <div className={`text-left ${!isOdd ? "md:order-1" : ""}`}>
                    <h2 className="text-4xl font-bold text-white">{service.name}</h2>
                    <p className="mt-4 text-lg text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
