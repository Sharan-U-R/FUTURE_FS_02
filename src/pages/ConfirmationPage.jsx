import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="container mx-auto p-8 text-center flex flex-col items-center justify-center h-full">
      <div className="bg-white p-12 rounded-xl shadow-lg">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-4xl font-bold text-green-600 my-4">Thank You For Your Order!</h1>
        <p className="text-lg text-gray-600 mb-8">Your order has been placed successfully. A confirmation email is on its way.</p>
        <Link to="/" className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
