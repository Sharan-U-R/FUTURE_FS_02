import React, { useState, useEffect } from "react";
import { productsData } from "../../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleCategoryFilter = (event) => {
      setActiveCategory(event.detail);
      setSearchQuery(""); // Clear search when filtering by category
      setVisibleProducts(8);
    };

    const handleSearch = (event) => {
      setSearchQuery(event.detail);
      setActiveCategory("all"); // Show all categories when searching
      setVisibleProducts(8);
    };

    window.addEventListener('filterCategory', handleCategoryFilter);
    window.addEventListener('searchProducts', handleSearch);
    
    return () => {
      window.removeEventListener('filterCategory', handleCategoryFilter);
      window.removeEventListener('searchProducts', handleSearch);
    };
  }, []);

  // Get all products or filter by category and search
  const getFilteredProducts = () => {
    let products = [];
    
    if (activeCategory === "all") {
      products = Object.values(productsData).flat();
    } else {
      products = productsData[activeCategory] || [];
    }

    // Apply search filter if search query exists
    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  };

  const filteredProducts = getFilteredProducts();
  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts(prev => prev + 8);
  };

  const categoryButtons = [
    { key: "all", label: "All Products" },
    { key: "laptops", label: "Laptops" },
    { key: "mobiles", label: "Mobile Phones" },
    { key: "smartwatches", label: "Smart Watches" },
    { key: "headphones", label: "Headphones" },
  ];

  return (
    <div className="section-padding" data-section="products">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Top Selling Products for you"}
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            {searchQuery ? `Found ${filteredProducts.length} Products` : "Our Products"}
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            {searchQuery 
              ? `Showing results for "${searchQuery}" in our product catalog`
              : "Discover our premium collection of tech products with the best prices and quality"
            }
          </p>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setVisibleProducts(8);
              }}
              className="mt-2 text-primary hover:underline text-sm"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categoryButtons.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setActiveCategory(category.key);
                setSearchQuery(""); // Clear search when clicking category
                setVisibleProducts(8);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProducts.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-8 rounded-full font-semibold"
            >
              Load More Products
            </button>
          </div>
        )}

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;