import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import profileImage from '../assets/images/about.png';

const detailedTimeline = [
  {
    year: 'Education',
    role: 'Doctor of Medicine (MD)',
    organization: "St. Paul's Hospital Millennium Medical College",
    description:
      'Completed rigorous medical training to establish a strong foundation in clinical care, patient diagnostics, and healthcare delivery.'
  },
  {
    year: 'Advanced Degree',
    role: 'Master of Public Health (MPH)',
    organization: 'Johns Hopkins Bloomberg School of Public Health',
    description:
      'Focused on global health systems, epidemiological strategy, health policy design, and large-scale public health management.'
  },
  {
    year: 'Leadership & Co-Founding',
    role: 'Co-Founder',
    organization: 'GIV Society Ethiopia & Ensight Global Consultancy',
    description:
      'Spearheading community-driven health solutions, volunteerism frameworks, youth empowerment initiatives, and strategic consultancy projects.'
  },
  {
    year: 'Advocacy & Media',
    role: 'Cultural & Mental Health Advocate',
    organization:
      'Miss Africa, Miss Supranational Ethiopia, Miss University Africa',
    description:
      'Representing Ethiopia on international stages to advocate for mental health awareness, health equity, and youth development.'
  }
];

const expertisePillars = [
  {
    title: 'Clinical & Public Health Expertise',
    description:
      "Bridging front-line clinical medicine from St. Paul's Hospital with macro-level public health strategies from Johns Hopkins to design impactful health interventions."
  },
  {
    title: 'Keynote Speaking & Training',
    description:
      'Delivering inspirational keynotes and professional training for organizations like the UN Association, Global Shapers, and Mastercard Foundation.'
  },
  {
    title: 'Community Building & Advocacy',
    description:
      'Co-founding GIV Society Ethiopia and leading campaigns focused on mental wellbeing, youth leadership, and community service.'
  },
  {
    title: 'Consultancy & Project Management',
    description:
      'Driving strategic health solutions, structural communication, and organizational development through Ensight Global Consultancy.'
  }
];

