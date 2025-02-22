import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import gif2 from "@/public/2792370-hd_1920_1080_30fps-ezgif.com-optimize.gif";

import gif1 from "@/public/4285872-hd_1920_1080_30fps (1).gif";
import gif3 from "@/public/1108328_1080p_4k_1280x720 (1).gif";
import gif4 from "@/public/0_Filmmaking_Video Production_1280x720.gif";
import {
  VideoIcon,
  ScissorsIcon,
  Share1Icon,
  CameraIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: VideoIcon, // Changed from CopyIcon
    name: "AI Video Commercials",
    description: "AI-powered ads that captivate and convert—faster, smarter, and more cost-effective.",
    href: "/login",
    cta: "Craft high-impact, AI-generated ads designed to capture attention and drive conversions—faster and more cost-effective than traditional methods.",
    background: (
      <div className="absolute inset-0">
        <Image 
          src={gif4} 
          alt="AI Video Commercials Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -right-20 -top-20 opacity-60 blur-sm"
        />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ScissorsIcon, // Changed from InputIcon
    name: "Video Editing",
    description: "Get high-quality, engaging videos with expert editing—powered by AI for precision.",
    href: "/login",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <Image 
          src={gif3} 
          alt="Video Editing Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -right-20 -top-20 opacity-60 blur-sm"
        />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Share1Icon, // Changed from BookmarkIcon
    name: "Social Media AI Agent",
    description: "Our AI-driven social media agent—saving you time while keeping your brand active and relevant.",
    href: "/login",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <Image 
          src={gif2} 
          alt="Social Media AI Agent Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -right-20 -top-20 opacity-60 blur-sm"
        />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2.5",
  },
  {
    Icon: CameraIcon, // Changed from BellIcon
    name: "AI Video Production",
    description: "AI-powered tools for seamless video creation and automation.",
    href: "/login",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <Image 
          src={gif1} 
          alt="AI Video Production Background" 
          layout="fill" 
          objectFit="cover" 
          className="absolute -right-20 -top-20 opacity-60 blur-sm"
        />
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];


export default features;


export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
