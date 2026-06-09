"tsx"
import React from 'react';
import Image from 'react';
import { stories } from '@/data/siteData';
import { Quote } from 'lucide-react';

export default function Stories() {
  return (
    <section id="stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-md">Impact Stories</span>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Voices of Real Transformation</h2>
          <p className="text-sm text-gray-500">Every dataset we compile represents real individuals securing self-reliance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stories.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col sm:flex-row gap-6 items-start relative shadow-xs">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-700/5 stroke-2 shrink-0" />
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl relative overflow-hidden shrink-0 shadow-md border-2 border-white">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic font-medium">
                  "{item.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}