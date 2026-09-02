import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  {
    id: 'I',
    title: 'Healthcare Consulting',
    subtitle: 'Strategic health programs & medical advisory',
    description:
      'Misker is a medical doctor (general practitioner) and an MPH holder from at Johns Hopkins University. She is skilled in healthcare leadership, health policy, health communication, running nonprofit organizations, advocacy work, and project management.',
    tags: ['Clinical Strategy', 'Public Health', 'Program Design'],
  },
  {
    id: 'II',
    title: 'Digital Promotion & Modeling',
    subtitle: 'Brand representation & 7+ years modeling',
    description:
      'Professional modeling and promotional services with over 7 years of experience. Represented organizations such as HabariDoc Digital Health Services, Abyssinia Bank, and Miss Africa Beauty Queen.',
    tags: ['Brand Visibility', 'Campaigns', 'Media'],
  },
  {
    id: 'III',
    title: 'Public Speaking',
    subtitle: 'Keynotes on leadership & youth advocacy',
    description:
      'Misker has been a panelist and trainer at multiple international and national conferences, events, and webinars. She is especially skilled in delivering sessions on professional development, volunteerism, community service, and mental health. Here are some of her notable speaking engagements.',
    tags: ['Leadership', 'Youth Advocacy', 'Keynotes'],
  },
  {
    id: 'IV',
    title: 'Event Management',
    subtitle: 'Conferences, campaigns & community events',
    description:
      'Misker is skilled in planning diverse events such as professional development events, conferences, webinars, pageants/beauty contests, curated entertainment events, and medical campaigns.',
    tags: ['Planning', 'Coordination', 'Execution'],
  },
  {
    id: 'V',
    title: 'Collaboration',
    subtitle: 'Multidisciplinary ventures & partnerships',
    description:
      'Misker is open to collaboration with organizations, businesses, networks, professional associations, social media platforms and many more especially those focused on healthcare, community engagement, mental health and professional development.',
    tags: ['Partnerships', 'Innovation', 'Impact'],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('01');

  const activeService =
    servicesData.find((s) => s.id === activeId) || servicesData[0];

  const handleServiceClick = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <>
      <section className="services-section">
        <div className="services-container">

          {/* HEADER */}
          <div className="services-header">
            <span className="section-eyebrow">WHAT I DO</span>

            <h2 className="section-heading">
              Featured Expertise &amp; Services
            </h2>

            <p className="services-intro">
              Explore the areas where experience, expertise, and purpose come
              together to create meaningful impact.
            </p>
          </div>

          {/* DESKTOP / TABLET */}
          <div className="services-split">

            {/* LEFT NAVIGATION */}
            <div className="services-nav">
              {servicesData.map((service) => {
                const isActive = activeId === service.id;

                return (
                  <div key={service.id} className="service-item-wrapper">

                    {/* SERVICE BUTTON */}
                    <div
                      className={`service-nav-item ${
                        isActive ? 'active' : ''
                      }`}
                      onClick={() => handleServiceClick(service.id)}
                      onKeyDown={(event) => {
                        if (
                          event.key === 'Enter' ||
                          event.key === ' '
                        ) {
                          event.preventDefault();
                          handleServiceClick(service.id);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                    >
                      <div className="nav-item-left">

                        <span className="nav-id">
                          {service.id}
                        </span>

                        <span className="nav-title">
                          {service.title}
                        </span>

                      </div>

                      <div className="nav-arrow">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* MOBILE DETAILS */}
                    <div
                      className={`mobile-service-details ${
                        isActive ? 'mobile-open' : ''
                      }`}
                    >
                      <div className="mobile-details-inner">

                        

                        <h3>
                          {service.title}
                        </h3>

                        <p className="mobile-subtitle">
                          {service.subtitle}
                        </p>

                        <p className="mobile-description">
                          {service.description}
                        </p>

                

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* DESKTOP PREVIEW */}
            <div className="services-preview-panel">

              {activeService ? (
                <div className="preview-content">

                  <div className="preview-top">

                    <h3 className="preview-title">
                      {activeService.title}
                    </h3>

                    <p className="preview-subtitle">
                      {activeService.subtitle}
                    </p>

                  </div>

                  <p className="preview-desc">
                    {activeService.description}
                  </p>

                </div>
              ) : (
                <div className="preview-empty">
                  Select a service to view details.
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      <style>{`

        /* =====================================
           BASE
        ===================================== */

        .services-section {
          width: 100%;
          background: #ffffff;
          color: #1a1816;
          padding: 100px 40px;
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* =====================================
           HEADER
        ===================================== */

        .services-header {
          margin-bottom: 50px;
        }

        .section-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #f29452;
          margin-bottom: 12px;
        }

        .section-heading {
          margin: 0;
          font-size: clamp(36px, 4vw, 46px);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -1.5px;
          color: #28221f;
        }

        .services-intro {
          max-width: 620px;
          margin: 18px 0 0;
          color: #77706a;
          font-size: 15px;
          line-height: 1.7;
        }

        /* =====================================
           DESKTOP SPLIT
        ===================================== */

        .services-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: stretch;
        }

        /* =====================================
           NAVIGATION
        ===================================== */

        .services-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-item-wrapper {
          width: 100%;
        }

        .service-nav-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 22px 26px;

          background: #ffffff;

          border: 1px solid #e6e2db;
          border-radius: 14px;

          cursor: pointer;
          overflow: hidden;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;

          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        }

        .service-nav-item:hover {
          border-color: #f29452;
          background: #fffaf4;

          transform: translateY(-12px);

          box-shadow:
            0 30px 50px rgba(0, 0, 0, 0.22);
        }

        .service-nav-item::after {
          content: "";
          position: absolute;
          width: 0;
          height: 4px;
          left: 0;
          bottom: 0;
          background: #f29452;
          transition: width 0.45s ease;
        }

        .service-nav-item:hover::after {
          width: 100%;
        }

        .service-nav-item.active {
          background: #4a5056;
          border-color: #4a5056;
          color: #ffffff;

          box-shadow:
            0 18px 30px rgba(45, 51, 57, 0.16);

          transform: translateY(-1px);
        }

        .nav-item-left {
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: 0;
          flex: 1;
        }

        .nav-id {
          font-size: 13px;
          font-weight: 700;
          color: #f29452;
          flex-shrink: 0;
        }

        .service-nav-item.active .nav-id {
          color: #f7b777;
        }

        .nav-title {
          font-size: clamp(1rem, 1.9vw, 1.125rem);
          font-weight: 600;
          letter-spacing: -0.3px;
          line-height: 1.4;
          word-break: break-word;
        }

        .nav-arrow {
          color: #8c857b;

          transition:
            transform 0.35s ease,
            color 0.35s ease;

          flex-shrink: 0;

          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .service-nav-item:hover .nav-arrow {
          color: #b87333;
          transform: translate(3px, -3px);
        }

        .service-nav-item.active .nav-arrow {
          color: #ffffff;
          transform: rotate(45deg);
        }

        /* =====================================
           DESKTOP PREVIEW
        ===================================== */

        .services-preview-panel {
          background: #4a5056;
          color: #ffffff;

          border-radius: 16px;

          padding: 40px;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          min-height: 450px;

          box-shadow:
            0 20px 40px rgba(0, 0, 0, 0.08);

          position: relative;
          overflow: hidden;
        }

        .preview-content {
          flex: 1;
          min-height: 100%;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .preview-top {
          padding-bottom: 38px;
        }

        .preview-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;

          color: #f29452;

          display: block;

          margin-bottom: 16px;
        }

        .preview-title {
          font-size: 32px;
          font-weight: 700;

          letter-spacing: -0.5px;

          margin: 0 0 8px 0;

          line-height: 1.2;
        }

        .preview-subtitle {
          font-size: 15px;
          color: #a39c93;
          margin: 0;
          line-height: 1.6;
        }

        .preview-desc {
          font-size: 16px;
          line-height: 1.8;

          color: #d1cbc1;

          margin: 0;
          text-align: justify;
        }

        .preview-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .preview-tag {
          font-size: 12px;
          font-weight: 500;

          background:
            rgba(255, 255, 255, 0.07);

          border:
            1px solid rgba(255, 255, 255, 0.12);

          color: #f0eae1;

          padding: 6px 14px;

          border-radius: 20px;
        }

        .preview-empty {
          color: #aaa;
          font-size: 15px;
        }

        /* =====================================
           MOBILE DETAILS
        ===================================== */

        .mobile-service-details {
          display: none;
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1100px) {

          .services-section {
            padding: 90px 28px;
          }

          .services-split {
            grid-template-columns: 1fr;
          }

          .services-preview-panel {
            min-height: 400px;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 768px) {

          .services-section {
            padding: 72px 18px;
          }

          .services-header {
            margin-bottom: 34px;
          }

          .section-heading {
            font-size: clamp(32px, 8vw, 40px);
            letter-spacing: -1px;
          }

          .services-intro {
            font-size: 14px;
          }

          /*
             Mobile becomes one column.
          */

          .services-split {
            display: block;
          }

          .services-nav {
            gap: 12px;
          }

          .service-nav-item {
            padding: 19px 18px;
            border-radius: 12px;
          }

          .nav-item-left {
            gap: 14px;
          }

          .nav-title {
            font-size: 15px;
          }

          .nav-id {
            font-size: 12px;
          }

          /*
             Hide desktop preview
          */

          .services-preview-panel {
            display: none;
          }

          /*
             Mobile accordion details
          */

          .mobile-service-details {
            display: grid;

            grid-template-rows: 0fr;

            background: #4a5056;

            color: #ffffff;

            border-radius: 0 0 12px 12px;

            margin-top: -4px;

            overflow: hidden;

            opacity: 0;

            transition:
              grid-template-rows 0.45s ease,
              opacity 0.3s ease,
              margin-top 0.3s ease;
          }

          .mobile-service-details.mobile-open {
            grid-template-rows: 1fr;
            opacity: 1;
            margin-top: -4px;
          }

          .mobile-details-inner {
            min-height: 0;
            overflow: hidden;

            padding: 0 20px;

            transition:
              padding 0.4s ease;
          }

          .mobile-open .mobile-details-inner {
            padding: 24px 20px 25px;
          }

          .mobile-preview-badge {
            display: block;

            font-size: 10px;
            font-weight: 700;

            letter-spacing: 1.8px;

            color: #f29452;

            margin-bottom: 12px;
          }

          .mobile-details-inner h3 {
            margin: 0 0 8px;

            font-size: 23px;
            line-height: 1.25;

            letter-spacing: -0.5px;
          }

          .mobile-subtitle {
            margin: 0 0 28px;

            font-size: 13px;
            line-height: 1.6;

            color: #aaa49d;
          }

          .mobile-description {
            margin: 0 0 22px;

            font-size: 14px;
            line-height: 1.75;

            color: #d1cbc1;
            text-align: justify;
          }

          .mobile-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
          }

          .mobile-tags span {
            padding: 6px 11px;

            border-radius: 20px;

            background:
              rgba(255, 255, 255, 0.07);

            border:
              1px solid rgba(255, 255, 255, 0.12);

            color: #f0eae1;

            font-size: 11px;
          }

          /*
             When open, make button connect
             naturally to its content.
          */

          .service-item-wrapper:has(.mobile-open)
            .service-nav-item {
              border-radius: 12px 12px 4px 4px;
              border-color: #4a5056;
            }

        }

        /* =====================================
           SMALL MOBILE
        ===================================== */

        @media (max-width: 480px) {

          .services-section {
            padding: 62px 14px;
          }

          .section-eyebrow {
            letter-spacing: 1.8px;
            font-size: 10px;
          }

          .section-heading {
            font-size: 32px;
          }

          .services-intro {
            font-size: 13px;
            line-height: 1.65;
          }

          .service-nav-item {
            padding: 16px 14px;
          }

          .nav-item-left {
            gap: 11px;
          }

          .nav-id {
            font-size: 11px;
          }

          .nav-title {
            font-size: 14px;
          }

          .nav-arrow {
            width: 28px;
            height: 28px;
          }

          .mobile-open .mobile-details-inner {
            padding: 22px 16px 22px;
          }

          .mobile-details-inner h3 {
            font-size: 21px;
          }

          .mobile-description {
            font-size: 13.5px;
            line-height: 1.7;
          }

        }

        /* =====================================
           VERY SMALL SCREENS
        ===================================== */

        @media (max-width: 360px) {

          .services-section {
            padding-left: 11px;
            padding-right: 11px;
          }

          .section-heading {
            font-size: 29px;
          }

          .service-nav-item {
            padding: 14px 12px;
          }

          .nav-item-left {
            gap: 9px;
          }

          .nav-title {
            font-size: 13px;
          }

        }

        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (prefers-reduced-motion: reduce) {

          .service-nav-item,
          .nav-arrow,
          .mobile-service-details,
          .mobile-details-inner {
            transition: none !important;
          }

        }

      `}</style>
    </>
  );
}