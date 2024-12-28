import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import shoes from "/shoes.png";
import shoesBg from "/shoesBg.jpg";

export default function ExtraSecond() {
  return (
    <div>
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-white py-3 mb-4">
        New Collection
      </h2>
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${shoesBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8">
          <Fade triggerOnce={false} delay={200}>
            <div className="w-full md:w-1/2 flex justify-center">
              <Zoom triggerOnce={false} delay={300}>
                <img
                  src={shoes}
                  alt="Running Shoes"
                  className="max-w-[300px] sm:max-w-[350px] transform transition-transform duration-500 hover:scale-105"
                />
              </Zoom>
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={500}>
            <div className="w-full  text-center md:text-left text-white p-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-blue-400">
                NEW AVAILABLE
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
                RUNNING SHOES
              </h3>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
                Experience unparalleled comfort and style with our latest
                running shoes. Designed for performance, they’ll take your
                fitness journey to the next level. Whether on the track or the
                trail, step into excellence today.
              </p>

              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
                $100
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-gray-200 transition">
                  ADD TO CART
                </button>
                <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-blue-600 transition">
                  VIEW PRODUCTS
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
