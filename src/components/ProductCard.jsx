import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-xl flex flex-col group bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block p-4">
        <div className="relative w-full h-48">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 flex-grow">
          <p className="text-sm text-gray-500 capitalize">{product.category.replace('-', ' ')}</p>
          <h2 className="text-lg font-bold text-brand-dark mt-1 h-14">{product.title}</h2>
          <p className="text-2xl font-extrabold text-brand-dark mt-2">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="p-4 pt-0 mt-auto">
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-brand-blue text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
