import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { items } = useContext(CartContext);
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm.trim()}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100 w-full max-w-full relative">
      <div className="w-full px-0.5 sm:px-2 lg:px-3 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-0 sm:gap-0.5">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-0.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="flex items-center gap-2 group -ml-1 sm:ml-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-brand-blue to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-brand-dark to-gray-600 bg-clip-text text-transparent group-hover:from-brand-blue group-hover:to-purple-600 transition-all">
                DigitalDrift
              </span>
            </Link>
          </div>
          
          <form onSubmit={handleSearch} className="hidden lg:flex w-full max-w-xl xl:max-w-2xl relative mx-4 lg:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search electronics..."
                className="w-full p-3 lg:p-4 pl-4 lg:pl-5 pr-12 lg:pr-14 bg-gray-50 border-2 border-gray-200 rounded-xl lg:rounded-2xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue focus:bg-white transition-all duration-300 text-gray-700 placeholder-gray-400 text-sm lg:text-base"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 lg:p-2.5 bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-lg lg:rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2 sm:gap-3 mr-2 sm:mr-0">
            {isAuthenticated ? (
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="hidden sm:flex items-center gap-2 px-2 sm:px-3 py-2 bg-gray-50 rounded-xl">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-brand-blue to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="font-medium text-gray-700 text-xs sm:text-sm lg:text-base hidden md:inline">Hi, {user.name}</span>
                </div>
                <button 
                  onClick={logout} 
                  className="px-2 sm:px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300"
                >
                  <span className="hidden sm:inline">Logout</span>
                  <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 font-semibold text-white bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-sm lg:text-base transform hover:scale-105"
              >
                Login
              </Link>
            )}
            <Link 
              to="/cart" 
              className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 lg:px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-6 sm:w-6 text-gray-700 group-hover:text-brand-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium text-gray-700 group-hover:text-brand-blue transition-colors hidden sm:block lg:text-base text-sm">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center animate-pulse shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 absolute top-full left-0 w-full shadow-lg" style={{zIndex: 9999, display: 'block'}}>
          <div className="space-y-2">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full p-3 pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
            
            <NavLink 
              to="/" 
              className="flex items-center gap-3 py-3 px-4 text-gray-700 font-medium hover:bg-blue-50 hover:text-brand-blue rounded-xl transition-all" 
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </NavLink>
            
            <NavLink 
              to="/products" 
              className="flex items-center gap-3 py-3 px-4 text-gray-700 font-medium hover:bg-blue-50 hover:text-brand-blue rounded-xl transition-all" 
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              All Products
            </NavLink>
            
            <div className="border-t border-gray-200 my-3"></div>
            
            {isAuthenticated && (
              <div className="space-y-2">
                <div className="flex items-center gap-3 py-3 px-4 bg-gray-50 rounded-xl sm:hidden">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="font-medium text-gray-700">Hi, {user.name}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
