import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Partners from "../components/Partners/Partners";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";

const BannerData = {
  discount: "30% OFF",
  title: "Premium Audio",
  date: "10 Jan to 28 Jan",
  image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
  title2: "Sony WH-1000XM5",
  title3: "Winter Sale",
  title4:
    "Experience industry-leading noise cancellation with premium sound quality",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "25% OFF",
  title: "Smart Tech",
  date: "14 Jan to 28 Jan",
  image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
  title2: "Apple Watch Series 9",
  title3: "Health Focus",
  title4:
    "Advanced health tracking with the most powerful Apple Watch yet",
  bgColor: "#2dcc6f",
};

const Home = ({ handleOrderPopup }) => {
  return (
    <>
      <div data-section="hero">
        <Hero handleOrderPopup={handleOrderPopup} />
      </div>
      <Category />
      <Category2 />
      <div data-section="services">
        <Services />
      </div>
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <div data-section="blogs">
        <Blogs />
      </div>
      <Partners />
    </>
  );
};

export default Home;