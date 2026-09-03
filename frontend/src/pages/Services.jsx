import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  {
    id: 'I',
    title: 'Healthcare Consulting',
    subtitle: 'Strategic health programs & medical advisory',
    description:
      'Misker is a medical doctor (general practitioner) and an MPH holder from Johns Hopkins University. She is skilled in healthcare leadership, health policy, health communication, running nonprofit organizations, advocacy work, and project management.',
  },
  {
    id: 'II',
    title: 'Digital Promotion & Modeling',
    subtitle: 'Brand representation & 7+ years modeling',
    description:
      'Professional modeling and promotional services with over 7 years of experience. Represented organizations such as HabariDoc Digital Health Services, Abyssinia Bank, and Miss Africa Beauty Queen.',
  },
  {
    id: 'III',
    title: 'Public Speaking',
    subtitle: 'Keynotes on leadership & youth advocacy',
    description:
      'Misker has been a panelist and trainer at multiple international and national conferences, events, and webinars. She is especially skilled in delivering sessions on professional development, volunteerism, community service, and mental health. Here are some of her notable speaking engagements.',
  },
  {
    id: 'IV',
    title: 'Event Management',
    subtitle: 'Conferences, campaigns & community events',
    description:
      'Misker is skilled in planning diverse events such as professional development events, conferences, webinars, pageants/beauty contests, curated entertainment events, and medical campaigns.',
  },
  {
    id: 'V',
    title: 'Collaboration',
    subtitle: 'Multidisciplinary ventures & partnerships',
    description:
      'Misker is open to collaboration with organizations, businesses, networks, professional associations, social media platforms and many more especially those focused on healthcare, community engagement, mental health and professional development.',
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('I');

  const activeService =
    servicesData.find((service) => service.id === activeId) || null;

  const handleServiceClick = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <>
      <section className="services-section">
        <div className="services-container">

          <div className="services-header">
            <span className="section-eyebrow">
              WHAT I DO
            </span>

            <h2 className="section-heading">
              Featured Expertise &amp; Services
            </h2>

            <p className="services-intro">
              Explore the areas where experience, expertise, and purpose come
              together to create meaningful impact.
            </p>
          </div>

          <div className="services-split">

            <div className="services-nav">
              {servicesData.map((service) => {
                const isActive = activeId === service.id;

                return (
                  <div
                    key={service.id}
                    className="service-item-wrapper"
                  >
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
                        <ArrowUpRight
                          size={19}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

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

        .services-section {
          width: 100%;
          background: #faf6f0;
          color: #28221f;
          padding: 110px 40px;
          box-sizing: border-box;
          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .services-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-header {
          margin-bottom: 55px;
        }

        .section-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          color: #f29452;
          margin-bottom: 14px;
        }

        .section-heading {
          margin: 0;
          font-size: clamp(36px, 4vw, 50px);
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -2px;
          color: #28221f;
        }

        .services-intro {
          max-width: 650px;
          margin: 20px 0 0;
          color: #5c534e;
          font-size: 16px;
          line-height: 1.75;
        }

        .services-split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 38px;
          align-items: stretch;
        }

        .services-nav {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .service-item-wrapper {
          width: 100%;
        }

        .service-nav-item {
          position: relative;
          min-height: 88px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 18px 20px 18px 26px;

          background: #ffffff;

          border: 1px solid rgba(40, 34, 31, 0.09);

          border-radius: 0;

          cursor: pointer;

          overflow: visible;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .service-nav-item:hover {
          transform: translateY(-7px);

          border-color:
            rgba(242, 148, 82, 0.35);

          background: #ffffff;

          box-shadow:
            0 20px 45px
            rgba(40, 34, 31, 0.14);
        }

        .service-nav-item.active {
          background: #464b50;

          border-color: #464b50;

          color: #ffffff;

          transform: translateY(0);

          box-shadow:
            0 15px 35px
            rgba(70, 75, 80, 0.18);
        }

        .service-nav-item.active:hover {
          transform: translateY(-5px);

          box-shadow:
            0 22px 45px
            rgba(70, 75, 80, 0.25);
        }

        .nav-item-left {
          display: flex;
          align-items: center;

          gap: 20px;

          min-width: 0;

          flex: 1;
        }

        .nav-id {
          width: 25px;

          flex-shrink: 0;

          font-size: 12px;

          font-weight: 800;

          color: #f29452;
        }

        .service-nav-item.active .nav-id {
          color: #f29452;
        }

        .nav-title {
          font-size:
            clamp(
              16px,
              1.8vw,
              19px
            );

          font-weight: 650;

          letter-spacing: -0.3px;

          line-height: 1.35;
        }

        .nav-arrow {
          width: 46px;
          height: 46px;

          flex: 0 0 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: transparent;

          color: #5c534e;

          position: relative;

          transition:
            transform 0.4s ease,
            background 0.4s ease,
            color 0.4s ease;
        }

        .nav-arrow svg {
          transition:
            transform 0.4s ease;
        }

        .service-nav-item:hover .nav-arrow {
          background: #f29452;

          color: #28221f;

          transform: rotate(45deg);
        }

        .service-nav-item:hover .nav-arrow svg {
          transform: rotate(-45deg);
        }

        .service-nav-item.active .nav-arrow {
          background: transparent;

          color: #ffffff;

          transform: none;
        }

        .service-nav-item.active .nav-arrow svg {
          transform: none;
        }

        .services-preview-panel {
          position: relative;

          background: #464b50;

          color: #ffffff;

          padding: 50px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          min-height: 490px;

          overflow: hidden;

          box-shadow:
            0 20px 45px
            rgba(40, 34, 31, 0.1);
        }

        .services-preview-panel::before {
          content: "";

          position: absolute;

          width: 300px;
          height: 300px;

          border:
            1px solid
            rgba(242, 148, 82, 0.16);

          border-radius: 50%;

          right: -130px;
          top: -130px;
        }

        .services-preview-panel::after {
          content: "";

          position: absolute;

          width: 120px;
          height: 120px;

          background:
            rgba(242, 148, 82, 0.08);

          border-radius: 50%;

          left: -60px;
          bottom: -60px;
        }

        .preview-content {
          position: relative;

          z-index: 2;

          display: flex;

          flex-direction: column;

          justify-content: center;
        }

        .preview-top {
          padding-bottom: 34px;
        }

        .preview-title {
          font-size:
            clamp(
              30px,
              3vw,
              42px
            );

          font-weight: 700;

          letter-spacing: -1.2px;

          margin: 0 0 10px;

          line-height: 1.12;
        }

        .preview-subtitle {
          font-size: 15px;

          color: #bdb8b3;

          margin: 0;

          line-height: 1.6;
        }

        .preview-desc {
          font-size: 16px;

          line-height: 1.85;

          color: #e1ddd8;

          margin: 0;
        }

        .preview-empty {
          position: relative;

          z-index: 2;

          color: #aaa49e;

          font-size: 15px;
        }

        .mobile-service-details {
          display: none;
        }

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

        @media (max-width: 768px) {

          .services-section {
            padding: 75px 18px;
          }

          .services-header {
            margin-bottom: 35px;
          }

          .section-heading {
            font-size:
              clamp(
                32px,
                8vw,
                42px
              );

            letter-spacing: -1.5px;
          }

          .services-intro {
            font-size: 14px;

            line-height: 1.7;
          }

          .services-split {
            display: block;
          }

          .services-nav {
            gap: 12px;
          }

          .service-nav-item {
            min-height: 76px;

            padding:
              15px
              16px
              15px
              18px;
          }

          .service-nav-item:hover {
            transform: translateY(-5px);

            box-shadow:
              0 16px 30px
              rgba(40, 34, 31, 0.13);
          }

          .nav-item-left {
            gap: 13px;
          }

          .nav-id {
            width: 20px;

            font-size: 11px;
          }

          .nav-title {
            font-size: 15px;
          }

          .nav-arrow {
            width: 42px;
            height: 42px;

            flex-basis: 42px;
          }

          .services-preview-panel {
            display: none;
          }

          .mobile-service-details {
            display: grid;

            grid-template-rows: 0fr;

            background: #464b50;

            color: #ffffff;

            border-radius: 0;

            margin-top: -3px;

            overflow: hidden;

            opacity: 0;

            transition:
              grid-template-rows 0.4s ease,
              opacity 0.3s ease;
          }

          .mobile-service-details.mobile-open {
            grid-template-rows: 1fr;

            opacity: 1;
          }

          .mobile-details-inner {
            min-height: 0;

            overflow: hidden;

            padding: 0 20px;
          }

          .mobile-open .mobile-details-inner {
            padding:
              25px
              20px
              27px;
          }

          .mobile-details-inner h3 {
            margin:
              0 0 8px;

            font-size: 23px;

            line-height: 1.25;

            letter-spacing: -0.5px;
          }

          .mobile-subtitle {
            margin:
              0 0 22px;

            font-size: 13px;

            line-height: 1.6;

            color: #bdb8b3;
          }

          .mobile-description {
            margin: 0;

            font-size: 14px;

            line-height: 1.75;

            color: #e1ddd8;
          }

          .service-item-wrapper:has(.mobile-open)
            .service-nav-item {
            border-radius: 0;

            border-color: #464b50;
          }

          .service-item-wrapper:has(.mobile-open)
            .service-nav-item:hover {
            transform: translateY(-2px);
          }

        }

        @media (max-width: 480px) {

          .services-section {
            padding:
              62px
              14px;
          }

          .section-eyebrow {
            font-size: 10px;

            letter-spacing: 1.8px;
          }

          .section-heading {
            font-size: 32px;
          }

          .services-intro {
            font-size: 13px;
          }

          .service-nav-item {
            min-height: 70px;

            padding:
              13px
              12px
              13px
              14px;
          }

          .nav-item-left {
            gap: 9px;
          }

          .nav-id {
            width: 18px;

            font-size: 10px;
          }

          .nav-title {
            font-size: 14px;
          }

          .nav-arrow {
            width: 38px;
            height: 38px;

            flex-basis: 38px;
          }

          .nav-arrow svg {
            width: 17px;
            height: 17px;
          }

          .mobile-open .mobile-details-inner {
            padding:
              22px
              16px;
          }

          .mobile-details-inner h3 {
            font-size: 21px;
          }

          .mobile-description {
            font-size: 13.5px;

            line-height: 1.7;
          }

        }

        @media (max-width: 360px) {

          .services-section {
            padding-left: 11px;

            padding-right: 11px;
          }

          .section-heading {
            font-size: 29px;
          }

          .service-nav-item {
            padding:
              12px
              10px;
          }

          .nav-title {
            font-size: 13px;
          }

          .nav-arrow {
            width: 35px;
            height: 35px;

            flex-basis: 35px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .service-nav-item,
          .nav-arrow,
          .nav-arrow svg,
          .mobile-service-details,
          .mobile-details-inner {
            transition: none !important;
          }

        }

      `}</style>
    </>
  );
}