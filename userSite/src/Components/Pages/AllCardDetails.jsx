import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextProvider } from "../Provider/AuthProvider";

export default function DetailsHomeCard() {
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  const { darkMode } = useContext(ContextProvider);
  useEffect(() => {
    const cardFetch = async () => {
      const url = "https://server-site-seven-blond.vercel.app/homeCard";
      const res = await fetch(url);
      const data = await res.json();

      const find = data.find((d) => d._id === id);
      setCards(find);
    };
    cardFetch();
  }, []);
  const {
    imageUrl,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    _id,
  } = cards;
  const navigate = useNavigate();
  return (
    <div
      className={`flex justify-center py-5 items-center min-h-screen ${
        darkMode ? "bg-black" : "bg-gray-900 text-white py-4"
      }`}
    >
      <div className="card shadow-lg  my-5 border border-gray-700 bg-gradient-to-r from-pink-800/30 to-gray-800/30 backdrop-blur-lg rounded-lg p-6 text-center text-gray-100 max-w-screen-lg">
        <h2 className="card-title text-green-400 text-2xl font-bold mb-2">
          Item Name: {itemName}
        </h2>
        <p className="mb-4 text-gray-300 text-2xl">Category: {categoryName}</p>
        <img
          src={imageUrl}
          alt={itemName}
          className="rounded-lg mb-4 w-36 mx-auto"
        />

        <p className="text-gray-400 mb-4">
          <span className="text-2xl font-bold text-white mr-2">
            Descripton:
          </span>{" "}
          {description}
        </p>
        <h3 className="text-3xl font-bold text-green-500 mb-4">${price}</h3>
        <p className="text-yellow-400 mb-4">Rating: {rating}/5</p>
        <p className="text-gray-400 mb-4">Customization: {customization}</p>
        <p className="text-gray-400 mb-4">Processing Time: {processingTime}</p>
        <div className="flex justify-around">
          <button className="btn btn-primary">Get Started</button>
          <button
            className="btn btn-error text-white"
            onClick={() => navigate(-1)}
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}
