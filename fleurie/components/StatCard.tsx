"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative group bg-[#FFF8F9] dark:bg-[#1a1a1a] rounded-3xl px-6 py-6 text-center w-full max-w-xs sm:max-w-[200px]
        shadow-lg hover:shadow-[#E91E63]/30 border border-transparent hover:border-[#E91E63]
        transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden
      "
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-3 right-3 text-[#F6C667] group-hover:animate-bounce"
      >
        <Sparkles size={20} />
      </motion.div>

      <div className="text-2xl sm:text-xl font-extrabold text-[#333333] dark:text-white">
        {value}
      </div>
      <div className="text-[#9c6e7f] dark:text-gray-300 mt-2 text-sm sm:text-base">
        {label}
      </div>
    </motion.div>
  );
}