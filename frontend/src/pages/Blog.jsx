import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  MessageCircle,
  Calendar,
  FolderOpen,
  User,
  Rss,
  LogIn,
  Globe,
  X
} from 'lucide-react';

const posts = [
  {
    id: 1,
    month: 'SEP',
    day: '1',
    year: '2026',
    category: 'Uncategorized',
    title:
      'TMZbet-AUS: Quick-Hit Slots and Rapid Wins for the Modern Player',
    excerpt:
      'When you’re on the go and craving instant gratification, TMZbet-AUS delivers a streamlined experience that’s all about speed and excitement.',
    slug: 'tmzbet-aus'
  },
  {
    id: 2,
    month: 'SEP',
    day: '1',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Bizzo Casino Review: Quick-Hit Slots and Rapid Wins',
    excerpt:
      'For the adrenaline-driven player who loves a burst of action in just a few minutes, Bizzo Casino offers a playground that is hard to beat.',
    slug: 'bizzo-casino'
  },
  {
    id: 3,
    month: 'SEP',
    day: '1',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Betmen Mobile Casino: Quick Play, Instant Wins',
    excerpt:
      'Betmen’s mobile site is designed for players who crave speed and convenience. Short, high-intensity sessions are at the core of the experience.',
    slug: 'betmen-mobile-casino'
  },
  {
    id: 4,
    month: 'SEP',
    day: '1',
    year: '2026',
    category: 'Uncategorized',
    title:
      'NewLucky Casino: Quick Wins & Rapid Play for Fast-Paced Gamers',
    excerpt:
      'NewLucky Casino is built around instant gratification, offering a streamlined interface that lets players jump straight into the action.',
    slug: 'newlucky-casino'
  },
  {
    id: 5,
    month: 'SEP',
    day: '1',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Methmeth Casino: Your Rapid-Fire Slot & Table Adventure Awaits',
    excerpt:
      'Methmeth Casino has carved a niche for players who crave fast thrills and instant gratification with bright graphics and streamlined navigation.',
    slug: 'methmeth-casino'
  },
  {
    id: 6,
    month: 'SEP',
    day: '1',
    year: '2026',
    category: 'Uncategorized',
    title:
      'BassBet Casino: Quick-Hit Play pour le Joueur Moderne',
    excerpt:
      'Dans le monde trépidant du gambling en ligne, peu de plateformes capturent l’adrénaline d’une session courte et à haute intensité comme BassBet.',
    slug: 'bassbet-casino'
  },
  {
    id: 7,
    month: 'SEP',
    day: '1',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Avia Masters Game: Schnell-Feuer-Crash-Action direkt an Ihrer Hand',
    excerpt:
      'Das Avia Masters game hat sich unter Crash-Enthusiasten etabliert, die nach sofortigen Nervenkitzeln und schnellen Belohnungen suchen.',
    slug: 'avia-masters'
  },
  {
    id: 8,
    month: 'AUG',
    day: '31',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Woospin and the Art of Measured Gaming in Australia',
    excerpt:
      'For Australian players who value a steady approach over impulsive decisions, Woospin has emerged as a notable name in the local gaming scene.',
    slug: 'woospin'
  },
  {
    id: 9,
    month: 'AUG',
    day: '31',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Chicken Road: Juego de crash rápido para jugadores móviles',
    excerpt:
      'Chicken Road takes the simple concept of a crash game and transforms it into a fast-paced mobile experience.',
    slug: 'chicken-road'
  },
  {
    id: 10,
    month: 'AUG',
    day: '31',
    year: '2026',
    category: 'Uncategorized',
    title:
      'RocketPlay Casino: Quick-Hit Action for the Modern Gambler',
    excerpt:
      'RocketPlay Casino has carved a niche for players who crave rapid, adrenaline-driven gaming moments.',
    slug: 'rocketplay'
  },
  {
    id: 11,
    month: 'AUG',
    day: '28',
    year: '2026',
    category: 'Uncategorized',
    title:
      '1Win Casino: Exciting High-Intensity Play for Snelle Winsten',
    excerpt:
      'Quick Fire Gaming Experience Wanneer je inlogt op de 1Win Online Casino, valt meteen de directheid van de actie op.',
    slug: '1win-casino'
  },
  {
    id: 12,
    month: 'AUG',
    day: '27',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Ricky’s Edge – Leveraging Market Drift for Local High Rollers',
    excerpt:
      'Ricky Australia: Advanced Bankroll Tactics. Ricky’s Edge – Leveraging Market Drift voor Local High Rollers.',
    slug: 'rickys-edge'
  },
  {
    id: 13,
    month: 'AUG',
    day: '26',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Boomerang Bet Casino: Fast-Track Gaming for Quick Wins',
    excerpt:
      'When you’re looking for a gaming experience that’s all about adrenaline and instant gratification, Boomerang Bet offers a streamlined experience.',
    slug: 'boomerang-bet'
  },
  {
    id: 14,
    month: 'AUG',
    day: '26',
    year: '2026',
    category: 'Uncategorized',
    title:
      'AMPM Casino: A Quick-Hit Playground for Controlled Risk Players',
    excerpt:
      'A quick fire gaming experience designed around short sessions, simple navigation and a streamlined experience.',
    slug: 'ampm-casino'
  },
  {
    id: 15,
    month: 'AUG',
    day: '26',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Slot Bunny Casino: Quick-Fire Action for the Modern Gambler',
    excerpt:
      'Ever feel like you’re chasing the next spin or the next hand while your coffee cools? Slot Bunny Casino delivers fast-paced action.',
    slug: 'slot-bunny'
  },
  {
    id: 16,
    month: 'AUG',
    day: '26',
    year: '2026',
    category: 'Uncategorized',
    title:
      'Rabona Casino: Rychlé hraní pro hektického hráče',
    excerpt:
      'Rabona Casino si vybudovalo místo pro ty, kteří touží po rychlých, adrenalinově nabitých okamžicích.',
    slug: 'rabona-casino'
  }
];

