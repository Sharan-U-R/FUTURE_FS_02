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
          'mobile-accessories',
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
    if (searchTerm) {
      products = products.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (selectedCategory !== 'all') {
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
    <div className="container mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-brand-dark tracking-tight">Our Collection</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Browse our full catalog of high-performance devices.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white/60 backdrop-blur-lg rounded-xl border shadow-sm sticky top-[70px] z-40">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search our collection..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 pl-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full md:w-1/3 p-3 border-2 border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
        >
          {categories.map(category => (
            <option key={category} value={category} className="capitalize">
              {category.replace(/-/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-xl font-medium text-gray-500">Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-medium text-gray-500 py-16">No products match your search.</p>
      )}
    </div>
  );
};

export default AllProductsPage;
