"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/heroImage.jpg",
    title: "Nurture Your Green Paradise",
    subtitle: "Your slogan goes here",
  },
  {
    id: 2,
    image: "/images/heroImage.jpg",
    title: "Grow Freshness at Your Home",
    subtitle: "Make nature part of your life",
  },
  {
    id: 3,
    image: "/images/heroImage.jpg",
    title: "Beautify Spaces with Nature",
    subtitle: "Plants make everything better",
  },
];
export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8 md:px-24 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold mb-3 max-w-xl">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-6">{slide.subtitle}</p>
                  <div className="flex gap-4">
                    <button className="bg-[#E17E27] hover:bg-[#d36f1e] text-white px-5 py-2 rounded-md text-sm font-medium transition">
                      Shop Now
                    </button>
                    <button className="bg-transparent border border-white px-5 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-green-900 transition">
                      Call Now
                    </button>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${current === i ? "bg-orange-500 w-4" : "bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  )
}
