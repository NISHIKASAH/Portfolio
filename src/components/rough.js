import React from "react";
import aboutImg from "../assets/about.jpg";

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
        </div>
      </div>
    </div>
  );
};

export default About;
