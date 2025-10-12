import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {



        
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>Technologies I work with</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Here are the technologies and tools I've worked with throughout my development journey. From frontend frameworks to backend databases, these skills enable me to build comprehensive, scalable applications and solve complex technical challenges across the full development stack.
        </p>
      </div>

      <div className="tech-icons-wrapper mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className={`tech-icon w-full h-full object-contain ${
                technology.name === "GitHub" || technology.name === "Flask"
                  ? "filter invert" 
                  : ""
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
