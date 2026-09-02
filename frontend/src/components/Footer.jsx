import React from 'react';
import { FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { label: 'YouTube', Icon: FaYoutube, href: 'http://www.youtube.com/@MiskerKassahun' },
  { label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/miskerkassahun/' },
  { label: 'Facebook', Icon: FaFacebookF, href: 'http://facebook.com/misker.kassahun' },
  { label: 'Twitter', Icon: FaXTwitter, href: 'https://x.com/MiskerKassahun' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copy">Copyright © 2026 AHAZ</p>

        <div className="social-links" aria-label="Social media links">
          {socialLinks.map(({ label, Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="social-link"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .site-footer {
          width: 100%;
          background: #28221f;
          color: #f5eee8;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-copy {
          margin: 0;
          font-size: 13px;
          letter-spacing: 0.05em;
          color: #f1e7df;
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .social-link {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(242, 148, 82, 0.7);
          color: #f29452;
          background: rgba(242, 148, 82, 0.05);
          border-radius: 50%;
          transition: all 0.25s ease;
        }

        .social-link:hover {
          background: #f29452;
          color: #28221f;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(242, 148, 82, 0.2);
        }

        .social-link svg {
          width: 14px;
          height: 14px;
        }

        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
            padding: 20px 16px;
          }

          .footer-copy {
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