const categories = [
  'All',
  'Mental Health',
  'Professional Development',
  'Uncategorized'
];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const [openSections, setOpenSections] = useState({
    recentPosts: true,
    recentComments: true,
    archives: true,
    categories: true,
    meta: true
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredPosts = posts.filter((post) => {
    const searchValue = search.trim().toLowerCase();

    const matchesSearch =
      !searchValue ||
      post.title.toLowerCase().includes(searchValue) ||
      post.excerpt.toLowerCase().includes(searchValue) ||
      post.category.toLowerCase().includes(searchValue);

    const matchesCategory =
      activeCategory === 'All' ||
      post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="blog-page">

      {/* =====================================
          HEADER
      ====================================== */}

      <header className="blog-header">
        <div className="blog-header-inner">

          <div className="blog-brand">

            <span className="brand-small">
              INSIGHTS & STORIES
            </span>

            <h1>
              Bl<span>o</span>g
            </h1>

            <p>
              Stay informed with the latest updates, perspectives,
              professional insights and stories.
            </p>

          </div>

          <nav className="blog-top-nav">

            <Link to="/blog" className="active">
              Blog
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

            <Link to="/post">
              Post
            </Link>

          </nav>

        </div>
      </header>


      {/* =====================================
          TOOLBAR
      ====================================== */}

      <section className="blog-toolbar">

        <div className="toolbar-inner">

          <div className="toolbar-left">

            <span className="article-count">
              {filteredPosts.length} Articles
            </span>

            <div className="vertical-line"></div>

            <span className="browse-text">
              Browse the latest stories
            </span>

          </div>

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}

          </div>

        </div>

      </section>


      {/* =====================================
          MAIN LAYOUT
      ====================================== */}

      <section className="blog-layout">

        {/* =================================
            POSTS
        ================================== */}

        <div className="posts-column">

          {filteredPosts.length > 0 ? (

            filteredPosts.map((post, index) => (

              <article
                className="blog-card"
                key={post.id}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >

                {/* DATE */}

                <div className="date-card">

                  <span>
                    {post.month}
                  </span>

                  <strong>
                    {post.day}
                  </strong>

                  <small>
                    {post.year}
                  </small>

                </div>


                {/* CONTENT */}

                <div className="post-content">

                  <div className="post-category">

                    <span></span>

                    {post.category}

                  </div>

                  <h2>
                    {post.title}
                  </h2>

                  <p>
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="read-more"
                  >
                    <span>READ MORE</span>

                    <ArrowRight size={16} />

                  </Link>

                </div>


                {/* ARROW */}

                <div className="post-arrow">
                  <ArrowRight size={18} />
                </div>

              </article>

            ))

          ) : (

            <div className="empty-results">

              <div className="empty-icon">
                <Search size={28} />
              </div>

              <h3>
                No articles found
              </h3>

              <p>
                Try another keyword or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All');
                }}
              >
                VIEW ALL ARTICLES
              </button>

            </div>

          )}

        </div>


        {/* =================================
            SIDEBAR
        ================================== */}

        <aside className="blog-sidebar">

          {/* SEARCH */}

          <div className="sidebar-search">

            <Search size={16} />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}

          </div>


          {/* RECENT POSTS */}

          <SidebarSection
            title="Recent Posts"
            icon={<Calendar size={16} />}
            open={openSections.recentPosts}
            onClick={() => toggleSection('recentPosts')}
          >

            <div className="sidebar-posts">

              {posts.slice(0, 5).map((post) => (

                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="sidebar-post"
                >

                  <span className="sidebar-post-date">
                    {post.month} {post.day}, {post.year}
                  </span>

                  <span className="sidebar-post-title">
                    {post.title}
                  </span>

                </Link>

              ))}

            </div>

          </SidebarSection>


          {/* RECENT COMMENTS */}

          <SidebarSection
            title="Recent Comments"
            icon={<MessageCircle size={16} />}
            open={openSections.recentComments}
            onClick={() => toggleSection('recentComments')}
          >

            <div className="sidebar-simple-list">

              <div className="no-comments">

                <MessageCircle size={14} />

                <span>
                  No recent comments.
                </span>

              </div>

            </div>

          </SidebarSection>


          {/* ARCHIVES */}

          <SidebarSection
            title="Archives"
            icon={<Calendar size={16} />}
            open={openSections.archives}
            onClick={() => toggleSection('archives')}
          >

            <div className="sidebar-simple-list">

              <button
                onClick={() => setSearch('September 2026')}
              >
                September 2026
              </button>

              <button
                onClick={() => setSearch('August 2026')}
              >
                August 2026
              </button>

            </div>

          </SidebarSection>


          {/* CATEGORIES */}

          <SidebarSection
            title="Categories"
            icon={<FolderOpen size={16} />}
            open={openSections.categories}
            onClick={() => toggleSection('categories')}
          >

            <div className="category-list">

              {categories.map((category) => {

                const count =
                  category === 'All'
                    ? posts.length
                    : posts.filter(
                        (post) =>
                          post.category === category
                      ).length;

                return (

                  <button
                    key={category}
                    className={
                      activeCategory === category
                        ? 'selected'
                        : ''
                    }
                    onClick={() =>
                      setActiveCategory(category)
                    }
                  >

                    <span>
                      {category}
                    </span>

                    <span className="category-number">
                      {count}
                    </span>

                  </button>

                );
              })}

            </div>

          </SidebarSection>


          {/* META */}

          <SidebarSection
            title="Meta"
            icon={<User size={16} />}
            open={openSections.meta}
            onClick={() => toggleSection('meta')}
          >

            <div className="meta-list">

              <a href="#login">
                <LogIn size={14} />
                <span>Log in</span>
              </a>

              <a href="#entries">
                <Rss size={14} />
                <span>Entries feed</span>
              </a>

              <a href="#comments">
                <MessageCircle size={14} />
                <span>Comments feed</span>
              </a>

              <a href="#wordpress">
                <Globe size={14} />
                <span>WordPress.org</span>
              </a>

            </div>

          </SidebarSection>

        </aside>

      </section>


      {/* =====================================
          PAGINATION
      ====================================== */}

      <footer className="blog-footer">

        <div className="pagination">

          <button className="pagination-active">
            1
          </button>

          <button>
            2
          </button>

          <button>
            3
          </button>

          <button>
            4
          </button>

          <button>
            5
          </button>

          <button>
            6
          </button>

          <button className="next-page">
            <span>Next</span>
            <ArrowRight size={15} />
          </button>

        </div>

      </footer>


      {/* =====================================
          STYLES
      ====================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =====================================
           COLOR SYSTEM
        ====================================== */

        :root {
          --cream: #faf6f0;
          --cream-dark: #f1ebe3;
          --brown: #28221f;
          --orange: #f29452;
          --orange-dark: #d87538;
          --warm-gray: #5c534e;
          --slate: #464b50;
          --light-border: rgba(40, 34, 31, 0.10);
          --white: #ffffff;
        }


        /* =====================================
           PAGE
        ====================================== */

        .blog-page {
          width: 100%;
          min-height: 100vh;

          background:
            linear-gradient(
              180deg,
              var(--cream) 0%,
              #f6f0e9 100%
            );

          color: var(--brown);

          padding-top: 80px;

          overflow-x: hidden;
        }


        /* =====================================
           HEADER
        ====================================== */

        .blog-header {
          padding: 70px 32px 25px;
        }

        .blog-header-inner {
          width: 100%;
          max-width: 1240px;

          margin: 0 auto;

          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 50px;

          padding: 38px 40px 32px;

          background: var(--cream);

          border: 1px solid var(--light-border);

          border-radius: 24px;

          box-shadow:
            0 20px 50px rgba(40, 34, 31, 0.06);

          position: relative;

          overflow: hidden;
        }

        .blog-header-inner::before {
          content: '';

          position: absolute;

          width: 230px;
          height: 230px;

          border-radius: 50%;

          background:
            rgba(242, 148, 82, 0.10);

          right: -100px;
          top: -120px;

          pointer-events: none;
        }


        /* =====================================
           BRAND
        ====================================== */

        .blog-brand {
          position: relative;
          z-index: 1;

          max-width: 720px;
        }

        .brand-small {
          display: inline-block;

          color: var(--orange-dark);

          background:
            rgba(242, 148, 82, 0.13);

          padding: 7px 12px;

          border-radius: 999px;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 2.5px;

          text-transform: uppercase;

          margin-bottom: 15px;
        }

        .blog-brand h1 {
          margin: 0;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size: clamp(58px, 7vw, 92px);

          line-height: 0.95;

          font-weight: 500;

          letter-spacing: -5px;

          color: var(--brown);
        }

        .blog-brand h1 span {
          color: var(--orange);
        }

        .blog-brand p {
          margin: 20px 0 0;

          max-width: 570px;

          color: var(--warm-gray);

          font-size: 14px;

          line-height: 1.8;
        }


        /* =====================================
           TOP NAV
        ====================================== */

        .blog-top-nav {
          position: relative;
          z-index: 2;

          display: flex;

          align-items: center;

          gap: 28px;

          padding-bottom: 7px;
        }

        .blog-top-nav a {
          position: relative;

          color: var(--warm-gray);

          text-decoration: none;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          padding: 9px 0;

          transition:
            color 0.3s ease;
        }

        .blog-top-nav a::after {
          content: '';

          position: absolute;

          left: 0;
          bottom: 0;

          width: 0;
          height: 2px;

          background: var(--orange);

          transition:
            width 0.3s ease;
        }

        .blog-top-nav a:hover,
        .blog-top-nav a.active {
          color: var(--orange-dark);
        }

        .blog-top-nav a:hover::after,
        .blog-top-nav a.active::after {
          width: 100%;
        }


        /* =====================================
           TOOLBAR
        ====================================== */

        .blog-toolbar {
          padding: 22px 32px 30px;
        }

        .toolbar-inner {
          width: 100%;
          max-width: 1240px;

          margin: 0 auto;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 30px;

          padding-top: 20px;

          border-top:
            1px solid var(--light-border);
        }

        .toolbar-left {
          display: flex;

          align-items: center;

          gap: 15px;
        }

        .article-count {
          color: var(--brown);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.7px;

          text-transform: uppercase;
        }

        .vertical-line {
          width: 1px;
          height: 18px;

          background:
            rgba(40, 34, 31, 0.18);
        }

        .browse-text {
          color: #80766f;

          font-size: 12px;
        }


        /* =====================================
           SEARCH
        ====================================== */

        .search-box,
        .sidebar-search {
          height: 50px;

          display: flex;

          align-items: center;

          gap: 10px;

          background:
            rgba(255, 255, 255, 0.72);

          border:
            1px solid var(--light-border);

          border-radius: 999px;

          padding:
            0 15px 0 17px;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .search-box {
          width: 310px;
        }

        .search-box:focus-within,
        .sidebar-search:focus-within {
          background: #ffffff;

          border-color:
            rgba(242, 148, 82, 0.65);

          box-shadow:
            0 12px 30px
            rgba(242, 148, 82, 0.10);
        }

        .search-box svg,
        .sidebar-search svg {
          color: var(--warm-gray);

          flex-shrink: 0;
        }

        .search-box input,
        .sidebar-search input {
          width: 100%;

          border: 0;
          outline: 0;

          background: transparent;

          color: var(--brown);

          font-size: 13px;
        }

        .search-box input::placeholder,
        .sidebar-search input::placeholder {
          color: #958b84;
        }

        .clear-search,
        .sidebar-search button {
          border: 0;

          background: transparent;

          color: #8b817a;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

          padding: 4px;

          transition:
            color 0.2s ease;
        }

        .clear-search:hover,
        .sidebar-search button:hover {
          color: var(--orange-dark);
        }


        /* =====================================
           MAIN LAYOUT
        ====================================== */

        .blog-layout {
          width: 100%;
          max-width: 1240px;

          margin: 0 auto;

          padding:
            0 32px 90px;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr) 310px;

          gap: 45px;

          align-items: start;
        }


        /* =====================================
           POSTS
        ====================================== */

        .posts-column {
          display: flex;

          flex-direction: column;

          gap: 20px;
        }

        .blog-card {
          position: relative;

          display: grid;

          grid-template-columns:
            100px minmax(0, 1fr) 45px;

          gap: 25px;

          align-items: center;

          min-height: 195px;

          padding:
            23px 24px 23px 20px;

          background:
            rgba(255, 255, 255, 0.62);

          border:
            1px solid var(--light-border);

          border-radius: 20px;

          box-shadow:
            0 14px 35px
            rgba(40, 34, 31, 0.045);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;

          animation:
            blogCardIn 0.55s ease both;
        }

        .blog-card:hover {
          transform: translateY(-5px);

          background:
            rgba(255, 255, 255, 0.9);

          border-color:
            rgba(242, 148, 82, 0.35);

          box-shadow:
            0 24px 45px
            rgba(40, 34, 31, 0.09);
        }

        @keyframes blogCardIn {

          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* =====================================
           DATE
        ====================================== */

        .date-card {
          width: 100px;
          height: 125px;

          border-radius: 16px;

          background:
            var(--brown);

          color: #ffffff;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          position: relative;

          overflow: hidden;

          transition:
            transform 0.35s ease;
        }

        .blog-card:hover .date-card {
          transform: translateY(-3px);
        }

        .date-card::before {
          content: '';

          position: absolute;

          width: 100px;
          height: 100px;

          border-radius: 50%;

          background:
            rgba(242, 148, 82, 0.17);

          right: -50px;
          bottom: -50px;
        }

        .date-card::after {
          content: '';

          position: absolute;

          width: 5px;
          height: 45px;

          background:
            var(--orange);

          left: 0;
          top: 0;
        }

        .date-card span,
        .date-card strong,
        .date-card small {
          position: relative;
          z-index: 2;
        }

        .date-card span {
          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;

          opacity: 0.7;
        }

        .date-card strong {
          margin: 8px 0 5px;

          font-family:
            Georgia,
            serif;

          font-size: 38px;

          line-height: 1;

          font-weight: 500;

          color: var(--orange);
        }

        .date-card small {
          font-size: 9px;

          letter-spacing: 1.2px;

          opacity: 0.65;
        }


        /* =====================================
           POST CONTENT
        ====================================== */

        .post-content {
          min-width: 0;
        }

        .post-category {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 12px;

          color:
            var(--orange-dark);

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 1.5px;

          text-transform: uppercase;
        }

        .post-category span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background:
            var(--orange);
        }

        .post-content h2 {
          margin:
            0 0 11px;

          font-family:
            Georgia,
            'Times New Roman',
            serif;

          font-size:
            clamp(21px, 2.3vw, 30px);

          line-height: 1.2;

          letter-spacing: -0.8px;

          font-weight: 600;

          color: var(--brown);
        }

        .post-content p {
          margin:
            0 0 16px;

          color:
            var(--warm-gray);

          font-size: 13px;

          line-height: 1.75;

          display: -webkit-box;

          -webkit-line-clamp: 2;

          -webkit-box-orient: vertical;

          overflow: hidden;
        }


        /* =====================================
           READ MORE
        ====================================== */

        .read-more {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color:
            var(--orange-dark);

          text-decoration: none;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1.8px;

          transition:
            gap 0.3s ease,
            color 0.3s ease;
        }

        .read-more:hover {
          gap: 13px;

          color:
            var(--brown);
        }


        /* =====================================
           CARD ARROW
        ====================================== */

        .post-arrow {
          width: 45px;
          height: 45px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            rgba(242, 148, 82, 0.10);

          color:
            var(--orange-dark);

          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease;
        }

        .blog-card:hover .post-arrow {
          background:
            var(--orange);

          color:
            var(--brown);

          transform:
            translateX(4px)
            rotate(-3deg);
        }


        /* =====================================
           SIDEBAR
        ====================================== */

        .blog-sidebar {
          position: sticky;

          top: 105px;

          display: flex;

          flex-direction: column;

          gap: 15px;
        }

        .sidebar-search {
          width: 100%;
          margin-bottom: 4px;
        }


        /* =====================================
           SIDEBAR SECTIONS
        ====================================== */

        .sidebar-section {
          background:
            rgba(255, 255, 255, 0.58);

          border:
            1px solid var(--light-border);

          border-radius: 17px;

          overflow: hidden;

          box-shadow:
            0 10px 25px
            rgba(40, 34, 31, 0.025);
        }

        .sidebar-heading {
          width: 100%;

          min-height: 58px;

          border: 0;

          background: transparent;

          padding:
            0 17px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          color:
            var(--brown);

          cursor: pointer;

          transition:
            background 0.25s ease;
        }

        .sidebar-heading:hover {
          background:
            rgba(242, 148, 82, 0.05);
        }

        .sidebar-heading-left {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .sidebar-heading-left svg {
          color:
            var(--orange-dark);
        }

        .sidebar-heading-left span {
          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.6px;

          text-transform: uppercase;
        }

        .sidebar-heading > svg {
          color:
            #8a817a;
        }

        .sidebar-content {
          border-top:
            1px solid var(--light-border);

          padding:
            12px 17px 16px;
        }


        /* =====================================
           SIDEBAR POSTS
        ====================================== */

        .sidebar-posts {
          display: flex;

          flex-direction: column;
        }

        .sidebar-post {
          display: flex;

          flex-direction: column;

          gap: 4px;

          padding:
            11px 0;

          border-bottom:
            1px solid rgba(40, 34, 31, 0.07);

          color:
            var(--warm-gray);

          text-decoration: none;

          transition:
            color 0.25s ease,
            padding-left 0.25s ease;
        }

        .sidebar-post:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .sidebar-post:hover {
          color:
            var(--orange-dark);

          padding-left: 4px;
        }

        .sidebar-post-date {
          color:
            var(--orange-dark);

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 1.4px;

          text-transform: uppercase;
        }

        .sidebar-post-title {
          font-family:
            Georgia,
            serif;

          font-size: 12px;

          line-height: 1.5;
        }


        /* =====================================
           SIMPLE SIDEBAR
        ====================================== */

        .sidebar-simple-list {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .no-comments {
          display: flex;

          align-items: center;

          gap: 8px;

          padding: 7px 0;

          color:
            var(--warm-gray);

          font-size: 12px;
        }

        .no-comments svg {
          color:
            var(--orange-dark);
        }

        .sidebar-simple-list button {
          text-align: left;

          border: 0;

          background: transparent;

          padding: 8px 0;

          color:
            var(--warm-gray);

          font-size: 12px;

          cursor: pointer;

          transition:
            color 0.25s ease,
            padding-left 0.25s ease;
        }

        .sidebar-simple-list button:hover {
          color:
            var(--orange-dark);

          padding-left: 4px;
        }


        /* =====================================
           CATEGORIES
        ====================================== */

        .category-list {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .category-list button {
          width: 100%;

          border: 0;

          background: transparent;

          padding:
            9px 9px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          border-radius: 9px;

          color:
            var(--warm-gray);

          font-size: 12px;

          cursor: pointer;

          text-align: left;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .category-list button:hover {
          background:
            rgba(242, 148, 82, 0.07);

          color:
            var(--orange-dark);

          transform:
            translateX(2px);
        }

        .category-list button.selected {
          background:
            rgba(242, 148, 82, 0.13);

          color:
            var(--orange-dark);

          font-weight: 700;
        }

        .category-number {
          min-width: 22px;

          height: 22px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            rgba(40, 34, 31, 0.06);

          font-size: 9px;

          color:
            var(--warm-gray);
        }

        .category-list button.selected .category-number {
          background:
            var(--orange);

          color:
            var(--brown);
        }


        /* =====================================
           META
        ====================================== */

        .meta-list {
          display: flex;

          flex-direction: column;

          gap: 2px;
        }

        .meta-list a {
          display: flex;

          align-items: center;

          gap: 9px;

          padding:
            8px 0;

          color:
            var(--warm-gray);

          text-decoration: none;

          font-size: 12px;

          transition:
            color 0.25s ease,
            padding-left 0.25s ease;
        }

        .meta-list a:hover {
          color:
            var(--orange-dark);

          padding-left: 4px;
        }

        .meta-list svg {
          color:
            var(--orange-dark);
        }


        /* =====================================
           EMPTY RESULTS
        ====================================== */

        .empty-results {
          min-height: 350px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding: 40px;

          border-radius: 20px;

          background:
            rgba(255, 255, 255, 0.65);

          border:
            1px solid var(--light-border);
        }

        .empty-icon {
          width: 58px;
          height: 58px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            rgba(242, 148, 82, 0.12);

          color:
            var(--orange-dark);
        }

        .empty-results h3 {
          margin:
            18px 0 7px;

          font-family:
            Georgia,
            serif;

          font-size: 27px;

          color:
            var(--brown);
        }

        .empty-results p {
          margin: 0;

          color:
            var(--warm-gray);

          font-size: 13px;
        }

        .empty-results button {
          margin-top: 22px;

          border: 0;

          background:
            var(--brown);

          color:
            #ffffff;

          padding:
            13px 20px;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 1.5px;

          cursor: pointer;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .empty-results button:hover {
          background:
            var(--orange);

          color:
            var(--brown);

          transform:
            translateY(-2px);
        }


        /* =====================================
           FOOTER
        ====================================== */

        .blog-footer {
          width: 100%;

          padding:
            0 32px 100px;
        }

        .pagination {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          flex-wrap: wrap;
        }

        .pagination button {
          width: 40px;
          height: 40px;

          border: 0;

          border-radius: 50%;

          background: transparent;

          color:
            var(--warm-gray);

          cursor: pointer;

          font-size: 10px;

          font-weight: 700;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .pagination button:hover {
          background:
            rgba(242, 148, 82, 0.12);

          color:
            var(--orange-dark);

          transform:
            translateY(-2px);
        }

        .pagination .pagination-active {
          background:
            var(--brown);

          color:
            #ffffff;
        }

        .pagination .next-page {
          width: auto;

          border-radius: 999px;

          padding:
            0 18px;

          display: flex;

          align-items: center;

          gap: 8px;

          margin-left: 10px;

          background:
            rgba(242, 148, 82, 0.13);

          color:
            var(--orange-dark);
        }


        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 1050px) {

          .blog-layout {
            grid-template-columns: 1fr;
          }

          .blog-sidebar {
            position: static;

            display: grid;

            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            align-items: start;
          }

          .sidebar-search {
            grid-column: 1 / -1;
          }

        }


        /* =====================================
           TABLET / SMALL LAPTOP
        ====================================== */

        @media (max-width: 800px) {

          .blog-header {
            padding:
              55px 22px 20px;
          }

          .blog-header-inner {
            padding:
              32px 28px 28px;

            flex-direction: column;

            align-items: flex-start;

            gap: 28px;
          }

          .blog-top-nav {
            width: 100%;

            padding-top: 18px;

            border-top:
              1px solid var(--light-border);
          }

          .toolbar-inner {
            align-items: flex-start;

            flex-direction: column;
          }

          .search-box {
            width: 100%;
          }

          .blog-layout {
            padding-left: 22px;
            padding-right: 22px;
          }

        }


        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 600px) {

          .blog-page {
            padding-top: 55px;
          }

          .blog-header {
            padding:
              40px 15px 15px;
          }

          .blog-header-inner {
            padding:
              28px 21px 23px;

            border-radius: 20px;
          }

          .brand-small {
            font-size: 8px;

            letter-spacing: 2px;

            padding:
              6px 10px;
          }

          .blog-brand h1 {
            font-size: 68px;

            letter-spacing: -4px;
          }

          .blog-brand p {
            margin-top: 16px;

            font-size: 13px;

            line-height: 1.7;
          }

          .blog-top-nav {
            gap: 21px;
          }

          .blog-top-nav a {
            font-size: 9px;

            letter-spacing: 1.4px;
          }


          /* TOOLBAR */

          .blog-toolbar {
            padding:
              16px 15px 24px;
          }

          .toolbar-inner {
            padding-top: 17px;

            gap: 14px;
          }

          .toolbar-left {
            width: 100%;

            justify-content: space-between;
          }

          .browse-text {
            display: none;
          }

          .article-count {
            font-size: 9px;
          }

          .search-box {
            height: 48px;
          }


          /* LAYOUT */

          .blog-layout {
            padding:
              0 13px 65px;

            gap: 25px;
          }


          /* CARDS */

          .blog-card {
            grid-template-columns:
              62px minmax(0, 1fr);

            gap: 15px;

            padding:
              14px;

            border-radius: 17px;

            min-height: 0;
          }

          .date-card {
            width: 62px;
            height: 92px;

            border-radius: 13px;
          }

          .date-card strong {
            font-size: 27px;
          }

          .date-card span {
            font-size: 8px;
          }

          .date-card small {
            font-size: 8px;
          }

          .post-content h2 {
            font-size: 19px;

            line-height: 1.3;

            letter-spacing: -0.4px;
          }

          .post-category {
            margin-bottom: 8px;

            font-size: 7px;
          }

          .post-content p {
            font-size: 12px;

            line-height: 1.65;

            -webkit-line-clamp: 3;

            margin-bottom: 13px;
          }

          .post-arrow {
            display: none;
          }

          .read-more {
            font-size: 8px;

            letter-spacing: 1.4px;
          }


          /* SIDEBAR */

          .blog-sidebar {
            display: flex;

            flex-direction: column;

            gap: 10px;
          }

          .sidebar-section {
            border-radius: 15px;
          }

          .sidebar-heading {
            min-height: 52px;
          }


          /* FOOTER */

          .blog-footer {
            padding:
              0 15px 70px;
          }

          .pagination {
            gap: 4px;
          }

          .pagination button {
            width: 36px;
            height: 36px;
          }

          .pagination .next-page {
            padding:
              0 14px;

            margin-left: 4px;
          }

        }


        /* =====================================
           VERY SMALL MOBILE
        ====================================== */

        @media (max-width: 390px) {

          .blog-header {
            padding:
              35px 11px 12px;
          }

          .blog-header-inner {
            padding:
              25px 17px 21px;
          }

          .blog-brand h1 {
            font-size: 58px;

            letter-spacing: -3px;
          }

          .blog-brand p {
            font-size: 12px;
          }

          .blog-top-nav {
            gap: 17px;
          }

          .blog-top-nav a {
            font-size: 8px;
          }

          .blog-toolbar {
            padding-left: 11px;
            padding-right: 11px;
          }

          .blog-layout {
            padding-left: 10px;
            padding-right: 10px;
          }

          .blog-card {
            grid-template-columns:
              54px minmax(0, 1fr);

            gap: 11px;

            padding: 11px;
          }

          .date-card {
            width: 54px;
            height: 82px;
          }

          .date-card strong {
            font-size: 24px;
          }

          .post-content h2 {
            font-size: 17px;
          }

          .post-content p {
            font-size: 11px;
          }

          .post-category {
            font-size: 6.5px;
          }

        }


        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (prefers-reduced-motion: reduce) {

          .blog-card,
          .blog-card *,
          .sidebar-post,
          .category-list button,
          .pagination button,
          .read-more {
            animation: none !important;
            transition: none !important;
          }

        }

      `}</style>

    </main>
  );
}


/* =========================================
   SIDEBAR SECTION
========================================= */

function SidebarSection({
  title,
  icon,
  open,
  onClick,
  children
}) {
  return (
    <div className="sidebar-section">

      <button
        type="button"
        className="sidebar-heading"
        onClick={onClick}
        aria-expanded={open}
      >

        <div className="sidebar-heading-left">

          {icon}

          <span>
            {title}
          </span>

        </div>

        {open ? (
          <ChevronUp size={16} />
        ) : (
          <ChevronDown size={16} />
        )}

      </button>

      {open && (
        <div className="sidebar-content">
          {children}
        </div>
      )}

    </div>
  );
}