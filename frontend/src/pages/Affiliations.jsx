import React, { useState } from 'react';

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

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        
        {/* Section Header */}
        <div className="gallery-header">
          <span className="gallery-eyebrow">Our Network</span>
          <h2 className="gallery-title">Trusted Affiliations</h2>
          <p className="gallery-subtitle">
            Collaborating with leading organizations to drive impactful initiatives and sustainable growth.
          </p>
        </div>

        {/* Multi-Item Carousel Wrapper */}
        <div className="gallery-carousel-wrapper">
          <div className="gallery-track-3d">
            {items.map((item, index) => {
              let position = index - activeIndex;
              if (position < -1) position += items.length;
              if (position > 1) position -= items.length;

              const isCenter = position === 0;

              return (
                <div
                  key={index}
                  className={`gallery-card-item ${
                    isCenter ? 'card-center' : position === -1 ? 'card-left' : 'card-right'
                  }`}
                  onClick={() => {
                    if (isCenter) {
                      setModalImage(item);
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div className="gallery-card">
                    <div className="gallery-image-wrapper">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className={`gallery-image ${item.className}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="carousel-controls">
            <button onClick={handlePrev} aria-label="Previous slide">
              &#10094;
            </button>
            <button onClick={handleNext} aria-label="Next slide">
              &#10095;
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <div className="gallery-modal-overlay" onClick={() => setModalImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setModalImage(null)}>
              &times;
            </button>
            <img src={modalImage.src} alt={modalImage.alt} className="gallery-modal-image" />
          </div>
        </div>
      )}

      {/* Scoped Styles */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          * {
            box-sizing: border-box;
          }
            
          .gallery-section {
            width: 100%;
            min-height: 80vh;
            background: #5c5e5f;
            padding: 80px 5% 60px;
            overflow: hidden;
            color: #28221f;
          }

          .gallery-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding-left: 20px;
            padding-right: 20px;
          }

          .gallery-header {
            text-align: center !important;
            margin-bottom: 45px;
          }

          .gallery-eyebrow {
            display: inline-block;
            color: #f29452;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 10px;
            text-align: center !important;
          }

          @media (min-width: 768px) {
            .gallery-eyebrow {
              font-size: 0.8rem;
            }
          }

          .gallery-title {
            margin: 0;
            color: #f5f3f2;
            font-size: clamp(1.6rem, 5vw, 2.4rem);
            font-family: 'exo', sans-serif;
            font-weight: 700;
            line-height: 1.15;
            text-align: center !important;
          }

          .gallery-subtitle {
            max-width: 550px;
            margin: 12px auto 0;
            color: #f1ebe7;
            font-family: "Poppins", sans-serif;
            font-size: 17px;
            font-weight: 400;
            line-height: 1.7;
            text-align: center !important;
          }

          .gallery-carousel-wrapper {
            position: relative;
            width: 100%;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .gallery-track-3d {
            position: relative;
            width: 100%;
            height: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .gallery-card-item {
            position: absolute;
            transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
            cursor: pointer;
          }

          /* Overlapping positioning matching reference image layout */
          .card-center {
            z-index: 10;
            transform: translateX(0) scale(1);
            opacity: 1;
          }

          .card-left {
            z-index: 2;
            transform: translateX(-245px) scale(0.9);
            opacity: 0.85;
          }

          .card-right {
            z-index: 2;
            transform: translateX(245px) scale(0.9);
            opacity: 0.85;
          }

          .gallery-card {
            width: 330px;
            height: 260px;
            background: #ffffff;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(0,0,0,0.08);
            transition: border-color 0.3s ease;
          }

          .gallery-card:hover {
            border-color: #f29452;
          }

          .gallery-image-wrapper {
            width: 100%;
            height: 100%;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            overflow: hidden;
          }

          .gallery-image {
            display: block;
            object-fit: contain;
            transition: transform 0.7s ease;
          }

          .logo-caire { width: 85%; height: 85%; }
          .logo-egc { width: 90%; height: 90%; }
          .logo-giv { width: 85%; height: 85%; }

          .card-center .gallery-card:hover .gallery-image {
            transform: scale(1.05);
          }

          /* Carousel Controls - Orange background style */
          .carousel-controls {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 25px;
            z-index: 20;
          }

          .carousel-controls button {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 4px;
            background: #f29452;
            color: #28221f;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: background 0.3s ease, transform 0.3s ease;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }

          .carousel-controls button:hover {
            background: #e88948;
            transform: scale(1.08);
          }

          /* --- Lightbox Modal Styles --- */
          .gallery-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(40, 34, 31, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
          }

          .gallery-modal-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            background: #ffffff;
            padding: 25px;
            border-radius: 6px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .gallery-modal-image {
            max-width: 60vw;
            max-height: 55vh;
            object-fit: contain;
            display: block;
            border-radius: 4px;
          }

          .gallery-modal-close {
            position: absolute;
            top: -12px;
            right: -12px;
            background: #f29452;
            color: #28221f;
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }

          .gallery-modal-close:hover {
            transform: scale(1.1);
            background: #e88948;
          }

          @media (max-width: 900px) {
            .card-left { transform: translateX(-180px) scale(0.85); }
            .card-right { transform: translateX(180px) scale(0.85); }
            .gallery-card { width: 260px; height: 210px; }
          }

          @media (max-width: 600px) {
            .card-left { transform: translateX(-120px) scale(0.75); opacity: 0; pointer-events: none; }
            .card-right { transform: translateX(120px) scale(0.75); opacity: 0; pointer-events: none; }
            .gallery-card { width: 260px; height: 210px; }
          }
        `}
      </style>
    </section>
  );
}