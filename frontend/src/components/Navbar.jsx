import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about-detail',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo-wrapper">
          <Link to="/" className="navbar-logo-link">
            <img
              src={logoImg}
              alt="Dr. Misker Kassahun Logo"
              className="navbar-logo"
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="navbar-links">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP BUTTON + MOBILE MENU BUTTON */}
        <div className="navbar-right">

          <Link
            to="/contact"
            className="get-in-touch"
          >
            GET IN TOUCH
          </Link>

          <button
            type="button"
            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>

        <div className="mobile-menu-links">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="mobile-get-in-touch"
            onClick={() => setIsOpen(false)}
          >
            GET IN TOUCH
          </Link>

        </div>

      </div>

    </nav>
  );
}