import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/public_speaking.jpg';
import img6 from '../assets/images/mandela.jpg';
import img7 from '../assets/images/miss_afri.jpg';
import img8 from '../assets/images/modeling.jpg';
import img9 from '../assets/images/miss_sup.jpg';
import giv from '../assets/images/giv.jpg';
import '../styles/gallery.css';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

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
      image: giv,
    },
    {
      id: 4,
      title: 'Speaking Engagements',
      category: 'Speaking Engagements',
      image: img4,
      isPublication: true, // Applies publication styling/contain fit
    },
    {
      id: 5,
      title: 'Miss University Africa',
      category: 'Miss University Africa',
      image: img7,
    },
    {
      id: 6,
      title: 'Miss Supranational Ethiopia',
      category: 'Miss Supranational Ethiopia',
      image: img9,
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
          <span className="gallery-eyebrow">MY COLLECTION</span>
          <h1 className="gallery-title">Gallery</h1> 

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
                className={`gallery-card ${ 
                  offset === 0 
                    ? 'gallery-card-active' 
                    : `gallery-card-${Math.abs(offset)}` 
                } ${item.isPublication ? 'gallery-publication' : ''}`}
                onClick={() => {
                  if (offset === 0) {
                    // If it's already the active front image, open the lightbox preview
                    setSelectedImage(item);
                  } else {
                    // If it's a side card, rotate it to the front position
                    setActiveIndex((activeIndex + offset + galleryItems.length) % galleryItems.length);
                  }
                }}
              > 
                <div className="gallery-image-wrapper"> 
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="gallery-image" 
                    loading="lazy" 
                  /> 
                </div> 

                <div className="gallery-card-content"> 
                  <h3 className="gallery-card-title"> 
                    {item.title} 
                  </h3> 

                  <span className="gallery-card-category"> 
                    {item.category} 
                  </span> 
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
              <ChevronLeft size={21} strokeWidth={1.8} /> 
            </button> 

            <button 
              type="button" 
              onClick={() => moveSlide(1)} 
              aria-label="Next image" 
            > 
              <ChevronRight size={21} strokeWidth={1.8} /> 
            </button> 
          </div> 
        </div> 
      </div>

      {/* Lightbox Modal Popup (Opens only when clicking the active center image) */}
      {selectedImage && (
        <div className="gallery-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="gallery-modal-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="gallery-modal-image" 
            />
            <div className="gallery-modal-caption">
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}