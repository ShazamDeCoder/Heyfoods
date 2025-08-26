import React from 'react'

const Location = () => {
    const citiesData = [
  { 
    name: "Ibadan",
    areas: [
      "Agbowo", "Akobo", "Ashi", "Basorun", "Bodija", "Mokola",
      "Ojoo", "Orogun", "Barika", "Samonda", "Sango", "Eleyele",
      "Ologuneru", "Moniya", "Agodi", "Agodi-gate", "University of Ibadan", "UCH",
      "Dugbe", "Onireke",
    ],
  },
  {
    name: "Abuja",
    areas: [
      "Wuse", "Adetokunbo", "Aminu Kano Crescent", "Garki", "Gwarinpa", "Wuye",
      "Utako", "Area 11",
    ],
  },
  {
    name: "Lagos",
    areas: [
      "Lekki", "Ikeja", "Victoria Island", "Ikoyi", "Oniru",
    ],
  },
];

  return (
    <div>
      <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cities near me</h2>

      {citiesData.map((city, index) => (
        <div key={index} className="mb-12">
          {/* City Name */}
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            {city.name}
          </h3>

          {/* Top Areas */}
          <h4 className="font-semibold mb-2">Top Areas</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
            {city.areas.map((area, i) => (
              <span key={i} className="text-green-600 cursor-pointer hover:underline">
                {area}
              </span>
            ))}
          </div>

          {/* Best Restaurants */}
          <h4 className="font-semibold mb-2">Best Restaurants in {city.name}</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {city.areas.map((area, i) => (
              <span key={i} className="text-green-600 cursor-pointer hover:underline">
                Restaurants in {area}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Location
