"tsx"
import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import childrenAudience from "../../public/images/kindergaten.jpeg"

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
        <Image
          src={childrenAudience}
          alt="Happy community children laughing together"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20 text-white">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-xs">
          <ShieldCheck className="w-3.5 h-3.5" /> Registered Community-Based Organization Since 2011
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight max-w-3xl leading-[1.1]">
          Helping Children. <br/>
          <span className="text-amber-500">Empowering Women.</span> <br/>
          Transforming Communities.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed font-normal">
          We provide practical education frameworks, micro-business capitalization networks, and vital welfare support systems that break cycles of poverty.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a href="#programs" className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-700/20 text-center flex items-center justify-center gap-2 group">
            Our Core Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs text-white font-bold rounded-xl transition-all text-center">
            Partner With Us
          </a>
         
        </div>
      </div>
    </section>
  );
}