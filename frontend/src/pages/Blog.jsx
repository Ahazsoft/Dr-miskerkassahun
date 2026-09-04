import React, { useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.JPG';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img7 from '../assets/images/img7.jpg';
import '../styles/blog.css';
export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: 'Bridging Hope and Healthcare',
      date: 'July 29, 2024',
      category: 'Professional Development',
      type: 'Magazine',
      description:
        'Exploring the connection between healthcare, hope, community and the importance of creating meaningful change.',
      image: img7,
      action: 'VIEW MAGAZINE',
    },
    {
      id: 2,
      title: 'Healthcare Everything Magazine',
      date: 'July 29, 2024',
      category: 'Mental Health',
      type: 'Magazine',
      description:
        'A conversation around healthcare, personal growth, mental wellbeing and the experiences that shape our professional journey.',
      image: img4,
      action: 'VIEW MAGAZINE',
    },
    {
      id: 3,
      title: 'Misker Kassahun: Bridging Hope and Healthcare',
      date: 'July 29, 2024',
      category: 'Mental Health',
      type: 'Featured',
      description:
        'A closer look at my journey, healthcare advocacy and the work of building healthier and stronger communities.',
      image: img3,
      action: 'VISIT WEBSITE',
    },
    {
      id: 4,
      title: 'Burn Out',
      date: 'May 21, 2024',
      category: 'Mental Health',
      type: 'Personal',
      description:
        'Brace yourself, this is going to be long and personal. I am sharing it in hopes it might help someone struggling.',
      image: img1,
      action: 'READ MORE',
    },
    {
      id: 5,
      title: 'The Importance of Mental Wellbeing',
      date: 'May 2024',
      category: 'Mental Health',
      type: 'Mental Health',
      description:
        'Thoughts on creating healthier conversations around mental health and making space for honest experiences.',
      image: img2,
      action: 'READ MORE',
    },
    {
      id: 6,
      title: 'Growing Through Professional Experiences',
      date: 'April 2024',
      category: 'Professional Development',
      type: 'Professional',
      description:
        'Lessons, experiences and reflections gathered throughout my professional and personal journey.',
      image: img3,
      action: 'READ MORE',
    },
  ];

  // Independent search filtering logic
  const search = searchTerm.trim().toLowerCase();
  const searchResults = posts.filter((post) => {
    if (!search) return false;
    return (
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search) ||
      post.type.toLowerCase().includes(search) ||
      post.date.toLowerCase().includes(search)
    );
  });

  const isSearching = search.length > 0;

  // Static layout splits when not searching
  const featuredPosts = posts.slice(0, 3);
  const remainingPosts = posts.slice(3);

  return (
    <section className="blog-page">
      <div className="blog-container">

        <div className="blog-hero">
          <div className="blog-heading-area">
            <div className="section-title-group">
              <span className="section-kicker">INSIGHTS</span>
              <h1 className="section-main-title">My Blogs</h1>
            </div>
            <p>
              Thoughts, experiences and stories from my journey
              through healthcare, public health, leadership and life.
            </p>
          </div>

          <Link to="/blog/all" className="custom-action-btn">
            <span className="custom-btn-text">VIEW ALL BLOGS</span>
            <span className="custom-btn-box">
              <ArrowUpRight size={18} strokeWidth={2.2} />
            </span>
          </Link>
        </div>

        {/* Hide featured grid dynamically when user is actively searching */}
        {!isSearching && (
          <>
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <article
                  className="featured-card"
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="image-overlay"></div>
                    <span className="category-badge">{post.category}</span>
                  </div>

                  <div className="card-content">
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <div className="card-meta">
                      <span><i>•</i>{post.type}</span>
                      <span><i>•</i>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="blog-divider"></div>
          </>
        )}

        <div className="all-posts-layout" id="all-blog-posts">
          <main className="posts-area">

            <div className="section-heading">
              <div className="section-title-group">
                <span className="section-kicker">EXPLORE</span>
                <h2 className="section-main-title">More from the Blog</h2>
              </div>
              <span className="post-count">
                {isSearching ? `${searchResults.length} RESULTS` : `${remainingPosts.length} POSTS`}
              </span>
            </div>

            {/* Render Search Results if searching, otherwise render normal remaining posts */}
            {isSearching ? (
              <div className="posts-grid">
                {searchResults.map((post) => (
                  <article className="post-card" key={post.id}>
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <span className="post-category">{post.category}</span>
                    </div>

                    <div className="post-content">
                      <div className="post-date">{post.date}</div>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>

                      <button 
                        className="custom-action-btn read-more-btn"
                        onClick={() => navigate(`/blog/${post.id}`)}
                      >
                        <span className="custom-btn-text">{post.action}</span>
                        <span className="custom-btn-box">
                          <ArrowUpRight size={17} strokeWidth={2.2} />
                        </span>
                      </button>
                    </div>
                  </article>
                ))}

                {searchResults.length === 0 && (
                  <div className="no-results">
                    <h3>No posts found</h3>
                    <p>Try searching for another keyword or date.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="posts-grid">
                {remainingPosts.map((post) => (
                  <article className="post-card" key={post.id}>
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <span className="post-category">{post.category}</span>
                    </div>

                    <div className="post-content">
                      <div className="post-date">{post.date}</div>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>

                      <button 
                        className="custom-action-btn read-more-btn"
                        onClick={() => navigate(`/blog/${post.id}`)}
                      >
                        <span className="custom-btn-text">{post.action}</span>
                        <span className="custom-btn-box">
                          <ArrowUpRight size={17} strokeWidth={2.2} />
                        </span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </main>

          <aside className="blog-sidebar">

            <div className="sidebar-widget search-widget">
              <div className="widget-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Search</span>
                {isSearching && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: '#f49d56', display: 'flex', alignItems: 'center', gap: '2px' }}
                  >
                    <X size={14} /> Clear
                  </button>
                )}
              </div>
              <div className="search-box">
                <Search size={18} strokeWidth={1.8} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="sidebar-widget">
              <div className="widget-title">Recent Posts</div>
              <div className="recent-posts">
                {posts.slice(0, 4).map((post) => (
                  <div
                    className="recent-post"
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    <div className="recent-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div>
                      <h4>{post.title}</h4>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-widget">
              <div className="widget-title">Archives</div>
              <div className="archive-list">
                <button onClick={() => setSearchTerm('2024')}>
                  2024 <span>04</span>
                </button>
                <button onClick={() => setSearchTerm('2023')}>
                  2023 <span>08</span>
                </button>
                <button onClick={() => setSearchTerm('2022')}>
                  2022 <span>05</span>
                </button>
              </div>
            </div>

          </aside>
        </div>
      </div>

     
    </section>
  );
}