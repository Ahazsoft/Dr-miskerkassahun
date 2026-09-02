import React from 'react';
import { Star, ShieldCheck, Award } from 'lucide-react';

import img1 from '../assets/images/CAIRE-Logo-2.png';
import img2 from '../assets/images/EGC-final-logo-2-1.png';
import img3 from '../assets/images/GIV-Logo-1.png';

export default function Affilations() {
  const items = [
    {
      type: 'logo',
      src: img1,
      alt: 'CAIRE Logo',
      className: 'h-10 sm:h-16'
    },
    {
      type: 'icon',
      icon: Star
    },
    {
      type: 'logo',
      src: img2,
      alt: 'EGC Logo',
      className: 'h-16 sm:h-24 scale-125 sm:scale-150'
    },
    {
      type: 'icon',
      icon: ShieldCheck
    },
    {
      type: 'logo',
      src: img3,
      alt: 'GIV Logo',
      className: 'h-8 sm:h-10'
    },
    {
      type: 'icon',
      icon: Award
    }
  ];

  return (
    <div
      className="
        w-full
        bg-[#1e1916]
        overflow-hidden
        py-2
        sm:py-3
        my-4
        sm:my-6
        border-t
        border-b
        border-white/10
      "
    >

      <div
        className="
          flex
          w-max
          animate-[marquee_30s_linear_infinite]
          items-center
        "
      >

        {[...Array(4)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex items-center shrink-0"
          >

            {items.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0

                    w-[90px]
                    sm:w-36
                    md:w-40
                    lg:w-44

                    h-14
                    sm:h-16

                    px-1
                    sm:px-2
                  "
                >

                  {item.type === 'logo' ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`
                        ${item.className}
                        w-auto
                        max-w-[75px]
                        sm:max-w-[120px]
                        object-contain
                        mix-blend-screen
                        brightness-200
                        contrast-150
                        filter
                      `}
                    />
                  ) : (
                    <IconComponent
                      className="
                        text-[#f29452]
                        w-3.5
                        h-3.5
                        sm:w-5
                        sm:h-5
                      "
                    />
                  )}

                </div>
              );
            })}

          </div>
        ))}

      </div>


      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </div>
  );
}