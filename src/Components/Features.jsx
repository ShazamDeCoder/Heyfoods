import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Features = () => {
  const items = [
    {
      id: 1,
      image: "./Images/first-sales-1.svg",
      title: "Try The App",
      desc: "Discover the best restaurants and vendors near you all in one place",
    },
    {
      id: 2,
      image: "./Images/first-sales-2.svg",
      title: "Become A Merchant",
      desc: "Grow your business and increase profit by creating an online ordering page",
    },
    {
      id: 3,
      image: "./Images/first-sales-3.svg",
      title: "Become A Rider",
      desc: "Drive, deliver and earn. Make more money when you become a rider on Heyfood",
    },
  ];

  return (
    <section id="features" className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-start"
          >
            {/* Image Placeholder */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-6 rounded-lg"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{item.desc}</p>

            {/* Get Started Link */}
            <button className="flex items-center text-medium text-[#0fa205] font-bold hover:underline">
              Get Started <FiArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
