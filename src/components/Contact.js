import React from "react";

const Contact = () => {
  return (
    <div
      className="flex justify-content my-5 h-full sm:h-[70vh] items-center"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 rounded-xl flex-col justify-around">
              <h1 className="text-4xl sm:text-5xl text-white">Contact</h1>
              <p className="text-normal text-lg text-gray-400 mt-2">
                Let's connect on LinkedIn <br /> or send me an Email
              </p>
              <div className="flex items-center mt-2 text-gray-400">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 10 10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8.18L5.26 6.67"
                  />
                </svg> */}
                <img
                  className="w-24 rounded-2xl"
                  src="https://cdn-icons-png.flaticon.com/512/739/739286.png"
                  alt="msg"
                />
                <div className="ml-4 text-md tracking-wide w-40">
                  <p>Nishika Sah</p>
                </div>
              </div>
            </div>
            <form
              action="https://getform.io/f/nadoxmrb"
              method="post"
              className="p-6 flex flex-col justify-center max-w-[1200px]"
            >
              <div className="flex flex-col">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col mt-2">
                <textarea
                  name="message"
                  id="name"
                  placeholder="Your Message"
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border-gray-700 text-white"
                ></textarea>
              </div>
              <button className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
