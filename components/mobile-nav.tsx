"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, ChevronDown } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function for smooth scrolling
  const scrollToSection = (e: React.MouseEvent, sectionId: string, fallbackHref: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else {
      window.location.href = fallbackHref;
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* 🍔 Mobile Menu Button */}
      <SheetTrigger asChild>
        <button className="lg:hidden block mr-4">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </SheetTrigger>

      {/* 📜 Mobile Navigation Drawer */}
      <SheetContent side="left" className="w-72 bg-black text-white">
        <ScrollArea className="h-full">
          {/* 🔹 Logo */}
          <div className="flex items-center justify-between px-4 py-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/CAHN_Logo_White_RGB.png" alt="CAHN Logo" width={80} height={25} />
            </Link>
          </div>

          {/* 📌 Mobile Links */}
          <nav className="flex flex-col space-y-4 px-4 text-lg">
            <MobileLink href="/" onOpenChange={setOpen}>Home</MobileLink>
            <MobileLink href="#features" onOpenChange={setOpen} onClick={(e) => scrollToSection(e, "features", "/")}>
              Services
            </MobileLink>
            <MobileLink href="#contact" onOpenChange={setOpen} onClick={(e) => scrollToSection(e, "contact", "/")}>
              Contact
            </MobileLink>

            {/* 🎯 Dropdown - Solutions */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full text-left hover:text-gray-300 transition"
              >
                Solutions <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* 🔽 Dropdown Menu (Services + Products) */}
              <div
                className={`mt-2 ml-4 space-y-2 text-sm text-gray-400 overflow-hidden transition-all duration-300 ${
                  dropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Services */}
                <p className="text-white font-semibold">Services</p>
                <MobileLink href="/services/ai-content-automation" onOpenChange={setOpen}>
                  AI Content Automation
                </MobileLink>
                <MobileLink href="/services/ai-video-commercials" onOpenChange={setOpen}>
                  AI Video Commercials
                </MobileLink>
                <MobileLink href="/services/video-editing" onOpenChange={setOpen}>
                  Video Editing
                </MobileLink>

                {/* Products */}
                <p className="text-white font-semibold mt-3">Products</p>
                <MobileLink href="/products/ai-storytelling-platform" onOpenChange={setOpen}>
                  AI Storytelling Platform
                </MobileLink>
              </div>
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

// Mobile Link Component
interface MobileLinkProps {
  href: string;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

function MobileLink({ href, onOpenChange, children, onClick }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        onOpenChange(false); // Close menu on click
      }}
      className="block text-white hover:text-gray-300 transition"
    >
      {children}
    </Link>
  );
}

export default MobileNav;
