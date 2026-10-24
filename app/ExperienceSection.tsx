// app/ExperienceSection.tsx
'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'work' | 'organization'>('work');

  const workExperiences = [
    {
      role: 'Junior Software Engineer (Part-Time)',
      company: 'Logeeka Grup Indonesia',
      location: 'South Tangerang, Banten',
      period: 'Nov 2025 – Present',
      description: [
        'Mengembangkan dan memelihara aplikasi web skala perusahaan menggunakan Next.js, React, dan Tailwind CSS.',
        'Mengintegrasikan REST API untuk pengolahan data dinamis serta memastikan performa & responsivitas antarmuka.'
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API']
    },
    {
      role: 'Junior Software Engineer Intern',
      company: 'Logeeka Grup Indonesia',
      location: 'South Tangerang, Banten',
      period: 'Aug 2025 – Oct 2025',
      description: [
        'Bekerja di bawah bimbingan IT Project Manager & Senior Engineer dalam membangun modul antarmuka pengguna.',
        'Melakukan pemecahan masalah (debugging) dan mengoptimalkan komponen UI untuk efisiensi loading.'
      ],
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'Postman']
    },
    {
      role: 'Social Media Specialist',
      company: 'Prodi Ilmu Komputer - Universitas Pertamina',
      location: 'Jakarta Selatan',
      period: 'Aug 2026',
      description: [
        'Merancang dan mengelola konten publikasi digital untuk meningkatkan engagement program studi.'
      ],
      skills: ['Graphic Design', 'Content Strategy', 'Figma', 'Copywriting']
    }
  ];

  const orgExperiences = [
    {
      role: 'Head of Information Media Department',
      company: 'HMIK Universitas Pertamina',
      period: 'Jan 2025 – Dec 2025',
      description: [
        'Memimpin departemen media dan informasi dalam mengelola seluruh branding, konten kreatif, dan publikasi resmi himpunan.'
      ],
      skills: ['Leadership', 'Team Management', 'Media Strategy']
    },
    {
      role: 'Head of Creative Media',
      company: 'CITEUP 2024',
      period: 'Jan 2024 – Sep 2024',
      description: [
        'Mengkoordinasikan tim kreatif dalam perancangan visual branding, identitas acara, dan materi promosi digital.'
      ],
      skills: ['Creative Direction', 'Figma', 'Photoshop']
    },
    {
      role: 'Vice Chairman',
      company: 'MIRAI Islamic Festival 3.0',
      period: 'Jul 2023 – Feb 2024',
      description: [
        'Mendampingi ketua umum dalam perencanaan operasional acara, manajemen kepanitiaan, dan koordinasi antardepartemen.'
      ],
      skills: ['Event Management', 'Public Speaking', 'Coordination']
    },
    {
      role: 'Technical Session Team Member',
      company: 'ICEUPERTAIN 2024 (International Conference)',
      period: 'Nov 2024',
      description: [
        'Mengelola kelancaran teknis sesi presentasi konferensi internasional.'
      ],
      skills: ['Technical Support', 'Event Operations']
    }
  ];

  const currentList = activeTab === 'work' ? workExperiences : orgExperiences;

  return (
    <section id="experience" className="w-full bg-[#f4f4f6] py-28 px-6 sm:px-12 md:px-20 relative z-0 scroll-mt-24">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
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
              onClick={() => setActiveTab('work')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Work & Internship
            </button>
            <button
              onClick={() => setActiveTab('organization')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'organization'
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Organization & Leadership
            </button>
          </div>
        </div>

        {/* Timeline Item Container */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-zinc-300/80 space-y-10 my-8">
          {currentList.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Dot Timeline */}
              <div className="absolute -left-[21px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-zinc-400 group-hover:border-emerald-600 group-hover:bg-emerald-500 transition-all duration-300" />

              {/* Content Card */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-600">
                      {item.company} {item.location ? `• ${item.location}` : ''}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-zinc-200/70 text-zinc-700 rounded-lg border border-zinc-300/60 self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <ul className="list-disc list-inside text-zinc-600 text-sm sm:text-base leading-relaxed space-y-1.5 pt-1">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                {/* Tech / Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}