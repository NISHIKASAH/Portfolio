import React from "react";

const Experience = () => {
  return (
    <div className="py-10 bg-[#22325]" id="experience">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experience</span>
      </h2>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
        <p>HCL Techology</p>
        <p className="text-gray-400">(Jan 2023-May 2023)</p>
        <p className="text-gray-500">
          As an intern at HCL Tech, I focused on frontend development, crafting
          an application to manage vehicle tracking and taxation for optimized
          traffic flow.
        </p>
      </div>
    </div>
  );
};

export default Experience;
