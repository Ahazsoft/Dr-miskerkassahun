import React, { useState } from 'react';

import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <section className="contact-page">
        <div className="contact-wrapper">

          <div className="contact-header">
            <span className="gallery-eyebrow">CONTACT ME</span>

            <h1>Let&apos;s Connect</h1>

            <p>
              Whether you have a project, collaboration opportunity,
              speaking invitation, or simply want to say hello,
              I'd love to hear from you.
            </p>
          </div>

          <div className="contact-grid">

            <div className="form-card">
              <div className="form-heading">
                <div>
                  <h2>Send a Message</h2>
                  <p>Tell me a little about what you have in mind.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="field-group">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="two-fields">
                  <div className="field-group">
                    <label htmlFor="email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="field-group">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+251 ..."
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="service">
                    Service / Reason for Contact
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="consulting">
                      Healthcare Consulting
                    </option>

                    <option value="promotion">
                      Digital Promotion
                    </option>

                    <option value="speaking">
                      Public Speaking
                    </option>

                    <option value="events">
                      Event Planning & Management
                    </option>

                    <option value="collaboration">
                      Collaboration
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="field-group">
                  <label htmlFor="message">
                    Your Message <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell me about your project, idea, event, or inquiry..."
                    required
                  ></textarea>
                </div>

                {submitted && (
                  <div className="success-message">
                    <CheckCircle2 size={22} />
                    <span>
                      Thank you! Your message has been received.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                >
                  <span className="submit-text">
                    Send Message
                  </span>

                  <span className="submit-icon">
                    <ArrowUpRight
                      size={23}
                      strokeWidth={2.2}
                    />
                  </span>
                </button>
              </form>
            </div>

            <div className="contact-side">

              <div className="info-card">
                <div className="info-decoration"></div>
                <div className="info-decoration-small"></div>

                <div className="info-top">
                  <span className="availability">
                    AVAILABLE FOR COLLABORATION
                  </span>
                </div>

                <h2>
                  Let's create
                  <br />
                  something <span>meaningful.</span>
                </h2>

                <p className="info-intro">
                  I'm open to meaningful collaborations,
                  professional opportunities, speaking engagements,
                  public health initiatives, and creative projects.
                </p>

                <div className="contact-details">

                  <div className="contact-detail">
                    <div className="detail-icon">
                      <MapPin size={21} />
                    </div>

                    <div>
                      <span className="detail-label">
                        Location
                      </span>

                      <p>
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="detail-icon">
                      <Mail size={21} />
                    </div>

                    <div>
                      <span className="detail-label">
                        Email
                      </span>

                      <p>
                        example@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="detail-icon">
                      <Phone size={21} />
                    </div>

                    <div>
                      <span className="detail-label">
                        Phone
                      </span>

                      <p>
                        +251 9XX XXX XXX
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <div className="detail-icon">
                      <Clock size={21} />
                    </div>

                    <div>
                      <span className="detail-label">
                        Availability
                      </span>

                      <p>
                        Monday – Friday
                        <br />
                        9:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="social-card">
                <div className="social-content">
                  <span className="social-label">
                    FOLLOW THE JOURNEY
                  </span>

                  <h3>
                    Stay Connected
                  </h3>
                </div>

                <div className="social-links">

                  <a
                    href="#"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="#"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    aria-label="X"
                    title="X"
                  >
                    <FaXTwitter />
                  </a>

                </div>
              </div>

            </div>
          </div>

          <div className="contact-bottom">
            <div className="bottom-line"></div>

            <p>
              Have an idea? Let's turn it into impact.
            </p>

            <ArrowUpRight
              size={22}
              strokeWidth={2}
            />
          </div>

        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          padding: 150px 40px 100px;
          overflow-x: hidden;
          color: #28221f;
        }

        .contact-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          width: 100%;
          max-width: 850px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .gallery-eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #f29452;
        }

        .contact-header h1 {
          margin: 0;
          font-size: clamp(36px, 4vw, 50px);
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -2px;
          color: #28221f;
        }

        .contact-header > p {
          max-width: 680px;
          margin: 20px auto 0;
          font-size: 16px;
          line-height: 1.75;
          color: #5c534e;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
          gap: 30px;
          align-items: stretch;
        }

        .form-card {
          background: #faf6f0;
          padding: 50px;
          border: 1px solid rgba(40, 34, 31, 0.08);
          box-shadow: 0 25px 70px rgba(40, 34, 31, 0.07);
        }

        .form-heading {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 42px;
        }

        .form-heading h2 {
          margin: 0 0 8px;
          font-size: 34px;
          line-height: 1.1;
          font-weight: 750;
          color: #28221f;
        }

        .form-heading p {
          margin: 0;
          font-size: 16px;
          color: #817872;
          line-height: 1.5;
        }

        .field-group {
          margin-bottom: 27px;
        }

        .field-group label {
          display: block;
          margin-bottom: 10px;
          font-size: 14px;
          font-weight: 700;
          color: #3e3733;
        }

        .field-group label span {
          color: #f29452;
        }

        .field-group input,
        .field-group textarea,
        .field-group select {
          width: 100%;
          border: 1px solid #d8d1cb;
          background: #fffdfb;
          border-radius: 4px;
          padding: 16px 17px;
          font-family: inherit;
          font-size: 16px;
          color: #28221f;
          outline: none;
          transition: border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .field-group input {
          height: 58px;
        }

        .field-group select {
          height: 58px;
          cursor: pointer;
        }

        .field-group textarea {
          min-height: 175px;
          resize: vertical;
          line-height: 1.6;
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: #a59c96;
        }

        .field-group input:focus,
        .field-group textarea:focus,
        .field-group select:focus {
          border-color: #f29452;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(242, 148, 82, 0.12);
        }

        .two-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          padding: 16px 18px;
          background: #eef7f1;
          color: #28734b;
          font-size: 15px;
          font-weight: 600;
        }

        .submit-btn {
          width: 100%;
          height: 68px;
          border: none;
          background: #28221f;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 8px 8px 28px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s ease,
            transform 0.3s ease;
        }

        .submit-btn:hover {
          background: #f29452;
          transform: translateY(-3px);
        }

        .submit-text {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .submit-text {
          transform: translateX(6px);
        }

        .submit-icon {
          width: 52px;
          height: 52px;
          background: #f29452;
          color: #28221f;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease,
            transform 0.3s ease;
        }

        .submit-btn:hover .submit-icon {
          background: #ffffff;
          transform: rotate(45deg);
        }

        .contact-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-card {
          position: relative;
          flex: 1;
          background: #464b50;
          color: #ffffff;
          padding: 48px;
          overflow: hidden;
          clip-path: polygon(
            0 0,
            calc(100% - 30px) 0,
            100% 30px,
            100% 100%,
            30px 100%,
            0 calc(100% - 30px)
          );
        }

        .info-decoration {
          position: absolute;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(242, 148, 82, 0.2);
          border-radius: 50%;
          right: -100px;
          top: -100px;
        }

        .info-decoration-small {
          position: absolute;
          width: 100px;
          height: 100px;
          background: rgba(242, 148, 82, 0.08);
          border-radius: 50%;
          right: 30px;
          bottom: 30px;
        }

        .info-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 50px;
        }

        .availability {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #d6d1cd;
          text-align: right;
        }

        .info-card h2 {
          position: relative;
          z-index: 2;
          margin: 0 0 24px;
          font-size: clamp(36px, 4vw, 52px);
          line-height: 1.05;
          letter-spacing: -2px;
          font-weight: 750;
        }

        .info-card h2 span {
          color: #f29452;
        }

        .info-intro {
          position: relative;
          z-index: 2;
          max-width: 470px;
          margin: 0 0 42px;
          color: #d8d4d0;
          font-size: 16px;
          line-height: 1.7;
        }

        .contact-details {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .detail-icon {
          width: 45px;
          height: 45px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(242, 148, 82, 0.15);
          color: #f29452;
        }

        .detail-label {
          display: block;
          margin-bottom: 5px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: #bcb6b1;
        }

        .contact-detail p {
          margin: 0;
          color: #ffffff;
          font-size: 16px;
          line-height: 1.5;
        }

        .social-card {
          min-height: 155px;
          background: #f29452;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0 100%
          );
        }

        .social-content {
          min-width: 0;
        }

        .social-label {
          display: block;
          margin-bottom: 7px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #5c3824;
        }

        .social-card h3 {
          margin: 0;
          font-size: 30px;
          line-height: 1.1;
          color: #28221f;
          font-weight: 800;
        }

        .social-links {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          flex-wrap: nowrap;
          width: auto;
          flex-shrink: 0;
        }

        .social-links a {
          width: 46px;
          height: 46px;
          min-width: 46px;
          flex: 0 0 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #28221f;
          color: #ffffff;
          text-decoration: none;
          transition: transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .social-links a svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .social-links a:hover {
          background: #ffffff;
          color: #28221f;
          transform: translateY(-5px);
        }

        .contact-bottom {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 75px;
        }

        .bottom-line {
          width: 70px;
          height: 2px;
          background: #f29452;
        }

        .contact-bottom p {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #625a55;
        }

        .contact-bottom svg {
          color: #f29452;
        }

        @media (max-width: 1050px) {
          .contact-page {
            padding: 130px 30px 80px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-side {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .info-card {
            min-height: 650px;
          }

          .social-card {
            min-height: 650px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-end;
          }

          .social-links {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            width: auto;
            margin-top: 20px;
          }
        }

        @media (max-width: 700px) {
          .contact-page {
            padding: 110px 18px 65px;
          }

          .contact-header {
            margin-bottom: 50px;
          }

          .contact-header > p {
            margin-top: 23px;
            font-size: 16px;
            line-height: 1.65;
          }

          .contact-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .form-card {
            padding: 30px 20px;
          }

          .form-heading {
            gap: 13px;
            margin-bottom: 32px;
          }

          .form-heading h2 {
            font-size: 27px;
          }

          .form-heading p {
            font-size: 14px;
          }

          .two-fields {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .field-group {
            margin-bottom: 23px;
          }

          .field-group label {
            font-size: 14px;
          }

          .field-group input,
          .field-group select {
            height: 56px;
            font-size: 15px;
          }

          .field-group textarea {
            min-height: 160px;
            font-size: 15px;
          }

          .submit-btn {
            height: 62px;
            padding-left: 20px;
            font-size: 11px;
            letter-spacing: 1.4px;
          }

          .submit-icon {
            width: 46px;
            height: 46px;
          }

          .contact-side {
            display: flex;
            flex-direction: column;
          }

          .info-card {
            min-height: auto;
            padding: 32px 25px 40px;
            clip-path: polygon(
              0 0,
              calc(100% - 20px) 0,
              100% 20px,
              100% 100%,
              20px 100%,
              0 calc(100% - 20px)
            );
          }

          .info-top {
            margin-bottom: 38px;
          }

          .availability {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .info-card h2 {
            font-size: 39px;
            letter-spacing: -1.5px;
          }

          .info-intro {
            font-size: 15px;
            margin-bottom: 32px;
          }

          .contact-details {
            gap: 22px;
          }

          .detail-icon {
            width: 41px;
            height: 41px;
          }

          .contact-detail p {
            font-size: 15px;
          }

          .social-card {
            min-height: 120px;
            padding: 22px 18px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
          }

          .social-label {
            font-size: 8px;
            letter-spacing: 1px;
          }

          .social-card h3 {
            font-size: 23px;
          }

          .social-links {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 6px;
            flex-wrap: nowrap;
            margin-top: 0;
            width: auto;
            flex-shrink: 0;
          }

          .social-links a {
            width: 40px;
            height: 40px;
            min-width: 40px;
            flex: 0 0 40px;
          }

          .social-links a svg {
            width: 16px;
            height: 16px;
          }

          .contact-bottom {
            margin-top: 50px;
            gap: 12px;
          }

          .contact-bottom p {
            font-size: 14px;
          }

          .bottom-line {
            width: 40px;
          }
        }

        @media (max-width: 480px) {
          .social-card {
            padding: 20px 14px;
            gap: 6px;
          }

          .social-label {
            font-size: 7px;
            letter-spacing: 0.8px;
          }

          .social-card h3 {
            font-size: 20px;
          }

          .social-links {
            gap: 4px;
          }

          .social-links a {
            width: 36px;
            height: 36px;
            min-width: 36px;
            flex: 0 0 36px;
          }

          .social-links a svg {
            width: 14px;
            height: 14px;
          }
        }

        @media (max-width: 380px) {
          .social-card {
            padding: 18px 10px;
          }

          .social-card h3 {
            font-size: 18px;
          }

          .social-links {
            gap: 3px;
          }

          .social-links a {
            width: 33px;
            height: 33px;
            min-width: 33px;
            flex: 0 0 33px;
          }

          .social-links a svg {
            width: 13px;
            height: 13px;
          }
        }
      `}</style>
    </>
  );
}