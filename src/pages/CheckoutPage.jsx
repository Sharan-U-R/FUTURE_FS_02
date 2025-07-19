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
    <div className="container mx-auto p-8">
      <div className="mb-6">
        <Link to="/cart" className="text-brand-blue font-semibold hover:underline flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
          Back to Cart
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center text-brand-dark mb-10">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-brand-dark">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" required />
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Shipping Address</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition" rows="3" required></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-green-700 transition-transform transform hover:scale-105">
              Place Order
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-brand-dark">Your Order</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b py-3">
                <span className="font-semibold text-brand-dark">{item.title} (x{item.quantity})</span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-2xl mt-6 pt-4 border-t">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
