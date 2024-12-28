import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ContextProvider } from "../Provider/AuthProvider";

export default function AllProducts() {
  const [sortedCards, setSortedCards] = useState([]);
  const { darkMode } = useContext(ContextProvider);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://server-site-seven-blond.vercel.app/allData";
      const res = await fetch(url);
      const data = await res.json();
      setSortedCards(data);
    };
    fetchData();
  }, []);

  const handleSort = async (e) => {
    const sortType = e.target.value;

    if (sortType === "Select") return;

    const url = `https://server-site-seven-blond.vercel.app/sorted?sortType=${sortType}`;
    const res = await fetch(url);
    const data = await res.json();

    setSortedCards(data);
  };
  //simple way to sort data by onCilck function
  // const handleSort = async () => {
  //   const url = `https://server-site-seven-blond.vercel.app/sorted`;
  //   const res = await fetch(url);
  //   const data = await res.json();

  //   setSortedCards(data);
  // };

  return (
    <div
      className={` text-white ${darkMode ? "bg-black" : "bg-gray-900   py-4"}`}
    >
      <div className="py-4 flex justify-center ">
        <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg text-white ">
          Sort By{" "}
          <select
            className="bg-transparent outline-none border-none"
            onChange={handleSort}
          >
            <option className="text-black" value="Select">
              Select
            </option>
            <option className="text-black" value="Ascending">
              Ascending
            </option>
            <option className="text-black" value="Descending">
              Descending
            </option>
          </select>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table
          className={`table w-full text-white ${
            darkMode ? "bg-black" : "bg-gray-900  py-4"
          }`}
        >
          <thead className={`text-white`}>
            <tr className="hidden md:table-row">
              <th>No</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="space-y-3">
            {sortedCards.map((card, i) => {
              const { imageUrl, itemName, categoryName, price, rating, _id } =
                card;
              return (
                <tr key={_id} className="my-4">
                  <td className="table-row md:table-cell py-2 md:py-0">
                    {i + 1}
                  </td>
                  <td className="card card-body md:table-cell py-2 md:py-0">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-6 w-6 my-3">
                          <img
                            src={imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="font-bold">{itemName}</div>
                    </div>
                  </td>
                  <td className="card card-body md:table-cell py-2 md:py-0">
                    {categoryName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Rating {rating}
                    </span>
                  </td>
                  <td className="card card-body md:table-cell py-2 md:py-0">
                    ${price}
                  </td>
                  <td className="card card-body md:table-cell py-2 md:py-0">
                    <NavLink
                      to={`/Details-card-home/${_id}`}
                      className="btn btn-success btn-xs text-white"
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
