import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product, showAddToCart = true }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border rounded-xl flex flex-col group bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
      <Link to={`/product/${product.id}`} className="block p-2 sm:p-3 lg:p-4 flex-grow">
        <div className="relative w-full h-32 sm:h-40 lg:h-48">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-2 sm:mt-3 lg:mt-4 flex-grow">
          <p className="text-xs text-gray-500 capitalize hidden sm:block">{product.category.replace('-', ' ')}</p>
          <h2 className="text-xs sm:text-sm lg:text-lg font-bold text-brand-dark mt-1 line-clamp-2 leading-tight">{product.title}</h2>
          <p className="text-sm sm:text-lg lg:text-2xl font-extrabold text-brand-dark mt-1 sm:mt-2">${product.price.toFixed(2)}</p>
        </div>
      </Link>
      {showAddToCart && (
        <div className="p-2 sm:p-3 lg:p-4 pt-0 mt-auto">
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-brand-blue text-white font-bold py-2 sm:py-3 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm lg:text-base"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
