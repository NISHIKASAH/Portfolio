import React from "react";

const Experience = () => {
  return (
    <div className="py-10 bg-[#22325]" id="experience">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experience</span>
      </h2>

      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto pb-16">
        <p>Mphasis</p>
        <p className="text-gray-400">(March 2025 - Present)</p>
        <p className="text-gray-500">
          Developed key features including signup with captcha, secure authentication, and login workflows using .NET MVC.
          Implemented unit tests to ensure reliability and correctness of core functionalities.
          Built booking operations with backend integration, handling data flow and process logic efficiently.
          Optimized end-to-end functionality to ensure seamless feature performance and system stability.
          Tech stack - .NET, SQL, React.
        </p>
      </div>

      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto pb-16">
        <p>Klenty Private Limited</p>
        <p className="text-gray-400">(December 2024 - March 2025)</p>
        <p className="text-gray-500">
          Developed and optimized UI components in a live SaaS product using React.js, TypeScript, and JavaScript.
          Built new features, enhanced performance, and fixed UI bugs for a seamless user experience.
          Contributed to backend tasks using Node.js, Express.js, and MongoDB.
          Performed unit and manual testing, ensuring reliable releases in a fast-paced environment.
        </p>
      </div>

      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto pb-16">
        <p>HCL Technology</p>
        <p className="text-gray-400">(January 2023 - May 2023)</p>
        <p className="text-gray-500">
          As an intern at HCL Tech, I focused on frontend and backend database development with MySQL, crafting an application to manage vehicle tracking and taxation.
          Tech stack - HTML, CSS, JavaScript, PHP, MySQL.
        </p>
      </div>
    </div>
  );
};

export default Experience;

