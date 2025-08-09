import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`text-xs sm:text-sm ${
          index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking add to cart
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden cursor-pointer card-hover product-card"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 sm:h-48 md:h-52 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {discountPercentage > 0 && (
          <div className="absolute top-1 left-1 sm:top-3 sm:left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-1 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold shadow-lg">
            -{discountPercentage}%
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>
      
      <div className="p-2 sm:p-4 md:p-5">
        <div className="mb-2 sm:mb-3">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-1 py-0.5 sm:px-2 sm:py-1 rounded-full">
            {product.brand}
          </span>
        </div>
        
        <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2 sm:mb-4 line-clamp-2 leading-relaxed hidden sm:block">
          {product.description}
        </p>
        
        <div className="flex items-center mb-2 sm:mb-4">
          <div className="flex items-center space-x-0.5 sm:space-x-1 mr-2 sm:mr-3">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400 ml-1 hidden sm:inline">
            (124)
          </span>
        </div>
        
        <div className="flex items-center justify-between mb-3 sm:mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span className="text-sm sm:text-xl md:text-2xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-xs sm:text-sm md:text-base py-2 sm:py-3 md:py-4 rounded-full hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl hover:shadow-primary/25 hidden sm:block"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;