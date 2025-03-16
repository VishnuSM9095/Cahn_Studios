import Image from "next/image";
import { BentoDemo } from "@/components/bento-features";
import { Spotlight } from "@/components/ui/spotlight-new"; 
import ContactForm from "@/components/form"; 
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";

function HeroPage() {
  return (
    <>
      <style>
        {`
          html, body {
            overflow-x: hidden;
            width: 100%;
          }

          /* 🔥 Apply Gradient Transparency to Image */
          .fade-image {
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
          }
        `}
      </style>

      <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20 overflow-hidden">
        {/* 🌟 Spotlight Effect */}
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

        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center sm:mb-10 lg:mb-20 md:sm-20">
          <ShineBorder
            className="text-center capitalize bg-muted px-4 py-1.5 text-lg font-medium absolute"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            Telling Your Stories Seamlessly✨
          </ShineBorder>

          {/* ✅ PNG LOGO WITH TRANSPARENCY */}
          <Image
            src="/CAHN_Logo_Black_RGB.png"
            alt="Cahn Studios"
            width={300}
            height={100}
            className="fade-image dark:hidden mt-10"
          />
          <Image
            src="/CAHN_Logo_White_RGB.png"
            alt="Cahn Studios (Dark Mode)"
            width={300}
            height={100}
            className="fade-image hidden dark:block mt-[150px]"
          />

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-5">
            From AI video ads to automated editing, we craft high-impact content that captivates.
          </p>

          <div className="space-x-4 mt-3">
            <Link href="/features" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <a
              href="/#features"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-sm-2")}
            >
              Let&apos;s Explore 👇🏻
            </a>
          </div>
        </div>

        <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden">
          <BorderBeam size={250} />
        </div>
      </section>

      <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-center text-xl font-semibold text-gray-500 pb-2 mt-8 mb-4">SERVICES</h2>
        </div>
        <BentoDemo />
      </section>
      <section id="contact">
        <ContactForm />
      </section>  
    </>
  );
}

export default HeroPage;
