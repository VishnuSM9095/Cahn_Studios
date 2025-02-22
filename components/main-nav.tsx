"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "./ui/badge";

export function MainNav() {
  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="lg:mr-6 sm:mr-0 flex items-center gap-2">
        {/* Light Mode Logo */}
        <Image
          src="/CAHN_Logo_Black_RGB.png"
          alt="CAHN Logo"
          width={80}
          height={25}
          className="dark:hidden"
        />

        {/* Dark Mode Logo */}
        <Image
          src="/CAHN_Logo_White_RGB.png"
          alt="CAHN Logo"
          width={80}
          height={25}
          className="hidden dark:block"
        />

        {/* <Badge className="hidden lg:block md:block">Beta</Badge> */}
      </Link>

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px]">
                <li className="row">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Image
                        src="/CAHN_Logo_Black_RGB.png"
                        alt="CAHN Logo"
                        width={50}
                        height={50}
                        className="dark:hidden"
                      />
                      <Image
                        src="/CAHN_Logo_White_RGB.png"
                        alt="CAHN Logo"
                        width={50}
                        height={50}
                        className="hidden dark:block"
                      />
                      
                      <p className="text-sm leading-tight text-muted-foreground">
                        To Bring you the best Multimedia solutions
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/#features" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Services
              </NavigationMenuLink>
            </Link>
            <Link href="/#features" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About US
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
