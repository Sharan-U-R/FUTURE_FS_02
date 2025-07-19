import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity } = useContext(CartContext);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-brand-dark my-8">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-6">
        <Link to="/products" className="text-brand-blue font-semibold hover:underline flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
          Continue Shopping
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-brand-dark mb-8">Your Cart</h1>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b py-4 gap-4">
            <div className="flex items-center gap-4 w-full sm:w-1/2">
              <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-contain rounded-lg bg-gray-100 p-2" />
              <div>
                <h2 className="font-bold text-lg text-brand-dark">{item.title}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-20 text-center p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                min="1"
              />
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 font-semibold transition-colors">
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 text-right">
          <h2 className="text-2xl font-bold text-brand-dark">Total: ${totalPrice.toFixed(2)}</h2>
          <Link to="/checkout" className="mt-4 inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-transform transform hover:scale-105">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
