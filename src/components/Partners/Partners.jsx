import React from "react";

const Partners = () => {
  const brands = [
    { name: "APPLE", color: "text-gray-600 dark:text-gray-400" },
    { name: "SAMSUNG", color: "text-gray-600 dark:text-gray-400" },
    { name: "SONY", color: "text-gray-600 dark:text-gray-400" },
    { name: "DELL", color: "text-gray-600 dark:text-gray-400" },
    { name: "HP", color: "text-gray-600 dark:text-gray-400" },
  ];

  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 sm:gap-4 place-items-center opacity-50">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`${brand.color} font-bold text-lg tracking-wider hover:opacity-80 transition-opacity duration-300`}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;