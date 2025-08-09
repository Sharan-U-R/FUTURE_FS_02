import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const HeroData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&h=1000&fit=crop",
    subtitle: "Latest Technology",
    title: "iPhone 15 Pro",
    title2: "Up to 30% Off",
    description: "Discover the newest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=1000&fit=crop",
    subtitle: "Tech Innovation",
    title: "MacBook Pro",
    title2: "Starting at $1299",
    description: "Experience the power of M3 chip with our latest MacBook Pro collection for professionals.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&h=1000&fit=crop",
    subtitle: "Audio Excellence",
    title: "Premium Headphones",
    title2: "Noise Cancellation",
    description: "Immerse yourself in crystal-clear sound with our premium noise-cancelling headphones.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    // Navigate to products section and scroll to it
    navigate("/");
    setTimeout(() => {
      const productsSection = document.querySelector('[data-section="products"]');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container-padding">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl min-h-[800px] sm:min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center shadow-2xl relative">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container pb-6 sm:pb-8 lg:pb-0 relative z-10">
          {/* Hero section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[700px] lg:min-h-auto py-8 lg:py-0">
                  
                  {/* Text content section - Mobile First */}
                  <div className="flex flex-col justify-center gap-8 sm:gap-8 px-6 sm:px-6 lg:px-8 text-center lg:text-left order-1 lg:order-1 relative z-10">
                    
                    {/* Main Headline */}
                    <div className="space-y-4 sm:space-y-4">
                      <h1
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-once="true"
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                      >
                        Immerse yourself<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                          in a symphony
                        </span>
                      </h1>
                    </div>
                    
                    {/* Description */}
                    <p
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-delay="100"
                      data-aos-once="true"
                      className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-sm sm:max-w-md mx-auto lg:mx-0 font-light px-2 sm:px-0"
                    >
                      Welcome to TechHub, the paradise of technology and innovation. Find the best tech gadgets for all of your needs!
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 px-4 sm:px-0">
                      <button
                        onClick={handleOrderNow}
                        className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Shop Now
                      </button>
                      <button
                        onClick={() => {
                          const productsSection = document.querySelector('[data-section="products"]');
                          if (productsSection) {
                            productsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold text-sm sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                      >
                        View Products
                      </button>
                    </div>
                  </div>
                  
                  {/* Product showcase section - After Text on Mobile */}
                  <div className="w-full px-6 sm:px-6 order-2 lg:order-2 mt-8 lg:mt-0">
                    <div
                      data-aos="fade-up"
                      data-aos-duration="400"
                      data-aos-once="true"
                      className="relative max-w-sm mx-auto lg:max-w-none"
                    >
                      {/* Main product card - Better Mobile Sizing */}
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 sm:p-6 lg:p-8 border border-white/10 shadow-2xl relative">
                        {/* Product Image - Better Mobile Size */}
                        <div className="relative mb-4 lg:mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl lg:rounded-2xl blur-xl"></div>
                          <img
                            src={data.img}
                            alt={data.title}
                            className="relative z-10 w-full h-[200px] sm:h-[220px] lg:h-[350px] object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      

                      
                      {/* Desktop floating cards */}
                      <div className="hidden lg:block">
                        <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3">
                          <div className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg">
                            <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-2">
                              <span className="text-yellow-400 text-sm">🎧</span>
                            </div>
                            <p className="text-white text-xs font-medium">Headphones</p>
                            <p className="text-gray-400 text-xs">Premium Audio</p>
                          </div>
                          <div className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg">
                            <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-2">
                              <span className="text-yellow-400 text-sm">📱</span>
                            </div>
                            <p className="text-white text-xs font-medium">Mobiles</p>
                            <p className="text-gray-400 text-xs">Latest Tech</p>
                          </div>
                        </div>
                        
                        <div className="absolute -top-6 -right-6 grid grid-cols-2 gap-3">
                          <div className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg">
                            <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-2">
                              <span className="text-yellow-400 text-sm">💻</span>
                            </div>
                            <p className="text-white text-xs font-medium">Laptops</p>
                            <p className="text-gray-400 text-xs">Pro Performance</p>
                          </div>
                          <div className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-lg">
                            <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-2">
                              <span className="text-yellow-400 text-sm">⌚</span>
                            </div>
                            <p className="text-white text-xs font-medium">Watches</p>
                            <p className="text-gray-400 text-xs">Smart Health</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;