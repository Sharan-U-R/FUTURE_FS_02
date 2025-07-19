import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setSelectedImage(data.thumbnail);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-xl p-8">Loading...</p>;
  if (!product) return <p className="text-center text-xl p-8">Product not found.</p>;

  return (
    <div className="bg-brand-gray py-12">
      <div className="container mx-auto px-4">
        <div className="text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:text-brand-blue">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-brand-blue">Products</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{product.category.replace('-', ' ')}</span>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="h-96 flex justify-center items-center border rounded-lg p-4 mb-4">
              <img src={selectedImage} alt={product.title} className="max-w-full max-h-full object-contain" />
            </div>
            <div className="flex gap-2 justify-center">
              {product.images.slice(0, 5).map((img, index) => (
                <button key={index} onClick={() => setSelectedImage(img)} className={`w-20 h-20 border-2 rounded-lg p-1 ${selectedImage === img ? 'border-brand-blue' : 'border-gray-200'}`}>
                  <img src={img} alt={`thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-brand-dark tracking-tight">{product.title}</h1>
            <p className="text-lg text-gray-500 mt-2 capitalize">{product.brand}</p>
            <div className="flex items-center my-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating.toFixed(1)} out of 5</span>
            </div>
            <p className="text-gray-700 leading-relaxed mt-2 flex-grow">{product.description}</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-brand-dark">${product.price.toFixed(2)}</span>
            </div>
            <button onClick={() => addToCart(product)} className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;