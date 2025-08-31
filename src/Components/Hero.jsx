import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className="w-full pt-32 bg-white px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Side */}
      <div className="text-left max-w-xl w-full lg:w-1/2">
        <h1 className="text-7xl sm:text-5xl md:text-8xl lg:text-8xl font-extrabold leading-none text-center lg:text-left">
          Your food <br />
          <span className="text-[#00a205]">delivered</span> <br /> within minutes.
        </h1>

        {/* Input and button */}
        <div className="mt-8 flex flex-col lg:flex-row items-center gap-3 w-full">
          <div className="flex items-center bg-gray-100 rounded-full px-8 py-3 w-full flex-grow shadow-sm">
            <FiMapPin className="text-black mr-2" size={22} />
            <input
              type="text"
              placeholder="Enter delivery address"
              className="bg-transparent flex-1 outline-none px-4 py-2 text-black placeholder-gray-400"
            />
          </div>
          <button className="bg-black text-white px-7 py-4 rounded-full font-medium transition w-full lg:w-auto whitespace-nowrap">
            Find restaurants
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center lg:ml-[210px]  w-full lg:w-1/2">
        <img
          src="./Images/hero-side.svg"
          alt="Food Delivery"
          className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[370px] pl-2  rounded-2xl"
        />

        {/* Store Buttons */}
        <div className="flex flex-col lg:flex-row w-2/3 lg:w-auto gap-4 lg:gap-5 mt-6">
          <button className="flex items-center justify-center gap-2 bg-black text-white px-7 py-4 rounded-full font-extrabold hover:bg-gray-800 transition w-full lg:w-auto">
            <FaApple size={22} />
            App Store
          </button>
          <button className="flex items-center justify-center gap-2 bg-black text-white px-7 py-4 rounded-full font-extrabold hover:bg-gray-800 transition w-full lg:w-auto">
            <FaGooglePlay size={22} />
            Play Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
