import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-padding py-12 sm:py-20 text-center">
        <FaShoppingCart className="text-4xl sm:text-6xl text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Add some products to get started!</p>
        <button
          onClick={() => navigate("/")}
          className="btn-primary px-6 sm:px-8 py-3 text-sm sm:text-base"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container-padding section-padding">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-primary duration-300"
          >
            <FaArrowLeft />
            Back
          </button>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700 duration-300"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.brand}</p>
                <p className="text-primary font-bold">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100 duration-300"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-x">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100 duration-300"
                  >
                    +
                  </button>
                </div>

                <div className="text-right min-w-[80px]">
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 duration-300 p-2"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className={shipping === 0 ? "text-green-600" : ""}>
                {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            {shipping === 0 && (
              <p className="text-sm text-green-600">
                🎉 You qualify for free shipping!
              </p>
            )}
            
            {subtotal < 100 && (
              <p className="text-sm text-gray-600">
                Add ${(100 - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full font-semibold hover:scale-105 duration-300 mb-4"
          >
            Proceed to Checkout
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:bg-gray-50 duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;