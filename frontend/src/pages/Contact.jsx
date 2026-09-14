import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import '../styles/contact.css';

import {
  MapPin,
  Mail,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Contact() {
  const [state, formSubmit] = useForm('xzebnewy');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);

      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      <section className="contact-page">
        <div className="contact-wrapper">

          <div className="contact-header">
            <span className="gallery-eyebrow">
              CONTACT ME
            </span>

            <h1>Let&apos;s Connect</h1>

            <p>
              Whether you have a project, collaboration opportunity,
              speaking invitation, or simply want to say hello,
              I&apos;d love to hear from you.
            </p>
          </div>

          <div className="contact-grid">

            {/* FORM */}
            <div className="form-card">

              <div className="form-heading">
                <div>
                  <h2>Send a Message</h2>
                  <p>
                    Tell me a little about what you have in mind.
                  </p>
                </div>
              </div>

              <form onSubmit={formSubmit}>

                {/* NAME */}
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
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option value="Healthcare Consulting">
                      Healthcare Consulting
                    </option>

                    <option value="Digital Promotion">
                      Digital Promotion
                    </option>

                    <option value="Public Speaking">
                      Public Speaking
                    </option>

                    <option value="Event Planning & Management">
                      Event Planning & Management
                    </option>

                    <option value="Collaboration">
                      Collaboration
                    </option>

                    <option value="Other">
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

                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <div className="success-message">
                    <CheckCircle2 size={22} />

                    <span>
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {state.errors && (
                  <div className="error-message">
                    <AlertCircle size={22} />

                    <span>
                      Something went wrong. Please try again.
                    </span>
                  </div>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={state.submitting}
                >
                  <span className="submit-text">
                    {state.submitting
                      ? 'Sending...'
                      : 'Send Message'}
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

            {/* RIGHT SIDE */}
            <div className="contact-side">

              {/* INFORMATION CARD */}
              <div className="info-card">

                <div className="info-decoration"></div>
                <div className="info-decoration-small"></div>

                <div className="info-top">
                  <span className="availability">
                    AVAILABLE FOR COLLABORATION
                  </span>
                </div>

                <h2>
                  Let&apos;s create
                  <br />
                  something <span>meaningful.</span>
                </h2>

                <p className="info-intro">
                  I&apos;m open to meaningful collaborations,
                  professional opportunities, speaking engagements,
                  public health initiatives, and creative projects.
                </p>

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
                        Washington DC-Baltimore Area
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
                        info@miskerkassahun.com
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              {/* SOCIAL CARD */}
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
                    href="https://www.instagram.com/miskerkassahun/"
                    aria-label="Instagram"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/misker-kassahun/"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://facebook.com/misker.kassahun"
                    aria-label="Facebook"
                    title="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://x.com/MiskerKassahun"
                    aria-label="X"
                    title="X"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}