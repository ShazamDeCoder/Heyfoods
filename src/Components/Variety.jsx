import React from 'react'
import { FiArrowRight } from 'react-icons/fi';

const Variety = () => {
  return (
    <div>
      <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="max-w-xl text-left">
          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
            A Variety of <br /> Stores to <br /> choose from
          </h2>

          <p className="text-2x1 text-gray-600 mb-9">
            Order food from the best restaurants, local favorites, and online
            vendors using the app or web.
          </p>

          <button className="flex items-center gap-2 bg-black text-white px-8 py-5 rounded-full font-semibold hover:bg-gray-800 transition">
            Start Ordering <FiArrowRight size={20} />
          </button>
        </div>

        {/* Right Side */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src="./Images/foods.png"
            alt="Variety of Stores"
            className="w-[300px] md:w-[450px] rounded-4xl shadow-md"
          />
        </div>
      </section>
    </div>
  )
}

export default Variety
