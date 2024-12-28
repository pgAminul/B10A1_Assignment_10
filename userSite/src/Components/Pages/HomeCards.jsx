import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ContextProvider } from "../Provider/AuthProvider";
import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";
export default function HomeCards() {
  const { darkMode } = useContext(ContextProvider);
  const [cards, setCard] = useState([]);
  useEffect(() => {
    const cardFetch = async () => {
      const url = "https://server-site-seven-blond.vercel.app/homeCard";
      const res = await fetch(url);
      const data = await res.json();
      setCard(data);
    };
    cardFetch();
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl md:text-5xl py-2 mt-4 text-white">
        Hero Products
      </h2>
      <div
        className={`flex justify-center items-center px-4 py-8 min-h-screen`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => {
            const {
              imageUrl,
              itemName,
              categoryName,
              description,
              price,
              rating,
              _id,
            } = card;
            return (
              <div
                key={_id}
                className={`max-w-sm rounded-lg shadow-lg ${
                  darkMode
                    ? "bg-[rgba(0, 0, 0, 0.871)] shadow-sm shadow-amber-50"
                    : "h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100"
                } overflow-hidden sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg text-white py-5`}
              >
                <Zoom triggerOnce={false}>
                  <img
                    src={imageUrl}
                    alt={itemName}
                    className="w-52 h-52 mx-auto object-cover object-center rounded-t-lg"
                  />
                </Zoom>
                <div className="p-4">
                  <Bounce triggerOnce={false}>
                    <h2 className="text-2xl font-semibold truncate sm:text-lg md:text-xl lg:text-2xl">
                      {itemName}
                    </h2>
                  </Bounce>
                  <Fade triggerOnce={false}>
                    <p className="text-sm sm:text-xs md:text-sm lg:text-base">
                      {categoryName}
                    </p>
                  </Fade>
                  <Slide direction="up" triggerOnce={false}>
                    <p className="mt-2 text-sm sm:text-xs md:text-sm lg:text-base line-clamp-3">
                      {description}
                    </p>
                  </Slide>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold sm:text-base md:text-lg lg:text-xl">
                      ${price}
                    </span>
                    <span className="flex items-center text-yellow-500">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={index < rating ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 17.75l-3.71 2.05 1.05-3.66-2.89-2.18 3.62-.29L12 7.75l1.93 3.91 3.62.29-2.89 2.18 1.05 3.66L12 17.75z"
                          />
                        </svg>
                      ))}
                    </span>
                  </div>
                  <NavLink
                    to={`Details-card-home/${_id}`}
                    className="mt-4 btn w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-3 lg:px-6"
                  >
                    View More
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
