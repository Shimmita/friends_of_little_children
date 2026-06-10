"tsx"
import React from 'react';
import { founderData } from '@/data/siteData';
import { Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Visual Stack & Quote */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -inset-3 bg-emerald-700/10 rounded-3xl rotate-1 z-0" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl z-10 aspect-5/6">
                <img 
                  src={founderData.image.src} 
                  alt={founderData.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Direct Core Principle Callout */}
            <div className="bg-emerald-700 text-white p-6 sm:p-8 rounded-2xl relative shadow-lg overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <Quote className="w-32 h-32 transform rotate-180" />
              </div>
              <Quote className="w-8 h-8 text-amber-400 fill-amber-400 mb-3" />
              <p className="text-base sm:text-lg font-medium leading-relaxed italic">
                "{founderData.signatureQuote}"
              </p>
            </div>
          </div>

          {/* Right Column: Lived Narrative & Qualifications */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100 px-3 py-1 rounded-md">Leadership Profile</span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">{founderData.name}</h2>
              <p className="text-sm font-bold text-amber-600 tracking-wide uppercase">{founderData.title}</p>
            </div>

            {/* The Story Biographies */}
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                {founderData.originText}
              </p>
              <p>
                {founderData.careerText}
              </p>
              <p>
                Today, under her precise strategic direction, FLA–Kenya actively targets structural root challenges through integrated child protective support, verified community school placement, youth technical apprenticeships, and localized women-led micro-enterprises.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Academic & Professional Credentials Grid */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">Academic & Professional Foundations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {founderData.credentials.map((cred, i) => {
                  const Icon = cred.icon;
                  return (
                    <div key={i} className="flex gap-3.5 p-4 bg-white rounded-xl border border-gray-100 shadow-2xs items-center">
                      <div className="p-2.5 bg-gray-50 text-emerald-700 rounded-lg shrink-0 border border-gray-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight">{cred.label}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{cred.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}