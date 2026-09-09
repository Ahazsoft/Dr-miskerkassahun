import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-detail' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg'
          : isScrolled
            ? 'bg-white border-b border-gray-200/40 shadow-sm lg:backdrop-blur-none'
            : 'bg-white border-b border-gray-200/40 shadow-sm lg:bg-transparent lg:border-transparent lg:shadow-none lg:backdrop-blur-none'
      }`}
    >
      <div className="w-full max-w-[1700px] mx-auto h-[64px] flex items-center justify-between px-8 sm:px-14 lg:px-24">

        {/* Logo Container */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center no-underline group"
            onClick={closeMenu}
          >
            <img
              src={logoImg}
              alt="Dr. Misker Kassahun Logo"
              style={{
                height: '38px',
                width: 'auto',
                objectFit: 'contain',
              }}
              className="bg-white/90 lg:bg-white px-2.5 py-1 rounded-[2px] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Normal font weight (no bolding) */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-x-8 xl:gap-x-10">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={index}
                to={link.path}
                style={{
                  fontSize: '14px',
                  fontWeight: '400', // Removed bolding completely
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

        {/* Contact Button Container */}
        <div className="flex-shrink-0">
          <div className="hidden lg:block">
            <Link
              to="/contact"
              style={{
                backgroundColor: '#f29452',
                color: '#28221f',
                minWidth: '170px',
                height: '38px',
                padding: '0 20px',
                fontSize: '10.5px',
                fontWeight: '800',
                letterSpacing: '2px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath:
                  'polygon(0 0, 100% 0, 100% 65%, 88% 100%, 0 100%)',
                boxShadow: '0 3px 6px rgba(0,0,0,0.12)',
              }}
              className="transition-all duration-300 hover:bg-[#ff9f5a] hover:shadow-lg hover:-translate-y-0.5"
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="flex flex-col cursor-pointer gap-1.5 lg:hidden z-50 p-2"
            onClick={toggleMenu}
          >
            <span
              style={{ backgroundColor: '#4a423d' }}
              className={`w-6 h-0.5 transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              style={{ backgroundColor: '#4a423d' }}
              className={`w-6 h-0.5 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              style={{ backgroundColor: '#4a423d' }}
              className={`w-6 h-0.5 transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute top-full left-0 w-full backdrop-blur-xl bg-white/95 border-b border-gray-200 shadow-2xl flex flex-col items-center px-5 py-6 space-y-3 transition-all duration-300 ease-in-out lg:hidden ${
            isOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={index}
                to={link.path}
                onClick={closeMenu}
                style={{
                  fontSize: '16px',
                  fontWeight: '400', // Unbolded mobile dropdown items as well
                  color: isActive ? '#f29452' : '#4a423d',
                  textDecoration: 'none',
                  width: '100%',
                  padding: '12px 8px',
                  textAlign: 'center',
                  borderBottom:
                    '1px solid rgba(74, 66, 61, 0.12)',
                }}
                className="!text-center transition-colors duration-200 hover:text-[#f29452]"
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 w-full flex justify-center">
            <Link
              to="/contact"
              onClick={closeMenu}
              style={{
                backgroundColor: '#f29452',
                color: '#28221f',
                padding: '12px 28px',
                fontSize: '11px',
                fontWeight: '800',
                letterSpacing: '2px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                clipPath:
                  'polygon(0 0, 100% 0, 100% 65%, 88% 100%, 0 100%)',
              }}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}