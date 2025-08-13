import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex justify-center items-center flex-col text-white bg-black h-96"
    >
      <h1 className="md:text-4xl text-3xl font-bold text-center">
        Ready to Get Started?
      </h1>
      <p className="text-xl text-gray-300 text-center mt-4">
        Join thousands of businesses that trust ShortLink for their URL
        management.
      </p>
      <button className="ms-3 px-3 py-3 bg-gradient-to-r from-sky-700 to-sky-400 rounded-2xl mt-8">
        <a href="/">Start Shortening URLs</a>
      </button>
    </div>
  );
};

export default Footer;
