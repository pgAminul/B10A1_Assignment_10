import React, { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../Provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";

import Swal from "sweetalert2";
export default function MyProducts() {
  const navigate = useNavigate();
  const { user, darkMode } = useContext(ContextProvider);
  console.log(user.email);
  const [emailFind, setEmailFind] = useState([]);
  useEffect(() => {
    const matchingDataByEmail = async () => {
      const URL = `https://server-site-seven-blond.vercel.app/matchEmail?email=${user.email}`;
      const res = await fetch(URL);
      const data = await res.json();
      setEmailFind(data);
    };
    matchingDataByEmail();
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const fetchData = async () => {
          const URL = `https://server-site-seven-blond.vercel.app/deleteData/${id}`;
          const res = await fetch(URL, {
            method: "DELETE",
          });
          const data = await res.json();

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          setEmailFind((prvData) => prvData.filter((d) => d._id !== id));
        };

        fetchData();
      }
    });
  };

  return (
    <div
      className={`md:px-6 px-2 flex justify-center items-center  min-h-screen py-9 ${
        darkMode ? "bg-black" : "bg-gray-900 text-white py-4"
      } `}
    >
      {emailFind.length == 0 ? (
        <div className="flex flex-col">
          <div className="flex items-center mb-3">
            <img
              src="https://img.icons8.com/?size=100&id=20939&format=png&color=000000"
              alt=""
            />
            <h2 className="text-3xl font-bold text-white">
              {" "}
              You Did't Add any list
            </h2>
          </div>
          <div
            onClick={() => navigate("/addEquipment")}
            className="flex cursor-pointer items-center mt-3  bg-gray-200 px-4 py-3 rounded-lg w-fit"
          >
            <img
              src="https://img.icons8.com/?size=100&id=102544&format=png&color=000000"
              alt=""
            />

            <button className=" text-black ml-2 text-2xl">Please Add </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
          {emailFind.map((card) => {
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
            } = card;
            const { darkMode } = useContext(ContextProvider);
            return (
              <div
                className={`card ${
                  darkMode
                    ? "bg-[rgba(0, 0, 0, 0.871)] shadow-sm shadow-amber-50"
                    : "h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100"
                } text-white`}
              >
                <Fade cascade>
                  <Bounce>
                    <Zoom>
                      <figure className="px-10 pt-10">
                        <img
                          src={imageUrl}
                          alt="products Image"
                          className="rounded-xl h-36"
                        />
                      </figure>
                      <div className="card-body items-center">
                        <h2 className="card-title">{itemName}</h2>
                        <p>{categoryName}</p>
                        <p className="font-bold mb-2">Price: ${price}</p>
                        <p>
                          <span className="font-bold text-green-500">
                            Description:{" "}
                          </span>
                          {description}
                        </p>
                      </div>
                      <div className="flex justify-around pb-3">
                        <button
                          className="btn btn-error text-white"
                          onClick={() => handleDelete(_id)}
                        >
                          Delete
                        </button>
                        <NavLink
                          className="btn btn-primary"
                          to={`/update-product-details/${_id}`}
                        >
                          Update
                        </NavLink>
                      </div>
                    </Zoom>
                  </Bounce>
                </Fade>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
