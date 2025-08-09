import React from "react";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Discover the key features to look for when selecting your next smartwatch, from health tracking to battery life.",
    published: "Jan 20, 2024 by Dilshad",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "A comprehensive guide to selecting the right tech gadgets that match your lifestyle and budget requirements.",
    published: "Jan 20, 2024 by Satya",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "Everything you need to know about VR technology and how to pick the best headset for gaming and entertainment.",
    published: "Jan 20, 2024 by Sabir",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=300&fit=crop",
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Blogs for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Recent News
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Stay updated with the latest trends and insights in technology
          </p>
        </div>

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              key={data.title}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 duration-300 rounded-2xl"
            >
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4 space-y-3">
                <h1 className="text-xl font-bold line-clamp-1">{data.title}</h1>
                <p className="line-clamp-2 text-gray-600 dark:text-gray-400 text-sm">
                  {data.subtitle}
                </p>
                <div className="flex justify-between items-center text-gray-500 text-sm pt-3">
                  <p>{data.published}</p>
                  <button className="text-primary hover:scale-105 duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;