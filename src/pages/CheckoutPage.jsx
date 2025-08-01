import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { items, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert('Please fill out all fields.');
      return;
    }
    console.log('Order placed:', { customer: formData, order: items, total: totalPrice });
    clearCart();
    navigate('/confirmation');
  };

  if (items.length === 0) {
    return (
        <div className="container mx-auto p-8 text-center">
            <h1 className="text-2xl font-bold my-8">Your cart is empty.</h1>
        </div>
    )
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-4 sm:mb-6">
        <Link to="/cart" className="text-brand-blue font-semibold hover:underline flex items-center gap-2 text-sm sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
          Back to Cart
        </Link>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-brand-dark mb-6 sm:mb-8 lg:mb-10">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Order Summary - Shows first on mobile */}
        <div className="order-1 lg:order-2">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-brand-dark">Your Order</h2>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg sticky top-4">
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <div className="flex-1 pr-4">
                    <span className="font-semibold text-brand-dark text-sm sm:text-base block">{item.title}</span>
                    <span className="text-gray-500 text-xs sm:text-sm">Qty: {item.quantity}</span>
                  </div>
                  <span className="font-medium text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 pt-4 border-t border-gray-200">
              <span>Total</span>
              <span className="text-brand-blue">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Shipping Form - Shows second on mobile */}
        <div className="order-2 lg:order-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-brand-dark">Shipping Information</h2>
          <form id="checkout-form" onSubmit={handleSubmit} className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition text-sm sm:text-base" 
                  placeholder="Enter your full name"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition text-sm sm:text-base" 
                  placeholder="your@email.com"
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Shipping Address</label>
                <textarea 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleInputChange} 
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition text-sm sm:text-base resize-none" 
                  rows="3" 
                  placeholder="Enter your complete shipping address"
                  required
                />
              </div>
            </div>
            
            {/* Place Order Button - Inside Form Container */}
            <div className="mt-6 sm:mt-8">
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white font-bold py-3 sm:py-4 rounded-lg text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Place Order - ${totalPrice.toFixed(2)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
