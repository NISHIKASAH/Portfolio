import React from "react";
import codesync from "../assets/codesync.png";
import netflixgpt from "../assets/NetflixGpt.png";
import youtube from "../assets/youtubeclone.png";
import socialapp from "../assets/socialapp.png";

const Work = () => {
  //     <div
  // className="pointer-events-none absolute inset-0
  //    bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
  // ></div>
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Project</span>
            </h2>
            <p className="text-gray-500">
              These are my Latest project(
              <span>Click on Image to View Project Live</span>)
            </p>
            <p>For github click on SourceCode</p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div>
            <a
              href="https://streamify-gpt-5b56e.web.app/"
              className="group h-48  overflow-hidden rounded-lg shadow-lg md:h-80"
            >
              <img
                src={netflixgpt}
                loading="lazy"
                alt="project2"
                className="h-full w-full
                 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="mt-[-20]">
              <a href="https://github.com/NISHIKASAH/streamifygpt">
                <span>sourcecode</span>
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1wUpF6QU-6M4EvKmN1IuhyTju-YrPK3L6/view?usp=sharing"
              className="group h-48  overflow-hidden rounded-lg shadow-lg md:h-80"
            >
              <img
                src={codesync}
                loading="lazy"
                alt="project2"
                className="h-full w-full
                 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="mt-[-20]">
              <a href="https://github.com/NISHIKASAH/CodeSync">
                <span>sourcecode</span>
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://youtubeclone57.netlify.app/"
              className="group h-48  overflow-hidden rounded-lg shadow-lg md:h-80"
            >
              <img
                src={youtube}
                loading="lazy"
                alt="project2"
                className="h-full w-full
                 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div className="mt-[-20]">
              <a href="https://github.com/NISHIKASAH/youtubeClone">
                <span>sourcecode</span>
              </a>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="group h-48  overflow-hidden rounded-lg shadow-lg md:h-80"
            >
              <img
                src={socialapp}
                loading="lazy"
                alt="project2"
                className="h-full w-full
                 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="mt-[-20]">
              <a href="https://github.com/NISHIKASAH/sociallyAAP">
                <span className>sourcecode</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
