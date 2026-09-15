import React from 'react';

import img1 from '../assets/images/CAIRE-Logo.png';
import img2 from '../assets/images/EGC-logo.png';
import img3 from '../assets/images/GIV-Logo.png';

export default function Affilations() {
  const items = [
    {
      src: img1,
      alt: 'CAIRE Logo',
      className: 'logo-caire',
    },
    {
      src: img2,
      alt: 'EGC Logo',
      className: 'logo-egc',
    },
    {
      src: img3,
      alt: 'GIV Logo',
      className: 'logo-giv',
    },
  ];

  return (
    <section className="affiliations">
      <div className="affiliations-track">
        {[...Array(4)].map((_, groupIndex) => (
          <div className="affiliation-group" key={groupIndex}>
            {items.map((item, index) => (
              <div className="logo-container" key={index}>
                <div className="logo-box">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={item.className}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>
        {`
          .affiliations {
            width: 100%;
            background:  #28221f;
            overflow: hidden;
            padding: 15px 0;
            margin: 24px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .affiliations-track {
            display: flex;
            width: max-content;
            align-items: center;
            animation: marquee 30s linear infinite;
          }

          .affiliation-group {
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }

          .logo-container {
            width: 300px;
            height: 100px;
            padding: 6px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-sizing: border-box;
          }

          .logo-box {
            width: 100%;
            height: 100%;
            background:  #f29452;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
          }

          .logo-box img {
            display: block;
            object-fit: contain;
            max-width: none;
            max-height: none;
          }

          .logo-caire {
            width: 96%;
            height: 96%;
          }

          .logo-egc {
            width: 230%;
            height: 230%;
            object-fit: contain;
          }

          .logo-giv {
            width: 96%;
            height: 96%;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-25%);
            }
          }

          @media (max-width: 768px) {
            .affiliations {
              padding: 12px 0;
            }

            .logo-container {
              width: 230px;
              height: 105px;
              padding: 5px 7px;
            }

            .logo-caire {
              width: 96%;
              height: 96%;
            }

            .logo-egc {
              width: 230%;
              height: 230%;
            }

            .logo-giv {
              width: 96%;
              height: 96%;
            }
          }

          @media (max-width: 480px) {
            .logo-container {
              width: 195px;
              height: 90px;
              padding: 4px 6px;
            }

            .logo-egc {
              width: 230%;
              height: 230%;
            }
          }
        `}
      </style>
    </section>
  );
}