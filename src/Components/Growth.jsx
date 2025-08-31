import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const Growth = () => {
  const features = [
    {
      id: 1,
      image: "./Images/second-sales-sub-1.svg",
      title: "Order Management",
      desc: "Receive and manage orders directly from your dashboard.",
    },
    {
      id: 2,
      image: "./Images/second-sales-sub-2.svg",
      title: "Automatic Payout",
      desc: "Get paid automatically to your bank account.",
    },
    {
      id: 3,
      image: "./Images/second-sales-sub-3.svg", 
      title: "Dine-In Orders",
      desc: "Better in-store dining service with QR Codes.",
    },
  ];

  return (
    <section id='growth' className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="./Images/second-sales-2.png"
          alt="Grow with Heyfood"
          className="w-[400px] h-[500px] lg:w-[500px] object-cover rounded-3xl shadow-md"
        />
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-4xl md:text-7xl lg:pr-40 font-extrabold leading-none mb-4">
          Grow With Heyfood
        </h2>
        <p className="text-[20px] font-semibold text-black mb-15">
          Expand your business and make money with features that make managing
          and processing orders easier.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-start">
              <div className=" rounded-lg mb-3">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[80px] h-[80px] object-contain"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-[15px] ">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-black text-white px-9 py-5 rounded-full font-semibold transition">
          Sign up your store <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default Growth
