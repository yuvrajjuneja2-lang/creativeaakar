import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <img
            src="/logo.png"
            alt="Creative Aakar Logo"
            className="w-40 mb-8 opacity-90"
          />

          <h1 className="text-3xl md:text-5xl leading-tight tracking-tight">
            Cinematic Storytelling
            <br /> For Modern Brands
          </h1>

          <button className="mt-10 px-8 py-3 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition">
            Enter
          </button>
        </motion.div>
      </section>

      {/* STATEMENT */}
      <section className="py-32 text-center px-6">
        <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto leading-snug text-white/90">
          We craft visuals, narratives, and digital worlds
          <span className="block text-white/50">that move culture.</span>
        </h2>
      </section>

      {/* FOOTER */}
      <section className="py-40 text-center">
        <p className="text-white/40 text-sm tracking-wide">Creative Aakar</p>
      </section>
    </div>
  );
}