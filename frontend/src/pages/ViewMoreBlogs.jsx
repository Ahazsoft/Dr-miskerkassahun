import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.JPG';
import img3 from '../assets/images/img3.jpg';

const posts = [
  {
    title: 'Bridging Hope and Healthcare',
    date: 'July 29, 2024',
    category: 'Professional Development',
    description: 'Exploring the connection between healthcare, hope, community and the importance of creating meaningful change.',
    image: img1,
  },
  {
    title: 'Healthcare Everything Magazine',
    date: 'July 29, 2024',
    category: 'Mental Health',
    description: 'A conversation around healthcare, personal growth, mental wellbeing and the experiences that shape our professional journey.',
    image: img2,
  },
  {
    title: 'Misker Kassahun: Bridging Hope and Healthcare',
    date: 'July 29, 2024',
    category: 'Mental Health',
    description: 'A closer look at my journey, healthcare advocacy and the work of building healthier and stronger communities.',
    image: img3,
  },
  {
    title: 'Burn Out',
    date: 'May 21, 2024',
    category: 'Mental Health',
    description: 'Brace yourself, this is going to be long and personal. I am sharing it in hopes it might help someone struggling.',
    image: img1,
  },
  {
    title: 'The Importance of Mental Wellbeing',
    date: 'May 2024',
    category: 'Mental Health',
    description: 'Thoughts on creating healthier conversations around mental health and making space for honest experiences.',
    image: img2,
  },
  {
    title: 'Growing Through Professional Experiences',
    date: 'April 2024',
    category: 'Professional Development',
    description: 'Lessons, experiences and reflections gathered throughout my professional and personal journey.',
    image: img3,
  },
];

export default function ViewMoreBlogs() {
  return (
    <section className="more-blogs-page">
      <div className="more-blogs-container">
        <Link to="/blog" className="more-blogs-back">
          <ArrowLeft size={17} />
          Back to blog
        </Link>

        <header className="more-blogs-header">
          <span>ALL STORIES</span>
          <h1>More from the Blog</h1>
          <p>Explore reflections on healthcare, public health, leadership and life.</p>
        </header>

        <div className="more-blogs-grid">
          {posts.map((post) => (
            <article className="more-blog-card" key={post.title}>
              <div className="more-blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="more-blog-content">
                <span className="more-blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div className="more-blog-meta">
                  <span>{post.date}</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .more-blogs-page {
          min-height: 100vh;
          padding: 132px 24px 90px;
          background: #ffffff;
          color: #28221f;
        }

        .more-blogs-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        .more-blogs-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #5c534e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .more-blogs-header {
          max-width: 700px;
          margin: 50px 0 48px;
        }

        .more-blogs-header > span,
        .more-blog-category {
          color: #f29452;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .more-blogs-header h1 {
          margin: 14px 0 16px;
          font-size: clamp(38px, 6vw, 70px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .more-blogs-header p {
          margin: 0;
          color: #5c534e;
          font-size: 16px;
          line-height: 1.7;
        }

        .more-blogs-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .more-blog-card {
          overflow: hidden;
          border: 1px solid rgba(40, 34, 31, 0.1);
          background: #faf6f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .more-blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 35px rgba(40, 34, 31, 0.12);
        }

        .more-blog-image {
          aspect-ratio: 1.45;
          overflow: hidden;
        }

        .more-blog-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .more-blog-card:hover img {
          transform: scale(1.04);
        }

        .more-blog-content {
          padding: 22px;
        }

        .more-blog-content h2 {
          margin: 12px 0 10px;
          font-size: 22px;
          line-height: 1.15;
        }

        .more-blog-content p {
          margin: 0;
          color: #716861;
          font-size: 14px;
          line-height: 1.7;
        }

        .more-blog-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 22px;
          color: #82766e;
          font-size: 11px;
          font-weight: 700;
        }

        @media (max-width: 800px) {
          .more-blogs-page {
            padding: 105px 18px 65px;
          }

          .more-blogs-header {
            margin: 38px 0 34px;
          }

          .more-blogs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .more-blogs-grid {
            grid-template-columns: 1fr;
          }

          .more-blog-content h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}
