import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.JPG';
import img3 from '../assets/images/img3.jpg';
import '../styles/moreBlog.css';
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

     
    </section>
  );
}
