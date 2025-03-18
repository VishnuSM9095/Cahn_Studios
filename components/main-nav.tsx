"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  // Function for smooth scrolling
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault(); // Prevent full page reload
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mr-4 md:flex">
      {/* Logo */}
      <Link href="/" className="lg:mr-6 sm:mr-0 flex items-center gap-2">
        <Image
          src="/CAHN_Logo_Black_RGB.png"
          alt="CAHN Logo"
          width={80}
          height={25}
          className="dark:hidden"
        />
        <Image
          src="/CAHN_Logo_White_RGB.png"
          alt="CAHN Logo"
          width={80}
          height={25}
          className="hidden dark:block"
        />
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {/* Dropdown - Solutions */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 gap-6 p-4 md:w-[400px] lg:w-[500px]">
                {/* Services Column */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Services</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/ai-content-automation" className="block text-muted-foreground transition-colors hover:text-gray-800">
                        AI Content Automation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ai-video-commercials" className="block text-muted-foreground transition-colors hover:text-gray-800">
                        AI Video Commercials
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/video-editing" className="block text-muted-foreground transition-colors hover:text-gray-800">
                        Video Editing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Products Column */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Products</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/products/ai-storytelling-platform" className="block text-muted-foreground transition-colors hover:text-gray-800">
                        AI Storytelling Platform
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Smooth Scroll Links */}
          <NavigationMenuItem>
            <Link
              href="/#features"
              onClick={(e) => scrollToSection(e, "features")}
              className={navigationMenuTriggerStyle()}
            >
              Services
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={navigationMenuTriggerStyle()}
            >
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
