import React, { useContext } from "react";
import { ContextProvider } from "../Provider/AuthProvider";
import "../Layout/App.css";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

export default function AddProducts() {
  const { user, darkMode } = useContext(ContextProvider);
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

    console.log(formData);
    fetch("https://server-site-seven-blond.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Added`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((e) => {
        alert("problem", e.message);
      });
  };

  return (
    <div
      className={` mx-auto p-6 ${
        darkMode ? "bg-black" : "bg-gray-900 text-white py-4"
      }`}
    >
      <form
        onSubmit={addProductToDataBase}
        className={` form-foradd ${
          darkMode
            ? "bg-[rgba(0, 0, 0, 0.871)] shadow-sm shadow-amber-50"
            : "h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100"
        } p-8 max-w-3xl mx-auto rounded-lg text-black`}
      >
        <Fade triggerOnce={false} delay={400}>
          <h2 className="text-white font-bold text-3xl py-3 mb-3 text-center">
            Add Equipment
          </h2>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="imageUrl" className="label">
                <span className="label-text text-white">Image URL</span>
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter image URL"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="itemName" className="label">
                <span className="label-text text-white">Item Name</span>
              </label>
              <input
                type="text"
                name="itemName"
                placeholder="Enter item name"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="categoryName" className="label">
                <span className="label-text text-white">Category Name</span>
              </label>
              <input
                type="text"
                name="categoryName"
                placeholder="Enter category name"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="description" className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <textarea
                id="description"
                placeholder="Enter description"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="price" className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="rating" className="label">
                <span className="label-text text-white">Rating</span>
              </label>
              <input
                type="number"
                max={5}
                name="rating"
                placeholder="Enter rating"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="customization" className="label">
                <span className="label-text text-white">Customization</span>
              </label>
              <input
                type="text"
                name="customization"
                placeholder="Enter customization details"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="processingTime" className="label">
                <span className="label-text text-white">Processing Time</span>
              </label>
              <input
                type="date"
                name="processingTime"
                placeholder="Enter processing time"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="stockStatus" className="label">
                <span className="label-text text-white">Stock Status</span>
              </label>
              <input
                type="number"
                name="stockStatus"
                placeholder="Enter stock quantity"
                className="input input-bordered w-full"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="userEmail" className="label">
                <span className="label-text text-white">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email}
                readOnly
                className="input input-bordered w-full text-black"
              />
            </div>
          </Fade>

          <Fade triggerOnce={false} delay={400}>
            <div>
              <label htmlFor="userName" className="label">
                <span className="label-text text-white">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full text-black"
              />
            </div>
          </Fade>
        </div>

        <Fade triggerOnce={false} delay={400}>
          <button className="btn w-[100%] mt-5 btn-primary">
            Add Equipment
          </button>
        </Fade>
      </form>
    </div>
  );
}
