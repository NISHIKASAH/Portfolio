import React from "react";

import leetcode from "../assets/leetcode.png";
import github from "../assets/github.png";
import linkdin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-gray-500 text-center">
      <p className="my-5 text-gray-500">Made with ❤️ By Nishika Sah</p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl items-center">
        <a href="https://github.com/NISHIKASAH">
          <img className="w-20" src={github} alt="leetcode" />
        </a>
        <a href="https://www.linkedin.com/in/nishika-sah-396b7b1b9/">
          <img className="w-20 " src={linkdin} alt="linkdin" />
        </a>
        <a href="https://leetcode.com/u/nisa_2022/">
          <img
            className="w-[70px] h-[70px] rounded-xl"
            src={leetcode}
            alt="leetcode"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
