import React from 'react';
import { Stethoscope, Users, Globe, BookOpen } from 'lucide-react';

export default function Principles() {
  const principles = [
    {
      title: "Professional\nBackground",
      desc: "A medical doctor and public health expert with an MD from St. Paul's Hospital Millennium Medical College and an MPH from the Johns Hopkins Bloomberg School of Public Health.",
      dark: false,
      icon: Stethoscope,
      label: "",
      height: "460px",
    },
    {
      title: "Leadership &\nCommunity\nImpact",
      desc: "Co-founded GIV Society Ethiopia and launched projects through Ensight Global Consultancy to build trusting relationships, organize health fairs, and create opportunities for others.",
      dark: true,
      icon: Users,
      label: "",
      height: "490px",
    },
    {
      title: "Global\nAdvocacy &\nRepresentation",
      desc: "Represented Ethiopia on international pageant stages to advocate for mental health, health equity, and vibrant African stories.",
      dark: false,
      label: "",
      icon: Globe,
      height: "450px",
    },
    {
      title: "Personal\nPassions &\nCulture",
      desc: "A bookworm who loves psychological thrillers, coffee-fueled conversations, event curation, traditional Ethiopian feasts, and serving as a proud ambassador of Ethiopian culture.",
      dark: true,
      icon: BookOpen,
      label: "",
      height: "480px",
    }
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '96px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* Section Heading */}
        <div style={{
          width: '100%',
          borderTop: 'none',
          border: 'none',
          paddingTop: '0px',
          marginBottom: '64px',
          textAlign: 'left'
        }}>
          <h3 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#28221f',
            letterSpacing: '-0.025em',
            margin: 0
          }}>
            Core Principles
          </h3>
        </div>

        {/* Boxes Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '24px',
          width: '100%',
          alignItems: 'start'
        }}>
          {principles.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: item.height,
                  backgroundColor: item.dark ? '#3b4042' : '#e9e3da',
                  color: item.dark ? '#f4efe6' : '#28221f',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 93%, 93% 100%, 0 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '28px 24px 36px 24px',
                  boxSizing: 'border-box'
                }}
              >
                <div>
                  {/* Top Icon and Label row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '32px'
                  }}>
                    <div style={{
                      padding: '10px',
                      backgroundColor: item.dark ? '#f29452' : '#3b4042',
                      color: item.dark ? '#3b4042' : '#f4efe6',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '-4px',
                      marginTop: '-4px'
                    }}>
                      <IconComponent style={{ width: '18px', height: '18px' }} />
                    </div>
                    {item.label && (
                      <span style={{
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        fontWeight: 'bold',
                        color: item.dark ? '#f29452' : '#7a7067',
                        marginTop: '-2px'
                      }}>
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2',
                    whiteSpace: 'pre-line'
                  }}>
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.65',
                    color: item.dark ? '#c8bfb5' : '#5c534e',
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}