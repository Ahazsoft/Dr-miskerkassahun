import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import professionalImage from '../assets/images/img1.jpg';
import leadershipImage from '../assets/images/img5.jpg';
import advocacyImage from '../assets/images/public_speaking.jpg';
import cultureImage from '../assets/images/img3.jpg';

const principleContent = {
  'professional-background': {
    title: 'Professional Background',
    label: 'Medicine & public health',
    image: professionalImage,
    summary: 'Clinical training and public health strategy working together to create practical, people-centered solutions.',
    details: [
      'Dr. Misker Kassahun began her journey with a Doctor of Medicine from St. Paul\'s Hospital Millennium Medical College.',
      'Her Master of Public Health from Johns Hopkins Bloomberg School of Public Health expanded that clinical foundation into health systems, policy, and population-level impact.'
    ]
  },
  'leadership-community-impact': {
    title: 'Leadership & Community Impact',
    label: 'Service & collaboration',
    image: leadershipImage,
    summary: 'Building trusted communities and turning shared ideas into programs that create opportunity.',
    details: [
      'As Co-Founder of GIV Society Ethiopia, Dr. Misker has helped create platforms for volunteerism, youth development, and community service.',
      'Through Ensight Global Consultancy, she supports organizations with strategic communication, project leadership, and solutions designed for lasting impact.'
    ]
  },
  'global-advocacy-representation': {
    title: 'Global Advocacy & Representation',
    label: 'Voice & visibility',
    image: advocacyImage,
    summary: 'Using international platforms to make mental health, health equity, and African stories impossible to overlook.',
    details: [
      'Dr. Misker has represented Ethiopia through Miss Africa, Miss Supranational Ethiopia, and Miss University Africa.',
      'Her advocacy connects public visibility with meaningful conversations about mental wellbeing, youth empowerment, and equitable access to health.'
    ]
  },
  'personal-passions-culture': {
    title: 'Personal Passions & Culture',
    label: 'Curiosity & identity',
    image: cultureImage,
    summary: 'The interests, conversations, and cultural roots that keep the work grounded and human.',
    details: [
      'Away from professional commitments, Dr. Misker enjoys psychological thrillers, coffee-fueled conversations, and event curation.',
      'Traditional Ethiopian feasts and cultural storytelling remain important ways she celebrates identity and shares a proud, vibrant vision of Ethiopia.'
    ]
  }
};

export default function PrincipleDetail() {
  const { slug } = useParams();
  const content = principleContent[slug] || principleContent['professional-background'];
  return (
    <main className="principle-detail-page">
      <div className="principle-detail-container">
        <Link to="/about" className="principle-back-link">
          <ArrowLeft size={18} />
          Back to principles
        </Link>

        <section className="principle-detail-hero">
          <div className="principle-detail-copy">
            <span className="principle-detail-label">{content.label}</span>
            <h1>{content.title}</h1>
            <p className="principle-detail-summary">{content.summary}</p>

            <div className="principle-detail-body">
              {content.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </div>

          <div className="principle-detail-mark">
            <img
              src={content.image}
              alt={content.title}
              className="principle-detail-image"
            />
          </div>
        </section>

        <Link to="/contact" className="principle-detail-action">
          <span>Start a conversation</span>
          <span className="principle-detail-arrow">
            <ArrowUpRight size={19} />
          </span>
        </Link>
      </div>

      <style>{`
        .principle-detail-page {
          min-height: 100vh;
          padding: 145px 32px 100px;
          background: #ffffff;
          color: #28221f;
        }

        .principle-detail-container {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
        }

        .principle-back-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #3b4042;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .principle-detail-hero {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 330px;
          gap: 0;
          align-items: stretch;
          margin-top: 65px;
          background: #faf6f0;
          clip-path: polygon(0 0, 100% 0, 100% 94%, 96% 100%, 0 100%);
          box-shadow: 0 18px 40px rgba(40,34,31,0.08);
        }

        .principle-detail-copy {
          max-width: 720px;
          padding: 65px 70px 75px;
        }

        .principle-detail-label {
          color: #f29452;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .principle-detail-copy h1 {
          max-width: 700px;
          margin: 18px 0 24px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 6vw, 78px);
          font-weight: 400;
          line-height: 0.98;
        }

        .principle-detail-summary {
          max-width: 650px;
          margin: 0;
          color: #5c534e;
          font-size: 20px;
          line-height: 1.6;
        }

        .principle-detail-body {
          max-width: 650px;
          margin-top: 38px;
        }

        .principle-detail-body p {
          margin: 0 0 18px;
          color: #716861;
          font-size: 15px;
          line-height: 1.85;
        }

        .principle-detail-mark {
          position: relative;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 18px;
          overflow: hidden;
          background: #3b4042;
          color: #f29452;
          clip-path: polygon(14% 0, 100% 0, 100% 94%, 86% 100%, 0 100%, 0 8%);
        }


        .principle-detail-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .principle-detail-action {
          display: inline-flex;
          align-items: center;
          gap: 25px;
          margin-top: 32px;
          color: #ffffff;
          background: #28221f;
          padding: 6px 6px 6px 23px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .principle-detail-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: #f29452;
          color: #28221f;
          transition: transform 0.35s ease;
        }

        .principle-detail-action:hover .principle-detail-arrow {
          transform: rotate(45deg);
        }

        @media (max-width: 700px) {
          .principle-detail-page {
            padding: 120px 20px 70px;
          }

          .principle-detail-hero {
            display: block;
            margin-top: 60px;
          }

          .principle-detail-copy {
            padding: 42px 25px 50px;
          }

          .principle-detail-copy h1 {
            font-size: 52px;
          }

          .principle-detail-summary {
            font-size: 17px;
          }

          .principle-detail-mark {
            min-height: 150px;
            padding: 0;
            clip-path: none;
          }

          .principle-detail-image {
            height: 100%;
          }
        }
      `}</style>
    </main>
  );
}
