import { NavLink, useSearchParams } from 'react-router-dom';

const categories = [
  { name: 'Home', path: '/' },
  { name: 'Laptops', path: '/products?category=laptops', category: 'laptops' },
  { name: 'Smartphones', path: '/products?category=smartphones', category: 'smartphones' },
  { name: 'Tablets', path: '/products?category=tablets', category: 'tablets' },
  { name: 'Accessories', path: '/products?category=mobile-accessories', category: 'mobile-accessories' },
];

const CategoryNav = () => {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <nav className="bg-gray-100 hidden md:block border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8">
          {categories.map(cat => {
            const isActive = cat.category ? cat.category === currentCategory : false;
            
            return (
              <NavLink 
                key={cat.name} 
                to={cat.path}
                end={cat.path === '/'}
                className={({ isActive: isPathActive }) => {
                  const active = cat.category ? isActive : isPathActive;
                  return `py-3 font-semibold transition-colors ${active ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-600 hover:text-brand-blue'}`;
                }}
              >
                {cat.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
