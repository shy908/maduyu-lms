"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] bg-cover bg-center"
      style={{
        backgroundImage: `url("/img2.jpg")`, 
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

      {/* Hero Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
        }}
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-snug"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
          Transforming Education for All Ages <br className="hidden sm:block" />
          Discover Your Path to Learning.
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose mb-6 sm:mb-8 max-w-md sm:max-w-lg lg:max-w-3xl mx-auto text-gray-200"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Explore our wide range of educational services, from personalized homeschooling programs
          to professional courses designed to prepare learners for a brighter future.
        </motion.p>

        {/* Animated Button */}
        <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
          <Link href="/my-courses">
            <button className="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold text-sm sm:text-base lg:text-lg 
              hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ease-in-out">
              Explore Our Courses
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
