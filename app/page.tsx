// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
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
import AnimatedList from './AnimatedList';

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
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeExperienceTab, setActiveExperienceTab] = useState<'work' | 'organization'>('work');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Sinkronisasi Indikator Navbar dengan Scroll Posisi Section
  useEffect(() => {
    if (isLoading) return;

    const sectionIds = ['hero', 'about', 'projects', 'experience', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) {
            setActiveNavIndex(index);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Memicu perubahan saat section berada di area pandang atas-tengah
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isLoading]);

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

  // Data Proyek
  const projectsData = [
    {
      id: 'wifi-sensing-thesis',
      title: 'WiFi Sensing, Deteksi Keberadaan Manusia (Tugas Akhir)',
      category: 'IOT & MACHINE LEARNING (THESIS)',
      description: 'Mengembangkan sistem deteksi kehadiran manusia menggunakan WiFi Channel State Information (CSI) dan model LSTM berbasis Self-Attention.',
      fullDescription: 'Penelitian tugas akhir mengenai sistem deteksi kehadiran manusia indoor menggunakan WiFi Channel State Information (CSI) dari mikrokontroler ESP32 dan model LSTM berbasis Self-Attention. Sistem ini mampu melakukan pemrosesan data, menampilkan hasil secara real-time, serta menyimpan data ke dalam format CSV. Dalam pengujian langsung, sistem mencapai akurasi 98,80% pada kondisi Line-of-Sight (LOS) dan 96,10% pada Non-Line-of-Sight (NLOS) dengan rata-rata waktu respons end-to-end sebesar 155,74 ms.',
      image: '/img/projects/wifi-sensing.png',
      tools: ['ESP32', 'Python', 'LSTM', 'Self-Attention', 'WiFi CSI', 'RSSI'],
      link: 'https://github.com/Fauzan-Azh/Wifi-Sensing-Deteksi-Biner-Keberadaan-Manusia',
      linkText: 'GitHub Repository'
    },
    {
      id: 'atora-digital',
      title: 'ATORA - Platform Undangan Pernikahan Digital',
      category: 'FULL-STACK WEB APP',
      description: 'Mengembangkan platform undangan pernikahan digital dengan desain responsif dan template interaktif yang dapat disesuaikan.',
      fullDescription: 'Platform undangan pernikahan digital berbasis web dengan desain responsif dan pilihan template yang fleksibel. Memiliki berbagai fitur interaktif seperti RSVP online, sapaan tamu personal, integrasi Google Maps, pemutar musik/video, timeline kisah cinta, kado digital, serta galeri foto. Dilengkapi dengan sistem pengelolaan konten yang ramah pengguna sehingga dapat dioperasikan tanpa latar belakang teknis.',
      image: '/img/projects/atora-digital.png',
      tools: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Supabase'],
      link: 'https://atoradigital.com',
      linkText: 'Live Site'
    },
    {
      id: 'logeeka-website',
      title: 'Logeeka.id - Website Corporate Digital Agency',
      category: 'FRONTEND WEB DEVELOPMENT',
      description: 'Mengembangkan website perusahaan yang menampilkan informasi profil, portofolio layanan, klien, dan blog.',
      fullDescription: 'Pengembangan website resmi perusahaan Logeeka Grup Indonesia yang menyajikan informasi profil perusahaan, portofolio proyek, layanan digital, klien, dan artikel blog. Website ini dihubungkan secara dinamis dengan REST API dan dikembangkan dengan memperhatikan performa serta tingkat responsivitas tinggi pada berbagai perangkat.',
      image: '/img/projects/logeeka.png',
      tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Postman', 'Git'],
      link: 'https://website-logeeka-id.vercel.app/',
      linkText: 'Live Site'
    },
    {
      id: 'aiamanggihbarat',
      title: 'Nagari Aia Manggih Barat Portal',
      category: 'WEB DEVELOPMENT & SEO',
      description: 'Membangun, mengonfigurasi, dan meluncurkan portal publik resmi nagari menggunakan teknologi modern dan optimasi mesin pencari.',
      fullDescription: 'Proyek pengembangan portal resmi pemerintahan tingkat nagari (aiamanggihbarat.com) untuk transparansi informasi publik dan layanan masyarakat. Dibangun menggunakan Next.js untuk performa tinggi, terintegrasi dengan Supabase sebagai backend database, serta optimasi penuh menggunakan Google Search Console.',
      image: '/img/projects/amb.png',
      tools: ['Next.js', 'Supabase', 'Tailwind CSS', 'Google Search Console'],
      link: 'https://aiamanggihbarat.com',
      linkText: 'Live Site'
    },
    {
      id: 'silungkang-portal',
      title: 'Desa Wisata Silungkang Oso - Portal Informasi Pariwisata',
      category: 'FULL-STACK WEB APP',
      description: 'Mengembangkan website informasi destinasi, budaya, paket wisata, galeri, dan produk lokal.',
      fullDescription: 'Portal informasi pariwisata terpadu yang menampilkan destinasi wisata, kebudayaan lokal, paket wisata, galeri media, serta katalog produk lokal Desa Silungkang Oso. Dilengkapi dengan fitur kontak terintegrasi dan sistem reservasi online untuk memudahkan pengunjung serta membantu promosi potensi desa.',
      image: '/img/projects/silungkangoso.png',
      tools: ['PHP', 'Laravel', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
      link: 'https://desa-wisata-silungkang-oso.vercel.app/',
      linkText: 'Live Site'
    },
    {
      id: 'smart-irrigation',
      title: 'Sistem Irigasi Pintar IoT - Penyiraman Tanaman Otomatis',
      category: 'INTERNET OF THINGS',
      description: 'Membuat sistem penyiraman tanaman otomatis menggunakan ESP32 dan sensor kelembapan tanah.',
      fullDescription: 'Sistem penyiraman tanaman otomatis berbasis IoT yang memanfaatkan mikrokontroler ESP32 dan sensor kelembapan tanah. Terintegrasi dengan platform Blynk IoT untuk memantau kondisi kelembapan tanah secara real-time serta mengendalikan aktif-tidaknya pompa air dari jarak jauh melalui aplikasi mobile dan dashboard web.',
      image: '/img/projects/smart-irigation.png',
      tools: ['ESP32', 'Blynk IoT', 'C++', 'Sensors & Relays'],
      link: 'https://github.com/Fauzan-Azh/IoT-Smart-Irrigation-ESP32',
      linkText: 'GitHub Repository'
    },
    {
      id: 'accent-analysis',
      title: 'Analisis Aksen Daerah Indonesia Menggunakan MFCC',
      category: 'MACHINE LEARNING',
      description: 'Menganalisis karakteristik suara dari lima aksen daerah di Indonesia menggunakan metode MFCC.',
      fullDescription: 'Proyek analisis pemrosesan sinyal suara untuk mengidentifikasi karakteristik khas dari lima aksen daerah di Indonesia. Memproses dan mengekstraksi fitur dari 100 sampel rekaman suara menggunakan metode Mel-Frequency Cepstral Coefficients (MFCC) serta memvisualisasikan pola distribusi fitur audio untuk melihat perbedaan antaraksen.',
      image: '/img/projects/mfcc.png',
      tools: ['Python', 'MFCC', 'Audio Processing', 'Matplotlib', 'Scikit-learn'],
      link: 'https://github.com/Fauzan-Azh/Mental-Wellbeing-Classification',
      linkText: 'GitHub Repository'
    },
    {
      id: 'carlo-dashboard',
      title: 'CARLO - Dashboard Kalkulator Karbon',
      category: 'FRONTEND & DATA VISUALIZATION',
      description: 'Mengembangkan dashboard berbasis web untuk memantau penggunaan listrik dan memperkirakan emisi karbon.',
      fullDescription: 'Dashboard berbasis web yang dirancang untuk memantau penggunaan konsumsi listrik dan memperkirakan tingkat emisi karbon secara efisien di Sustainability Center Universitas Pertamina. Aplikasi ini mengolah data penggunaan energi dan menyajikannya ke dalam bentuk visualisasi interaktif yang mudah dipahami oleh pengguna untuk pemantauan berkelanjutan.',
      image: '/img/projects/carlo.png',
      tools: ['React', 'Tailwind CSS', 'JavaScript', 'Power BI', 'HTML/CSS'],
      link: 'https://carbon-dashboard-pearl.vercel.app/',
      linkText: 'Live Site'
    }
  ];

  // Data Pengalaman Kerja
  const workExperiences = [
    {
      role: 'Social Media Specialist Intern',
      company: 'Program Studi Ilmu Komputer, Universitas Pertamina',
      location: 'Jakarta Selatan, Indonesia',
      period: 'Jun 2026 – Sep 2026',
      image: '/img/experience/ilmukomputer.jpg',
      description: [
        'Memimpin tim kreatif dalam membuat konsep konten dan desain untuk media sosial departemen.',
        'Membuat berbagai materi visual untuk menyampaikan informasi akademik dan kegiatan program studi.',
        'Mengatur pembagian dan alur kerja tim desain agar konten selesai sesuai kebutuhan.'
      ],
      skills: ['Graphic Design', 'Figma', 'Content Strategy', 'Copywriting']
    },
    {
      role: 'Website Developer Intern',
      company: 'Direktorat Pendidikan, Universitas Pertamina',
      location: 'Jakarta Selatan, Indonesia',
      period: 'Des 2025 – Feb 2026',
      image: '/img/experience/UP.png',
      description: [
        'Mengembangkan komponen website yang dapat digunakan kembali untuk menjaga konsistensi tampilan aplikasi.',
        'Bekerja sama dengan developer, desainer, dan stakeholder selama proses pengembangan website.',
        'Mengubah desain UI/UX menjadi halaman web yang responsif dan sesuai dengan rancangan.',
        'Menggunakan Jira untuk mengatur tugas dan memantau perkembangan pekerjaan.'
      ],
      skills: ['React', 'Next.js', 'UI/UX Implementation', 'Jira', 'Git']
    },
    {
      role: 'Junior Software Engineer Intern',
      company: 'Logeeka Grup Indonesia',
      location: 'Tangerang Selatan, Indonesia',
      period: 'Agu 2025 – Okt 2025',
      image: '/img/experience/logeeka.jpg',
      description: [
        'Mengembangkan beberapa halaman utama website perusahaan menggunakan Next.js, React, TypeScript, dan Tailwind CSS.',
        'Menghubungkan website dengan REST API untuk menampilkan data portofolio dan blog secara dinamis.',
        'Menggunakan GitHub dan Postman dalam proses pengembangan dan pengujian.',
        'Mengikuti review mingguan dan melakukan perbaikan berdasarkan masukan dari tim.'
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Postman', 'GitHub']
    }
  ];

  // Data Pengalaman Organisasi & Kepanitiaan
  const orgExperiences = [
    {
      role: 'Kepala Departemen Media Informasi',
      company: 'HMIK UP | Himpunan Mahasiswa Ilmu Komputer',
      period: 'Jan 2025 – Jan 2026',
      image: '/img/experience/HMIK-UP.png',
      description: [
        'Memimpin departemen dalam mengelola strategi media, publikasi, dan informasi digital himpunan mahasiswa.'
      ],
      skills: ['Leadership', 'Team Management', 'Media Strategy']
    },
    {
      role: 'Kepala Divisi Media Kreatif',
      company: 'CITE UP 2024 | Computer Science Event & Competition',
      period: 'Jan 2024 – Sep 2024',
      image: '/img/experience/HMIK-UP.png',
      description: [
        'Mengkoordinasikan kebutuhan visual, materi kreatif, dan publikasi digital untuk seluruh rangkaian acara.'
      ],
      skills: ['Creative Direction', 'Graphic Design', 'Figma']
    },
    {
      role: 'Wakil Ketua',
      company: 'MIF 3.0 | Acara & Kompetisi Festival Islam Universitas Pertamina',
      period: 'Jul 2023 – Feb 2024',
      image: '/img/experience/mirai.jpg',
      description: [
        'Mendampingi ketua dalam mengarahkan operasional kepanitiaan, koordinasi antar-divisi, serta manajemen acara.'
      ],
      skills: ['Event Management', 'Public Speaking', 'Coordination']
    },
    {
      role: 'Technical Session Staff',
      company: 'ICEUPERTAIN 2024 | International Conference',
      period: 'Nov 2024',
      image: '/img/experience/iceupertain.png',
      description: [
        'Mengelola kelancaran aspek teknis jalannya sesi presentasi pada konferensi internasional.'
      ],
      skills: ['Technical Support', 'Event Operations']
    }
  ];

  const carouselItems = projectsData.map((project) => ({
    image: project.image,
    alt: project.title
  }));

  const currentProject = projectsData[activeProjectIndex] || projectsData[0];

  const otherProjectsItems = projectsData.map((project, index) => ({
    originalIndex: index,
    id: project.id,
    title: project.title,
    description: project.category,
    meta: '→'
  }));

  const currentExperiences = activeExperienceTab === 'work' ? workExperiences : orgExperiences;

  const handleEmailJSSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_j9qf458";
    const TEMPLATE_ID = "template_6hb9j2r";
    const PUBLIC_KEY = "Iw1DyA5MANNp6uROi";

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY);
      alert("Pesan berhasil terkirim langsung ke email Anda!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      alert("Gagal mengirim pesan. Silakan coba beberapa saat lagi.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white relative overflow-x-hidden font-sans">
      
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
              activeIndex={activeNavIndex}
              onTabClick={(index) => setActiveNavIndex(index)}
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
              activeIndex={activeNavIndex}
              onTabClick={(index) => setActiveNavIndex(index)}
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
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Kolom Kiri: Header + Carousel */}
            <div className="lg:col-span-6 flex flex-col justify-center w-full">
              <div className="space-y-2 mb-4">
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Selected Work</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                  Featured Projects Showcase
                </h2>
              </div>

              <div className="w-full max-w-xl overflow-hidden py-4">
                {!isLoading && (
                  <Carousel
                    items={carouselItems}
                    baseWidth={560}
                    aspectRatio={1.74}
                    effect="slide"
                    indicator="bars"
                    arrows={true}
                    frame={false}
                    peek={32}
                    gap={16}
                    radius={20}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={6000}
                    pauseOnHover={true}
                    theme="light"
                    initialIndex={activeProjectIndex}
                    onChange={(index) => setActiveProjectIndex(index)}
                  />
                )}
              </div>
            </div>

            {/* Kolom Kanan: Detail Informasi & AnimatedList */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
              
              <div className="space-y-5 transition-all px-2">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    {currentProject.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                    {currentProject.title}
                  </h3>
                </div>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {currentProject.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-semibold bg-zinc-200/60 text-zinc-800 rounded-lg border border-zinc-300/60">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/80">
                  <button
                    onClick={() => setSelectedProject(currentProject)}
                    className="flex-1 py-3 px-4 rounded-xl bg-zinc-900 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors text-center shadow-sm"
                  >
                    Read Case Study &rarr;
                  </button>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-white border border-zinc-300 text-zinc-900 text-xs sm:text-sm font-semibold hover:bg-zinc-100 transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <span>{currentProject.linkText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* AnimatedList untuk Other Projects */}
              <div className="space-y-3 px-2">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Other Projects</p>
                <div className="w-full">
                  {!isLoading && (
                    <AnimatedList
                      items={otherProjectsItems}
                      onItemSelect={(item) => setActiveProjectIndex(item.originalIndex)}
                      initialSelectedIndex={activeProjectIndex}
                      animation="pop"
                      theme="light"
                      frame={false}
                      radius={16}
                      gap={8}
                      stagger={0.04}
                      showGradients={true}
                      fadeSize={32}
                      maxHeight={230}
                      width="100%"
                      displayScrollbar={false}
                    />
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="w-full bg-[#f4f4f6] py-28 px-6 sm:px-12 md:px-20 relative z-0 scroll-mt-24">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header & Tab Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-300/80 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
                Career Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Experience & Leadership
              </h2>
            </div>

            {/* Tab Switcher Pills */}
            <div className="inline-flex p-1.5 rounded-2xl bg-zinc-200/80 border border-zinc-300/80 self-start sm:self-auto">
              <button
                onClick={() => setActiveExperienceTab('work')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeExperienceTab === 'work'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Work Experience
              </button>
              <button
                onClick={() => setActiveExperienceTab('organization')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeExperienceTab === 'organization'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Organization & Leadership
              </button>
            </div>
          </div>

          {/* Timeline Item List */}
          <div className="relative pl-6 sm:pl-10 border-l-2 border-zinc-300/80 space-y-12 my-8">
            {currentExperiences.map((item, index) => (
              <div key={index} className="relative group space-y-3">
                
                {/* Dot Timeline */}
                <div className="absolute -left-[29px] sm:-left-[45px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-zinc-400 group-hover:border-emerald-600 group-hover:bg-emerald-500 transition-all duration-300" />

                {/* Header: Logo + Judul/Instansi + Tanggal */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Logo Instansi */}
                    {item.image && (
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-emerald-600">
                        {item.company} {item.location ? `• ${item.location}` : ''}
                      </p>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-zinc-200/70 text-zinc-700 rounded-lg border border-zinc-300/60 self-start sm:self-auto shrink-0">
                    {item.period}
                  </span>
                </div>

                {/* Deskripsi Bullet Points */}
                <ul className="list-disc list-inside text-zinc-600 text-sm sm:text-base leading-relaxed space-y-1.5 pt-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                {/* Tech / Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-[11px] font-medium bg-white text-zinc-700 rounded-md border border-zinc-200/80 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full bg-[#fafafa] py-16 px-6 sm:px-12 md:px-20 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Kolom Kiri: Header + Detail Kontak & Sosmed */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Let's Work Together.
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Punya ide proyek, tawaran kerja sama, atau sekadar ingin menyapa? Sapa saya di form disamping yaa!
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-zinc-200/80">
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Direct Email</p>
                <a href="mailto:fauzannazhima@gmail.com" className="text-sm font-semibold text-zinc-900 hover:text-emerald-600 transition-colors">
                  fauzannazhima@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-zinc-900">
                  Sumatera Barat, Indonesia
                </p>
              </div>
            </div>

            {/* Quick Link Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/Fauzan-Azh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-800 text-xs font-semibold hover:bg-zinc-100 transition-colors flex items-center gap-2 shadow-xs"
              >
                GitHub &rarr;
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white border border-zinc-300 text-zinc-800 text-xs font-semibold hover:bg-zinc-100 transition-colors flex items-center gap-2 shadow-xs"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Form Email EmailJS */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-md space-y-5">
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">Send a Message</h3>

            <form onSubmit={handleEmailJSSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Nama Anda</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Fauzan Azhima"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Email Anda</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Subjek Pesan</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Tawaran Kerjasama / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">Pesan</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Halo Fauzan, saya ingin berdiskusi mengenai..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message →'}
              </button>
            </form>
          </div>

        </div>

        {/* Footer Ringkas di Paling Bawah */}
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-200/80 flex items-center justify-center text-xs font-medium text-zinc-500">
          <p>© 2026 Fauzan Azhima. All rights reserved.</p>
        </div>
      </section>

      {/* MODAL DETAIL PROJECT */}
      {selectedProject && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors"
            >
              ✕
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
                {selectedProject.tools.map((tool: string, idx: number) => (
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
                <span>Visit {selectedProject.linkText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}