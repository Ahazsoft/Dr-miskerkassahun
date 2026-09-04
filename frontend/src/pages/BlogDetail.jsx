import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.JPG';
import img3 from '../assets/images/img3.jpg';
import '../styles/blogDetail.css';
const posts = [
  {
    id: 1,
    title: 'Bridging Hope and Healthcare',
    date: 'July 29, 2024',
    category: 'Professional Development',
    type: 'Magazine',
    description: 'Exploring the connection between healthcare, hope, community and the importance of creating meaningful change.',
    fullContent: 'Full detailed content for Bridging Hope and Healthcare goes here. This section can include multiple paragraphs, rich text, and deeper insights into healthcare advocacy, personal growth, and community building.',
    image: img1,
  },
  {
    id: 2,
    title: 'Healthcare Everything Magazine',
    date: 'July 29, 2024',
    category: 'Mental Health',
    type: 'Magazine',
    description: 'A conversation around healthcare, personal growth, mental wellbeing and the experiences that shape our professional journey.',
    fullContent: 'Full detailed content for Healthcare Everything Magazine goes here. Diving deeper into personal growth, mental health conversations, and professional milestones.',
    image: img2,
  },
  {
    id: 3,
    title: 'Misker Kassahun: Bridging Hope and Healthcare',
    date: 'July 29, 2024',
    category: 'Mental Health',
    type: 'Featured',
    description: 'A closer look at my journey, healthcare advocacy and the work of building healthier and stronger communities.',
    fullContent: 'Full detailed content for Misker Kassahun\'s featured profile and advocacy work.',
    image: img3,
  },
  {
    id: 4,
    title: 'Burn Out',
    date: 'May 21, 2024',
    category: 'Mental Health',
    type: 'Personal',
    description: 'Brace yourself, this is going to be long and personal. I am sharing it in hopes it might help someone struggling.',
    fullContent: 'Brace yourself, this is going to be long and personal. Sharing experiences of burnout to help anyone currently struggling find solace and practical recovery strategies.',
    image: img1,
  },
  {
    id: 5,
    title: 'The Importance of Mental Wellbeing',
    date: 'May 2024',
    category: 'Mental Health',
    type: 'Mental Health',
    description: 'Thoughts on creating healthier conversations around mental health and making space for honest experiences.',
    fullContent: 'Detailed thoughts and reflections on creating healthier environments and open conversations surrounding mental wellness.',
    image: img2,
  },
  {
    id: 6,
    title: 'Growing Through Professional Experiences',
    date: 'April 2024',
    category: 'Professional Development',
    type: 'Professional',
    description: 'Lessons, experiences and reflections gathered throughout my professional and personal journey.',
    fullContent: 'Comprehensive guide and reflections on navigating professional development milestones and career growth.',
    image: img3,
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-detail-not-found">
        <h2>Post not found</h2>
        <Link to="/blog" className="back-link">Return to Blogs</Link>
      </div>
    );
  }

  return (
    <article className="blog-detail-page">
      <div className="blog-detail-container">
        <Link to="/blog" className="back-btn">
          <ArrowLeft size={16} />
          <span>Back to Blogs</span>
        </Link>

        <div className="detail-header">
          <span className="detail-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="detail-meta">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.type}</span>
          </div>
        </div>

        <div className="detail-image-wrapper">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="detail-content">
          <p className="lead-text">{post.description}</p>
          <p>{post.fullContent}</p>
          <p>
            Additional reflections, imagery, or interactive commentary can be seamlessly integrated into this detailed view to provide readers with an immersive reading experience.
          </p>
        </div>
      </div>

      
    </article>
  );
}