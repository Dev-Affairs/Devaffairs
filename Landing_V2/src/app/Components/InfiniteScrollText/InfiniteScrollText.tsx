"use client";

import { useEffect, useRef, useState } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface Tech {
  name: string;
  pageLink: string;
  src: string;
}

const techs: Tech[] = [
  { name: 'Angular', pageLink: "https://angular.dev", src: '/sections/techSection/Angular.svg' },
  { name: 'React', pageLink: "https://react.dev", src: '/sections/techSection/React.svg' },
  { name: 'Next', pageLink: "https://nextjs.org", src: '/sections/techSection/NextJs.svg' },
  { name: 'Flutter', pageLink: "https://flutter.dev", src: '/sections/techSection/Flutter.svg' },
  { name: 'Python', pageLink: "https://www.python.org", src: '/sections/techSection/Python.svg' },
  { name: 'Go', pageLink: "https://go.dev", src: '/sections/techSection/Go.svg' },
  { name: 'Node Js', pageLink: "https://nodejs.org", src: '/sections/techSection/NodeJs.svg' },
  { name: 'Cloudflare', pageLink: "https://www.cloudflare.com", src: '/sections/techSection/Cloudflare.svg' },
  { name: 'AWS', pageLink: "https://aws.amazon.com", src: '/sections/techSection/AWS.svg' },
  { name: 'MongoDB', pageLink: "https://www.mongodb.com", src: '/sections/techSection/MongoDB.svg' },
  { name: 'Postgresql', pageLink: "https://www.postgresql.org", src: '/sections/techSection/Postgresql.svg' }
];

const InfiniteScrollText = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState<"left" | "right">("left");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const newDirection = currentY < lastScrollY.current ? "right" : "left";
      setDirection("left");
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const isMobile = window.innerWidth < 640; // sm breakpoint (Tailwind)
  
    controls.start({
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        duration: isMobile ? 5 : 20, // ⬅️ Faster on mobile: 10s vs 20s
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [direction, controls]);
  
  useEffect(() => {
    const updateAnimation = () => {
      const isMobile = window.innerWidth < 640;
  
      controls.start({
        x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        transition: {
          duration: isMobile ? 5 : 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
  
    updateAnimation(); // run on mount
    window.addEventListener("resize", updateAnimation); // also update if user resizes
  
    return () => window.removeEventListener("resize", updateAnimation);
  }, [direction, controls]);  
  
  return (
    <div className="relative w-full bg-black py-6 my-11 overflow-hidden">
      {/* Edge fade shadows */}
      <div className="absolute left-0 top-0 bottom-0 md:w-[27%] lg:w-[21%] bg-gradient-to-r from-black via-black/95 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 md:w-[27%] lg:w-[21%] bg-gradient-to-l from-black via-black/95 to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div className="relative px-6 overflow-hidden">
        <Motion.div
          className="flex whitespace-nowrap items-center text-white text-sm sm:text-base font-medium"
          animate={controls}
        >
          {[...Array(10)].flatMap((_, i) =>
            techs.map((tech, j) => (
              <div
                key={`${i}-${j}`}
                className="flex items-center gap-6 mx-6 opacity-80"
              >
                <div className="relative w-15 h-15">
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    fill
                    className="object-contain"
                    sizes="20px"
                    priority={false}
                  />
                </div>
                {/* <span>{tech.name}</span> */}
              </div>
            ))
          )}
        </Motion.div>
      </div>
    </div>
  );
};

export default InfiniteScrollText;
