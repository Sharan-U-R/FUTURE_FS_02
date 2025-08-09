import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
            {/* Header section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-black/70 dark:text-white">
                  Order Now
                </h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={handleOrderPopup}
                />
              </div>
            </div>
            {/* form section */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Address"
                className="form-input"
              />
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;