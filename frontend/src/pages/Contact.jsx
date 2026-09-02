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

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="contact-header">

            <div className="contact-eyebrow">
              <span className="dot dot-orange"></span>
              <span className="dot dot-dark"></span>
              <span>Contact Me</span>
            </div>

            <h1>
              Let's <span>Connect</span>
            </h1>

            <p>
              Whether you have a project, collaboration opportunity,
              speaking invitation, or simply want to say hello,
              I'd love to hear from you.
            </p>

          </div>


          {/* =====================================================
              MAIN GRID
          ====================================================== */}

          <div className="contact-grid">

            {/* =================================================
                FORM
            ================================================== */}

            <div className="form-card">

              <div className="form-heading">

                <div>
                  <h2>
                    Send a Message
                  </h2>

                  <p>
                    Tell me a little about what you have in mind.
                  </p>
                </div>

              </div>


              <form onSubmit={handleSubmit}>

                {/* FULL NAME */}

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


                {/* EMAIL + PHONE */}

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


                {/* SERVICE */}

                <div className="field-group">

                  <label htmlFor="service">
                    Service / Reason for Contact
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                  >

                    <option
                      value=""
                      disabled
                    >
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


                {/* MESSAGE */}

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


                {/* SUCCESS */}

                {submitted && (
                  <div className="success-message">

                    <CheckCircle2 size={22} />

                    <span>
                      Thank you! Your message has been received.
                    </span>

                  </div>
                )}


                {/* SEND BUTTON */}

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


            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="contact-side">

              {/* ===============================================
                  INFORMATION CARD
              ================================================ */}

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


                {/* CONTACT DETAILS */}

                <div className="contact-details">

                  {/* LOCATION */}

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


                  {/* EMAIL */}

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


                  {/* PHONE */}

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


                  {/* AVAILABILITY */}

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


              {/* ===============================================
                  SOCIAL MEDIA
              ================================================ */}

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

                  {/* INSTAGRAM */}

                  <a
                    href="#"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>


                  {/* LINKEDIN */}

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>


                  {/* FACEBOOK */}

                  <a
                    href="#"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <FaFacebookF />
                  </a>


                  {/* X */}

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


          {/* =====================================================
              BOTTOM MESSAGE
          ====================================================== */}

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


      {/* =========================================================
          CSS
      ========================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =====================================================
           PAGE
        ====================================================== */

        .contact-page {
          width: 100%;
          min-height: 100vh;

          background: #faf6f0;

          padding:
            150px
            40px
            100px;

          overflow-x: hidden;

          color: #28221f;
        }


        .contact-wrapper {
          width: 100%;
          max-width: 1200px;

          margin: 0 auto;
        }


        /* =====================================================
           HEADER
        ====================================================== */

        .contact-header {
          width: 100%;
          max-width: 850px;

          margin:
            0 auto
            75px;

          text-align: center;
        }


        .contact-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          margin-bottom: 20px;

          font-size: 13px;
          font-weight: 700;

          letter-spacing: 2px;

          text-transform: uppercase;

          color: #746b65;
        }


        .dot {
          width: 9px;
          height: 9px;

          border-radius: 50%;

          display: inline-block;
        }


        .dot-orange {
          background: #f29452;
        }


        .dot-dark {
          background: #28221f;
        }


        .contact-header h1 {
          margin: 0;

          font-size:
            clamp(
              54px,
              7vw,
              88px
            );

          line-height: 0.95;

          font-weight: 800;

          letter-spacing: -4px;

          color: #28221f;
        }


        .contact-header h1 span {
          color: #f29452;
        }


        .contact-header > p {
          max-width: 680px;

          margin:
            30px auto
            0;

          font-size: 19px;

          line-height: 1.7;

          color: #6b625d;
        }


        /* =====================================================
           MAIN GRID
        ====================================================== */

        .contact-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.1fr)
            minmax(360px, 0.9fr);

          gap: 30px;

          align-items: stretch;
        }


        /* =====================================================
           FORM
        ====================================================== */

        .form-card {
          background: #ffffff;

          padding: 50px;

          border:
            1px solid
            rgba(
              40,
              34,
              31,
              0.08
            );

          box-shadow:
            0 25px 70px
            rgba(
              40,
              34,
              31,
              0.07
            );
        }


        .form-heading {
          display: flex;

          align-items: flex-start;

          gap: 20px;

          margin-bottom: 42px;
        }


        .small-number {
          min-width: 44px;

          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(
              40,
              34,
              31,
              0.18
            );

          border-radius: 50%;

          font-size: 13px;

          font-weight: 700;

          color: #f29452;
        }


        .form-heading h2 {
          margin:
            0 0
            8px;

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


        /* =====================================================
           FIELDS
        ====================================================== */

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

          border:
            1px solid
            #d8d1cb;

          background: #fffdfb;

          border-radius: 4px;

          padding:
            16px
            17px;

          font-family: inherit;

          font-size: 16px;

          color: #28221f;

          outline: none;

          transition:
            border-color
            0.25s ease,

            box-shadow
            0.25s ease,

            background
            0.25s ease;
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

          box-shadow:
            0 0 0 4px
            rgba(
              242,
              148,
              82,
              0.12
            );
        }


        .two-fields {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 20px;
        }


        /* =====================================================
           SUCCESS MESSAGE
        ====================================================== */

        .success-message {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 22px;

          padding:
            16px
            18px;

          background: #eef7f1;

          color: #28734b;

          font-size: 15px;

          font-weight: 600;
        }


        /* =====================================================
           SEND BUTTON
        ====================================================== */

        .submit-btn {
          width: 100%;

          height: 68px;

          border: none;

          background: #28221f;

          color: #ffffff;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            8px
            8px
            8px
            28px;

          font-family: inherit;

          font-size: 14px;

          font-weight: 800;

          letter-spacing: 1.8px;

          text-transform: uppercase;

          cursor: pointer;

          transition:
            background
            0.3s ease,

            transform
            0.3s ease;
        }


        .submit-btn:hover {
          background: #f29452;

          transform:
            translateY(-3px);
        }


        .submit-text {
          transition:
            transform
            0.3s ease;
        }


        .submit-btn:hover .submit-text {
          transform:
            translateX(6px);
        }


        .submit-icon {
          width: 52px;
          height: 52px;

          background: #f29452;

          color: #28221f;

          display: flex;

          align-items: center;
          justify-content: center;

          transition:
            background
            0.3s ease,

            transform
            0.3s ease;
        }


        .submit-btn:hover .submit-icon {
          background: #ffffff;

          transform:
            rotate(45deg);
        }


        /* =====================================================
           RIGHT SIDE
        ====================================================== */

        .contact-side {
          display: flex;

          flex-direction: column;

          gap: 20px;
        }


        /* =====================================================
           INFORMATION CARD
        ====================================================== */

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

          border:
            1px solid
            rgba(
              242,
              148,
              82,
              0.2
            );

          border-radius: 50%;

          right: -100px;
          top: -100px;
        }


        .info-decoration-small {
          position: absolute;

          width: 100px;
          height: 100px;

          background:
            rgba(
              242,
              148,
              82,
              0.08
            );

          border-radius: 50%;

          right: 30px;
          bottom: 30px;
        }


        .info-top {
          position: relative;

          z-index: 2;

          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 50px;
        }


        .small-number.light {
          border-color:
            rgba(
              255,
              255,
              255,
              0.25
            );

          color: #f29452;
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

          margin:
            0 0
            24px;

          font-size:
            clamp(
              36px,
              4vw,
              52px
            );

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

          margin:
            0 0
            42px;

          color: #d8d4d0;

          font-size: 16px;

          line-height: 1.7;
        }


        /* =====================================================
           CONTACT DETAILS
        ====================================================== */

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

          background:
            rgba(
              242,
              148,
              82,
              0.15
            );

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


        /* =====================================================
           SOCIAL CARD
        ====================================================== */

        .social-card {
          min-height: 155px;

          background: #f29452;

          padding:
            28px
            32px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            0 100%
          );
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


        /* =====================================================
           SOCIAL ICONS
        ====================================================== */

        .social-links {
          display: flex;

          gap: 9px;

          flex-wrap: wrap;
        }


        .social-links a {
          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;
          justify-content: center;

          background: #28221f;

          color: #ffffff;

          text-decoration: none;

          transition:
            transform
            0.3s ease,

            background
            0.3s ease,

            color
            0.3s ease;
        }


        .social-links a svg {
          width: 19px;
          height: 19px;
        }


        .social-links a:hover {
          background: #ffffff;

          color: #28221f;

          transform:
            translateY(-5px);
        }


        /* =====================================================
           BOTTOM
        ====================================================== */

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


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1050px) {

          .contact-page {
            padding:
              130px
              30px
              80px;
          }


          .contact-grid {
            grid-template-columns: 1fr;
          }


          .contact-side {
            display: grid;

            grid-template-columns:
              1fr 1fr;
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
            margin-top: 20px;
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {

          .contact-page {
            padding:
              110px
              18px
              65px;
          }


          .contact-header {
            margin-bottom: 50px;
          }


          .contact-eyebrow {
            font-size: 11px;

            letter-spacing: 1.5px;
          }


          .contact-header h1 {
            font-size:
              clamp(
                48px,
                15vw,
                68px
              );

            letter-spacing: -3px;

            line-height: 0.95;
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


          /* FORM */

          .form-card {
            padding:
              30px
              20px;
          }


          .form-heading {
            gap: 13px;

            margin-bottom: 32px;
          }


          .small-number {
            min-width: 37px;

            width: 37px;
            height: 37px;

            font-size: 11px;
          }


          .form-heading h2 {
            font-size: 27px;
          }


          .form-heading p {
            font-size: 14px;
          }


          /* FIELDS */

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


          /* BUTTON */

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


          /* RIGHT */

          .contact-side {
            display: flex;

            flex-direction: column;
          }


          .info-card {
            min-height: auto;

            padding:
              32px
              25px
              40px;

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


          /* SOCIAL */

          .social-card {
            min-height: 175px;

            padding:
              26px
              25px;

            flex-direction: column;

            align-items: flex-start;

            justify-content: center;
          }


          .social-card h3 {
            font-size: 28px;
          }


          .social-links {
            margin-top: 18px;

            gap: 8px;
          }


          .social-links a {
            width: 44px;
            height: 44px;
          }


          .social-links a svg {
            width: 17px;
            height: 17px;
          }


          /* BOTTOM */

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


        /* =====================================================
           VERY SMALL PHONES
        ====================================================== */

        @media (max-width: 400px) {

          .contact-page {
            padding-left: 14px;
            padding-right: 14px;
          }


          .contact-header h1 {
            font-size: 46px;
          }


          .form-card {
            padding:
              25px
              17px;
          }


          .info-card {
            padding:
              28px
              20px
              34px;
          }


          .info-card h2 {
            font-size: 34px;
          }


          .social-card {
            padding:
              23px
              20px;
          }

        }

      `}</style>
    </>
  );
}