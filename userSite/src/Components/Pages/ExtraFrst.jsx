import React, { useContext, useState } from "react";
import { ContextProvider } from "../Provider/AuthProvider";

export default function ExtraFrst() {
  const [hovered, setHovered] = useState(false);

  const { darkMode } = useContext(ContextProvider);

  return (
    <div
      className={`relative py-5 flex justify-center items-center  lg:min-h-screen"
      }`}
    >
      <div
        className="group relative overflow-hidden rounded-lg shadow-lg max-w-4xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="overflow-hidden">
          <img
            src="https://www.heraldtribune.com/gcdn/authoring/authoring-images/2024/08/02/NSHT/74653095007-sar-img-media-day-022.jpg?crop=4655,2619,x0,y0&width=3200&height=1801&format=pjpg&auto=webp"
            alt="Women Playing Tackle Football"
            className={`transition-transform duration-500 w-screen ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {!hovered && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              Man Playing Tackle Football
            </h1>
          </div>
        )}

        {hovered && (
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500`}
          >
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              Feel the Action!
            </h1>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white text-lg rounded-lg shadow hover:bg-red-700">
              Explore Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
