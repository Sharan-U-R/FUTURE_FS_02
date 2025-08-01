import { NavLink, useSearchParams } from 'react-router-dom';

const categories = [
  { name: 'Home', path: '/' },
  { name: 'Laptops', path: '/products?category=laptops', category: 'laptops' },
  { name: 'Smartphones', path: '/products?category=smartphones', category: 'smartphones' },
  { name: 'Tablets', path: '/products?category=tablets', category: 'tablets' },
  { name: 'Accessories', path: '/products?category=mobile-accessories', category: 'mobile-accessories' },
  { name: 'Contact Us', path: '/contact' },
];

const CategoryNav = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <nav className="bg-gradient-to-r from-gray-50 to-gray-100 hidden md:block border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-2">
          {categories.map(cat => {
            const isActive = cat.category ? cat.category === currentCategory : false;

            return (
              <NavLink
                key={cat.name}
                to={cat.path}
                end={cat.path === '/'}
                className={({ isActive: isPathActive }) => {
                  const active = cat.category ? isActive : isPathActive;
                  return `relative px-6 py-4 font-medium transition-all duration-300 rounded-t-lg group ${active
                    ? 'text-brand-blue bg-white shadow-md border-b-2 border-brand-blue'
                    : 'text-gray-600 hover:text-brand-blue hover:bg-white/50'
                    }`;
                }}
              >
                <span className="relative z-10">{cat.name}</span>
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-purple-600/5 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
