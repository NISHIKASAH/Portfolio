import React from "react";
import aboutImg from "../assets/about2.jpg";

const About = () => {
  return (
    <div className="py-10 text-white bg-[#22325] h-auto" id="about">
      <div
        className="flex sm:flex-row flex-col-reverse items-center
      md:gap-6 gap-12 px-10 max-w-6xl mx-auto"
      >
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt="about"
              className="object-cover rounded-xl h-[300px]
               filter grayscale brightness-50 "
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span className="primary-text">Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Hi everyone! I'm Nishika Sah, currently a student at Sathyabama
                Institute of Science and Technology. I'm skilled in C++ and
                React, especially in making websites shine as a frontend
                developer. I'm passionate about problem-solving too! Recently,
                I've been diving into backend development with Node.js and
                MongoDB. I use ChatGPT to make my work better. Let's team up and
                work together!
              </p>
            </div>
          </div>
          <div className="flex mt-10 items-center gap-7 px-4 py-2">
            <div className="bg-[#333333]/40 px-7 py-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                <span className="primary-text">My</span>
                {""} Skills
              </h3>
              {/* <p className="md:text-base text-xs">
                <span>Happy Client</span>
              </p> */}
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>C++</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>DSA</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>Javascript</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>React</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>Redux</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>Tailwind</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>Node</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>Express</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>MySQL</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>Mongodb</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>php</span>
                </p>
              </div>
              <div className="bg-[#333333]/40 p-2 rounded-lg">
                <p className="md:text-base text-xs">
                  <span>github</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
