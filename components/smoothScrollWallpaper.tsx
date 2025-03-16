'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
};

export default SmoothScrollWrapper;
