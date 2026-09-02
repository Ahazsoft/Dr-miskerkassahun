import React from 'react';
import img1 from '../assets/images/img2.jpg';
import Principles from './Principles';

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          
          <div className="about-content">
            <h2 className="about-title">
              Hello!
            </h2>
            <p className="about-text">
              I'm Dr. Misker Kassahun — but feel free to call me Mika.
              I'm a medical doctor, public health professional, and
              community builder who believes that real change happens
              when compassion meets action. Whether I'm designing public
              health solutions, co-founding initiatives like GIV Society
              Ethiopia, or sharing the richness of Ethiopian culture with
              the world, my goal is always to build trust and create
              opportunities for others to shine.
            </p>
          </div>

          <div className="about-image-section">
            <div className="about-image-frame">
              <div className="about-grey-box"></div>
              <div className="about-image-wrapper">
                <img
                  src={img1}
                  alt="Dr. Misker Kassahun"
                  className="about-image"
                />
              </div>
              <div className="about-orange-box"></div>
            </div>
          </div>

        </div>
      </section>

      <Principles />

      {/* Let's Connect Section */}
      <section className="connect-section">
        <div className="connect-container">
          <h2 className="connect-title">Let's connect.</h2>
          <a href="#contact" className="connect-button">
            Initiate Contact <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <style>{`
        .about-section {
          width: 100%;
          min-height: 100vh;
          background: #faf6f0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          padding-top: 120px !important;
          padding-bottom: 100px !important;
          padding-left: 80px !important;
          padding-right: 80px !important;
          overflow: hidden;
        }

        .about-container {
          width: 100%;
          max-width: 1152px;
          margin-left: auto !important;
          margin-right: auto !important;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .about-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left !important;
        }

        .about-title {
          width: 100%;
          margin: 0 0 24px 0 !important;
          padding: 0 !important;
          color: #28221f;
          font-size: 60px;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -1.5px;
          text-align: left !important;
        }

        .about-text {
          width: 100%;
          max-width: 620px;
          margin: 0 !important;
          padding: 0 !important;
          color: #5c534e;
          font-size: 18px;
          line-height: 1.75;
          font-weight: 400;
          text-align: left !important;
        }

        .about-image-section {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .about-image-frame {
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 4 / 4.8;
        }

        .about-grey-box {
          position: absolute;
          top: 0;
          right: 0;
          width: 88%;
          height: 88%;
          background: #b5b0aa;
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            15% 100%,
            0 85%
          );
        }

        .about-image-wrapper {
          position: absolute;
          top: 24px;
          left: 24px;
          width: 88%;
          height: 88%;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          filter: grayscale(100%) contrast(125%);
        }

        .about-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: top center;
        }

        .about-orange-box {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 96px;
          height: 96px;
          background: #f29452;
          clip-path: polygon(
            0 0,
            100% 0,
            100% 85%,
            85% 100%,
            0 100%
          );
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        /* Let's Connect Section Styles */
        .connect-section {
          width: 100%;
          background: #faf6f0;
          padding: 80px 80px 100px 80px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
        }

        .connect-container {
          width: 100%;
          max-width: 1152px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(40, 34, 31, 0.1);
          padding-top: 60px;
        }

        .connect-title {
          color: #28221f;
          font-size: 50px;
          font-weight: 700;
          letter-spacing: -1.2px;
          margin: 0;
        }

        .connect-button {
          background: #4a5056;
          color: #ffffff;
          padding: 16px 28px;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          clip-path: polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%);
          transition: background 0.2s ease;
        }

        .connect-button:hover {
          background: #3b4045;
        }

        .arrow {
          font-size: 18px;
        }

        @media (max-width: 1024px) {
          .about-section {
            padding-left: 50px !important;
            padding-right: 50px !important;
            padding-top: 110px !important;
            padding-bottom: 80px !important;
          }
          .about-container {
            gap: 50px;
          }
          .about-title {
            font-size: 52px;
          }
          .about-text {
            font-size: 17px;
            line-height: 1.7;
          }
          .connect-section {
            padding: 60px 50px 80px 50px;
          }
          .connect-title {
            font-size: 40px;
          }
        }

        @media (max-width: 767px) {
          .about-section {
            width: 100% !important;
            min-height: auto !important;
            display: block !important;
            padding-top: 110px !important;
            padding-bottom: 70px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            box-sizing: border-box !important;
          }
          .about-container {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 55px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .about-content {
            width: 100% !important;
            display: block !important;
            text-align: left !important;
          }
          .about-title {
            width: 100% !important;
            margin: 0 0 18px 0 !important;
            padding: 0 !important;
            font-size: 40px !important;
            line-height: 1.1 !important;
            letter-spacing: -0.8px !important;
            text-align: left !important;
          }
          .about-text {
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 15px !important;
            line-height: 1.75 !important;
            text-align: left !important;
          }
          .about-image-section {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 0 !important;
          }
          .about-image-frame {
            width: 100% !important;
            max-width: 340px !important;
            aspect-ratio: 4 / 4.8 !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .about-grey-box {
            width: 88% !important;
            height: 88% !important;
          }
          .about-image-wrapper {
            top: 18px !important;
            left: 18px !important;
            width: 88% !important;
            height: 88% !important;
          }
          .about-orange-box {
            width: 70px !important;
            height: 70px !important;
          }
          .connect-section {
            padding: 40px 24px 60px 24px;
          }
          .connect-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
            padding-top: 40px;
          }
          .connect-title {
            font-size: 36px;
          }
        }

        @media (max-width: 400px) {
          .about-section {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 100px !important;
          }
          .about-title {
            font-size: 36px !important;
            margin-bottom: 16px !important;
          }
          .about-text {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }
          .about-container {
            gap: 45px !important;
          }
          .about-image-frame {
            max-width: 310px !important;
          }
        }
      `}</style>
    </>
  );
}