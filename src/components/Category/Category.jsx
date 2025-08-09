import React from "react";
import { categories } from "../../data/products";

const Category = () => {
  return (
    <div className="py-8 hidden md:block">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">
            Top Categories for you
          </p>
          <h1 className="text-3xl font-bold">
            Shop by Category
          </h1>
          <p className="text-xs text-gray-400">
            Discover our wide range of premium products across different categories
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="text-center group cursor-pointer hover:scale-105 duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-3xl group-hover:scale-110 duration-300">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary duration-300">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;