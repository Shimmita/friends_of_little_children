"tsx"
import React from 'react';
import Image from 'next/image';
import { programs } from '@/data/siteData';
import { ArrowUpRight } from 'lucide-react';

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100/60 px-3 py-1 rounded-md">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Structured Programs Delivering Measurable Change</h2>
          <p className="text-gray-600 text-sm sm:text-base">We avoid temporary fixes, focusing instead on providing education support and structural livelihood tools that build lasting stability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-2.5 bg-white/95 backdrop-blur-xs rounded-xl text-emerald-700 shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-grow">
                    {program.description}
                  </p>
                  <div className="pt-2">
                    <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider group/link">
                      Learn Strategy <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}