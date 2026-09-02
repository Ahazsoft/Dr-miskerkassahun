import React, { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'GIV Society Ethiopia',
    'JHUBSP',
    'Mandela Washington Fellowship',
    'Miss Africa Beauty Queen',
    'Miss Supranational Ethiopia',
    'Miss University Africa',
    'Modeling Portfolio',
    'Speaking Engagements',
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Johns Hopkins Bloomberg School of Public Health',
      category: 'JHUBSP',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=85&w=1200',
    },
    {
      id: 2,
      title: 'Mandela Washington Fellowship',
      category: 'Mandela Washington Fellowship',
      image:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=85&w=1200',
    },
    {
      id: 3,
      title: 'GIV Society Ethiopia',
      category: 'GIV Society Ethiopia',
      image:
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=85&w=1200',
    },
    {
      id: 4,
      title: 'Speaking Engagements',
      category: 'Speaking Engagements',
      image:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=85&w=1200',
    },
    {
      id: 5,
      title: 'Miss University Africa',
      category: 'Miss University Africa',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1200',
    },
    {
      id: 6,
      title: 'Miss Supranational Ethiopia',
      category: 'Miss Supranational Ethiopia',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=85&w=1200',
    },
    {
      id: 7,
      title: 'Miss Africa Beauty Queen',
      category: 'Miss Africa Beauty Queen',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=85&w=1200',
    },
    {
      id: 8,
      title: 'Modeling Portfolio',
      category: 'Modeling Portfolio',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=85&w=1200',
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="gallery-section">

      <div className="gallery-container">

        {/* ================================
            HEADER
        ================================= */}

        <div className="gallery-header">

          <div className="gallery-eyebrow">
            <span className="eyebrow-line"></span>

            <span>MY COLLECTION</span>

            <span className="eyebrow-line"></span>
          </div>

          <h1 className="gallery-title">
            <span>G</span>allery
          </h1>

          <p className="gallery-subtitle">
            A collection of moments, experiences, achievements
            <br className="desktop-only" />
            and memories from my journey.
          </p>

        </div>


        {/* ================================
            FILTERS
        ================================= */}

        <div className="filter-wrapper">

          <div className="filter-scroll">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`filter-button ${
                  activeCategory === category
                    ? 'filter-active'
                    : ''
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>


        {/* ================================
            GALLERY GRID
        ================================= */}

        <div className="gallery-grid">

          {filteredItems.map((item, index) => (

            <article
              className="gallery-card"
              key={item.id}
            >

              <div className="gallery-image-wrapper">

                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  loading="lazy"
                />


                {/* Dark overlay */}

                <div className="image-overlay"></div>


                {/* Image number */}

                <div className="image-number">

                  {String(index + 1).padStart(2, '0')}

                  <span></span>

                </div>


                {/* Image information */}

                <div className="image-content">

                  <h2>
                    {item.title}
                  </h2>

                  <p>
                    {item.category}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ================================
            BOTTOM DECORATION
        ================================= */}

        <div className="gallery-footer">

          <span className="footer-line"></span>

          <span className="footer-text">
            MOMENTS · EXPERIENCES · JOURNEY
          </span>

          <span className="footer-line"></span>

        </div>

      </div>


      {/* ================================
          CSS
      ================================= */}

      <style>{`

        /* ==================================
           SECTION
        ================================== */

        .gallery-section {
          width: 100%;
          min-height: 100vh;

          background: #faf6f0;

          padding:
            120px
            60px
            100px;

          overflow-x: hidden;

          box-sizing: border-box;
        }


        .gallery-container {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;
        }


        /* ==================================
           HEADER
        ================================== */

        .gallery-header {
          text-align: center;

          margin-bottom: 55px;
        }


        .gallery-eyebrow {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          color: #f29452;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 3px;

          margin-bottom: 20px;
        }


        .eyebrow-line {
          width: 28px;

          height: 1px;

          background: #f29452;
        }


        .gallery-title {
          margin: 0;

          color: #28221f;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: clamp(
            64px,
            9vw,
            110px
          );

          font-weight: 400;

          line-height: 0.9;

          letter-spacing: -5px;
        }


        .gallery-title span {
          color: #f29452;
        }


        .gallery-subtitle {
          margin:
            28px
            auto
            0;

          color: #665d57;

          font-size: 14px;

          line-height: 1.7;
        }


        /* ==================================
           FILTER
        ================================== */

        .filter-wrapper {
          width: 100%;

          border-bottom:
            1px solid
            rgba(40, 34, 31, 0.15);

          margin-bottom: 25px;
        }


        .filter-scroll {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 30px;

          overflow-x: auto;

          scrollbar-width: none;
        }


        .filter-scroll::-webkit-scrollbar {
          display: none;
        }


        .filter-button {
          position: relative;

          flex-shrink: 0;

          border: none;

          background: transparent;

          color: #70665f;

          padding:
            0
            0
            16px;

          font-size: 9px;

          font-weight: 600;

          letter-spacing: 0.8px;

          text-transform: uppercase;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 0.3s ease;
        }


        .filter-button:hover {
          color: #f29452;
        }


        .filter-active {
          color: #f29452;
        }


        .filter-active::after {
          content: '';

          position: absolute;

          left: 0;

          right: 0;

          bottom: -1px;

          height: 2px;

          background: #f29452;
        }


        /* ==================================
           EQUAL WIDTH GRID
        ================================== */

        .gallery-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 18px;

          width: 100%;
        }


        /* ==================================
           CARD
        ================================== */

        .gallery-card {
          width: 100%;

          min-width: 0;

          overflow: hidden;

          background: #e4ddd4;
        }


        /* ==================================
           IMAGE
        ================================== */

        .gallery-image-wrapper {
          position: relative;

          width: 100%;

          aspect-ratio: 4 / 5;

          overflow: hidden;

          background: #ddd5cb;
        }


        .gallery-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          filter: grayscale(15%);

          transform: scale(1);

          transition:
            transform 0.8s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            ),
            filter 0.5s ease;
        }


        .gallery-card:hover
        .gallery-image {
          transform: scale(1.06);

          filter: grayscale(0%);
        }


        /* ==================================
           OVERLAY
        ================================== */

        .image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.05) 30%,
              rgba(0, 0, 0, 0.75) 100%
            );

          opacity: 0.75;

          transition:
            opacity 0.4s ease;
        }


        .gallery-card:hover
        .image-overlay {
          opacity: 0.9;
        }


        /* ==================================
           NUMBER
        ================================== */

        .image-number {
          position: absolute;

          top: 17px;

          left: 17px;

          z-index: 2;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          gap: 6px;

          color: #f29452;

          font-size: 11px;

          font-weight: 600;

          letter-spacing: 1.5px;
        }


        .image-number span {
          width: 17px;

          height: 1px;

          background: #f29452;
        }


        /* ==================================
           CONTENT
        ================================== */

        .image-content {
          position: absolute;

          left: 18px;

          right: 18px;

          bottom: 18px;

          z-index: 2;
        }


        .image-content h2 {
          margin:
            0
            0
            7px;

          color: white;

          font-size: 16px;

          font-weight: 600;

          line-height: 1.3;

          letter-spacing: -0.2px;
        }


        .image-content p {
          margin: 0;

          color: #f29452;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 1.3px;

          line-height: 1.4;

          text-transform: uppercase;
        }


        /* ==================================
           FOOTER
        ================================== */

        .gallery-footer {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 12px;

          margin-top: 38px;

          color: #82766e;

          font-size: 7px;

          font-weight: 600;

          letter-spacing: 2px;
        }


        .footer-line {
          width: 30px;

          height: 1px;

          background:
            rgba(40, 34, 31, 0.2);
        }


        /* ==================================
           TABLET
        ================================== */

        @media (max-width: 1000px) {

          .gallery-section {
            padding:
              110px
              40px
              80px;
          }


          .gallery-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 15px;
          }


          .filter-scroll {
            justify-content: flex-start;
          }

        }


        /* ==================================
           SMALL TABLET
        ================================== */

        @media (max-width: 700px) {

          .gallery-section {
            padding:
              100px
              24px
              70px;
          }


          .gallery-header {
            margin-bottom: 40px;
          }


          .gallery-title {
            font-size: 68px;

            letter-spacing: -3px;
          }


          .gallery-subtitle {
            font-size: 12px;

            margin-top: 22px;
          }


          .desktop-only {
            display: none;
          }


          .filter-scroll {
            gap: 23px;
          }


          .filter-button {
            font-size: 8px;

            padding-bottom: 13px;
          }


          .gallery-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 12px;
          }


          .gallery-image-wrapper {
            aspect-ratio: 4 / 5;
          }


          .image-number {
            top: 12px;

            left: 12px;

            font-size: 9px;
          }


          .image-content {
            left: 13px;

            right: 13px;

            bottom: 13px;
          }


          .image-content h2 {
            font-size: 13px;
          }


          .image-content p {
            font-size: 6px;

            letter-spacing: 1px;
          }

        }


        /* ==================================
           PHONE
        ================================== */

        @media (max-width: 480px) {

          .gallery-section {
            padding:
              95px
              15px
              55px;
          }


          .gallery-header {
            margin-bottom: 32px;
          }


          .gallery-eyebrow {
            font-size: 7px;

            letter-spacing: 2px;

            gap: 8px;
          }


          .eyebrow-line {
            width: 18px;
          }


          .gallery-title {
            font-size: 54px;

            letter-spacing: -2.5px;
          }


          .gallery-subtitle {
            max-width: 290px;

            font-size: 11px;

            line-height: 1.6;
          }


          .filter-scroll {
            gap: 20px;
          }


          .filter-button {
            font-size: 7px;

            padding-bottom: 12px;
          }


          .gallery-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 8px;
          }


          .gallery-image-wrapper {
            aspect-ratio: 3 / 4;
          }


          .image-number {
            top: 10px;

            left: 10px;

            font-size: 8px;

            letter-spacing: 1px;
          }


          .image-number span {
            width: 12px;
          }


          .image-content {
            left: 10px;

            right: 10px;

            bottom: 10px;
          }


          .image-content h2 {
            font-size: 11px;

            line-height: 1.25;

            margin-bottom: 4px;
          }


          .image-content p {
            font-size: 5.5px;

            letter-spacing: 0.8px;
          }


          .gallery-footer {
            margin-top: 25px;

            font-size: 6px;

            letter-spacing: 1.2px;

            gap: 8px;
          }


          .footer-line {
            width: 18px;
          }

        }


        /* ==================================
           VERY SMALL PHONE
        ================================== */

        @media (max-width: 360px) {

          .gallery-section {
            padding-left: 12px;

            padding-right: 12px;
          }


          .gallery-grid {
            gap: 6px;
          }


          .gallery-title {
            font-size: 48px;
          }


          .image-content h2 {
            font-size: 10px;
          }

        }

      `}</style>

    </section>
  );
}