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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <Link to="/" className="text-3xl font-extrabold text-brand-dark tracking-tighter transition-opacity hover:opacity-80">
              DigitalDrift
            </Link>
          </div>
          
          <form onSubmit={handleSearch} className="hidden md:flex w-full max-w-xl relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full p-3 pl-4 pr-12 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-blue text-white rounded-md hover:bg-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
            </button>
          </form>

          <div className="flex items-center gap-6">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-2">
                <span className="font-semibold text-gray-700">Hi, {user.name}</span>
                <span>|</span>
                <button onClick={logout} className="font-semibold text-brand-blue hover:underline">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:block font-semibold text-gray-700 hover:text-brand-blue transition-colors">Login</Link>
            )}
            <Link to="/cart" className="relative flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="font-semibold hidden md:block">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 absolute w-full">
          <NavLink to="/" className="block py-2 text-gray-700 font-semibold" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className="block py-2 text-gray-700 font-semibold" onClick={() => setIsMenuOpen(false)}>All Products</NavLink>
          <hr className="my-2"/>
          {isAuthenticated ? (
             <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-red-500 font-semibold">Logout</button>
          ) : (
            <NavLink to="/login" className="block py-2 text-gray-700 font-semibold" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
