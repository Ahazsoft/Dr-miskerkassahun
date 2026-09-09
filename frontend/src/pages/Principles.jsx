import React from 'react';
import { ArrowUpRight, Stethoscope, Users, Globe2, BookOpen } from 'lucide-react';
import '../styles/principles.css';

export default function Principles() {
  const principles = [
    {
      title: "Professional\nBackground",
      desc: "A medical doctor and public health expert with an MD from St. Paul's Hospital Millennium Medical College and an MPH from the Johns Hopkins Bloomberg School of Public Health.",
      target: '/principle-detail/professional-background',
      dark: false,
      icon: <Stethoscope size={40} strokeWidth={1.6} />,
    },

    {
      title: "Leadership &\nCommunity\nImpact",
      desc: "Co-founded GIV Society Ethiopia and launched projects through Ensight Global Consultancy to build trusting relationships, organize health fairs, and create opportunities for others.",
      target: '/principle-detail/leadership-community-impact',
      dark: true,
      icon: <Users size={40} strokeWidth={1.6} />,
    },

    {
      title: "Global\nAdvocacy &\nRepresentation",
      desc: "Represented Ethiopia on international pageant stages to advocate for mental health, health equity, and vibrant African stories.",
      target: '/principle-detail/global-advocacy-representation',
      dark: false,
      icon: <Globe2 size={40} strokeWidth={1.6} />,
    },

    {
      title: "Personal\nPassions &\nCulture",
      desc: "A bookworm who loves psychological thrillers, coffee-fueled conversations, event curation, traditional Ethiopian feasts, and serving as a proud ambassador of Ethiopian culture.",
      target: '/principle-detail/personal-passions-culture',
      dark: true,
      icon: <BookOpen size={40} strokeWidth={1.6} />,
    },
  ];

  return (
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
            return (
              <article
                key={idx}
                className={`principle-card ${
                  item.dark ? 'dark-card' : 'light-card'
                }`}
              >

                {/* Card Content */}
                <div className="card-content">

                  {/* Icon */}
                  <div
                    className="icon-wrapper"
                    style={{
                      background: 'transparent',
                      padding: 0,
                      marginBottom: '18px',
                      color: '#f29452',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4>
                    {item.title.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < item.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h4>

                  {/* Description */}
                  <p>{item.desc}</p>
                </div>

                {/* Bottom Link */}
                <a
                  href={item.target}
                  className="card-bottom"
                >
                  <span>Learn more</span>

                  <div className="arrow-wrapper">
                    <ArrowUpRight
                      size={19}
                      strokeWidth={2}
                    />
                  </div>
                </a>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}