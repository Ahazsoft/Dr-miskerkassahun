import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.JPG';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/public_speaking.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/mandela.jpg';
import img7 from '../assets/images/miss_afri.jpg';
import img8 from '../assets/images/modeling.jpg';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: 'Johns Hopkins Bloomberg School of Public Health',
      category: 'JHUBSP',
      image: img3,
    },
    {
      id: 2,
      title: 'Mandela Washington Fellowship',
      category: 'Mandela Washington Fellowship',
      image: img6,
    },
    {
      id: 3,
      title: 'GIV Society Ethiopia',
      category: 'GIV Society Ethiopia',
      image: img5,
    },
    {
      id: 4,
      title: 'Speaking Engagements',
      category: 'Speaking Engagements',
      image: img4,
    },
    {
      id: 5,
      title: 'Miss University Africa',
      category: 'Miss University Africa',
      image: img1,
    },
    {
      id: 6,
      title: 'Miss Supranational Ethiopia',
      category: 'Miss Supranational Ethiopia',
      image: img2,
    },
    {
      id: 7,
      title: 'Miss Africa Beauty Queen',
      category: 'Miss Africa Beauty Queen',
      image: img7,
    },
    {
      id: 8,
      title: 'Modeling Portfolio',
      category: 'Modeling Portfolio',
      image: img8,
    },
  ];

  const moveSlide = (direction) => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + direction + galleryItems.length) %
        galleryItems.length
    );
  };

  const visibleItems = [-3, -2, -1, 0, 1, 2, 3].map((offset) => ({
    item:
      galleryItems[
        (activeIndex + offset + galleryItems.length) %
          galleryItems.length
      ],
    offset,
  }));

  return (
    <section className="gallery-section">
      <div className="gallery-container">

        <div className="gallery-header">

          <div className="gallery-eyebrow">
            <span>MY COLLECTION</span>
          </div>

          <h2 className="gallery-title">Gallery</h2>

          <p className="gallery-subtitle">
            A collection of moments, experiences, achievements
            <br className="desktop-only" />
            and memories from my journey.
          </p>

        </div>

        <div className="gallery-carousel">

          <div className="gallery-track">

            {visibleItems.map(({ item, offset }) => (

              <article
                key={offset}
                className={`
                  gallery-card
                  ${
                    offset === 0
                      ? 'gallery-card-active'
                      : `gallery-card-${Math.abs(offset)}`
                  }
                `}
              >

                <div className="gallery-image-wrapper">

                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className="gallery-image"
                    loading="lazy"
                  />

                </div>

              </article>

            ))}

          </div>

          <div className="carousel-controls">

            <button
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft
                size={21}
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="Next image"
            >
              <ChevronRight
                size={21}
                strokeWidth={1.8}
              />
            </button>

          </div>

        </div>

        <div className="gallery-footer">

          <span className="footer-line"></span>

          <span className="footer-text">
            MOMENTS · EXPERIENCES · JOURNEY
          </span>

          <span className="footer-line"></span>

        </div>

      </div>

      <style>{`

        .gallery-section {
          width: 100%;
          min-height: 100vh;
          background: #faf6f0;
          padding: 120px 20px 90px;
          overflow: hidden;
          box-sizing: border-box;
          color: #28221f;
        }

        .gallery-container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 55px;
        }

        .gallery-eyebrow {
          display: inline-block;
          color: #f29452;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 15px;
        }

        .eyebrow-line {
          width: 35px;
          height: 1px;
          background: #f29452;
          opacity: 0.7;
        }

        .gallery-title {
          margin: 0;
          color: #28221f;
          font-size: clamp(36px, 4vw, 50px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .gallery-subtitle {
          max-width: 550px;
          margin: 22px auto 0;
          color: #5c534e;
          font-size: 14px;
          line-height: 1.8;
          text-align: center;
        }

        .gallery-carousel {
          position: relative;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          overflow: visible;
        }

        .gallery-track {
          width: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .gallery-card {
          position: relative;
          flex-shrink: 0;
          overflow: hidden;
          background: #e9e3da;
          border: 1px solid rgba(40, 34, 31, 0.08);
          box-shadow:
            0 18px 45px rgba(40, 34, 31, 0.12);

          transition:
            width 0.5s ease,
            height 0.5s ease,
            transform 0.5s ease,
            opacity 0.5s ease,
            filter 0.5s ease,
            box-shadow 0.5s ease;
        }

        /* CENTER */

        .gallery-card-active {
          width: 340px;
          height: 400px;
          flex: 0 0 340px;

          z-index: 10;
          transform: scale(1);

          opacity: 1;
          filter: none;

          box-shadow:
            0 30px 70px rgba(40, 34, 31, 0.25);
        }

        /* FIRST STEP */

        .gallery-card-1 {
          width: 235px;
          height: 300px;
          flex: 0 0 235px;

          z-index: 8;
          transform: scale(0.96);

          opacity: 0.92;
          filter: saturate(0.9);

          margin-left: -52px;
          margin-right: -52px;
        }

        /* SECOND STEP */

        .gallery-card-2 {
          width: 175px;
          height: 230px;
          flex: 0 0 175px;

          z-index: 6;
          transform: scale(0.9);

          opacity: 0.72;
          filter: saturate(0.75);

          margin-left: -55px;
          margin-right: -55px;
        }

        /* THIRD STEP */

        .gallery-card-3 {
          width: 125px;
          height: 160px;
          flex: 0 0 125px;

          z-index: 4;
          transform: scale(0.84);

          opacity: 0.45;
          filter: saturate(0.6);

          margin-left: -58px;
          margin-right: -58px;
        }

        .gallery-card:hover {
          opacity: 1;
          filter: saturate(1);
          border: 2px solid #f29452;

          box-shadow:
            0 25px 55px rgba(40, 34, 31, 0.22);
        }

        .gallery-image-wrapper {
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #e9e3da;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          display: block;

          object-fit: cover;

          transition:
            transform 0.7s ease,
            filter 0.5s ease;
          animation: gallery-image-reveal 0.55s ease both;
        }

        @keyframes gallery-image-reveal {
          from {
            opacity: 0.35;
            transform: scale(1.035);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .gallery-card:hover .gallery-image {
          transform: scale(1.04);
        }

        /* CONTROLS */

        .carousel-controls {
          display: flex;
          justify-content: center;
          gap: 10px;

          margin-top: 25px;
        }

        .carousel-controls button {
          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: none;
          border-radius: 0;

          background: #3b4042;
          color: #ffffff;

          cursor: pointer;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            clip-path 0.3s ease,
            transform 0.3s ease;
        }

        .carousel-controls button:hover {
          background: #f29452;
          color: #28221f;
          clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
          transform: scale(1.08);
        }

        /* FOOTER */

        .gallery-footer {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 14px;

          margin-top: 50px;

          color: #82766e;

          font-size: 8px;
          font-weight: 700;

          letter-spacing: 2.5px;
        }

        .footer-line {
          width: 45px;
          height: 1px;

          background:
            rgba(40, 34, 31, 0.25);
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {

          .gallery-container {
            max-width: 900px;
          }

          .gallery-carousel {
            max-width: 850px;
          }

          .gallery-track {
            min-height: 360px;
          }

          .gallery-card-active {
            width: 300px;
            height: 360px;
            flex-basis: 300px;
          }

          .gallery-card-1 {
            width: 205px;
            height: 265px;
            flex-basis: 205px;

            margin-left: -32px;
            margin-right: -32px;
          }

          .gallery-card-2 {
            width: 150px;
            height: 200px;
            flex-basis: 150px;

            margin-left: -35px;
            margin-right: -35px;
          }

          .gallery-card-3 {
            width: 105px;
            height: 140px;
            flex-basis: 105px;

            margin-left: -38px;
            margin-right: -38px;
          }
        }


        /* =========================
           TABLET / SMALL LAPTOP
        ========================= */

        @media (max-width: 850px) {

          .gallery-section {
            padding: 105px 18px 75px;
          }

          .gallery-track {
            min-height: 330px;
          }

          .gallery-card-active {
            width: 270px;
            height: 330px;
            flex-basis: 270px;
          }

          .gallery-card-1 {
            width: 190px;
            height: 245px;
            flex-basis: 190px;

            margin-left: -38px;
            margin-right: -38px;
          }

          .gallery-card-2 {
            width: 135px;
            height: 185px;
            flex-basis: 135px;

            margin-left: -40px;
            margin-right: -40px;
          }

          .gallery-card-3 {
            display: none;
          }
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .gallery-section {
            padding: 90px 15px 65px;
          }

          .gallery-header {
            margin-bottom: 38px;
          }

          .gallery-eyebrow {
            gap: 9px;

            font-size: 8px;
            letter-spacing: 2px;
          }

          .eyebrow-line {
            width: 25px;
          }

          .gallery-subtitle {
            padding: 0 10px;

            font-size: 12px;
            line-height: 1.7;
          }

          .desktop-only {
            display: none;
          }

          .gallery-track {
            min-height: 280px;
          }

          .gallery-card-active {
            width: 230px;
            height: 280px;
            flex-basis: 230px;
          }

          .gallery-card-1 {
            width: 160px;
            height: 215px;
            flex-basis: 160px;

            margin-left: -42px;
            margin-right: -42px;
          }

          .gallery-card-2 {
            width: 115px;
            height: 160px;
            flex-basis: 115px;

            margin-left: -45px;
            margin-right: -45px;
          }

          .carousel-controls {
            margin-top: 22px;
          }

          .carousel-controls button {
            width: 44px;
            height: 44px;
          }

          .gallery-footer {
            margin-top: 38px;

            font-size: 7px;
            letter-spacing: 1.8px;
          }
        }


        /* =========================
           SMALL PHONE
        ========================= */

        @media (max-width: 430px) {

          .gallery-section {
            padding: 75px 10px 50px;
          }

          .gallery-track {
            min-height: 245px;
          }

          .gallery-card-active {
            width: 200px;
            height: 245px;
            flex-basis: 200px;
          }

          .gallery-card-1 {
            width: 140px;
            height: 185px;
            flex-basis: 140px;

            margin-left: -40px;
            margin-right: -40px;
          }

          .gallery-card-2 {
            width: 100px;
            height: 140px;
            flex-basis: 100px;

            margin-left: -42px;
            margin-right: -42px;
          }

          .gallery-footer {
            gap: 8px;
          }

          .footer-line {
            width: 25px;
          }
        }


        /* =========================
           VERY SMALL PHONE
        ========================= */

        @media (max-width: 360px) {

          .gallery-card-active {
            width: 190px;
            height: 230px;
            flex-basis: 190px;
          }

          .gallery-card-1 {
            width: 125px;
            height: 170px;
            flex-basis: 125px;

            margin-left: -38px;
            margin-right: -38px;
          }

          .gallery-card-2 {
            width: 90px;
            height: 125px;
            flex-basis: 90px;

            margin-left: -40px;
            margin-right: -40px;
          }

        }


        @media (prefers-reduced-motion: reduce) {

          .gallery-card,
          .gallery-image,
          .carousel-controls button {
            transition: none;
          }
        }

      `}</style>
    </section>
  );
}