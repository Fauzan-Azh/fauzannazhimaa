// app/HeroDock.tsx
'use client';

import Dock from './Dock';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  Github01Icon, 
  Linkedin01Icon, 
  InstagramIcon, 
  Mail01Icon 
} from '@hugeicons/core-free-icons';

const glyph = (icon: any) => <HugeiconsIcon icon={icon} size="1.4em" strokeWidth={1.8} />;

export default function HeroDock() {
  const socialItems = [
    {
      icon: glyph(Github01Icon),
      label: 'GitHub',
      onClick: () => window.open('https://github.com/Fauzan-Azh', '_blank')
    },
    {
      icon: glyph(Linkedin01Icon),
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/fauzannazhimaa/', '_blank')
    },
    {
      icon: glyph(InstagramIcon),
      label: 'Instagram',
      onClick: () => window.open('https://www.instagram.com/fauzanazhima._', '_blank')
    },
    {
      icon: glyph(Mail01Icon),
      label: 'Email',
      onClick: () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'mailto:fauzannazhimaa@gmail.com';
        }
      }
    }
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-max">
      <Dock
        items={socialItems}
        baseItemSize={56}     /* Ukuran dasar diperbesar agar tetap ideal */
        magnification={80}    /* Ukuran saat hover */
        panelHeight={76}      /* Tinggi panel dock */
        gap={14}              /* Jarak antar ikon */
        showIndicators={false}
        showBadges={false}
        theme="light"
        spring={{ mass: 0.1, stiffness: 220, damping: 4 }}
      />
    </div>
  );
}