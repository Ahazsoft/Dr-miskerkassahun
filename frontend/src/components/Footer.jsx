import React from 'react';
import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-detail' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'http://www.youtube.com/@MiskerKassahun',
      icon: <FaYoutube />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/miskerkassahun/',
      icon: <FaInstagram />,
    },
    {
      name: 'Facebook',
      url: 'http://facebook.com/misker.kassahun',
      icon: <FaFacebookF />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/MiskerKassahun',
      icon: <FaTwitter />,
    },
  ];

  return (
    <footer
      style={{
        background: '#28221f',
        color: '#ffffff',
        marginTop: '80px',
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '70px 80px 35px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '80px',
            paddingBottom: '55px',
          }}
        >
          <div>
            <h2
              style={{
                margin: '0 0 20px',
                fontSize: '30px',
                fontWeight: '700',
                letterSpacing: '-0.5px',
              }}
            >
              Dr. Misker Kassahun
            </h2>

            <p
              style={{
                margin: 0,
                maxWidth: '430px',
                color: '#cfc8c4',
                fontSize: '15px',
                lineHeight: '1.8',
              }}
            >
              Professional medical care dedicated to providing trusted,
              compassionate, and high-quality healthcare services.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '30px',
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    background: 'transparent',
                    fontSize: '18px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F29452';
                    e.currentTarget.style.borderColor = '#F29452';
                    e.currentTarget.style.color = '#28221f';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor =
                      'rgba(255,255,255,0.25)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              style={{
                margin: '0 0 25px',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Navigation
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  style={{
                    color: '#cfc8c4',
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F29452';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#cfc8c4';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              style={{
                margin: '0 0 25px',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </h3>

            <p
              style={{
                margin: '0 0 25px',
                color: '#cfc8c4',
                fontSize: '15px',
                lineHeight: '1.8',
                maxWidth: '300px',
              }}
            >
              Get in touch for appointments, inquiries, and more information.
            </p>

            <a
              href="/contact"
              style={{
                width: '195px',
                height: '52px',
                background: '#F29452',
                color: '#28221f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '2px',
                clipPath:
                  'polygon(0 0, 100% 0, 100% 68%, 88% 100%, 0 100%)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e88948';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F29452';
              }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#aaa19c',
              fontSize: '13px',
            }}
          >
            Copyright © 2026 AHAZ. All rights reserved.
          </p>

          <p
            style={{
              margin: 0,
              color: '#aaa19c',
              fontSize: '13px',
            }}
          >
            Dr. Misker Kassahun
          </p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 1000px) {
            footer > div > div:first-child {
              grid-template-columns: 1fr 1fr !important;
              gap: 50px !important;
            }

            footer > div > div:first-child > div:first-child {
              grid-column: 1 / -1;
            }
          }

          @media (max-width: 650px) {
            footer > div {
              padding: 55px 25px 30px !important;
            }

            footer > div > div:first-child {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }

            footer > div > div:first-child > div:first-child {
              grid-column: auto;
            }

            footer > div > div:last-child {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `}
      </style>
    </footer>
  );
}