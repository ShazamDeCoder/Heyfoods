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
    <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left Side Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="./Images/second-sales-2.png"
          alt="Grow with Heyfood"
          className="w-[400px] h-[400px] object-cover rounded-3xl shadow-md"
        />
      </div>

      {/* Right Side Content */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
          Grow With Heyfood
        </h2>
        <p className="text-2xl text-black mb-8">
          Expand your business and make money with features that make managing
          and processing orders easier.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-start">
              <div className="bg-gray-100 p-4 rounded-lg mb-3">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-black text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-black text-white px-8 py-5 rounded-full font-semibold transition">
          Sign up your store <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default Growth
