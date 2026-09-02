import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

const servicesData = [
  {
    id: '01',
    title: 'Healthcare Consulting',
    shortTitle: 'Healthcare',
    description:
      'Expert medical consulting, public health advisory, and strategic health program development tailored for institutions and initiatives.',
  },
  {
    id: '02',
    title: 'Digital Advertisement / Promotion',
    shortTitle: 'Digital Promotion',
    description:
      'Professional modeling and promotional services with over 7 years of experience. She has represented and promoted organizations such as HabariDoc Digital Health Services, Abyssinia Bank, Great Lakes Society Vancouver, Aleph Design, and Miss Africa Beauty Queen among many others.',
  },
  {
    id: '03',
    title: 'Public Speaking',
    shortTitle: 'Public Speaking',
    description:
      'Engaging talks and presentations on public health, youth empowerment, leadership, personal development, and cultural representation.',
  },
  {
    id: '04',
    title: 'Event Planning & Management',
    shortTitle: 'Event Management',
    description:
      'Comprehensive coordination and management for professional conferences, community initiatives, corporate events, campaigns, and special occasions.',
  },
  {
    id: '05',
    title: 'Collaboration',
    shortTitle: 'Collaboration',
    description:
      'Partnering on creative projects, community-building programs, advocacy campaigns, public health initiatives, and multidisciplinary ventures.',
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('02');

  const toggleService = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <section className="services-section">

        <div className="services-container">

          {/* ==========================================
              HEADER
          =========================================== */}
          <div className="services-header">

            <div className="services-label">
              <span className="label-line"></span>
              <span>WHAT I DO</span>
            </div>

            <div className="header-content">

              <h1 className="services-title">
                My <span>Services</span>
              </h1>

              <p className="services-intro">
                Professional expertise, creative collaboration, and
                meaningful solutions designed to create lasting impact.
              </p>

            </div>

          </div>


          {/* ==========================================
              SERVICES
          =========================================== */}
          <div className="services-list">

            {servicesData.map((service) => {
              const isActive = activeId === service.id;

              return (
                <div
                  key={service.id}
                  className={`service-card ${
                    isActive ? 'service-card-active' : ''
                  }`}
                  onClick={() => toggleService(service.id)}
                >

                  {/* =================================
                      TOP ROW
                  ================================= */}
                  <div className="service-top">

                    {/* Number */}
                    <div className="service-number">
                      <span>{service.id}</span>
                    </div>


                    {/* Title */}
                    <div className="service-heading">

                      <span className="service-category">
                        SERVICE
                      </span>

                      <h2>
                        {service.title}
                      </h2>

                    </div>


                    {/* Arrow */}
                    <button
                      type="button"
                      className={`service-icon ${
                        isActive ? 'service-icon-active' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleService(service.id);
                      }}
                      aria-label={
                        isActive
                          ? `Close ${service.title}`
                          : `Open ${service.title}`
                      }
                    >
                      {isActive ? (
                        <Minus size={20} strokeWidth={1.8} />
                      ) : (
                        <ArrowUpRight size={20} strokeWidth={1.8} />
                      )}
                    </button>

                  </div>


                  {/* =================================
                      EXPANDED CONTENT
                  ================================= */}
                  <div
                    className={`service-details ${
                      isActive ? 'service-details-open' : ''
                    }`}
                  >

                    <div className="service-details-inner">

                      <div className="details-line"></div>

                      <div className="details-content">

                        <p>
                          {service.description}
                        </p>

                        <span className="details-number">
                          {service.id} / 05
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>


          {/* ==========================================
              BOTTOM NOTE
          =========================================== */}
          <div className="services-footer">

            <div className="footer-line"></div>

            <p>
              Open to meaningful collaborations &amp; new opportunities.
            </p>

            <span className="footer-dot"></span>

          </div>

        </div>


        {/* ==========================================
            DECORATIVE ELEMENTS
        =========================================== */}
        <div className="decor-circle"></div>
        <div className="decor-circle-small"></div>

      </section>


      {/* ==========================================
          STYLES
      =========================================== */}
      <style>{`

        /* =====================================================
           MAIN SECTION
        ====================================================== */

        .services-section {
          position: relative;

          width: 100%;
          min-height: 100vh;

          background: #faf6f0;

          display: flex;
          justify-content: center;

          padding: 130px 80px 100px;

          box-sizing: border-box;

          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ====================================================== */

        .services-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1152px;

          margin: 0 auto;
        }


        /* =====================================================
           HEADER
        ====================================================== */

        .services-header {
          margin-bottom: 65px;
        }


        .services-label {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 20px;

          color: #f29452;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 3px;
        }


        .label-line {
          width: 35px;
          height: 1px;

          background: #f29452;
        }


        .header-content {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 50px;
        }


        .services-title {
          margin: 0;

          color: #28221f;

          font-size: 68px;
          line-height: 0.95;

          font-weight: 700;

          letter-spacing: -3px;

          white-space: nowrap;
        }


        .services-title span {
          color: #f29452;
        }


        .services-intro {
          max-width: 380px;

          margin: 0 0 4px;

          color: #756b65;

          font-size: 15px;
          line-height: 1.7;

          font-weight: 400;
        }


        /* =====================================================
           SERVICES LIST
        ====================================================== */

        .services-list {
          display: flex;
          flex-direction: column;

          gap: 12px;
        }


        /* =====================================================
           SERVICE CARD
        ====================================================== */

        .service-card {
          position: relative;

          width: 100%;

          background: rgba(255, 255, 255, 0.55);

          border: 1px solid rgba(40, 34, 31, 0.12);

          border-radius: 8px;

          padding: 25px 28px;

          box-sizing: border-box;

          cursor: pointer;

          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }


        .service-card:hover {
          background: #ffffff;

          border-color: rgba(242, 148, 82, 0.35);

          transform: translateY(-2px);

          box-shadow:
            0 15px 35px rgba(40, 34, 31, 0.07);
        }


        /* =====================================================
           ACTIVE CARD
        ====================================================== */

        .service-card-active {
          background: #28221f;

          border-color: #28221f;

          box-shadow:
            0 20px 45px rgba(40, 34, 31, 0.16);
        }


        .service-card-active:hover {
          background: #28221f;

          border-color: #28221f;

          transform: none;
        }


        /* =====================================================
           TOP ROW
        ====================================================== */

        .service-top {
          display: flex;
          align-items: center;

          width: 100%;

          gap: 25px;
        }


        /* =====================================================
           NUMBER
        ====================================================== */

        .service-number {
          width: 48px;
          height: 48px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(40, 34, 31, 0.18);

          border-radius: 50%;

          color: #f29452;

          font-size: 13px;
          font-weight: 700;

          transition:
            background 0.3s ease,
            border-color 0.3s ease;
        }


        .service-card-active .service-number {
          border-color: rgba(242, 148, 82, 0.5);

          background: rgba(242, 148, 82, 0.08);

          color: #f29452;
        }


        /* =====================================================
           HEADING
        ====================================================== */

        .service-heading {
          flex: 1;

          min-width: 0;
        }


        .service-category {
          display: block;

          margin-bottom: 4px;

          color: #a39a94;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 2px;
        }


        .service-heading h2 {
          margin: 0;

          color: #28221f;

          font-size: 25px;

          line-height: 1.25;

          font-weight: 700;

          letter-spacing: -0.6px;

          transition: color 0.3s ease;
        }


        .service-card-active .service-heading h2 {
          color: #ffffff;
        }


        .service-card-active .service-category {
          color: #f29452;
        }


        /* =====================================================
           ICON BUTTON
        ====================================================== */

        .service-icon {
          width: 46px;
          height: 46px;

          flex-shrink: 0;

          border: none;

          background: #f29452;

          color: #ffffff;

          border-radius: 5px;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }


        .service-icon:hover {
          transform: rotate(8deg) scale(1.05);

          background: #e8833e;
        }


        .service-icon-active {
          background: #f29452;
        }


        /* =====================================================
           EXPANDED CONTENT
        ====================================================== */

        .service-details {
          display: grid;

          grid-template-rows: 0fr;

          opacity: 0;

          transition:
            grid-template-rows 0.45s ease,
            opacity 0.35s ease;
        }


        .service-details-open {
          grid-template-rows: 1fr;

          opacity: 1;
        }


        .service-details-inner {
          overflow: hidden;
        }


        .service-details-open .service-details-inner {
          padding-top: 25px;
        }


        .details-line {
          width: 100%;
          height: 1px;

          margin-bottom: 22px;

          background: rgba(255, 255, 255, 0.12);
        }


        .details-content {
          display: flex;

          align-items: flex-start;
          justify-content: space-between;

          gap: 40px;

          padding-left: 73px;
        }


        .details-content p {
          max-width: 720px;

          margin: 0;

          color: #d8d0ca;

          font-size: 15px;

          line-height: 1.8;

          font-weight: 400;
        }


        .details-number {
          flex-shrink: 0;

          padding-top: 3px;

          color: rgba(242, 148, 82, 0.7);

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 2px;
        }


        /* =====================================================
           FOOTER
        ====================================================== */

        .services-footer {
          display: flex;
          align-items: center;

          gap: 15px;

          margin-top: 38px;
        }


        .footer-line {
          width: 35px;
          height: 1px;

          background: #f29452;
        }


        .services-footer p {
          margin: 0;

          color: #817872;

          font-size: 11px;

          letter-spacing: 0.5px;
        }


        .footer-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #f29452;
        }


        /* =====================================================
           DECORATION
        ====================================================== */

        .decor-circle {
          position: absolute;

          width: 420px;
          height: 420px;

          right: -220px;
          top: 180px;

          border: 1px solid rgba(242, 148, 82, 0.12);

          border-radius: 50%;
        }


        .decor-circle-small {
          position: absolute;

          width: 200px;
          height: 200px;

          left: -120px;
          bottom: 80px;

          border: 1px solid rgba(40, 34, 31, 0.06);

          border-radius: 50%;
        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1024px) {

          .services-section {
            padding: 110px 50px 80px;
          }


          .services-title {
            font-size: 56px;
          }


          .services-intro {
            max-width: 320px;
          }


          .service-heading h2 {
            font-size: 22px;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 768px) {

          .services-section {
            min-height: auto;

            padding: 100px 22px 70px;

            display: block;
          }


          .services-container {
            max-width: 100%;
          }


          /* Header */

          .services-header {
            margin-bottom: 40px;
          }


          .services-label {
            margin-bottom: 16px;

            font-size: 9px;

            letter-spacing: 2.5px;
          }


          .label-line {
            width: 25px;
          }


          .header-content {
            display: block;
          }


          .services-title {
            font-size: 43px;

            line-height: 1;

            letter-spacing: -2px;

            white-space: normal;

            margin-bottom: 18px;
          }


          .services-intro {
            max-width: 330px;

            font-size: 14px;

            line-height: 1.65;

            margin: 0;
          }


          /* Service cards */

          .services-list {
            gap: 10px;
          }


          .service-card {
            padding: 18px 16px;

            border-radius: 7px;
          }


          .service-top {
            gap: 13px;

            align-items: center;
          }


          /* Number */

          .service-number {
            width: 38px;
            height: 38px;

            font-size: 11px;
          }


          /* Heading */

          .service-category {
            font-size: 7px;

            letter-spacing: 1.5px;

            margin-bottom: 3px;
          }


          .service-heading h2 {
            font-size: 16px;

            line-height: 1.3;

            letter-spacing: -0.2px;
          }


          /* Icon */

          .service-icon {
            width: 38px;
            height: 38px;

            border-radius: 4px;

            flex-shrink: 0;
          }


          /* Details */

          .service-details-open .service-details-inner {
            padding-top: 20px;
          }


          .details-line {
            margin-bottom: 17px;
          }


          .details-content {
            display: block;

            padding-left: 0;

            padding-right: 3px;
          }


          .details-content p {
            max-width: none;

            font-size: 13px;

            line-height: 1.75;
          }


          .details-number {
            display: block;

            margin-top: 15px;

            font-size: 8px;
          }


          /* Footer */

          .services-footer {
            margin-top: 30px;

            gap: 10px;
          }


          .services-footer p {
            font-size: 9px;

            line-height: 1.4;
          }


          .footer-line {
            width: 22px;
          }


          .decor-circle {
            width: 250px;
            height: 250px;

            right: -180px;
            top: 120px;
          }


          .decor-circle-small {
            display: none;
          }

        }


        /* =====================================================
           VERY SMALL PHONES
        ====================================================== */

        @media (max-width: 400px) {

          .services-section {
            padding-left: 18px;
            padding-right: 18px;
          }


          .services-title {
            font-size: 38px;
          }


          .services-intro {
            font-size: 13px;
          }


          .service-card {
            padding: 16px 13px;
          }


          .service-top {
            gap: 10px;
          }


          .service-number {
            width: 35px;
            height: 35px;

            font-size: 10px;
          }


          .service-heading h2 {
            font-size: 14px;
          }


          .service-icon {
            width: 35px;
            height: 35px;
          }


          .service-details-open .service-details-inner {
            padding-top: 17px;
          }


          .details-content p {
            font-size: 12.5px;
          }

        }

      `}</style>
    </>
  );
}