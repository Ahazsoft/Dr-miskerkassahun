import React from 'react';
import { Stethoscope, Users, Globe, BookOpen, ArrowUpRight } from 'lucide-react';
import '../styles/principles.css';
export default function Principles() {
  const principles = [
    {
      title: "Professional\nBackground",
      desc: "A medical doctor and public health expert with an MD from St. Paul's Hospital Millennium Medical College and an MPH from the Johns Hopkins Bloomberg School of Public Health.",
      target: '/principle-detail/professional-background',
      dark: false,
      icon: Stethoscope,
    },
    {
      title: "Leadership &\nCommunity\nImpact",
      desc: "Co-founded GIV Society Ethiopia and launched projects through Ensight Global Consultancy to build trusting relationships, organize health fairs, and create opportunities for others.",
      target: '/principle-detail/leadership-community-impact',
      dark: true,
      icon: Users,
    },
    {
      title: "Global\nAdvocacy &\nRepresentation",
      desc: "Represented Ethiopia on international pageant stages to advocate for mental health, health equity, and vibrant African stories.",
      target: '/principle-detail/global-advocacy-representation',
      dark: false,
      icon: Globe,
    },
    {
      title: "Personal\nPassions &\nCulture",
      desc: "A bookworm who loves psychological thrillers, coffee-fueled conversations, event curation, traditional Ethiopian feasts, and serving as a proud ambassador of Ethiopian culture.",
      target: '/principle-detail/personal-passions-culture',
      dark: true,
      icon: BookOpen,
    }
  ];

  return (
    <>
      <section className="principles-section">
        <div className="principles-container">

          {/* Heading */}
          <div className="principles-heading">
            <span className="section-eyebrow">CORE PRINCIPLES</span>

            <h3>Core Principles</h3>

            <p>
              The values, experiences, and passions that shape my work
              and the impact I strive to create.
            </p>
          </div>

          {/* Cards */}
          <div className="principles-grid">
            {principles.map((item, idx) => {
              const IconComponent = item.icon;

              return (
                <article
                  key={idx}
                  className={`principle-card ${
                    item.dark ? 'dark-card' : 'light-card'
                  }`}
                >

                  {/* Top */}
                  <div className="card-content">

                    {/* Icon */}
                    <div className="icon-wrapper">
                      <IconComponent size={22} strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h4>{item.title}</h4>

                    {/* Description */}
                    <p>{item.desc}</p>
                  </div>

                  {/* Bottom arrow */}
                  <a href={item.target} className="card-bottom">
                    <span>Learn more</span>

                    <div className="arrow-wrapper">
                      <ArrowUpRight size={19} strokeWidth={2} />
                    </div>
                  </a>

                </article>
              );
            })}
          </div>

        </div>
      </section>

     
    </>
  );
}