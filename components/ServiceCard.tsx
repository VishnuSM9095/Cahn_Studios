'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'react-lottie-player';
import Link from 'next/link';

interface ServiceCardProps {
  service: {
    title: string;
    content: string;
    button: { enable: boolean; label: string; link: string };
    animation: string;
  };
  i: number;
  animationData: any;
  scrollProgress: any;
  range: [number, number];
  targetScale: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, i, animationData, scrollProgress, range, targetScale }) => {
  const containerRef = useRef(null);
  const scale = useTransform(scrollProgress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="relative z-10">
      <motion.div
        className="sticky top-0 z-10"
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <section className={`py-16 backdrop-blur-lg ${i % 2 ? 'bg-gray-100/80' : 'bg-white/80'}`}>
          <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className={`service-media ${i % 2 === 0 ? 'md:order-2' : ''}`}>
                {animationData && (
                  <Lottie loop play animationData={animationData} className="w-full max-w-lg" />
                )}
              </div>
              <div className={`service-content mt-5 md:mt-0 ${i % 2 === 0 ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl font-bold text-gray-800 leading-snug">{service.title}</h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">{service.content}</p>
                {service.button.enable && (
                  <Link
                    href={service.button.link}
                    className="mt-6 inline-flex items-center text-blue-600 hover:underline text-lg font-semibold"
                  >
                    {service.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
