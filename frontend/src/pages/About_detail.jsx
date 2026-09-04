import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/about.png';
import '../styles/aboutDetail.css';
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


         <Link
            to="/contact"
            className="bottom-btn"
          >
            <span>
              Start a Conversation
            </span>
            <span className="bottom-btn-arrow">
              <ArrowUpRight size={20} strokeWidth={2} />
            </span>
          </Link>

        </div>

      </div>


     
    </section>
  );
}