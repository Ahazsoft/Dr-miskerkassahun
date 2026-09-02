import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isOpen 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
        : isScrolled 
          ? 'bg-white border-b border-gray-200/40 shadow-sm lg:backdrop-blur-none' 
          : 'bg-white border-b border-gray-200/40 shadow-sm lg:bg-transparent lg:border-transparent lg:shadow-none lg:backdrop-blur-none'
    }`}>
      <div className="max-w-[1600px] mx-auto px-2.5 sm:px-6 lg:px-12 py-4 flex items-center justify-between w-full">
        
        {/* Left: Logo Image with 10px margin */}
        <div className="flex justify-start" style={{ marginLeft: '10px' }}>
          <Link to="/" className="flex items-center no-underline flex-shrink-0 group" onClick={closeMenu}>
            <img 
              src={logoImg} 
              alt="Dr. Misker Kassahun Logo" 
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              className="bg-white/90 lg:bg-white px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-[2px] transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
        </div>

        {/* Center: The 7 Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-x-8">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                style={{
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? '#f29452' : '#4a423d',
                  textDecoration: 'none',
                }}
                className={`transition-all duration-200 hover:text-[#f29452] hover:scale-105 py-1 ${
                  isActive ? 'border-b-2 border-[#f29452]' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right: Contact Button (Desktop) & Mobile Hamburger Button with 10px margin */}
        <div className="flex items-center justify-end" style={{ marginRight: '10px' }}>
          <div className="hidden lg:block my-4">
            <Link
              to="/contact"
              style={{
                backgroundColor: '#f29452',
                color: '#28221f',
                padding: '10px 28px',
                fontSize: '11px',
                fontWeight: '800',
                letterSpacing: '2.5px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 86% 100%, 0 100%)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              className="transition-all duration-300 hover:bg-[#ff9f5a] hover:shadow-lg hover:-translate-y-0.5"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex flex-col cursor-pointer gap-1.5 lg:hidden z-50 p-2" onClick={toggleMenu}>
            <span style={{ backgroundColor: '#4a423d' }} className={`w-6 h-0.5 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span style={{ backgroundColor: '#4a423d' }} className={`w-6 h-0.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span style={{ backgroundColor: '#4a423d' }} className={`w-6 h-0.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </div>

        {/* Mobile Dropdown Menu (White Blur Theme) */}
        <div className={`absolute top-full left-0 w-full backdrop-blur-xl bg-white/95 border-b border-gray-200 shadow-2xl flex flex-col items-center py-6 space-y-4 transition-all duration-300 ease-in-out lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                onClick={closeMenu}
                style={{
                  fontSize: '16px',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? '#f29452' : '#4a423d',
                  textDecoration: 'none'
                }}
                className="transition-colors duration-200 hover:text-[#f29452]"
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={closeMenu}
            style={{
              backgroundColor: '#f29452',
              color: '#28221f',
              padding: '12px 36px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '2.5px',
              textDecoration: 'none',
              marginTop: '8px',
              clipPath: 'polygon(0 0, 100% 0, 100% 75%, 86% 100%, 0 100%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="transition-all duration-300 hover:bg-[#ff9f5a]"
          >
            GET IN TOUCH
          </Link>
        </div>

      </div>
    </nav>
  );
}