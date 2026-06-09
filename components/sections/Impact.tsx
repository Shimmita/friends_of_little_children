"tsx"
import React from 'react';
import { impactStats } from '@/data/siteData';

export default function Impact() {
  return (
    <section className="relative py-20 bg-emerald-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
          {impactStats.map((stat, i) => (
            <div key={i} className="space-y-2 border-r last:border-0 border-white/10 px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-100 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}