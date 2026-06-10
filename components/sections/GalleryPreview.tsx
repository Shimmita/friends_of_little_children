"tsx"
import React from 'react';
import { galleryItems } from '@/data/siteData';
import Image from 'next/image';

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-100 px-3 py-1 rounded-md">Media Gallery</span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Work in Action</h2>
            <p className="text-sm text-gray-500 max-w-xl">A transparent visual window showing our regular fieldwork across our primary operational locations.</p>
          </div>
          <a href="#contact" className="px-5 py-3 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shrink-0">
            Request Media Access
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 group shadow-xs hover:shadow-lg transition-all duration-300">
              <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                <Image
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="p-5 border-t border-gray-50">
                <h4 className="font-bold text-gray-900 text-sm tracking-tight group-hover:text-emerald-700 transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-xs mt-1">Friends of the Little Angel Media Archive</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}