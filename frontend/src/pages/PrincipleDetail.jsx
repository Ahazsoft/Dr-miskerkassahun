import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import professionalImage from '../assets/images/educ.jpg';
import leadershipImage from '../assets/images/img1.jpg';
import advocacyImage from '../assets/images/miss_afri.jpg';
import cultureImage from '../assets/images/img1.jpg';

import '../styles/principleDetail.css';
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

    
    </main>
  );
}
