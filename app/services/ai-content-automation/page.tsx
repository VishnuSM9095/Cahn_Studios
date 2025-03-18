"use client";

import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MainNav } from "@/components/main-nav";
import MobileNav from "@/components/mobile-nav";
import { ModeToggle } from "@/components/toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  content: string;
  animation: string;
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
}

const services: Service[] = [
  {
    title: "AI Content Automation: Revolutionize Your Content Creation",
    content:
      "Welcome to AI Content Automation, where we harness the power of artificial intelligence to transform the way you create content. Our service automates the production of high-quality, engaging content, allowing you to achieve exponential reach without investing countless hours in writing, editing, or production.",
    animation: "content-creator-for-digital-marketing.json",
    button: { enable: true, label: "Check it out", link: "/contact" },
  },
  {
    title: "What is AI Content Automation?",
    content:
      "AI Content Automation uses advanced artificial intelligence to generate tailored content such as blog posts, social media updates, articles, and more. By understanding your brand voice, audience, and goals, our AI creates content that resonates with your target market while saving you time and effort.",
    animation: "VAktuiCt2q.json",
    button: { enable: true, label: "Check it out", link: "/contact" },
  },
  {
    title: "Why Choose AI Content Automation?",
    content:
      "With AI Content Automation, you can streamline your content creation process and unlock incredible benefits. Save time by eliminating writer’s block and reducing content production from hours to minutes. Our service is cost-effective, providing premium content without the need for a full-time writing team.",
    animation: "content-creator-for-digital-marketing.json",
    button: { enable: true, label: "Check it out", link: "/contact" },
  },
  {
    title: "Unlock Exponential Reach",
    content:
      "Our AI doesn’t just create content—it optimizes it for maximum visibility. By analyzing trends and user behavior, it crafts content that’s more likely to be shared and discovered, helping you connect with a broader audience effortlessly.",
    animation: "VAktuiCt2q.json",
    button: { enable: true, label: "Check it out", link: "/contact" },
  },
];

const Services: React.FC = () => {
  const [animations, setAnimations] = useState<{ [key: string]: any }>({});
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Detect system theme
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleThemeChange);
    return () => darkModeMediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    const loadAnimations = async () => {
      const animationData: { [key: string]: any } = {};
      await Promise.all(
        services.map(async (service) => {
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
    <div className="relative min-h-screen">
      {/* 🔹 Sticky Navbar (No Changes) */}
      <header className="h-16 sticky top-0 z-50 w-full border-b border-border/40 bg-black/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-6 w-full max-w-screen-2xl mx-auto">
          <MobileNav />
          <div className="flex-1">
            <MainNav />
          </div>
          <nav className="flex gap-4">
            <ModeToggle />
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "default", size: "sm" }), "px-4")}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* 🌌 Background Beams */}
      <BackgroundBeams className="fixed inset-0 -z-20 backdrop-blur-xl" />

      {/* 🏗️ Stacked Services Section */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-[100px] md:mt-[200px]">
        {services.map((service, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <section
              key={`service-${index}`}
              className="sticky top-[50%] transform -translate-y-1/2 flex items-center justify-center min-h-screen"
              style={{ zIndex: services.length + index }}
            >
              <div
                className={cn(
                  "w-[90vw] max-w-[1200px] mx-auto p-6 md:p-12 rounded-xl shadow-xl border transition-all duration-300",
                  isDarkMode
                    ? "border-white bg-black/40 backdrop-blur-xl"
                    : "border-gray-300 bg-white shadow-lg"
                )}
                style={{
                  minHeight: "450px",
                  height: "auto",
                  position: "relative",
                  transform: `translateY(${index * 60}px)`,
                }}
              >
                <div className="grid items-center gap-6 md:grid-cols-2">
                  {/* 🌀 Lottie Animation */}
                  <div className={`${!isOdd ? "md:order-2" : ""}`}>
                    {animations[service.animation] ? (
                      <Lottie
                        loop
                        animationData={animations[service.animation]}
                        play
                        className="w-full max-w-[300px] md:max-w-[400px] mx-auto"
                      />
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>

                  {/* 📝 Service Content */}
                  <div className={`text-left px-4 ${!isOdd ? "md:order-1" : ""}`}>
                    <h2
                      className={cn(
                        "text-2xl md:text-4xl font-bold",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={cn(
                        "mt-4 text-base md:text-lg",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      {service.content}
                    </p>
                    {service.button.enable && (
                      <Link
                        href={service.button.link}
                        className={cn(
                          "mt-4 md:mt-6 inline-flex items-center text-lg font-semibold",
                          isDarkMode ? "text-blue-400 hover:underline" : "text-blue-600 hover:text-blue-800"
                        )}
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

export default Services;
