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
import BlurText from './BlurText';
import Carousel from './Carousel';
import TechText from './TechText';
import SpotlightCard from './SpotlightCard';

import { 
  SiC, 
  SiCplusplus, 
  SiOpenjdk, 
  SiPython, 
  SiJavascript, 
  SiPhp, 
  SiDart, 
  SiKotlin, 
  SiHtml5, 
  SiCss, 
  SiTailwindcss, 
  SiBootstrap, 
  SiNodedotjs, 
  SiLaravel, 
  SiNestjs, 
  SiFlutter, 
  SiAndroid, 
  SiArduino, 
  SiUnity, 
  SiMysql, 
  SiMariadb, 
  SiMongodb, 
  SiFirebase, 
  SiPandas, 
  SiScikitlearn, 
  SiTensorflow, 
  SiPytorch, 
  SiLinux, 
  SiNginx, 
  SiFigma 
} from 'react-icons/si';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // State untuk modal detail project

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
    { title: "CSS3", icon: typeof SiCss !== 'undefined' ? <SiCss /> : null, color: "#1572B6" },
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
    { title: "Oracle Database", icon: null, color: "#F80000" },
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

  const aboutImages = [
    { image: '/img/about/1.jpg', alt: 'About photo 1' },
    { image: '/img/about/2.jpg', alt: 'About photo 2' },
    { image: '/img/about/3.jpg', alt: 'About photo 3' },
    { image: '/img/about/4.jpeg', alt: 'About photo 4' },
    { image: '/img/about/5.jpeg', alt: 'About photo 5' },
    { image: '/img/about/6.jpeg', alt: 'About photo 6' },
    { image: '/img/about/7.jpeg', alt: 'About photo 7' },
    { image: '/img/about/8.jpeg', alt: 'About photo 8' },
    { image: '/img/about/9.jpeg', alt: 'About photo 9' },
    { image: '/img/about/10.jpeg', alt: 'About photo 10' },
    { image: '/img/about/11.jpeg', alt: 'About photo 11' },
    { image: '/img/about/12.jpg', alt: 'About photo 12' },
  ];

  // Data Proyek Berdasarkan Portofolio & CV Anda
  const projectsData = [
    {
      id: 'aiamanggihbarat',
      title: 'Nagari Aia Manggih Barat Portal',
      category: 'Web Development & SEO',
      description: 'Membangun, mengonfigurasi, dan meluncurkan portal publik resmi nagari menggunakan teknologi modern dan optimasi mesin pencari.',
      fullDescription: 'Proyek pengembangan portal resmi pemerintahan tingkat nagari (aiamanggihbarat.com) untuk transparansi informasi publik dan layanan masyarakat. Dibangun menggunakan Next.js untuk performa tinggi, terintegrasi dengan Supabase sebagai backend database, serta optimasi penuh menggunakan Google Search Console.',
      image: '/img/projects/aiamanggihbarat.jpg', // Sesuaikan path gambar jika ada
      tools: ['Next.js', 'Supabase', 'Tailwind CSS', 'Google Search Console'],
      link: 'https://aiamanggihbarat.com',
      linkText: 'Visit Live Site'
    },
    {
      id: 'wifisensing',
      title: 'WiFi Sensing Indoor Detection',
      category: 'IoT & Machine Learning (Thesis)',
      description: 'Penelitian skripsi mengenai deteksi kehadiran manusia indoor menggunakan Channel State Information (CSI) dan Machine Learning.',
      fullDescription: 'Tesis sarjana Ilmu Komputer yang meneliti pemanfaatan sinyal WiFi (CSI & RSSI) pada mikrokontroler ESP32 untuk mendeteksi aktivitas manusia di dalam ruangan. Data diproses menggunakan berbagai model machine learning seperti LSTM dengan Self-Attention, Random Forest, dan Support Vector Machines (SVM).',
      image: '/img/projects/wifi-sensing.jpg',
      tools: ['ESP32', 'Python', 'LSTM', 'Scikit-learn', 'SVM', 'MicroPython'],
      link: 'https://github.com/fauzanazhima',
      linkText: 'GitHub Repository'
    },
    {
      id: 'upartner',
      title: 'UPartner Collaborative Platform',
      category: 'Full-Stack Web App',
      description: 'Platform web kolaboratif untuk manajemen proyek akademik mahasiswa Universitas Pertamina.',
      fullDescription: 'Aplikasi web yang dirancang khusus untuk memfasilitasi mahasiswa dalam mengelola kolaborasi tim, pembagian tugas, dan integrasi kode proyek perkuliahan secara terpusat dan efisien.',
      image: '/img/projects/upartner.jpg',
      tools: ['React', 'Node.js', 'Tailwind CSS', 'Git'],
      link: 'https://github.com/fauzanazhima',
      linkText: 'GitHub Repository'
    },
    {
      id: 'upartner',
      title: 'UPartner Collaborative Platform',
      category: 'Full-Stack Web App',
      description: 'Platform web kolaboratif untuk manajemen proyek akademik mahasiswa Universitas Pertamina.',
      fullDescription: 'Aplikasi web yang dirancang khusus untuk memfasilitasi mahasiswa dalam mengelola kolaborasi tim, pembagian tugas, dan integrasi kode proyek perkuliahan secara terpusat dan efisien.',
      image: '/img/projects/upartner.jpg',
      tools: ['React', 'Node.js', 'Tailwind CSS', 'Git'],
      link: 'https://github.com/fauzanazhima',
      linkText: 'GitHub Repository'
    }
  ];

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
      <section id="hero" className="w-full min-h-screen bg-[#fafafa] rounded-b-[3rem] md:rounded-b-[4.5rem] shadow-sm relative overflow-hidden z-10 flex flex-col justify-center pt-36 sm:pt-32 pb-32">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 mb-16">
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

        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-25 flex justify-center w-full">
          {!isLoading && <HeroDock />}
        </div>

        <div className="absolute bottom-3 left-0 right-0 w-full flex flex-col items-center gap-1 z-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-widest">What I Use</h3>
          </div>
          <div className="w-full">
            {!isLoading && (
              <LogoLoop
                logos={techStackItems}
                speed={70}
                direction="left"
                logoHeight={36}
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

      {/* ABOUT SECTION */}
      <section 
        id="about" 
        className="w-full bg-[#f4f4f6] rounded-b-[3rem] md:rounded-b-[4.5rem] shadow-sm relative overflow-hidden z-0 pt-36 sm:pt-48 pb-28 -mt-16 sm:-mt-20 scroll-mt-36"
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-5 flex flex-col items-start text-justify">
            <div className="w-full h-[70px] sm:h-[85px] relative flex items-center -ml-5 sm:-ml-6">
              {!isLoading && (
                <TechText
                  text="Get to Know Me"
                  fontWeight={700}
                  fontSize={60}
                  letterSpacing={-0.03}
                  reveal="letter"
                  dashLength={4}
                  dashGap={2}
                  specks={8}
                  intro="type"
                  introDuration={1.2}
                  clickKick
                  guides={false}
                  align="left"
                />
              )}
            </div>

            <div className="text-zinc-600 text-base sm:text-lg leading-relaxed font-normal w-full">
              {!isLoading && (
                <BlurText
                  text="Saya adalah seorang Sarjana Ilmu Komputer lulusan Universitas Pertamina yang bersemangat dalam pengembangan aplikasi web modern, sistem berbasis teknologi, serta perancangan antarmuka digital yang bersih dan interaktif. Berbekal pengalaman profesional di bidang rekayasa perangkat lunak dan riset sistem cerdas, saya selalu termotivasi untuk menghadirkan solusi digital yang fungsional, efisien, dan berpusat pada pengguna."
                  effect="blur"
                  animateBy="words"
                  direction="top"
                  threshold={0.1}
                  delay={100}
                  stepDuration={0.3}
                  blur={8}
                  distance={40}
                  focusOnHover={true}
                  className="w-full text-justify"
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <div className="w-full relative h-[380px] flex items-center justify-center">
              {!isLoading && (
                <Carousel
                  items={aboutImages}
                  baseWidth={360}
                  aspectRatio={0.85}
                  effect="slide"
                  indicator="bars"
                  frame={false}
                  arrows={false}
                  peek={32}
                  gap={16}
                  radius={20}
                  loop
                  autoplay
                  autoplayDelay={4000}
                  pauseOnHover
                  theme="light"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="w-full bg-[#fafafa] py-28 px-6 sm:px-12 md:px-20 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Featured Projects</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base">
              Beberapa karya unggulan yang mencakup pengembangan web modern, sistem cerdas IoT, dan riset akademik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <SpotlightCard
                key={project.id}
                theme="light"
                spotlightColor="rgba(24, 24, 27, 0.08)"
                intensity={0.2}
                spotlightSize={280}
                className="flex flex-col justify-between h-full border border-zinc-200/80 rounded-3xl p-6 transition-all hover:shadow-lg"
              >
                <div className="space-y-4">
                  {/* Thumbnail / Cover Project */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/60">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Kategori & Judul */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold text-zinc-900">{project.title}</h3>
                  </div>

                  {/* Deskripsi Singkat */}
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Label Tools / Bahasa / Bidang */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-medium bg-zinc-100 text-zinc-700 rounded-lg border border-zinc-200/60">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol Aksi (2 Tombol) */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-zinc-100">
                  {/* Tombol 1: Buka Detail Project (Modal) */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-zinc-900 text-white text-xs font-semibold shadow-sm hover:bg-zinc-800 transition-colors text-center"
                  >
                    Details
                  </button>

                  {/* Tombol 2: Link Eksternal (GitHub / Live Demo) */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white border border-zinc-200 text-zinc-900 text-xs font-semibold hover:bg-zinc-50 transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <span>{project.linkText}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETAIL PROJECT */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{selectedProject.category}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">{selectedProject.title}</h3>
            </div>

            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-zinc-900 text-sm tracking-wide uppercase">Overview & Detail</h4>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed text-justify">
                {selectedProject.fullDescription}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-zinc-900 text-sm tracking-wide uppercase">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-medium bg-zinc-100 text-zinc-800 rounded-lg border border-zinc-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3 border-t border-zinc-100">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-zinc-100 text-zinc-700 text-sm font-semibold hover:bg-zinc-200 transition-colors"
              >
                Close
              </button>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-2"
              >
                <span>{selectedProject.linkText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* SECTION SELANJUTNYA (EXPERIENCE) */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 relative z-0 pt-20 pb-16">
        <h2 className="text-3xl font-semibold text-zinc-900">Experience Section</h2>
      </section>

    </main>
  );
}