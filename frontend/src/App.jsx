import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import AboutDetail from './pages/About_detail';
import PrincipleDetail from './pages/PrincipleDetail';
import Gallery from './pages/Gallery';
import BlogDetail from './pages/BlogDetail';
import Services from './pages/Services';
import Blog from './pages/Blog';
import ViewMoreBlogs from './pages/ViewMoreBlogs';
import Contact from './pages/Contact';

function PageTransition() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <main key={location.pathname} className="page-transition">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-detail" element={<AboutDetail />} />
        <Route path="/principle-detail/:slug" element={<PrincipleDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/all" element={<ViewMoreBlogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <PageTransition />
      <Footer />
    </Router>
  );
}