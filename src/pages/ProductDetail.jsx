import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaArrowLeft, FaHeart, FaShare } from "react-icons/fa";
import { productsData } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Find the product from all categories
  const findProduct = () => {
    for (const category of Object.values(productsData)) {
      const product = category.find(p => p.id === parseInt(id));
      if (product) return product;
    }
    return null;
  };

  const product = findProduct();

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 duration-300"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    ));
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Show success message or redirect to cart
    alert(`${product.name} added to cart!`);
  };

  // Mock additional images (in real app, these would come from product data)
  const productImages = [
    product.image,
    product.image,
    product.image,
  ];

  const specifications = {
    laptops: [
      { label: "Processor", value: "M3 Pro Chip" },
      { label: "RAM", value: "16GB Unified Memory" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "16-inch Liquid Retina XDR" },
      { label: "Graphics", value: "Integrated GPU" },
      { label: "Battery", value: "Up to 18 hours" },
    ],
    mobiles: [
      { label: "Display", value: "6.7-inch Super Retina XDR" },
      { label: "Chip", value: "A17 Pro" },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "48MP Main + 12MP Ultra Wide" },
      { label: "Battery", value: "All-day battery life" },
      { label: "5G", value: "Yes" },
    ],
    smartwatches: [
      { label: "Display", value: "Always-On Retina LTPO OLED" },
      { label: "Case Size", value: "45mm" },
      { label: "Health", value: "ECG, Blood Oxygen, Heart Rate" },
      { label: "Fitness", value: "Workout Detection" },
      { label: "Battery", value: "Up to 18 hours" },
      { label: "Water Resistance", value: "50 meters" },
    ],
    headphones: [
      { label: "Driver", value: "40mm Dynamic" },
      { label: "Frequency", value: "4Hz-40kHz" },
      { label: "Noise Cancellation", value: "Active ANC" },
      { label: "Battery", value: "30 hours with ANC" },
      { label: "Connectivity", value: "Bluetooth 5.2" },
      { label: "Weight", value: "250g" },
    ],
  };

  return (
    <div className="container-padding section-padding">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-primary duration-300"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === index ? "border-primary shadow-lg scale-105" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.brand}
            </p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600">({product.rating})</span>
              <span className="text-gray-400">• 1,234 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                    -{discountPercentage}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}. This premium device offers exceptional performance, 
              cutting-edge technology, and superior build quality. Perfect for professionals 
              and enthusiasts who demand the best in class features and reliability.
            </p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-full font-semibold hover:scale-105 duration-300"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 duration-300">
                <FaHeart />
              </button>
              <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 duration-300">
                <FaShare />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Premium build quality and materials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Latest technology and performance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                1-year manufacturer warranty
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Free shipping and returns
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-2xl font-semibold mb-6">Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specifications[product.category]?.map((spec, index) => (
            <div key={index} className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-medium text-gray-600">{spec.label}</span>
              <span className="text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;