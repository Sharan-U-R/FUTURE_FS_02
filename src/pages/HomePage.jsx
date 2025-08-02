import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const heroSlides = [
  { 
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=600&fit=crop', 
    title: 'Power Your Productivity', 
    subtitle: 'Discover cutting-edge laptops for work and play',
    link: '/products',
    gradient: 'from-blue-900/80 to-purple-900/80'
  },
  { 
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=600&fit=crop', 
    title: 'Connect Your World', 
    subtitle: 'Latest smartphones with incredible features',
    link: '/products',
    gradient: 'from-emerald-900/80 to-teal-900/80'
  },
  { 
    img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&h=600&fit=crop', 
    title: 'Portable Power', 
    subtitle: 'Tablets and mobile devices for work and entertainment',
    link: '/products',
    gradient: 'from-orange-900/80 to-red-900/80'
  },
];

const Carousel = ({ children }) => {
  return (
    <div className="relative">
      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-2 sm:px-0">
        {children}
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const CategoryCard = ({ image, title, description, link }) => (
  <Link to={link} className="group block">
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-100 to-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </Link>
);

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
      {/* Enhanced Hero Carousel - Mobile Extended */}
      <div className="relative h-[70vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} flex items-center justify-center min-h-full`}>
              <div className="text-center p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto flex flex-col justify-center min-h-full">
                <div className="flex-1 flex flex-col justify-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 animate-fade-in-up leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 animate-fade-in-up px-2" style={{animationDelay: '0.2s'}}>
                    {slide.subtitle}
                  </p>
                  <div className="flex justify-center">
                    <Link 
                      to={slide.link} 
                      className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 bg-white text-brand-dark font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up text-sm sm:text-base"
                      style={{animationDelay: '0.4s'}}
                    >
                      Shop Now
                      <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Carousel Indicators - Positioned relative to content */}
                  <div className="flex justify-center mt-4" style={{gap: '8px'}}>
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`carousel-dot rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white carousel-dot-active' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Features Section - Mobile Optimized */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark mb-3 sm:mb-4">Why Choose Digital Drift?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">Experience the future of tech shopping with our premium service and quality products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard 
              icon="🚚" 
              title="Free Shipping" 
              description="Enjoy free shipping on all orders over $50. Fast, reliable delivery to your doorstep."
            />
            <FeatureCard 
              icon="🔒" 
              title="Secure Payment" 
              description="Your transactions are protected with bank-level security and encryption."
            />
            <Link to="/contact" className="block">
              <FeatureCard 
                icon="🎧" 
                title="24/7 Support" 
                description="Our expert team is here to help you anytime, anywhere with any questions. Click to contact us!"
              />
            </Link>
          </div>
        </section>

        {/* Categories Section - Mobile Optimized */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark mb-3 sm:mb-4">Shop by Category</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">Discover our wide range of premium tech products</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <CategoryCard 
              image="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop"
              title="Laptops & Computers"
              description="High-performance machines for work and gaming"
              link="/products?category=laptops"
            />
            <CategoryCard 
              image="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=300&fit=crop"
              title="Smartphones"
              description="Latest mobile technology at your fingertips"
              link="/products?category=smartphones"
            />
            <CategoryCard 
              image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
              title="Tablets & Accessories"
              description="Portable devices and mobile accessories"
              link="/products?category=tablets"
            />
          </div>
        </section>

        {/* Top Deals Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-2">🔥 Hot Deals</h2>
              <p className="text-gray-600">Limited time offers you don't want to miss</p>
            </div>
            <Link 
              to="/products" 
              className="text-brand-blue hover:text-blue-700 font-semibold flex items-center transition-colors"
            >
              View All
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <Carousel>
            {deals.map(product => (
              <div key={product.id} className="flex-shrink-0 w-64 sm:w-72 lg:w-80 snap-start">
                <ProductCard product={product} showAddToCart={true} />
              </div>
            ))}
          </Carousel>
        </section>

        {/* Promotional Banner */}
        <section className="mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-blue to-purple-600 p-12 text-center">
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">Exclusive Member Benefits</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our community and get access to exclusive deals, early product launches, and premium support
              </p>
              <Link 
                to="/register" 
                className="inline-flex items-center px-8 py-4 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join Now - It's Free!
              </Link>
            </div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark mb-2">✨ New Arrivals</h2>
              <p className="text-gray-600">Fresh tech just landed in our store</p>
            </div>
            <Link 
              to="/products" 
              className="text-brand-blue hover:text-blue-700 font-semibold flex items-center transition-colors"
            >
              View All
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <Carousel>
            {newArrivals.map(product => (
              <div key={product.id} className="flex-shrink-0 w-64 sm:w-72 lg:w-80 snap-start">
                <ProductCard product={product} showAddToCart={true} />
              </div>
            ))}
          </Carousel>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-brand-dark mb-4">Need Help? We're Here for You!</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about our products or need support? Our expert team is ready to assist you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm">support@digitaldrift.com</p>
                <p className="text-gray-500 text-xs">Response within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm">1-800-DIGITAL</p>
                <p className="text-gray-500 text-xs">Mon-Fri: 9AM-6PM EST</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm">Available on website</p>
                <p className="text-gray-500 text-xs">Mon-Fri: 9AM-9PM EST</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
