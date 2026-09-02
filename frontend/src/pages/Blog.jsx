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
  Globe
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
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === 'All' ||
      post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="blog-page">

      {/* ================================
          TOP NAVIGATION
      ================================= */}

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
              Stay informed with the latest updates and insights.
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


      {/* ================================
          SEARCH BAR
      ================================= */}

      <section className="blog-toolbar">

        <div className="toolbar-inner">

          <div className="toolbar-left">

            <span className="article-count">
              {filteredPosts.length} Articles
            </span>

            <div className="vertical-line"></div>

            <span className="browse-text">
              Browse our latest posts
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
              <button onClick={() => setSearch('')}>
                ×
              </button>
            )}

          </div>

        </div>

      </section>


      {/* ================================
          MAIN LAYOUT
      ================================= */}

      <section className="blog-layout">

        {/* ================================
            POSTS
        ================================= */}

        <div className="posts-column">

          {filteredPosts.length > 0 ? (

            filteredPosts.map((post, index) => (

              <article
                className="blog-card"
                key={post.id}
                style={{
                  animationDelay: `${index * 0.06}s`
                }}
              >

                {/* Date */}

                <div className="date-card">

                  <span>{post.month}</span>

                  <strong>{post.day}</strong>

                  <small>{post.year}</small>

                </div>


                {/* Content */}

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
                    READ MORE

                    <ArrowRight size={16} />

                  </Link>

                </div>


                <div className="post-arrow">
                  <ArrowRight size={19} />
                </div>

              </article>

            ))

          ) : (

            <div className="empty-results">

              <Search size={35} />

              <h3>
                No articles found
              </h3>

              <p>
                Try searching for another article.
              </p>

            </div>

          )}

        </div>


        {/* ================================
            SIDEBAR
        ================================= */}

        <aside className="blog-sidebar">


          {/* SEARCH */}

          <div className="sidebar-search">

            <Search size={17} />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

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
                    {post.month} {post.day}
                  </span>

                  <span>
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

              <div>
                <MessageCircle size={13} />
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

              <button>
                September 2026
              </button>

              <button>
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

              {categories.map((category) => (

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
                    {category === 'All'
                      ? posts.length
                      : posts.filter(
                          (p) => p.category === category
                        ).length}
                  </span>

                </button>

              ))}

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
                Log in
              </a>

              <a href="#entries">
                <Rss size={14} />
                Entries feed
              </a>

              <a href="#comments">
                <MessageCircle size={14} />
                Comments feed
              </a>

              <a href="#wordpress">
                <Globe size={14} />
                WordPress.org
              </a>

            </div>

          </SidebarSection>

        </aside>

      </section>


      {/* ================================
          FOOTER PAGINATION
      ================================= */}

      <div className="blog-footer">

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
            Next
            <ArrowRight size={16} />
          </button>

        </div>

      </div>


      {/* ================================
          STYLES
      ================================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .blog-page {
          width: 100%;
          min-height: 100vh;
          background: #faf6f0;
          color: #28221f;
          padding-top: 80px;
          overflow-x: hidden;
        }


        /* ================================
           HEADER
        ================================= */

        .blog-header {
          padding: 65px 25px 30px;
        }

        .blog-header-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }

        .blog-brand {
          text-align: left;
        }

        .brand-small {
          display: block;
          color: #f29452;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }

        .blog-brand h1 {
          margin: 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(52px, 7vw, 76px);
          line-height: .9;
          letter-spacing: -3px;
          color: #28221f;
        }

        .blog-brand h1 span {
          color: #f29452;
        }

        .blog-brand p {
          margin: 17px 0 0;
          color: #756b64;
          font-size: 14px;
        }


        /* ================================
           TOP NAV
        ================================= */

        .blog-top-nav {
          display: flex;
          align-items: center;
          gap: 34px;
          padding-bottom: 6px;
        }

        .blog-top-nav a {
          position: relative;
          color: #756b64;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color .25s ease;
        }

        .blog-top-nav a:hover,
        .blog-top-nav a.active {
          color: #f29452;
        }

        .blog-top-nav a.active::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 100%;
          height: 2px;
          background: #f29452;
        }


        /* ================================
           TOOLBAR
        ================================= */

        .blog-toolbar {
          padding: 20px 25px 35px;
        }

        .toolbar-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          border-top: 1px solid rgba(40,34,31,.1);
          padding-top: 20px;
        }

        .toolbar-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .article-count {
          color: #28221f;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .vertical-line {
          width: 1px;
          height: 18px;
          background: rgba(40,34,31,.15);
        }

        .browse-text {
          color: #938982;
          font-size: 12px;
        }


        /* SEARCH */

        .search-box,
        .sidebar-search {
          height: 45px;
          display: flex;
          align-items: center;
          gap: 9px;
          background: white;
          border: 1px solid rgba(40,34,31,.12);
          border-radius: 5px;
          padding: 0 13px;
          transition: .25s ease;
        }

        .search-box {
          width: 260px;
        }

        .search-box:focus-within,
        .sidebar-search:focus-within {
          border-color: #f29452;
          box-shadow: 0 7px 25px rgba(242,148,82,.1);
        }

        .search-box svg,
        .sidebar-search svg {
          color: #8b817a;
          flex-shrink: 0;
        }

        .search-box input,
        .sidebar-search input {
          border: 0;
          outline: 0;
          background: transparent;
          width: 100%;
          color: #28221f;
          font-size: 12px;
        }

        .search-box button {
          border: 0;
          background: transparent;
          color: #756b64;
          cursor: pointer;
          font-size: 18px;
        }


        /* ================================
           MAIN LAYOUT
        ================================= */

        .blog-layout {
          width: 100%;
          max-width: 1180px;
          margin: auto;
          padding: 0 25px 80px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 285px;
          gap: 45px;
          align-items: start;
        }


        /* ================================
           POSTS
        ================================= */

        .posts-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .blog-card {
          position: relative;
          min-height: 170px;
          display: grid;
          grid-template-columns: 84px minmax(0,1fr) 42px;
          gap: 27px;
          align-items: center;
          padding: 20px 23px;
          background: white;
          border: 1px solid rgba(40,34,31,.06);
          border-radius: 9px;
          box-shadow: 0 7px 28px rgba(40,34,31,.035);
          animation: blogCardIn .55s ease both;
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .blog-card:hover {
          transform: translateY(-3px);
          border-color: rgba(242,148,82,.2);
          box-shadow: 0 15px 35px rgba(40,34,31,.08);
        }

        @keyframes blogCardIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* DATE */

        .date-card {
          width: 84px;
          height: 105px;
          border-radius: 7px;
          background: #28221f;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .date-card::after {
          content: '';
          position: absolute;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #f29452;
          opacity: .18;
          bottom: -24px;
          right: -20px;
        }

        .date-card span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .date-card strong {
          color: #f29452;
          font-size: 32px;
          line-height: 1;
          margin: 5px 0;
        }

        .date-card small {
          font-size: 9px;
          opacity: .7;
        }


        /* POST */

        .post-content {
          min-width: 0;
        }

        .post-category {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 9px;
          border-radius: 20px;
          background: rgba(242,148,82,.1);
          color: #f29452;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .7px;
          margin-bottom: 8px;
        }

        .post-category span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f29452;
        }

        .post-content h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 20px;
          line-height: 1.3;
          margin: 0 0 8px;
          color: #28221f;
        }

        .post-content p {
          color: #756b64;
          font-size: 12px;
          line-height: 1.6;
          margin: 0 0 11px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #f29452;
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.2px;
          transition: gap .25s ease;
        }

        .read-more:hover {
          gap: 12px;
        }


        /* ARROW */

        .post-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #faf6f0;
          color: #f29452;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: .3s ease;
        }

        .blog-card:hover .post-arrow {
          background: #f29452;
          color: white;
          transform: translateX(3px);
        }


        /* ================================
           SIDEBAR
        ================================= */

        .blog-sidebar {
          position: sticky;
          top: 105px;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .sidebar-search {
          width: 100%;
          margin-bottom: 8px;
        }


        /* SIDEBAR SECTION */

        .sidebar-section {
          background: white;
          border: 1px solid rgba(40,34,31,.07);
          border-radius: 7px;
          overflow: hidden;
        }

        .sidebar-heading {
          width: 100%;
          min-height: 52px;
          border: 0;
          background: white;
          padding: 0 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #28221f;
          cursor: pointer;
        }

        .sidebar-heading-left {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .sidebar-heading-left svg {
          color: #f29452;
        }

        .sidebar-heading span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .sidebar-heading > svg {
          color: #9a9089;
        }

        .sidebar-content {
          border-top: 1px solid rgba(40,34,31,.07);
          padding: 13px 15px 15px;
        }


        /* RECENT POSTS */

        .sidebar-posts {
          display: flex;
          flex-direction: column;
        }

        .sidebar-post {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(40,34,31,.07);
          color: #5c534e;
          text-decoration: none;
        }

        .sidebar-post:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        .sidebar-post:hover {
          color: #f29452;
        }

        .sidebar-post-date {
          color: #f29452;
          font-size: 8px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .sidebar-post > span:last-child {
          font-family: Georgia, serif;
          font-size: 11px;
          line-height: 1.45;
        }


        /* SIMPLE LIST */

        .sidebar-simple-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sidebar-simple-list div {
          display: flex;
          gap: 7px;
          align-items: center;
          color: #756b64;
          font-size: 11px;
          padding: 5px 0;
        }

        .sidebar-simple-list svg {
          color: #f29452;
        }

        .sidebar-simple-list button {
          text-align: left;
          border: 0;
          background: transparent;
          padding: 7px 0;
          color: #756b64;
          font-size: 11px;
          cursor: pointer;
        }

        .sidebar-simple-list button:hover {
          color: #f29452;
        }


        /* CATEGORIES */

        .category-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .category-list button {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 9px 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #756b64;
          font-size: 11px;
          cursor: pointer;
          border-radius: 4px;
          text-align: left;
          transition: .2s ease;
        }

        .category-list button:hover {
          background: #faf6f0;
          color: #f29452;
        }

        .category-list button.selected {
          background: rgba(242,148,82,.1);
          color: #f29452;
          font-weight: 700;
        }

        .category-number {
          font-size: 9px;
          opacity: .55;
        }


        /* META */

        .meta-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .meta-list a {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 8px 0;
          color: #756b64;
          text-decoration: none;
          font-size: 11px;
          transition: .2s ease;
        }

        .meta-list a:hover {
          color: #f29452;
          padding-left: 4px;
        }

        .meta-list svg {
          color: #f29452;
        }


        /* ================================
           EMPTY
        ================================= */

        .empty-results {
          min-height: 300px;
          background: white;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .empty-results svg {
          color: #f29452;
        }

        .empty-results h3 {
          font-family: Georgia, serif;
          margin: 15px 0 5px;
        }

        .empty-results p {
          color: #756b64;
          font-size: 12px;
        }


        /* ================================
           FOOTER
        ================================= */

        .blog-footer {
          padding: 0 25px 100px;
        }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .pagination button {
          width: 38px;
          height: 38px;
          border: 0;
          background: transparent;
          color: #756b64;
          border-radius: 50%;
          cursor: pointer;
          font-size: 11px;
        }

        .pagination button:hover {
          color: #f29452;
          background: rgba(242,148,82,.08);
        }

        .pagination .pagination-active {
          background: #28221f;
          color: white;
        }

        .pagination .next-page {
          width: auto;
          border-radius: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 12px;
        }


        /* ================================
           TABLET
        ================================= */

        @media (max-width: 1000px) {

          .blog-layout {
            grid-template-columns: 1fr;
          }

          .blog-sidebar {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: start;
          }

          .sidebar-search {
            grid-column: 1 / -1;
          }

        }


        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 650px) {

          .blog-page {
            padding-top: 60px;
          }

          .blog-header {
            padding: 45px 18px 25px;
          }

          .blog-header-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .blog-brand {
            width: 100%;
          }

          .blog-brand h1 {
            font-size: 55px;
          }

          .blog-brand p {
            font-size: 12px;
            max-width: 290px;
            line-height: 1.5;
          }

          .blog-top-nav {
            width: 100%;
            justify-content: flex-start;
            gap: 25px;
            border-top: 1px solid rgba(40,34,31,.1);
            padding-top: 18px;
          }

          .blog-top-nav a {
            font-size: 10px;
          }


          .blog-toolbar {
            padding: 15px 18px 25px;
          }

          .toolbar-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
          }

          .toolbar-left {
            justify-content: space-between;
          }

          .browse-text {
            display: none;
          }

          .search-box {
            width: 100%;
          }


          .blog-layout {
            padding: 0 14px 60px;
            gap: 25px;
          }


          /* MOBILE POST */

          .blog-card {
            grid-template-columns: 58px minmax(0,1fr);
            gap: 14px;
            padding: 15px;
            min-height: 0;
          }

          .date-card {
            width: 58px;
            height: 82px;
          }

          .date-card span {
            font-size: 8px;
          }

          .date-card strong {
            font-size: 24px;
          }

          .date-card small {
            font-size: 8px;
          }

          .post-content h2 {
            font-size: 16px;
            line-height: 1.35;
          }

          .post-content p {
            font-size: 10px;
            line-height: 1.55;
            -webkit-line-clamp: 3;
          }

          .post-category {
            font-size: 7px;
            padding: 4px 7px;
          }

          .post-arrow {
            display: none;
          }


          /* SIDEBAR */

          .blog-sidebar {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .sidebar-heading {
            min-height: 49px;
          }

          .sidebar-content {
            padding: 10px 13px 13px;
          }


          /* PAGINATION */

          .blog-footer {
            padding-bottom: 70px;
          }

          .pagination {
            flex-wrap: wrap;
          }

        }


        /* ================================
           VERY SMALL PHONE
        ================================= */

        @media (max-width: 390px) {

          .blog-brand h1 {
            font-size: 49px;
          }

          .blog-card {
            grid-template-columns: 50px minmax(0,1fr);
            gap: 11px;
            padding: 12px;
          }

          .date-card {
            width: 50px;
            height: 73px;
          }

          .date-card strong {
            font-size: 21px;
          }

          .post-content h2 {
            font-size: 14px;
          }

          .post-content p {
            font-size: 9px;
          }

        }

      `}</style>

    </main>
  );
}


/* =========================================
   SIDEBAR SECTION COMPONENT
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
        className="sidebar-heading"
        onClick={onClick}
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