import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../Provider/AuthProvider";
import "../Layout/App.css";
import Swal from "sweetalert2";
export default function UpdateData() {
  const { id } = useParams();
  const [update, setUpdate] = useState([]);
  const { user, darkMode } = useContext(ContextProvider);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://server-site-seven-blond.vercel.app/allData";
      const res = await fetch(URL);
      const data = await res.json();
      const findingData = data.find((d) => d._id === id);
      setUpdate(findingData);
    };
    fetchData();
  }, [id, setUpdate]);
  console.log(update);

  const addProductToDataBase = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      imageUrl: form.imageUrl.value,
      itemName: form.itemName.value,
      categoryName: form.categoryName.value,
      description: form.description.value,
      price: form.price.value,
      rating: form.rating.value,
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: form.stockStatus.value,
      userEmail: form.userEmail.value,
      userName: form.userName.value,
    };

    fetch(`https://server-site-seven-blond.vercel.app/updateData/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        form.reset();

        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Updated Data Data`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        alert("problem", e.messge);
      });
  };
  const {
    imageUrl,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = update;
  return (
    <div
      className={`${
        darkMode ? "bg-black" : "bg-gray-900 text-white py-4"
      }  p-4`}
    >
      <form
        onSubmit={addProductToDataBase}
        className={`form-foradd max-w-3xl mx-auto bg-base-200 p-8 rounded-lg text-black   ${
          darkMode
            ? "bg-[rgba(0, 0, 0, 0.871)] shadow-sm shadow-amber-50"
            : "h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100"
        }`}
      >
        <h2 className="text-white font-bold text-3xl py-3 mb-3 text-center">
          Update Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="imageUrl" className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="imageUrl"
              defaultValue={imageUrl}
              placeholder="Enter image URL"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="itemName" className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              defaultValue={itemName}
              name="itemName"
              placeholder="Enter item name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="categoryName" className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              type="text"
              name="categoryName"
              defaultValue={categoryName}
              placeholder="Enter category name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="description" className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              id="description"
              defaultValue={description}
              placeholder="Enter description"
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="price" className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter price"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="rating" className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              max={5}
              name="rating"
              defaultValue={rating}
              placeholder="Enter rating"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="customization" className="label">
              <span className="label-text">Customization</span>
            </label>
            <input
              type="text"
              name="customization"
              defaultValue={customization}
              placeholder="Enter customization details"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="processingTime" className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="date"
              name="processingTime"
              defaultValue={processingTime}
              placeholder="Enter processing time"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="stockStatus" className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="number"
              name="stockStatus"
              defaultValue={stockStatus}
              placeholder="Enter stock quantity"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="userEmail" className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              value={user?.email}
              readOnly
              className="input input-bordered w-full text-black"
            />
          </div>

          <div>
            <label htmlFor="userName" className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full text-black"
            />
          </div>
        </div>
        <button className="btn w-[100%] mt-5 btn-primary">Add Equipment</button>
      </form>
    </div>
  );
}
