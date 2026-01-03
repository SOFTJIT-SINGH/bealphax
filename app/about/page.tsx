'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// --- 1. Define the interface for the props ---
interface AnimatedSectionProps {
  children: React.ReactNode;
  variant: Variants;
  className?: string;
}

// --- 2. Apply the interface to the component ---
const AnimatedSection = ({ children, variant, className = "" }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="w-full min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SECTION 1 */}
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-28">
        {/* Image */}
        <AnimatedSection 
          variant={fadeInLeft} 
          className="w-full md:w-1/2 flex justify-center order-1 md:order-1"
        >
          <div className="relative w-full max-w-md lg:max-w-lg group">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src='/assets/images/imag/about/abouthrx.png'
                alt='Model HR'
                width={500}
                height={600}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </div>
        </AnimatedSection>

        {/* Text Content */}
        <AnimatedSection 
          variant={fadeInRight} 
          className="w-full md:w-1/2 order-2 md:order-2 text-center md:text-right"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              WE ARE NOT JUST A BRAND, WE ARE A <span className="text-blue-600">MISSION</span>!
            </motion.h3>
            <motion.h4 
              className="text-xl sm:text-2xl font-semibold text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              TO BRING OUT THE BEST IN YOU
            </motion.h4>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              When we work on our fitness goal, it brings about a drastic change
              in all aspects of our life. At HRX, it's our mission to motivate and
              enable you to work on your mind and body, making sure you can be the
              best version of yourself.
            </motion.p>
          </div>
        </AnimatedSection>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-28">
        {/* Text Content */}
        <AnimatedSection 
          variant={fadeInLeft} 
          className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-right"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.h3 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              BE ALPHA BRAND <span className="text-blue-600">MANIFESTO</span>
            </motion.h3>
            <motion.h4 
              className="text-xl sm:text-2xl font-semibold text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              FIND YOUR INNER HERO
            </motion.h4>
            <motion.div 
              className="text-lg text-gray-600 leading-relaxed space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p>Each of us can be better tomorrow.</p>
              <p>All the resources we need are within us.</p>
              <p>It is each one's <strong className="text-blue-600">RESPONSIBILITY</strong> - to oneself, not to anyone else.</p>
              <p>To be the best version of oneself that one can be.</p>
              <p>To <strong className="text-blue-600">CONFRONT</strong> our fear and discover the ecstasy of overcoming it.</p>
              <p>Once we know this, we will never settle for anything less.</p>
              <p>And this can only come from a <strong className="text-blue-600">DISCIPLINED</strong>, healthy, sound mind in a fit body.</p>
              <p className="font-semibold text-gray-900">HRX: To the best possible version of ourselves we can be.</p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection 
          variant={fadeInRight} 
          className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
        >
          <div className="relative w-full max-w-md lg:max-w-lg group">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src='/assets/images/imag/about/aboutd.jpg'
                alt='Model Diljit'
                width={500}
                height={600}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </div>
        </AnimatedSection>
      </div>

      {/* SECTION 3 - Additional Content */}
      <AnimatedSection variant={fadeInUp} className="w-full text-center py-12 bg-gray-50 rounded-2xl shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">OUR COMMITMENT TO EXCELLENCE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-blue-600 text-4xl mb-4">★</div>
              <h4 className="text-xl font-semibold mb-2">Quality Products</h4>
              <p className="text-gray-600">Premium materials and craftsmanship in every item we create.</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="text-blue-600 text-4xl mb-4">❤️</div>
              <h4 className="text-xl font-semibold mb-2">Customer Focus</h4>
              <p className="text-gray-600">Your satisfaction is our top priority in everything we do.</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="text-blue-600 text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold mb-2">Sustainable Practices</h4>
              <p className="text-gray-600">Committed to ethical manufacturing and environmental responsibility.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Page;