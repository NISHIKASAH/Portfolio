import React from "react";

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../assets/portfolio.jpg";

const Hero = () => {
  return (
    <div
      className="my-7 sm:my-0 max-w-[1200] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center"
      id="home"
    >
      <div className=" flex-col my-auto mx-auto">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold  text-gray-200">
          Hi! I am Nishika Sah{" "}
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          <TypeAnimation
            sequence={["Frontend dev", 1000, "Programmer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        {/* <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">
            with a 5+ year experience
          </p>
        </div> */}
        <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
          <a href="https://www.linkedin.com/in/nishika-sah-396b7b1b9/">
            {" "}
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/NISHIKASAH?tab=repositories">
            <AiFillGithub />
          </a>
          <AiFillInstagram />
        </div>
        <div className="relative inline-flex group my-3">
          {/* <div
            className="absolute transition-all 
          duration-1000 opacity-70 -inset-px 
          bg-gradient-to-r from-[#44BCFF] via-[#FF44EC]
           to-[#FF675E] rounded-xl blur-lg 
           group-hover:opacity-100 group-hover:-inset-1
            group-hover:duration-200 animation-tilt"
          ></div> */}
          <a
            href="https://drive.google.com/file/d/1fakLxVk2XHLiwU1ez0GpwqZsJl0_qI7J/view?usp=sharing"
            title="Download cv"
            role="button"
            className="w-[190px] h-[60px] relative inline-flex
                   items-center justify-center px-8 py-4 text-lg 
                   font-bold text-white transition-all duration-200
                    bg-primary-color font-pj rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-gray-900"
          >
            Download cv
          </a>
        </div>
      </div>
      <div className="my-auto mx-auto">
        <img
          className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full"
          src={portfolio}
          alt="profilepic"
        />
      </div>
    </div>
  );
};

export default Hero;
