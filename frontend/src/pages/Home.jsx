import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.jpg';
import Affilations from './Affiliations';
import About from './About';
import Gallery from './Gallery';

export default function Home() {
  return (
    <>
      {/* =====================================================
          HOME HERO SECTION
      ====================================================== */}
      <section
        className="
          w-full
          bg-[#faf6f0]
          m-0
          p-0
          relative
          overflow-hidden
          pt-20
          sm:pt-24
          lg:pt-0
          opacity-0
          animate-[fadeIn_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards]
        "
      >

        <div
          className="
            flex
            flex-col
            lg:flex-row
            w-full
            lg:min-h-screen
          "
        >

          {/* =================================================
              LEFT SIDE - CONTENT
          ================================================== */}
          <div
            className="
              w-full
              lg:w-1/2

              min-h-[520px]
              sm:min-h-[580px]
              md:min-h-[620px]

              lg:min-h-screen

              flex
              items-center
              justify-center

              px-5
              sm:px-8
              md:px-12
              lg:px-16

              py-12
              sm:py-16
              md:py-20
              lg:py-0

              box-border
            "
          >

            <div
              className="
                max-w-[620px]
                w-full

                text-center

                flex
                flex-col
                items-center

                opacity-0
                animate-[slideUp_1.3s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]
              "
            >

              {/* =================================================
                  NAME
              ================================================== */}
              <h1
                className="
                  flex
                  flex-col
                  items-center

                  text-[2.8rem]
                  leading-[1.05]

                  sm:text-[3.6rem]
                  sm:leading-[1.05]

                  md:text-[4.5rem]

                  lg:text-[5.2rem]
                  lg:leading-[1]

                  font-bold
                  tracking-tight

                  mb-5
                  sm:mb-6
                  lg:mb-8

                  pt-2
                  sm:pt-4
                  lg:pt-0
                "
              >

                <span className="text-[#6e5f56]">
                  Dr. Misker
                </span>

                <span className="text-[#f29452] mt-1 sm:mt-2">
                  Kassahun
                </span>

                <span className="text-[#f29452] mt-1 sm:mt-2">
                  Teka
                </span>

              </h1>


              {/* =================================================
                  DESCRIPTION
              ================================================== */}
              <p
                className="
                  w-full

                  max-w-[300px]
                  sm:max-w-[380px]
                  md:max-w-[450px]
                  lg:max-w-[480px]

                  px-2
                  sm:px-3
                  md:px-0

                  text-[13px]
                  sm:text-[15px]
                  md:text-[17px]
                  lg:text-[19px]

                  leading-[1.6]
                  sm:leading-[1.6]
                  lg:leading-[1.5]

                  text-center

                  text-[#5c534e]

                  mb-6
                  sm:mb-7
                  md:mb-8

                  font-normal
                "
              >
                A Professional Medical Doctor & Public Health Expert,
                <br className="hidden sm:block" />
                Volunteer.
              </p>


              {/* =================================================
                  SEE PORTFOLIO BUTTON
              ================================================== */}
              <Link
  to="/about"
  className="
    flex
    items-center
    justify-center
    w-[160px]
    h-[44px]
    sm:w-[170px]
    sm:h-[48px]
    bg-[#28221f]
    text-white
    hover:bg-[#f29452]
    transition-all
    duration-300
    active:scale-95
    whitespace-nowrap
    mx-auto
  "
  style={{
    marginTop: '20px',
    fontSize: '10px',
    lineHeight: '1',
    fontWeight: '700',
    letterSpacing: '2.5px',
    borderRadius: '2px',
    textDecoration: 'none',
  }}
>
  SEE PORTFOLIO
</Link>

            </div>
          </div>


          <div
            className="
              w-full
              lg:w-1/2

              relative

              bg-[#d1c7bc]

              overflow-hidden

              opacity-0

              animate-[fadeIn_1.4s_cubic-bezier(0.16,1,0.3,1)_0.3s_forwards]
            "
          >

            <div
              className="
                relative
                w-full

                flex
                items-start
                justify-center
              "
            >

              <img
                src={img1}
                alt="Dr. Misker Kassahun Teka"
                className="
                  block

                  w-full
                  h-auto

                  max-w-full

                  object-contain
                  object-top

                  animate-[scaleIn_1.6s_cubic-bezier(0.16,1,0.3,1)_forwards]
                "
              />

            </div>

          </div>

        </div>


        <style>{`

          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(32px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(1.03);
            }

            to {
              transform: scale(1);
            }
          }

        `}</style>

      </section>


      {/* =====================================================
          AFFILIATIONS SECTION
      ====================================================== */}
      <Affilations />


      {/* =====================================================
          ABOUT SECTION
      ====================================================== */}
      <About />
      <Gallery/>

    </>
  );
}