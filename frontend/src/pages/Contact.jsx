import React, { useState } from 'react';
import '../styles/contact.css';
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
                        Washington DC-Baltimore Area
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
                        info@miskerkassahun.com
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
                    href="https://www.instagram.com/miskerkassahun/"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/misker-kassahun/"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="http://facebook.com/misker.kassahun"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://x.com/MiskerKassahun"
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

     
    </>
  );
}