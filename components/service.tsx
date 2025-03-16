"use client";

import { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { MainNav } from "@/components/main-nav";
import  MobileNav  from "@/components/mobile-nav";
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

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  const [animations, setAnimations] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    services.forEach((service) => {
      import(`@/public/animations/${service.animation}`)
        .then((data) =>
          setAnimations((prev) => ({ ...prev, [service.animation]: data.default }))
        )
        .catch((err) => console.error("Animation import error:", err));
    });
  }, [services]);

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
      <div className="relative z-10 flex flex-col items-center justify-center mt-[200px]">
        {services.map((service, index) => {
          const zIndex = index + 1;
          const isOdd = index % 2 !== 0;

          return (
            <section
              key={`service-${index}`}
              className="sticky top-[50%] transform -translate-y-1/2 flex items-center justify-center min-h-screen "
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
                    {animations[service.animation] && (
                      <Lottie
                        loop
                        animationData={animations[service.animation]}
                        play
                        className="w-full max-w-[400px] mx-auto"
                      />
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

export default Services;
