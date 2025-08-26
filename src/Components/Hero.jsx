import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-18 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Side */}
      <div className="text-left max-w-xl">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-none">
          Your food <br />
          <span className="text-[#00a205]">delivered</span> <br /> within minutes.
        </h1>

        {/* Input and button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full sm:w-auto flex-grow shadow-sm">
            <FiMapPin className="text-black  mr-2" size={22} />
            <input
              type="text"
              placeholder="Enter delivery address"
              className="bg-transparent flex-1 outline-none px-4 py-2 text-black placeholder-gray-400"
            />
          </div>
          <button className="bg-black text-white px-7 py-5 rounded-full font-bold transition w-full sm:w-auto whitespace-nowrap">
            Find restaurants
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center">
        <img
          src="./Images/hero-side.svg"
          alt="Food Delivery"
          className="w-[260px] sm:w-[320px] md:w-[350px] rounded-2xl shadow-lg"
        />
        {/* Store Buttons */}
        <div className="flex items-center gap-10 mt-6">
          <button className="flex items-center gap-2 bg-black text-white px-6 py-4 rounded-full font-medium hover:bg-gray-800 transition">
            <FaApple size={22} />
            App Store
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-4 rounded-full font-medium hover:bg-gray-800 transition">
            <FaGooglePlay size={22} />
            Play Store
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;
