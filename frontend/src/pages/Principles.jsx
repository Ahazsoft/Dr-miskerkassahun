import React from 'react';
import { Stethoscope, Users, Globe, BookOpen, ArrowUpRight } from 'lucide-react';

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

      <style>{`
        * {
          box-sizing: border-box;
        }

        .principles-section {
          width: 100%;
          min-height: 100vh;
          background: white;
          padding: 110px 32px;
          overflow: hidden;
        }

        .principles-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }


        .principles-heading {
          width: 100%;
          margin-bottom: 55px;
          position: relative;
        }

        .section-eyebrow {
          display: inline-block;
          color: #f29452;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 14px;
        }

        .principles-heading h3 {
          margin: 0;
          color: #28221f;
          font-size: clamp(36px, 4vw, 50px);
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .principles-heading p {
          max-width: 650px;
          margin: 20px 0 0;
          color: #5c534e;
          font-size: 15px;
          line-height: 1.75;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 25px;
          align-items: stretch;
        }

        .principle-card {
          position: relative;
          min-height: 450px;
          padding: 34px 28px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;

          clip-path: polygon(
            0 0,
            100% 0,
            100% 93%,
            93% 100%,
            0 100%
          );

          box-shadow:
            0 15px 30px rgba(0, 0, 0, 0.12);

          transition:
            transform 0.4s cubic-bezier(.2,.8,.2,1),
            box-shadow 0.4s ease,
            background-color 0.4s ease;
        }

        .principle-card:hover {
          transform: translateY(-12px);
          box-shadow:
            0 30px 50px rgba(0, 0, 0, 0.22);
        }

        /* subtle orange glow */
        /* orange bottom accent */
        .principle-card::after {
          content: "";
          position: absolute;
          width: 0;
          height: 4px;
          left: 0;
          bottom: 0;
          background: #f29452;
          transition: width 0.45s ease;
        }

        .principle-card:hover::after {
          width: 100%;
        }

        .light-card {
          background: #e9e3da;
          color: #28221f;
        }

        .dark-card {
          background: #3b4042;
          color: #f4efe6;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }
        .icon-wrapper {
          width: 54px;
          height: 54px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 34px;

          transition:
            transform 0.4s cubic-bezier(.2,.8,.2,1),
            background-color 0.3s ease;
        }

        .light-card .icon-wrapper {
          background: #3b4042;
          color: #f4efe6;
        }

        .dark-card .icon-wrapper {
          background: #f29452;
          color: #3b4042;
        }

        .principle-card:hover .icon-wrapper {
          transform: translateY(-5px) rotate(-5deg);
        }
        .principle-card h4 {
          position: relative;
          z-index: 2;

          margin: 0 0 20px;

          font-size: 25px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          white-space: pre-line;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .principle-card:hover h4 {
          transform: translateX(3px);
        }

        .light-card h4 {
          color: #28221f;
        }

        .dark-card h4 {
          color: #f4efe6;
        }

        .principle-card p {
          position: relative;
          z-index: 2;

          margin: 0;

          font-size: 14.5px;
          line-height: 1.75;

          transition: color 0.3s ease;
        }

        .light-card p {
          color: #4d4540;
        }

        .dark-card p {
          color: #d4cbc0;
        }

        .card-bottom {
          position: relative;
          z-index: 3;

          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 30px;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
        }

        .light-card .card-bottom {
          color: #5c534e;
        }

        .dark-card .card-bottom {
          color: #d4cbc0;
        }

        .arrow-wrapper {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          transition:
            transform 0.35s ease,
            background-color 0.35s ease,
            color 0.35s ease;
        }

        .light-card .arrow-wrapper {
          background: #3b4042;
          color: #fff;
        }

        .dark-card .arrow-wrapper {
          background: #f29452;
          color: #3b4042;
        }

        .principle-card:hover .arrow-wrapper {
          transform: rotate(45deg);
        }

        @media (max-width: 1100px) {

          .principles-section {
            padding: 90px 28px;
          }

          .principles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .principle-card {
            min-height: 420px;
          }

          .principle-card h4 {
            font-size: 27px;
          }

          .principle-card p {
            font-size: 15px;
          }
        }


        @media (max-width: 700px) {

          .principles-section {
            padding: 75px 20px;
          }

          .principles-heading {
            margin-bottom: 45px;
          }

          .principles-heading p {
            font-size: 14px;
            margin-top: 16px;
          }

          .principles-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .principle-card {
            min-height: auto;
            padding: 32px 25px 25px;
          }

          .icon-wrapper {
            width: 52px;
            height: 52px;
            margin-bottom: 28px;
          }

          .principle-card h4 {
            font-size: 28px;
            margin-bottom: 18px;
          }

          .principle-card p {
            font-size: 15px;
            line-height: 1.7;
          }

          .card-bottom {
            margin-top: 40px;
          }

          /*
            Disable large movement on touch screens
            so the cards don't feel jumpy.
          */
          .principle-card:hover {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 420px) {

          .principles-section {
            padding: 60px 15px;
          }

          .principles-heading {
            margin-bottom: 35px;
          }

          .principles-heading p {
            font-size: 13.5px;
            line-height: 1.65;
          }

          .principles-grid {
            gap: 16px;
          }

          .principle-card {
            padding: 28px 21px 22px;
          }

          .icon-wrapper {
            width: 48px;
            height: 48px;
            margin-bottom: 25px;
          }

          .principle-card h4 {
            font-size: 24px;
            line-height: 1.2;
          }

          .principle-card p {
            font-size: 14px;
            line-height: 1.7;
          }

          .card-bottom {
            margin-top: 32px;
            font-size: 10px;
          }

          .arrow-wrapper {
            width: 38px;
            height: 38px;
          }
        }

        @media (prefers-reduced-motion: reduce) {

          .principle-card,
          .principle-card *,
          .principle-card::before,
          .principle-card::after {
            transition: none !important;
          }

          .principle-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}