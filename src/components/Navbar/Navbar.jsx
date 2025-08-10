import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
    section: "hero",
  },
  {
    id: 2,
    name: "Shop",
    link: "/",
    section: "products",
  },
  {
    id: 3,
    name: "About",
    link: "/",
    section: "services",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/",
    section: "blogs",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Laptops",
    category: "laptops",
  },
  {
    id: 2,
    name: "Mobile Phones",
    category: "mobiles",
  },
  {
    id: 3,
    name: "Smart Watches",
    category: "smartwatches",
  },
  {
    id: 4,
    name: "Headphones",
    category: "headphones",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const handleCategoryClick = (category) => {
    navigate("/");
    // Scroll to products section and filter by category
    setTimeout(() => {
      const productsSection = document.querySelector('[data-section="products"]');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Trigger category filter (we'll need to implement this)
      window.dispatchEvent(new CustomEvent('filterCategory', { detail: category }));
    }, 100);
  };

  const handleMenuClick = (link, section) => {
    navigate(link);
    setIsMenuOpen(false);
    
    if (section) {
      setTimeout(() => {
        const targetSection = document.querySelector(`[data-section="${section}"]`);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/");
      setTimeout(() => {
        const productsSection = document.querySelector('[data-section="products"]');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
        // Trigger search filter
        window.dispatchEvent(new CustomEvent('searchProducts', { detail: searchQuery.trim() }));
      }, 100);
      setSearchQuery("");
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl border-b border-gray-700/30 text-white duration-200 fixed top-0 left-0 right-0 z-50 shadow-2xl">
      <div className="py-4 sm:py-5">
        <div className="container-padding flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="relative group cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-sm sm:text-lg">N</span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-black tracking-wider text-xl sm:text-2xl lg:text-3xl uppercase">
                  NexTech
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleMenuClick(data.link, data.section)}
                      className="relative px-4 py-2 font-semibold text-gray-300 hover:text-yellow-400 duration-200 rounded-lg hover:bg-yellow-400/10 transition-all group"
                    >
                      <span className="relative z-10">{data.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </button>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <button className="flex items-center gap-2 px-4 py-2 font-semibold text-gray-300 hover:text-yellow-400 duration-300 rounded-lg hover:bg-yellow-400/10 transition-all">
                    Categories
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </button>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[220px] rounded-xl bg-gray-800/95 backdrop-blur-xl shadow-2xl border border-gray-700/30 p-3 mt-2">
                    <ul className="space-y-1">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <button
                            className="text-gray-300 hover:text-yellow-400 duration-300 flex items-center w-full p-3 hover:bg-yellow-400/10 rounded-lg font-medium text-left transition-all"
                            onClick={() => handleCategoryClick(data.category)}
                          >
                            <span className="mr-3 text-lg">
                              {data.category === 'laptops' && '💻'}
                              {data.category === 'mobiles' && '📱'}
                              {data.category === 'smartwatches' && '⌚'}
                              {data.category === 'headphones' && '🎧'}
                            </span>
                            {data.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <form onSubmit={handleSearch} className="relative group hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="w-0 group-hover:w-[250px] lg:group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-600/50 group-hover:border-yellow-400/50 px-4 py-2.5 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 bg-gray-800/50 text-white placeholder-gray-400 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 -translate-y-1/2 right-3 p-1 rounded-full hover:bg-primary/10 transition-colors duration-200"
                >
                  <IoMdSearch className="text-xl text-gray-400 group-hover:text-yellow-400 hover:text-yellow-400 transition-colors duration-200" />
                </button>
              </div>
            </form>

            {/* Auth buttons section */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-200"
              >
                Sign Up
              </button>
            </div>

            {/* Cart button section */}
            <button
              className="relative p-3 hover:bg-yellow-400/10 rounded-full transition-all duration-300 group"
              onClick={() => navigate("/cart")}
            >
              <FaCartShopping className="text-xl sm:text-2xl text-gray-300 group-hover:text-yellow-400 transition-colors duration-300" />
              {getTotalItems() > 0 && (
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full absolute -top-2 -right-2 flex items-center justify-center text-xs font-bold shadow-lg animate-bounce">
                  {getTotalItems()}
                </div>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-yellow-400/10 transition-colors duration-300 text-gray-300 hover:text-yellow-400"
              >
                {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800/95 backdrop-blur-xl border border-gray-700/30 rounded-xl shadow-2xl p-6 mx-4 slide-up">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="w-full rounded-full border border-gray-600/50 focus:border-yellow-400/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 bg-gray-700/50 text-white placeholder-gray-400 backdrop-blur-sm pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  <IoMdSearch className="text-xl" />
                </button>
              </div>
            </form>
            
            <ul className="space-y-1">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleMenuClick(data.link, data.section)}
                    className="block w-full px-4 py-3 font-semibold text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400 rounded-lg transition-all duration-300 text-left"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
              
              <li className="pt-4 pb-2">
                <span className="px-4 text-sm font-bold text-gray-500 uppercase tracking-wide">Categories</span>
              </li>
              
              {DropdownLinks.map((data, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      handleCategoryClick(data.category);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full px-6 py-3 text-gray-400 hover:bg-yellow-400/10 hover:text-yellow-400 rounded-lg transition-all duration-300 text-left"
                  >
                    {data.name}
                  </button>
                </li>
              ))}
              
              <li className="pt-4 pb-2">
                <span className="px-4 text-sm font-bold text-gray-500 uppercase tracking-wide">Account</span>
              </li>
              
              <li>
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-6 py-3 text-gray-400 hover:bg-yellow-400/10 hover:text-yellow-400 rounded-lg transition-all duration-300 text-left"
                >
                  Login
                </button>
              </li>
              
              <li>
                <button
                  onClick={() => {
                    navigate("/register");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 text-left font-medium"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;