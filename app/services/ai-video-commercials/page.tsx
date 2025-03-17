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

const videoServices = [
  {
    title: "AI Video Commercial Automation",
    content:
      "Effortless Production, Exponential Reach. Revolutionizing video commercial creation with AI-driven automation, from scriptwriting to final edits.",
    animation: "1741864843789",
    button: {
      enable: true,
      label: "Learn More",
      link: "/#contact",
    },
  },
  {
    title: "Why Choose AI Video Commercial Automation?",
    content:
      "Save time, reduce costs, and scale your video production effortlessly. Our AI-powered system ensures professional, engaging, and high-quality results.",
    animation: "1741864950467",
    button: {
      enable: true,
      label: "Discover Benefits",
      link: "/#contact",
    },
  },
  {
    title: "Unlock Exponential Reach",
    content:
      "AI-optimized commercials designed to maximize engagement and conversions. Reach wider audiences with data-driven video production.",
    animation: "1741865009413",
    button: {
      enable: true,
      label: "Get Started",
      link: "/#contact",
    },
  },
];

const VideoAutomation: React.FC = () => {
  const [animations, setAnimations] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const loadAnimations = async () => {
      const animationData: { [key: string]: any } = {};
      await Promise.all(
        videoServices.map(async (service) => {
          try {
            const data = await import(`@/public/animations/${service.animation}.json`);
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

      {/* 🏗️ Stacked Video Services Section */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-[200px]">
        {videoServices.map((service, index) => {
          const zIndex = index + 1;
          const isOdd = index % 2 !== 0;

          return (
            <section
              key={`video-service-${index}`}
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
                  {/* 🌀 Lottie Animation */}
                  <div className={`${!isOdd ? "md:order-2" : ""}`}>
                    {animations[service.animation] ? (
                      <Lottie
                        loop
                        animationData={animations[service.animation]}
                        play
                        className="w-full max-w-[400px] mx-auto"
                      />
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>

                  {/* 📝 Service Content */}
                  <div className={`text-left ${!isOdd ? "md:order-1" : ""}`}>
                    <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                    <p className="mt-4 text-lg text-gray-300">{service.content}</p>
                    {service.button.enable && (
                      <Link
                        href={service.button.link}
                        className="mt-6 inline-flex items-center text-blue-400 hover:underline text-lg font-semibold"
                      >
                        {service.button.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default VideoAutomation;