export default function AboutDetail() {
  return (
    <section className="about-detail-section">

      <div className="about-detail-container">

        <div className="about-hero-wrapper">

          <div className="about-hero-content">

            <span className="section-eyebrow">
              ABOUT DR. MISKER KASSAHUN
            </span>

            <h1 className="section-heading">
              Medicine, Public Health
              <br />
              &amp; Purpose.
            </h1>

            <p className="hero-subtitle">
              Medical Doctor (MD) &amp; Public Health Professional
            </p>

            <p className="hero-description">
              Dr. Misker Kassahun is a dedicated medical doctor, public
              health expert, community builder, and youth advocate. Her work
              merges clinical insight with global public health strategies,
              championing mental health, volunteerism, and youth empowerment
              across national and international platforms.
            </p>

            <div className="hero-actions">

              <a
                href="#expertise"
                className="primary-btn"
              >
                <span>Explore My Work</span>

                <span className="btn-arrow">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={2}
                  />
                </span>
              </a>

            </div>

          </div>

          <div className="profile-card">

            <div className="profile-image-wrapper">

              <img
                src={profileImage}
                alt="Dr. Misker Kassahun"
                className="profile-image"
              />

              <div className="profile-tags">
                <span className="profile-tag">Johns Hopkins MPH</span>
                <span className="profile-tag">St. Paul&apos;s MD</span>
                <span className="profile-tag">GIV Society Co-Founder</span>
              </div>

            </div>

          </div>

        </div>


        <div
          className="section-block"
          id="expertise"
        >

          <div className="section-header">

            <div>

              <span className="section-eyebrow">
                EXPERTISE &amp; IMPACT
              </span>

              <h2 className="section-subheading">
                Core Focus Areas
              </h2>

            </div>

          </div>


          <div className="expertise-list">

            {expertisePillars.map((pillar, index) => (

              <div
                className="expertise-row"
                key={index}
              >

                <div className="expertise-content">

                  <h3>
                    {pillar.title}
                  </h3>

                  <p>
                    {pillar.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        <div className="section-block">

          <div className="section-header">

            <div>

              <span className="section-eyebrow">
                BACKGROUND &amp; JOURNEY
              </span>

              <h2 className="section-subheading">
                Professional Milestones
              </h2>

            </div>

          </div>


          <div className="timeline-wrapper">

            {detailedTimeline.map((item, index) => (

              <div
                className={`timeline-card ${index % 2 === 0 ? 'timeline-light-card' : 'timeline-dark-card'}`}
                key={index}
                id={[
                  'professional-background',
                  'advanced-degree',
                  'leadership-community-impact',
                  'global-advocacy-representation'
                ][index]}
              >

                <div className="timeline-card-content">

                  <div className="timeline-meta">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <span className="timeline-org">
                    {item.organization}
                  </span>

                  </div>

                  <div className="timeline-details">

                  <h3>
                    {item.role}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        <div
          className="section-block passions-section"
          id="personal-passions-culture"
        >

          <div className="section-header">

            <div>

              <span className="section-eyebrow">
                PERSONAL PASSIONS &amp; CULTURE
              </span>

              <h2 className="section-subheading">
                The person behind the work
              </h2>

            </div>

          </div>

          <p className="passions-copy">
            Beyond medicine and public health, I enjoy psychological thrillers,
            coffee-fueled conversations, event curation, and traditional
            Ethiopian feasts. These passions keep me curious and grounded while
            strengthening my commitment to representing Ethiopian culture.
          </p>

        </div>


        <div className="about-bottom">

          <div className="bottom-content">

            <span className="section-eyebrow">
              LET'S CREATE IMPACT
            </span>

            <h2>
              Turning knowledge
              <br />
              into meaningful action.
            </h2>

            <p>
              Whether through healthcare, public health, advocacy,
              speaking, or community building, every collaboration
              is an opportunity to create positive change.
            </p>

          </div>


          <a
            href="#contact"
            className="bottom-btn"
          >

            <span>
              Start a Conversation
            </span>

            <span className="bottom-btn-arrow">

              <ArrowUpRight
                size={20}
                strokeWidth={2}
              />

            </span>

          </a>

        </div>

      </div>


      <style>{`

        .about-detail-section {
          width: 100%;
          background: #faf6f0;
          color: #28221f;
          padding: 20px 40px 90px;
          overflow: hidden;
          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .about-detail-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }


        .section-eyebrow {
          display: inline-block;
          color: #f29452;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 14px;
        }


        .section-heading {
          margin: 0;
          color: #28221f;
          font-size: clamp(36px, 4vw, 50px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -2px;
        }


        .hero-subtitle {
          margin: 24px 0 0;
          color: #464b50;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.6;
        }


        .hero-description {
          max-width: 690px;
          margin: 18px 0 0;
          color: #5c534e;
          font-size: 15px;
          line-height: 1.85;
        }


        .about-hero-wrapper {
          display: grid;
          grid-template-columns:
            minmax(0, 1.2fr)
            minmax(350px, 0.8fr);
          gap: 75px;
          align-items: center;
          padding-bottom: 95px;
          border-bottom: 1px solid #e3ddd5;
        }


        .about-hero-content {
          min-width: 0;
        }


        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 27px;
        }


        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 9px 13px;
          border: 1px solid #ead8c8;
          background: #fffaf5;
          color: #5c534e;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2px;
          transition:
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }


        .hero-badge:hover {
          background: #f29452;
          border-color: #f29452;
          color: #28221f;
          transform: translateY(-3px);
        }


        .hero-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
        }


        .primary-btn,
        .secondary-btn {
          height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease,
            border-color 0.3s ease;
        }


        .primary-btn {
          min-width: 220px;
          padding: 6px 6px 6px 23px;
          background: #28221f;
          color: #ffffff;
        }


        .primary-btn:hover {
          background: #f29452;
          color: #28221f;
          transform: translateY(-4px);
        }


        .secondary-btn {
          min-width: 190px;
          padding: 6px 6px 6px 23px;
          border: 1px solid #cfc5bc;
          color: #28221f;
          background: transparent;
        }


        .secondary-btn:hover {
          background: #28221f;
          color: #ffffff;
          border-color: #28221f;
          transform: translateY(-4px);
        }


        .btn-arrow {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f29452;
          color: #28221f;
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease;
        }


        .primary-btn:hover .btn-arrow {
          background: #ffffff;
          transform: rotate(45deg);
        }


        .primary-btn:hover .btn-arrow svg {
          transform: rotate(-45deg);
        }


        .secondary-arrow {
          background: #28221f;
          color: #ffffff;
        }


        .secondary-btn:hover .secondary-arrow {
          background: #f29452;
          color: #28221f;
          transform: rotate(45deg);
        }


        .secondary-btn:hover .secondary-arrow svg {
          transform: rotate(-45deg);
        }


        .profile-card {
          width: 100%;
        }


        .profile-image-wrapper {
          position: relative;
          transform: translateY(-15px);
        }


        .profile-image {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          transition: transform 0.6s ease;
        }


        .profile-card:hover .profile-image {
          transform: scale(1.04);
        }


        .profile-tags {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          gap: 10px;
          padding: 0 0 10%;
          pointer-events: none;
        }


        .profile-tag {
          padding: 9px 14px;
          background: rgba(40,34,31,0.9);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2px;
          box-shadow: 0 8px 18px rgba(40,34,31,0.15);
        }


        .profile-info {
          padding: 26px 28px 27px;
        }


        .profile-name-row h3 {
          margin: 0;
          color: #28221f;
          font-size: 21px;
          font-weight: 750;
        }


        .profile-name-row p {
          margin: 7px 0 0;
          color: #756c65;
          font-size: 12px;
          line-height: 1.5;
        }


        .profile-divider {
          width: 100%;
          height: 1px;
          background: #e7e0d8;
          margin: 22px 0;
        }


        .profile-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }


        .profile-stat {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }


        .profile-stat strong {
          color: #f29452;
          font-size: 16px;
          font-weight: 800;
        }


        .profile-stat span {
          color: #817870;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }


        .section-block {
          padding-top: 100px;
        }


        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 45px;
        }


        .section-subheading {
          margin: 0;
          color: #28221f;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -1.5px;
        }


        .section-intro {
          max-width: 390px;
          margin: 0;
          color: #716861;
          font-size: 13px;
          line-height: 1.7;
          text-align: right;
        }


        .passions-copy {
          max-width: 760px;
          margin: 0;
          color: #635b55;
          font-size: 16px;
          line-height: 1.85;
        }


        .expertise-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin-top: 8px;
        }


        .expertise-row {
          display: flex;
          align-items: center;
          padding: 30px 0;
          border-top: 1px solid #ded7cf;
        }


        .expertise-content {
          width: 100%;
        }


        .expertise-content h3 {
          margin: 0 0 12px;
          color: #000000;
          font-size: 16px;
          font-weight: 750;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }


        .expertise-row:hover .expertise-content h3 {
          color: #000000;
        }


        .expertise-content p {
          max-width: 520px;
          margin: 0;
          color: #635b55;
          font-size: 14px;
          line-height: 1.8;
        }


        .timeline-wrapper {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 25px;
          margin-top: 8px;
        }


        .timeline-card {
          position: relative;
          min-height: 390px;
          padding: 34px 28px 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 93%, 93% 100%, 0 100%);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
          transition: transform 0.4s cubic-bezier(.2,.8,.2,1), box-shadow 0.4s ease;
        }


        .timeline-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.22);
        }


        .timeline-card::after {
          content: "";
          position: absolute;
          width: 0;
          height: 4px;
          left: 0;
          bottom: 0;
          background: #f29452;
          transition: width 0.45s ease;
        }


        .timeline-card:hover::after {
          width: 100%;
        }


        .timeline-light-card {
          background: #e9e3da;
          color: #28221f;
        }


        .timeline-dark-card {
          background: #3b4042;
          color: #f4efe6;
        }


        .timeline-card-content {
          position: relative;
          z-index: 2;
          width: 100%;
          text-align: left;
        }


        .timeline-card .timeline-meta {
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 34px;
        }


        .timeline-card .timeline-year {
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }


        .timeline-light-card .timeline-year {
          color: #3b4042;
        }


        .timeline-dark-card .timeline-year {
          color: #f29452;
        }


        .timeline-card .timeline-org {
          font-size: 12px;
          line-height: 1.5;
        }


        .timeline-light-card .timeline-org {
          color: #5c534e;
        }


        .timeline-dark-card .timeline-org {
          color: #d4cbc0;
        }


        .timeline-card .timeline-details h3 {
          margin: 0 0 20px;
          font-size: 25px;
          line-height: 1.2;
          transition: transform 0.3s ease;
        }


        .timeline-card:hover .timeline-details h3 {
          transform: translateX(3px);
        }


        .timeline-light-card .timeline-details h3 {
          color: #28221f;
        }


        .timeline-dark-card .timeline-details h3 {
          color: #f4efe6;
        }


        .timeline-card .timeline-details p {
          max-width: none;
          font-size: 14.5px;
          line-height: 1.75;
        }


        .timeline-light-card .timeline-details p {
          color: #4d4540;
        }


        .timeline-dark-card .timeline-details p {
          color: #d4cbc0;
        }


        .timeline-meta {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }


        .timeline-year {
          color: #f29452;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 0;
          text-transform: uppercase;
        }


        .timeline-org {
          color: #817870;
          font-size: 12px;
          line-height: 1.6;
        }


        .timeline-details h3 {
          margin: 0 0 8px;
          color: #28221f;
          font-size: 21px;
          font-weight: 750;
          transition: color 0.3s ease;
        }


        .timeline-row:hover .timeline-details h3 {
          color: #f29452;
        }


        .timeline-details p {
          max-width: 700px;
          margin: 0;
          color: #635b55;
          font-size: 13px;
          line-height: 1.7;
        }


        .about-bottom {
          margin-top: 110px;
          padding: 60px;
          background: #3b4042;
          color: #ffffff;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
          position: relative;
          overflow: hidden;
        }


        .about-bottom::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(242,148,82,0.25);
          border-radius: 50%;
          right: -100px;
          top: -100px;
        }


        .bottom-content {
          position: relative;
          z-index: 2;
          max-width: 650px;
        }


        .bottom-content .section-eyebrow {
          margin-bottom: 18px;
        }


        .bottom-content h2 {
          margin: 0;
          color: #faf6f0;
          font-family:
            Georgia,
            "Times New Roman",
            serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -1.5px;
        }


        .bottom-content p {
          max-width: 560px;
          margin: 20px 0 0;
          color: #aaa19a;
          font-size: 13px;
          line-height: 1.8;
        }


        .bottom-btn {
          height: 60px;
          min-width: 240px;
          padding: 6px 6px 6px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: #f29452;
          color: #28221f;
          text-decoration: none;
          position: relative;
          z-index: 2;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }


        .bottom-btn:hover {
          background: #ffffff;
          transform: translateY(-4px);
        }


        .bottom-btn-arrow {
          width: 47px;
          height: 47px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #28221f;
          color: #ffffff;
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease;
        }


        .bottom-btn:hover .bottom-btn-arrow {
          background: #f29452;
          color: #28221f;
          transform: rotate(45deg);
        }


        .bottom-btn:hover .bottom-btn-arrow svg {
          transform: rotate(-45deg);
        }


        @media (max-width: 1000px) {

          .about-hero-wrapper {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .profile-card {
            max-width: 600px;
          }

          .section-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .section-intro {
            text-align: left;
          }

          .timeline-wrapper {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

        }


        @media (max-width: 768px) {

          .about-detail-section {
            padding: 20px 20px 60px;
          }

          .about-hero-wrapper {
            padding-bottom: 65px;
            gap: 45px;
          }

          .hero-subtitle {
            font-size: 15px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.75;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            min-width: 0;
          }

          .section-block {
            padding-top: 70px;
          }

          .section-header {
            margin-bottom: 30px;
          }

          .section-subheading {
            font-size: 37px;
          }

          .timeline-wrapper {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .timeline-card {
            min-height: auto;
            padding: 32px 25px 25px;
          }

          .expertise-list {
            grid-template-columns: 1fr;
          }

          .expertise-row {
            padding: 24px 4px;
          }

          .expertise-content h3 {
            font-size: 16px;
          }

          .expertise-content p {
            font-size: 12px;
            line-height: 1.65;
          }

          .about-bottom {
            margin-top: 75px;
            padding: 40px 25px;
            flex-direction: column;
            align-items: stretch;
            gap: 35px;
          }

          .bottom-btn {
            width: 100%;
          }

        }


        @media (max-width: 480px) {

          .about-detail-section {
            padding: 16px 16px 45px;
          }

          .section-eyebrow {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .hero-badges {
            flex-direction: column;
          }

          .hero-badge {
            width: fit-content;
            font-size: 10px;
          }

          .profile-image-wrapper {
            height: 300px;
          }

          .profile-info {
            padding: 22px 20px;
          }

          .profile-name-row h3 {
            font-size: 18px;
          }

          .profile-stats {
            gap: 7px;
          }

          .profile-stat strong {
            font-size: 14px;
          }

          .profile-stat span {
            font-size: 7px;
          }

          .section-subheading {
            font-size: 32px;
          }

          .expertise-row {
            padding: 22px 2px;
          }

          .expertise-content h3 {
            font-size: 15px;
          }

          .expertise-content p {
            font-size: 11px;
          }

          .timeline-row {
            gap: 10px;
          }

          .timeline-year {
            font-size: 20px;
          }

          .timeline-org {
            font-size: 10px;
          }

          .timeline-details h3 {
            font-size: 15px;
          }

          .timeline-details p {
            font-size: 11px;
          }

          .about-bottom {
            padding: 35px 20px;
          }

          .bottom-content h2 {
            font-size: 34px;
          }

          .bottom-content p {
            font-size: 11px;
          }

        }


        @media (prefers-reduced-motion: reduce) {

          .profile-image,
          .profile-card,
          .expertise-row,
          .expertise-content h3,
          .timeline-row,
          .timeline-details h3,
          .primary-btn,
          .secondary-btn,
          .btn-arrow,
          .bottom-btn,
          .bottom-btn-arrow,
          .hero-badge {
            transition: none;
          }

        }

      `}</style>

    </section>
  );
}