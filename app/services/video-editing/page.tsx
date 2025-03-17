"use client";

import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";
import { PT_Mono } from "next/font/google";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MainNav } from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";
import { ModeToggle } from "@/components/toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const raleway = PT_Mono({ subsets: ["latin"], weight: ["400", "400"] });

// 🔹 Services & Their Animations
const servicesData = [
  {
    name: "Cinematic Editing",
    description: "Smooth transitions, color correction, and storytelling techniques.",
    animation: "Animation - 1742131690916.json",
  },
  {
    name: "Corporate & Business Videos",
    description: "Engaging promos, brand stories, and advertisements.",
    animation: "fYtmgAeaM7.json",
  },
  {
    name: "Social Media Content",
    description: "Reels, YouTube videos, and short-form content optimized for engagement.",
    animation: "Girl setting Favorite Button in website.json",
  },
  {
    name: "Event & Wedding Edits",
    description: "Beautifully crafted highlight reels and full-event edits.",
    animation: "Animation - 1742137244262 (1).json",
  },
];

export default function VideoAutomation() {
  const [animations, setAnimations] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const loadAnimations = async () => {
      const animationData: { [key: string]: any } = {};
      await Promise.all(
        servicesData.map(async (service) => {
          try {
            const data = await import(`@/public/animations/${service.animation}`);
            animationData[service.animation] = data.default;
          } catch (err) {
            console.error(`Error loading animation: ${service.animation}`, err);
          }
        })
      );
      setAnimations(animationData);
    };

    loadAnimations();
  }, []);

  return (
    <div className={`relative min-h-screen ${raleway.className}`}>
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
      <BackgroundBeams className="fixed inset-0 -z-20 backdrop-blur-xl" />

      {/* 📌 Single Card with Grid Layout */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
            <section className="relative w-[90vw] max-w-[1200px] mx-auto p-8 md:p-12 
                rounded-xl shadow-xl border border-white/30 
                bg-grey/10 backdrop-blur-lg">
                {/* 📝 Title */}
                <h1 className="text-4xl font-bold text-white text-center">
                Professional Video Editing Services
                </h1>
                <p className="mt-4 text-lg text-gray-300 text-center">
                Enhance your content with high-quality editing tailored for businesses, creators, and filmmakers.
                </p>

                {/* 🎬 Services Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {servicesData.map((service) => (
                    <div key={service.name} className="flex flex-col items-center text-center">
                    {/* 🎞️ Animation */}
                    {animations[service.animation] ? (
                        <Lottie
                        loop
                        animationData={animations[service.animation]}
                        play
                        className="w-full max-w-[300px]"
                        />
                    ) : (
                        <p>Loading....</p>
                    )}

                    {/* 📝 Service Name & Description */}
                    <h2 className="mt-4 text-xl font-bold text-white">{service.name}</h2>
                    <p className="text-gray-300">{service.description}</p>
                    </div>
                ))}
                </div>
            </section>
        </div>

    </div>
  );
}
