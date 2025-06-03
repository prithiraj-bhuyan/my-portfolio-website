'use client';

import React, { useEffect, useRef, useState } from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import { motion, useMotionValue } from 'framer-motion';

const Clients = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      x.set(x.get() + 0.4); // Moving right with slow speed
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
      e.preventDefault();
      
      const currentX = x.get();
      const deltaX = e.deltaX || e.deltaY;
      x.set(currentX - deltaX);

      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

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

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };

    const handleTouchEnd = () => {
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };

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

  // Reset position for infinite loop effect (moving right)
  useEffect(() => {
    const unsubscribe = x.onChange((currentX) => {
      const cardWidth = 400; // Approximate width per testimonial card
      const totalWidth = testimonials.length * cardWidth;
      
      if (currentX >= totalWidth) {
        x.set(0);
      } else if (currentX < 0) {
        x.set(totalWidth);
      }
    });

    return unsubscribe;
  }, [x]);

  return (
    <div className='py-20' id="testimonials">
       <h1 className='heading'>
        My {' '}
        <span className='text-purple'>Academic Background</span>
       </h1>
       <div className='flex flex-col items-center max-lg:mt-10 lg:py-10'>
            {/* Scrollable wrapper around InfiniteMovingCards */}
            <div 
              ref={containerRef}
              className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
              style={{ maskImage: 'none', WebkitMaskImage: 'none' }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div
                style={{ x }}
                className="w-full"
              >
                <InfiniteMovingCards 
                  items={testimonials}
                  direction='right'
                  speed='slow'
                  pauseOnHover={true}
                  className="[animation-play-state:paused] [&>*]:[animation-play-state:paused]"
                />
              </motion.div>
              
              {/* Optional scroll indicator */}
              <div className="flex justify-center mt-4 opacity-60">
                <p className="text-xs text-gray-400">
                  {isScrolling ? '🎯 Manual scroll active' : '🔄 Auto-scrolling right'} • Scroll or drag to navigate
                </p>
              </div>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
                {companies.map(({id, img, name}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img 
                            src={img}
                            alt={name}
                            className='md:w-10 w-5'
                        />
                        {/* <img 
                            src={nameImg}
                            alt={name}
                            className='md:w-24 w-20'
                        /> */}
                    </div>
                ))}
            </div>
       </div>
    </div>
  )
}

export default Clients