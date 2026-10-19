// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import GooeyNav from './GooeyNav';
import Lanyard from './Lanyard';
import RotatingHeroText from './RotatingHeroText';
import HeroDock from './HeroDock';
import LatticeLoader from './LatticeLoader';
import StarBorder from './StarBorder';
import SlingButton from './SlingButton';
import LogoLoop from './LogoLoop';

// Import ikon resmi dari react-icons/si
import { 
  SiC, SiCplusplus, SiOpenjdk, SiPython, SiJavascript, SiPhp, SiDart, SiKotlin, 
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiNodedotjs, SiLaravel, 
  SiNestjs, SiFlutter, SiAndroid, SiArduino, SiUnity, SiMysql, SiMariadb, 
  SiMongodb, SiOracle, SiFirebase, SiPandas, SiScikitlearn, SiTensorflow, 
  SiPytorch, SiLinux, SiNginx, SiFigma 
} from 'react-icons/si';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  // Daftar tech stack lengkap dengan pengaman ikon (fallback)
  const techStackItems = [
    { title: "C", icon: typeof SiC !== 'undefined' ? <SiC /> : null, color: "#A8B9CC" },
    { title: "C++", icon: typeof SiCplusplus !== 'undefined' ? <SiCplusplus /> : null, color: "#00599C" },
    { title: "Java", icon: typeof SiOpenjdk !== 'undefined' ? <SiOpenjdk /> : null, color: "#ED8B00" },
    { title: "Python", icon: typeof SiPython !== 'undefined' ? <SiPython /> : null, color: "#3776AB" },
    { title: "JavaScript", icon: typeof SiJavascript !== 'undefined' ? <SiJavascript /> : null, color: "#F7DF1E" },
    { title: "PHP", icon: typeof SiPhp !== 'undefined' ? <SiPhp /> : null, color: "#777BB4" },
    { title: "Dart", icon: typeof SiDart !== 'undefined' ? <SiDart /> : null, color: "#0175C2" },
    { title: "Kotlin", icon: typeof SiKotlin !== 'undefined' ? <SiKotlin /> : null, color: "#7F52FF" },
    { title: "HTML5", icon: typeof SiHtml5 !== 'undefined' ? <SiHtml5 /> : null, color: "#E34F26" },
    { title: "CSS3", icon: typeof SiCss3 !== 'undefined' ? <SiCss3 /> : null, color: "#1572B6" },
    { title: "Tailwind CSS", icon: typeof SiTailwindcss !== 'undefined' ? <SiTailwindcss /> : null, color: "#06B6D4" },
    { title: "Bootstrap", icon: typeof SiBootstrap !== 'undefined' ? <SiBootstrap /> : null, color: "#7952B3" },
    { title: "Node.js", icon: typeof SiNodedotjs !== 'undefined' ? <SiNodedotjs /> : null, color: "#339933" },
    { title: "Laravel", icon: typeof SiLaravel !== 'undefined' ? <SiLaravel /> : null, color: "#FF2D20" },
    { title: "NestJS", icon: typeof SiNestjs !== 'undefined' ? <SiNestjs /> : null, color: "#E0234E" },
    { title: "Flutter", icon: typeof SiFlutter !== 'undefined' ? <SiFlutter /> : null, color: "#02569B" },
    { title: "Android Development", icon: typeof SiAndroid !== 'undefined' ? <SiAndroid /> : null, color: "#3DDC84" },
    { title: "Arduino", icon: typeof SiArduino !== 'undefined' ? <SiArduino /> : null, color: "#00979D" },
    { title: "Unity", icon: typeof SiUnity !== 'undefined' ? <SiUnity /> : null, color: "#000000" },
    { title: "MySQL", icon: typeof SiMysql !== 'undefined' ? <SiMysql /> : null, color: "#4479A1" },
    { title: "MariaDB", icon: typeof SiMariadb !== 'undefined' ? <SiMariadb /> : null, color: "#003545" },
    { title: "MongoDB", icon: typeof SiMongodb !== 'undefined' ? <SiMongodb /> : null, color: "#47A248" },
    { title: "Oracle Database", icon: typeof SiOracle !== 'undefined' ? <SiOracle /> : null, color: "#F80000" },
    { title: "Firebase", icon: typeof SiFirebase !== 'undefined' ? <SiFirebase /> : null, color: "#FFCA28" },
    { title: "Pandas", icon: typeof SiPandas !== 'undefined' ? <SiPandas /> : null, color: "#150458" },
    { title: "Scikit-learn", icon: typeof SiScikitlearn !== 'undefined' ? <SiScikitlearn /> : null, color: "#F7931E" },
    { title: "TensorFlow", icon: typeof SiTensorflow !== 'undefined' ? <SiTensorflow /> : null, color: "#FF6F00" },
    { title: "PyTorch", icon: typeof SiPytorch !== 'undefined' ? <SiPytorch /> : null, color: "#EE4C2C" },
    { title: "Linux", icon: typeof SiLinux !== 'undefined' ? <SiLinux /> : null, color: "#FCC624" },
    { title: "NGINX", icon: typeof SiNginx !== 'undefined' ? <SiNginx /> : null, color: "#009639" },
    { title: "Figma", icon: typeof SiFigma !== 'undefined' ? <SiFigma /> : null, color: "#F24E1E" },
  ].map((item) => ({
    node: (
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-zinc-200/80 shadow-sm text-zinc-700 hover:border-zinc-400 transition-all group">
        <span className="text-xl flex items-center justify-center" style={{ color: item.color }}>
          {item.icon || <span className="w-6 h-6 rounded-lg text-xs font-bold text-white flex items-center justify-center" style={{ backgroundColor: item.color }}>{item.title[0]}</span>}
        </span>
        <span className="text-sm font-semibold tracking-tight">{item.title}</span>
      </div>
    ),
    title: item.title,
    hoverColor: item.color
  }));

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Layar Loading */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fafafa] transition-opacity duration-500">
          <LatticeLoader
            status="working"
            label="wet wet wet (⁠◔⁠‿⁠◔⁠)"
            pattern="orbit"
            grid={3}
            shape="round"
            cellSize={8}
            gap={3}
            fontSize={15}
            color="#18181b"
            glow={false}
            showTimer={false}
          />
        </div>
      )}

      {/* HEADER CONTAINER */}
      {!isLoading && (
        <header className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 sm:px-8 md:px-16 flex items-center justify-between pointer-events-none">
          
          {/* Pojok Kiri: Logo dengan StarBorder */}
          <div className="pointer-events-auto shrink-0">
            <StarBorder
              as="a"
              href="#hero"
              color="#18181b"
              speed={4}
              thickness={1.5}
              radius={9999}
              glow={0.4}
              sparkle={true}
              theme="light"
              backgroundColor="#ffffff"
              textColor="#18181b"
              borderColor="rgba(24, 24, 27, 0.15)"
              className="!w-11 !h-11 md:!w-12 md:!h-12 !p-0 !aspect-square rounded-full flex items-center justify-center hover:scale-105 transition-transform overflow-hidden relative z-10"
            >
              <div className="relative z-20 flex items-center justify-center w-full h-full p-2">
                <Image
                  src="/img/logo-square.png"
                  alt="Logo"
                  width={26}
                  height={26}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                />
              </div>
            </StarBorder>
          </div>

          {/* Tengah (Desktop): GooeyNav Normal */}
          <div className="hidden md:flex pointer-events-auto items-center justify-center">
            <GooeyNav 
              items={navItems}
              initialActiveIndex={0}
              theme="light"
              size="md"
              frame={true}
              particleCount={10}
              spread={30}
              gooeyness={0.5}
            />
          </div>

          {/* Tengah (Mobile): Tombol Hamburger */}
          <div className="md:hidden pointer-events-auto flex items-center justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-zinc-200/80 shadow-md text-zinc-900 active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Pojok Kanan: SlingButton (Theme Switcher) */}
          <div className="pointer-events-auto shrink-0 flex items-center">
            <SlingButton
              size={44}
              padColor="#ffffff"
              iconColor="#18181b"
              wellColor="#e4e4e7"
              bandColor="#a1a1aa"
              accentColor="#18181b"
              onSend={() => {
                console.log('Toggle theme clicked');
              }}
            />
          </div>

          {/* Mobile Dropdown Menu dengan Auto-Close dan Jeda Animasi Gelembung */}
          <div 
            onClick={(e) => {
              const link = (e.target as HTMLElement).closest('a');
              if (link) {
                setTimeout(() => {
                  setMobileMenuOpen(false);
                }, 350);
              }
            }}
            className={`md:hidden pointer-events-auto fixed left-1/2 -translate-x-1/2 top-20 z-40 transition-all duration-300 ease-out ${
              mobileMenuOpen 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible -translate-y-3 pointer-events-none'
            }`}
          >
            <GooeyNav 
              items={navItems}
              initialActiveIndex={0}
              theme="light"
              size="sm"
              frame={true}
              particleCount={10}
              spread={30}
              gooeyness={0.6}
            />
          </div>

        </header>
      )}

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 pt-36 sm:pt-32 pb-16 relative max-w-7xl mx-auto">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 mb-20">
          
          {/* Bagian Teks */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200/60 border border-zinc-300/80 text-xs font-medium text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Open to Work
            </div>

            <div className="space-y-1 w-full">
              <p className="text-lg sm:text-xl font-medium text-zinc-600">Hi, I'm</p>
              <div className="w-full flex justify-center lg:justify-start">
                {!isLoading && <RotatingHeroText />}
              </div>
            </div>

            <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-normal text-justify">
              Lulusan Sarjana Ilmu Komputer Universitas Pertamina yang berfokus pada pengembangan website modern, sistem berbasis teknologi, serta antarmuka interaktif menggunakan <span className="text-zinc-900 font-semibold">Next.js, React, dan TypeScript</span>.
            </p>

            {/* Tombol Aksi dengan Efek StarBorder */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <StarBorder
                as="a"
                href="#projects"
                color="#ffffff"
                speed={4}
                thickness={1.5}
                radius={9999}
                glow={0.6}
                sparkle={true}
                theme="dark"
                backgroundColor="#18181b"
                textColor="#ffffff"
                className="text-sm font-medium shadow-md hover:scale-105 transition-transform"
              >
                Explore Projects
              </StarBorder>

              <StarBorder
                as="a"
                href="#contact"
                color="#18181b"
                speed={4}
                thickness={1.5}
                radius={9999}
                glow={0.4}
                sparkle={true}
                theme="light"
                backgroundColor="#ffffff"
                textColor="#18181b"
                borderColor="rgba(24, 24, 27, 0.2)"
                className="text-sm font-medium hover:scale-105 transition-transform"
              >
                Get in Touch
              </StarBorder>
            </div>

          </div>

          {/* Bagian Lanyard 3D */}
          <div className="lg:col-span-5 h-[420px] sm:h-[500px] lg:h-[600px] w-full relative flex items-center justify-center">
            <div className="w-full h-full relative">
              {!isLoading && (
                <Lanyard 
                  frontImage="/img/profile.jpg" 
                  backImage="/img/profile.jpg"
                  size={0.7}
                  anchor="center"
                  strapLength={0.35}   
                  cardColor="#ffffff"
                  strapColor="#18181b"
                  gravity={1}
                  breeze={0.6}
                />
              )}
            </div>
          </div>

        </div>

        {/* 1. Dock Sosial Media (Melayang di bawah konten utama hero) */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-25 flex justify-center w-full">
          {!isLoading && <HeroDock />}
        </div>

        {/* 2 & 3. What I Use & LogoLoop (Di bagian paling bawah hero section) */}
        <div className="absolute bottom-4 left-0 right-0 w-full flex flex-col items-center gap-2 z-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
          {/* Judul What I Use */}
          <div className="text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-widest">What I Use</h3>
          </div>

          {/* LogoLoop */}
          <div className="w-full">
            {!isLoading && (
              <LogoLoop
                logos={techStackItems}
                speed={70}
                direction="left"
                logoHeight={40}
                gap={20}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutWidth={0.15}
                ariaLabel="Tech Stack and Tools"
              />
            )}
          </div>
        </div>

      </section>

      {/* Section Berikutnya */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 bg-white border-t border-zinc-200 relative z-20">
        <h2 className="text-3xl font-semibold text-zinc-900">About Section</h2>
      </section>

    </main>
  );
}