const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white mt-auto">
      <div className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Laptops</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Smartphones</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Tablets</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:text-brand-blue transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-blue transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digital Drift. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
