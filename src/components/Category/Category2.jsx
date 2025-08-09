import React from "react";

const Category2 = () => {
  return (
    <div className="section-padding">
      <div className="container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* First col */}
          <div className="py-8 sm:py-10 px-4 sm:px-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-2xl sm:rounded-3xl relative h-[280px] sm:h-[320px] flex items-end card-hover overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Laptops
                </p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-2 px-4 rounded-full">
                  Browse
                </button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=350&fit=crop"
              alt="laptop"
              className="w-[250px] sm:w-[320px] absolute bottom-0 -right-2 sm:-right-4 opacity-80 hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Second col */}
          <div className="py-8 sm:py-10 px-4 sm:px-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-2xl sm:rounded-3xl relative h-[280px] sm:h-[320px] flex items-end card-hover overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Mobiles
                </p>
                <button className="bg-white text-brandYellow hover:scale-105 duration-300 py-2 px-4 rounded-full">
                  Browse
                </button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=500&fit=crop"
              alt="mobile"
              className="w-[200px] sm:w-[250px] absolute -right-2 sm:-right-4 top-[30px] sm:top-[40px] opacity-80 hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Third col */}
          <div className="py-8 sm:py-10 px-4 sm:px-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl sm:rounded-3xl relative h-[280px] sm:h-[320px] flex items-end card-hover overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Watches
                </p>
                <button className="bg-white text-primary hover:scale-105 duration-300 py-2 px-4 rounded-full">
                  Browse
                </button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&h=400&fit=crop"
              alt="smartwatch"
              className="w-[160px] sm:w-[200px] absolute -right-2 sm:-right-4 top-[40px] sm:top-[50px] opacity-80 hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Fourth col */}
          <div className="py-8 sm:py-10 px-4 sm:px-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-2xl sm:rounded-3xl relative h-[280px] sm:h-[320px] flex items-end card-hover overflow-hidden">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Audio
                </p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-2 px-4 rounded-full">
                  Browse
                </button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop"
              alt="headphones"
              className="w-[160px] sm:w-[200px] absolute -right-2 sm:-right-4 top-[40px] sm:top-[50px] opacity-80 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;