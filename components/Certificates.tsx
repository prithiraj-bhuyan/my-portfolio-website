'use client';

import { certificates } from '@/data';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Certificates = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      x.set(x.get() - 0.5); // Adjust scroll speed here
      animationFrame = requestAnimationFrame(animate);
    };

    if (!isHovering) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovering, x]);

  return (
    <section className="py-16 text-white overflow-hidden" id="certificates">
      <h1 className="heading py-20">
        My <span className="text-purple"> Certificates</span>
      </h1>

      <div
        className="relative w-full overflow-x-hidden"
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.div
          className="flex gap-12 w-max"
          style={{ x }}
        >
          {[...certificates, ...certificates].map((cert, index) => (
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
    </section>
  );
};

export default Certificates;
