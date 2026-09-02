import React, { useState } from 'react';

// Import all your local images from the assets folder
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.JPG';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/public_speaking.jpg';
 import img5 from '../assets/images/img5.jpg';
 import img6 from '../assets/images/mandela.jpg';
 import img7 from '../assets/images/miss_afri.jpg';
 import img8 from '../assets/images/modeling.jpg';

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
      image: img3,
    },
    {
      id: 2,
      title: 'Mandela Washington Fellowship',
      category: 'Mandela Washington Fellowship',
      image: img6, // Updated to use local imported image variable
    },
    {
      id: 3,
      title: 'GIV Society Ethiopia',
      category: 'GIV Society Ethiopia',
      image: img5, // Updated to use local imported image variable
    },
    {
      id: 4,
      title: 'Speaking Engagements',
      category: 'Speaking Engagements',
      image: img4, // Updated to use local imported image variable
    },
    {
      id: 5,
      title: 'Miss University Africa',
      category: 'Miss University Africa',
      image: img1, // Swap out with your imported variable (e.g., img5)
    },
    {
      id: 6,
      title: 'Miss Supranational Ethiopia',
      category: 'Miss Supranational Ethiopia',
      image: img2, // Swap out with your imported variable (e.g., img6)
    },
    {
      id: 7,
      title: 'Miss Africa Beauty Queen',
      category: 'Miss Africa Beauty Queen',
      image: img7, // Swap out with your imported variable (e.g., img7)
    },
    {
      id: 8,
      title: 'Modeling Portfolio',
      category: 'Modeling Portfolio',
      image: img8, // Swap out with your imported variable (e.g., img8)
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
        
        {/* HEADER */}
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

        {/* FILTERS */}
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

        {/* GALLERY GRID */}
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

                <div className="image-overlay"></div>

                <div className="image-number">
                  {String(index + 1).padStart(2, '0')}
                  <span></span>
                </div>

                <div className="image-content">
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
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
          padding: 120px 60px 100px;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        .gallery-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

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
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .eyebrow-line {
          width: 28px;
          height: 1px;
          background: #f29452;
        }

        .gallery-title {
          margin: 0;
          color: #28221f;
          font-size: clamp(2.25rem, 4vw, 2.8rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        .gallery-title span {
          color: #f29452;
        }

        .gallery-subtitle {
          margin: 22px auto 0;
          color: #665d57;
          font-size: 15px;
          line-height: 1.7;
        }

        .filter-wrapper {
          width: 100%;
          border-bottom: 1px solid rgba(40, 34, 31, 0.15);
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
          padding: 0 0 16px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
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

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          width: 100%;
        }

        .gallery-card {
          width: 100%;
          min-width: 0;
          overflow: hidden;
          background: #e4ddd4;
        }

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
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
        }

        .gallery-card:hover .gallery-image {
          transform: scale(1.06);
          filter: grayscale(0%);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.75) 100%);
          opacity: 0.75;
          transition: opacity 0.4s ease;
        }

        .gallery-card:hover .image-overlay {
          opacity: 0.9;
        }

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

        .image-content {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          z-index: 2;
        }

        .image-content h2 {
          margin: 0 0 7px;
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
          background: rgba(40, 34, 31, 0.2);
        }

        @media (max-width: 1000px) {
          .gallery-section {
            padding: 110px 40px 80px;
          }
          .gallery-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 15px;
          }
          .filter-scroll {
            justify-content: flex-start;
          }
        }

        @media (max-width: 700px) {
          .gallery-section {
            padding: 100px 24px 70px;
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .image-content h2 {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .gallery-section {
            padding: 95px 15px 55px;
          }
          .gallery-title {
            font-size: 54px;
            letter-spacing: -2.5px;
          }
          .gallery-grid {
            gap: 8px;
          }
          .image-content h2 {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}