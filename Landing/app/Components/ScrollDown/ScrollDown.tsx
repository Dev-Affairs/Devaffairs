"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollDown = ({ sectionId }: { sectionId: string }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Check if the button was clicked before (persistent state)
    const hasClicked = localStorage.getItem("scrollDownClicked");
    if (hasClicked) return; // If clicked before, never show it again

    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setShowButton(false); // Hide when user scrolls
    };

    // Show the button after 7 seconds of inactivity (first time only)
    timeout = setTimeout(() => {
      setShowButton(true);
    }, 7000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById(sectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      setShowButton(false); // Hide button permanently
      localStorage.setItem("scrollDownClicked", "true"); // Save state so it never reappears
    }
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToNextSection}
          className="fixed left-1/2 bottom-6 sm:bottom-10 transform -translate-x-1/2 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:scale-110 transition-all duration-300 ease-in-out"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [10, -10, 10], opacity: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown className="text-white w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollDown;
