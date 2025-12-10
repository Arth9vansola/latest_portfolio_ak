import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CertificationCard = ({
  index,
  name,
  issuer,
  date,
  description,
  image,
  credential_url,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    // ScrollTrigger for animating certification cards with stagger
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100, // Start off-screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
          end: "top center",    // End when the top reaches the center of the viewport
          scrub: true,          // Smoothly sync scroll and animation
          markers: false,       // Set to `true` to see debug markers
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl"
      >
        <div 
          className="relative w-full h-[230px] cursor-pointer transition-opacity duration-300"
          onClick={() => credential_url && credential_url !== "#" && window.open(credential_url, "_blank")}
        >
          <img
            src={image}
            alt="certification_image"
            className="w-full h-full object-cover object-center rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-2xl">
            <p className="text-white text-sm font-semibold">{issuer}</p>
            <p className="text-gray-300 text-xs">{date}</p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {credential_url && credential_url !== "#" && (
          <div className="mt-4">
            <button
              onClick={() => window.open(credential_url, "_blank")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              View Credential
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Certifications = () => {
  useEffect(() => {
    // ScrollTrigger for section title animation
    gsap.fromTo(
      ".certifications-title",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".certifications-title",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="certifications-title">
        <p className={`${styles.sectionSubText}`}>My achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following certifications demonstrate my commitment to continuous learning and professional development. Each certification represents dedicated study and mastery of specific technologies and methodologies that enhance my capabilities as a developer.
        </p>
      </div>

      <div className="certifications-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {certifications.map((certification, index) => (
          <div key={`certification-${index}`} className="certification-card">
            <CertificationCard index={index} {...certification} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");