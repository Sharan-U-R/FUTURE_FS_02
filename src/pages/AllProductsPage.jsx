import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const AllProductsPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const electronicCategories = [
          'smartphones', 
          'laptops', 
          'tablets', 
          'mobile-accessories'
        ];
        const promises = electronicCategories.map(category => fetch(`https://dummyjson.com/products/category/${category}`).then(res => res.json()));
        const results = await Promise.all(promises);
        const combinedProducts = results.flatMap(result => result.products);
        setAllProducts(combinedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    let products = [...allProducts];
    
    // Apply search filter
    if (searchTerm) {
      products = products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    // Apply category filter (only if not 'all')
    if (selectedCategory && selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory);
    }
    
    setFilteredProducts(products);
  }, [searchTerm, selectedCategory, allProducts]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (newSearchTerm) {
      newParams.set('search', newSearchTerm);
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (newCategory !== 'all') {
      newParams.set('category', newCategory);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const categories = ['all', 'laptops', 'smartphones', 'tablets', 'mobile-accessories'];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">Our Collection</h1>
        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto px-4">Browse our full catalog of high-performance devices.</p>
      </div>
      
      <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 bg-white/60 backdrop-blur-lg rounded-xl border shadow-sm sticky top-[70px] z-40">
        <div className="relative">
          <input
            type="text"
            placeholder="Search our collection..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 pl-4 pr-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition text-sm sm:text-base"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition text-sm sm:text-base"
        >
          {categories.map(category => (
            <option key={category} value={category} className="capitalize">
              {category.replace(/-/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-blue"></div>
          <p className="text-lg sm:text-xl font-medium text-gray-500 mt-4">Loading products...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showAddToCart={false} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-16">
          <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg sm:text-xl font-medium text-gray-500">No products match your search.</p>
          <p className="text-sm text-gray-400 mt-2">Try adjusting your search terms or category filter.</p>
        </div>
      )}
    </div>
  );
};

export default AllProductsPage;
