"tsx"
import React from 'react';
import Image from 'next/image';
import { Target, Eye, ShieldAlert } from 'lucide-react';
import whoWe from "../../public/images/who_we.jpeg";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl -rotate-2 z-0" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-4/3 lg:aspect-square">
              <Image 
                src={whoWe}
                alt="Women learning skills together"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-700 text-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block max-w-[220px]">
              <span className="block font-black text-3xl text-amber-400">15+ Yrs</span>
              <span className="text-xs font-medium uppercase tracking-wider text-emerald-100">Of Verified Grassroots Change</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-md">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Driven by Compassion, Sustained Through Practical Action.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Founded in March 2011, **Friends of the Little Angel** began with a focused mission: to protect and educate community orphans and vulnerable children facing systemic hardship. 
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              In 2020, we expanded our programming to include sustainable livelihood training for women and youth. By providing vocational skills and micro-entrepreneurship support, we help families gain long-term financial independence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3"><Target className="w-4 h-4" /></div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Our Mission</h4>
                <p className="text-xs text-gray-500 leading-normal">To protect children and equip women and youth with income tools.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center mb-3"><Eye className="w-4 h-4" /></div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Our Vision</h4>
                <p className="text-xs text-gray-500 leading-normal">A self-reliant community where everyone has resources to thrive.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center mb-3"><ShieldAlert className="w-4 h-4" /></div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Core Value</h4>
                <p className="text-xs text-gray-500 leading-normal">Accountability and deep integrity guide every shilling spent.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}