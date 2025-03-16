import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t border-border/50 bg-background py-6", className)}>
      <div className="container flex flex-col items-center justify-between gap-4 text-center text-muted-foreground md:flex-row md:text-left">
        {/* Left Section - Logo & Copyright */}
        <div className="flex flex-col items-center md:flex-row md:gap-3">
          <Icons.logo className="h-8 w-8 text-primary" />
          <p className="text-sm">© 2025 Cahn Studios. All rights reserved.</p>
        </div>

        {/* Center Section - Built By Vishnu */}
        <p className="text-sm">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/vishnu-sm-348b9024a/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary"
          >
            Vishnu
          </a>
        </p>

        {/* Right Section - Social Links */}
        
      </div>
    </footer>
  );
}
