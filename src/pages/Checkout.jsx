import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCreditCard, FaLock } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const navigate = useNavigate();
    const { items, getTotalPrice, clearCart } = useCart();
    const [formData, setFormData] = useState({
        // Shipping Information
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "United States",

        // Payment Information
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardName: "",

        // Order Options
        shippingMethod: "standard",
        paymentMethod: "card",
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            alert("Order placed successfully! Thank you for your purchase.");
            clearCart();
            navigate("/");
            setIsProcessing(false);
        }, 2000);
    };

    if (items.length === 0) {
        return (
            <div className="container py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">No items to checkout</h2>
                <button
                    onClick={() => navigate("/")}
                    className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 duration-200 ease-out"
                >
                    Continue Shopping
                </button>
            </div>
        );
    }

    const subtotal = getTotalPrice();
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="container py-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate("/cart")}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary duration-200 ease-out"
                >
                    <FaArrowLeft />
                    Back to Cart
                </button>
                <h1 className="text-3xl font-bold">Checkout</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Shipping Information */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2">Address *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">State *</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">ZIP Code *</label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <FaCreditCard />
                                Payment Information
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Card Number *</label>
                                    <input
                                        type="text"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        placeholder="1234 5678 9012 3456"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            placeholder="MM/YY"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">CVV *</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            placeholder="123"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Cardholder Name *</label>
                                    <input
                                        type="text"
                                        name="cardName"
                                        value={formData.cardName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                                <FaLock />
                                Your payment information is secure and encrypted
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-lg shadow-md p-6 h-fit">
                        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

                        {/* Items */}
                        <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium text-sm">{item.name}</div>
                                        <div className="text-xs text-gray-600">Qty: {item.quantity}</div>
                                    </div>
                                    <div className="font-medium text-sm">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>

                            <div className="border-t pt-2">
                                <div className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-full font-semibold hover:scale-105 duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isProcessing ? "Processing..." : "Place Order"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
