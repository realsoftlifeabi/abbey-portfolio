'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div
      className="relative w-full h-[95vh] max-h-[600px] flex items-center justify-center bg-cover bg-center rounded-b-4xl overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      {/* Glassmorphic Tilt Container */}
      <motion.div
        className="absolute z-10 w-full h-full max-w-7xl mx-auto text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-b-4xl px-6 sm:px-10 py-12 shadow-xl flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-[-50px] left-[-50px] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-gray-700 rounded-full opacity-10 blur-3xl z-0"
          animate={{ x: [0, 50, -50, 0], y: [0, 80, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <motion.div
          className="absolute right-[-60px] bottom-[-50px] w-[25vw] h-[25vw] max-w-[250px] max-h-[250px] bg-gray-600 rounded-full opacity-10 blur-3xl z-0"
          animate={{ x: [0, -40, 20, 0], y: [0, -60, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />

        {/* Hero Text Content */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight header-gradient">
            Sanni Abiodun
          </h1>

          <h2 className="text-lg sm:text-xl text-gray-200 mb-6">
            I am a{' '}
            <span className="text-white font-semibold">
              <Typewriter
                words={[
                  'Full-Stack Developer.',
                  'UI/UX Designer.',
                  'Problem Solver.',
                  'Tech Leader.',
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed mb-10">
            Multidisciplinary developer with 10+ years in UI/UX, web, and ML. Founder, team lead,
            and Upwork Top Rated freelancer with a 100% success score.
          </p>

          <div className="mb-12">
            <Button
              asChild
              variant="liftoff"
              size="lg"
              className="px-8 py-5 text-base rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              <Link href="#contact">Let&apos;s Collaborate</Link>
            </Button>
          </div>
        </motion.header>
      </motion.div>
    </div>
  );
}
