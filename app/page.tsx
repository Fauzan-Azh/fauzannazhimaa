// app/page.tsx
'use client';

import GooeyNav from './GooeyNav';
import Lanyard from './Lanyard';
import RotatingHeroText from './RotatingHeroText';
import HeroDock from './HeroDock';

export default function Home() {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Floating Header / Navbar */}
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit flex justify-center">
        <GooeyNav 
          items={navItems}
          initialActiveIndex={0}
          theme="light"
          size="sm"
          frame={true}
          particleCount={10}
          spread={30}
          gooeyness={0.5}
        />
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 md:px-20 pt-28 pb-24 relative max-w-7xl mx-auto">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Bagian Teks (Kiri pada Desktop, Atas pada Mobile) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200/60 border border-zinc-300/80 text-xs font-medium text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Open to Work
            </div>

            <div className="space-y-1 w-full">
              <p className="text-lg sm:text-xl font-medium text-zinc-600">Hi, I'm</p>
              <div className="w-full flex justify-center lg:justify-start">
                <RotatingHeroText />
              </div>
            </div>

            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-normal">
              Lulusan Sarjana Ilmu Komputer Universitas Pertamina yang berfokus pada pengembangan website modern, sistem berbasis teknologi, serta antarmuka interaktif menggunakan <span className="text-zinc-900 font-semibold">Next.js, React, dan TypeScript</span>.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg"
              >
                Explore Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-white border border-zinc-300 text-zinc-800 font-medium text-sm hover:bg-zinc-100 hover:border-zinc-400 transition-all"
              >
                Get in Touch
              </a>
            </div>

          </div>

          {/* Bagian Lanyard 3D (Kanan pada Desktop, di bawah teks dengan ukuran pas pada Mobile) */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[600px] w-full relative flex items-center justify-center">
            <div className="w-full h-full relative">
              <Lanyard 
                frontImage="/img/profile.jpg" 
                backImage="/img/profile.jpg"
                size={0.72}          /* Ukuran proporsional agar aman di mobile & desktop */
                anchor="center"
                strapLength={0.35}   
                cardColor="#ffffff"
                strapColor="#18181b"
                gravity={1}
                breeze={0.6}
              />
            </div>
          </div>

        </div>

        {/* Dock Sosial Media di Tengah Bawah Hero Section */}
        <div className="mt-8 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 z-20">
          <HeroDock />
        </div>
      </section>

      {/* Section Berikutnya */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-white border-t border-zinc-200 relative z-20">
        <h2 className="text-3xl font-semibold text-zinc-900">About Section</h2>
      </section>

    </main>
  );
}