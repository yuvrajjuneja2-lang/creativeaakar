import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      <section className="h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl md:text-5xl leading-tight tracking-tight">
            Creative Aakar
          </h1>

          <p className="mt-4 text-white/60">
            Cinematic storytelling for modern brands.
          </p>
        </motion.div>
      </section>
    </div>
  );
}