import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const heroSlides = [
  { img: 'https://placehold.co/1200x400/1a202c/ffffff?text=Latest+Laptops', title: 'Power Your Productivity', link: '/products?category=laptops' },
  { img: 'https://placehold.co/1200x400/007aff/ffffff?text=New+Smartphones', title: 'Connect Your World', link: '/products?category=smartphones' },
  { img: 'https://placehold.co/1200x400/4a5568/ffffff?text=Top+Audio+Gear', title: 'Immerse Yourself', link: '/products?category=audio' },
];

const Carousel = ({ children }) => {
    return (
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {children}
        </div>
      </div>
    );
  };

const HomePage = () => {
  const [deals, setDeals] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [dealsRes, arrivalsRes] = await Promise.all([
          fetch('https://dummyjson.com/products/category/laptops?limit=10'),
          fetch('https://dummyjson.com/products/category/smartphones?limit=10'),
        ]);
        const dealsData = await dealsRes.json();
        const arrivalsData = await arrivalsRes.json();
        setDeals(dealsData.products);
        setNewArrivals(arrivalsData.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-brand-gray">
      {/* Hero Carousel */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Link to={slide.link} className="text-center p-4">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight animate-fade-in-up">{slide.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Top Deals</h2>
          <Carousel>
            {deals.map(product => (
              <div key={product.id} className="flex-shrink-0 w-72">
                <ProductCard product={product} />
              </div>
            ))}
          </Carousel>
        </section>

        <section className="mb-12">
          <Link to="/products?category=mobile-accessories">
            <img src="https://placehold.co/1200x200/e2e8f0/1a202c?text=Shop+All+Accessories" alt="Promotional Banner" className="w-full rounded-xl hover:opacity-90 transition-opacity" />
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-brand-dark mb-6">New Arrivals</h2>
          <Carousel>
            {newArrivals.map(product => (
              <div key={product.id} className="flex-shrink-0 w-72">
                <ProductCard product={product} />
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
