'use client';

import { certificates } from '@/data';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Certificates = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      x.set(x.get() - 0.5); // Adjust scroll speed here
      animationFrame = requestAnimationFrame(animate);
    };

    // Only animate if not hovering and not manually scrolling
    if (!isHovering && !isScrolling) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering, isScrolling, x]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Prevent default scroll behavior
      
      // Update the motion value based on wheel delta
      const currentX = x.get();
      const deltaX = e.deltaX || e.deltaY; // Use deltaY if deltaX is not available (vertical scroll)
      x.set(currentX - deltaX);

      // Set scrolling state
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Resume auto-scroll after 2 seconds of no manual scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      container.dataset.startX = touch.clientX.toString();
      container.dataset.startScrollX = x.get().toString();
      setIsScrolling(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const startX = parseFloat(container.dataset.startX || '0');
      const startScrollX = parseFloat(container.dataset.startScrollX || '0');
      const deltaX = startX - touch.clientX;
      
      x.set(startScrollX - deltaX);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };

    const handleTouchEnd = () => {
      // Resume auto-scroll after 2 seconds of no touch interaction
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

    // Add event listeners
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [x]);

  // Reset position when reaching certain bounds (infinite scroll effect)
  useEffect(() => {
    const unsubscribe = x.onChange((currentX) => {
      const totalWidth = certificates.length * 320; // Approximate width per certificate
      
      // Reset position for infinite loop effect
      if (currentX <= -totalWidth) {
        x.set(0);
      } else if (currentX > 0) {
        x.set(-totalWidth);
      }
    });

    return unsubscribe;
  }, [x]);

  return (
    <section className="py-20 text-white overflow-hidden" id="certificates">
      <h1 className="heading pb-16">
        My <span className="text-purple"> Certificates</span>
      </h1>

      <div
        className="relative w-full overflow-x-hidden cursor-grab active:cursor-grabbing"
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-12 w-max"
          style={{ x }}
        >
          {[...certificates, ...certificates, ...certificates].map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[320px]"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-72 h-52 relative rounded-lg overflow-hidden border border-white/10 shadow-md bg-white"
              >
                <Image
                  src={cert.img}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </a>
              <p className="text-sm text-center mt-2 max-w-[10rem]">
                {cert.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Optional: Add scroll indicator */}
      <div className="flex justify-center mt-4 opacity-60">
        <p className="text-xs text-gray-400">
          {isScrolling ? '🎯 Manual scroll active' : '🔄 Auto-scrolling'} • Scroll or drag to navigate
        </p>
      </div>
    </section>
  );
};

export default Certificates;