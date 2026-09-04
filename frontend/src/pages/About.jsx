import React from 'react';
import img1 from '../assets/images/img2.jpg';
import Principles from './Principles';
import '../styles/about.css';
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

              <div className="about-orange-box">
                <span>
                  Medical Doctor
                  <br />
                  Public Health
                  <br />
                  Community Builder
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Principles />

    </>
  );
}