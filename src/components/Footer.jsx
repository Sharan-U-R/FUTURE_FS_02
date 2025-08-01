import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white mt-auto">
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Shop Section */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white border-b border-gray-700 pb-2">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-xs sm:text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=laptops" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/products?category=smartphones" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/products?category=tablets" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Tablets
                </Link>
              </li>
              <li>
                <Link to="/products?category=mobile-accessories" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white border-b border-gray-700 pb-2">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white border-b border-gray-700 pb-2">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-blue transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Help Center</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Order Tracking</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Returns</span>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white border-b border-gray-700 pb-2">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">support@digitaldrift.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-300 text-sm">1-800-DIGITAL</p>
                </div>
              </div>
              <div className="text-gray-400 text-xs mt-2">
                <p>Mon-Fri: 9AM-6PM EST</p>
                <p>24/7 Email Support</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DigitalDrift. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
