import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.jpg';
import Affilations from './Affiliations';
import About from './About';
import Gallery from './Gallery';
import Services from './Services';
import Contact from './Contact';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <section className="home-section !pt-8 sm:!pt-12 lg:!pt-0">
        <div className="flex flex-col lg:flex-row w-full lg:min-h-screen">
          
          {/* Left Text Column */}
          <div
            className="
              w-full lg:w-1/2
              min-h-[460px]
              sm:min-h-[500px]
              lg:min-h-screen
              flex items-center justify-start lg:justify-center
              pl-5 pr-5 sm:pl-8 sm:pr-8 md:px-12 lg:px-16
              py-6 sm:py-10 lg:py-0
              box-border
            "
          >
            <div className="home-text-content-wrapper lg:items-center lg:text-center">
              <h1
                className="
                  home-hero-title
                  flex flex-col items-start lg:items-center
                  text-[2.8rem] leading-[1.05]
                  sm:text-[3.6rem] sm:leading-[1.05]
                  md:text-[4.5rem]
                  lg:text-[5.2rem] lg:leading-[1]
                  font-bold tracking-tight
                  ml-5 lg:ml-0
                  mb-4 sm:mb-6 lg:mb-8
                  self-start lg:self-center pt-0
                "
              >
                <span className="text-[#6e5f56]">Dr. Misker</span>
                <span className="text-[#f29452] mt-1 sm:mt-2">Kassahun</span>
                <span className="text-[#f29452] mt-1 sm:mt-2">Teka</span>
              </h1>

              <p
                className="
                  home-hero-description
                  w-full
                  max-w-[300px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[480px]
                  px-2 sm:px-3 md:px-0
                  text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px]
                  leading-[1.6] sm:leading-[1.6] lg:leading-[1.5]
                  !text-left lg:!text-center
                  text-[#5c534e]
                  ml-5 mr-5 lg:mx-0
                  mb-5 sm:mb-7 md:mb-8
                  font-normal
                "
                style={{ textAlign: 'left', textAlignLast: 'left' }}
              >
                A Professional Medical Doctor & Public Health Expert,
                <br className="hidden sm:block" />
                Volunteer.
              </p>

              <Link
                to="/about"
                className="
                  home-hero-button
                  flex items-center justify-center
                  w-[160px] h-[44px]
                  sm:w-[170px] sm:h-[48px]
                  bg-[#28221f] text-white
                  hover:bg-[#f29452]
                  transition-all duration-300
                  active:scale-95 whitespace-nowrap
                  mx-0 ml-5 lg:ml-0 lg:mx-auto
                "
              >
                SEE PORTFOLIO
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div
            className="
              w-full lg:w-1/2
              relative
              bg-[#d1c7bc]
              overflow-hidden
              opacity-0
              animate-[fadeIn_1.4s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]
            "
          >
            <div className="relative w-full flex items-start justify-center">
              <img
                src={img1}
                alt="Dr. Misker Kassahun Teka"
                className="home-hero-image block w-full h-auto max-w-full object-contain object-top"
              />
            </div>
          </div>

        </div>
      </section>

      <Affilations />
      <About />
      <Services />
    </>
  );
}