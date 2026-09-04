import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/services.css';
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

     
    </>
  );
}