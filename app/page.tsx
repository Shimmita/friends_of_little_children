"tsx"
'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import Founder from '@/components/sections/Founder'; // <-- Import added here
import Programs from '@/components/sections/Programs';
import Impact from '@/components/sections/Impact';
import Stories from '@/components/sections/Stories';
import GalleryPreview from '@/components/sections/GalleryPreview';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Founder /> 
        <AboutPreview />
        <Programs />
        <Impact />
        <Stories />
        <GalleryPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}