import React from "react";
import { FaHeart } from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";

const FeatureProduct = () => {
  // Product Data
  const products = [
    {
      image:
        "https://5.imimg.com/data5/NW/FZ/AY/SELLER-9845587/gym-equipments-500x500.jpg",
      name: "Full gym setup",
      price: 29.0,
    },
    {
      image:
        "https://images.activefitnessstore.com/product-large/ICON-PETL-99816/proform-performance-600i-treadmill-icon-petl-99816.jpg",
      name: "6001 Folding Treadmill",
      price: 2999.0,
    },
    {
      image: "https://m.media-amazon.com/images/I/51OJS125skL.jpg",
      price: 899.0,
    },
    {
      image:
        "https://gymgear.co.za/wp-content/uploads/2022/01/Bench-Press-Leg-Extension-Leg-Curl-Combo.png",
      name: "Baitrunner Fishing Reel",
      price: 125.9,
    },
    {
      image:
        "https://gymgear.co.za/wp-content/uploads/2022/01/Bench-Press-Leg-Extension-Leg-Curl-Combo.png",
      name: "Bench, Leg Curl, and Preacher",
      price: 599.0,
    },
    {
      image: "https://blog.atome.my/wp-content/uploads/2023/04/Home-Gym.jpg",
      name: "Gym",
      price: 12.69,
    },
    {
      image:
        "https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=",
      name: "Gym equipment",
      price: 39.0,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51hTLNweDdL._AC_UF894,1000_QL80_.jpg",
      name: "Dumbbell Set",
      price: 40.0,
    },
  ];

  return (
    <div className="mt-4">
      <h1 className="text-center text-white text-4xl font-bold py-3 ">
        Feature Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group relative bg-white shadow rounded-lg overflow-hidden"
          >
            {/* Product Image with Zoom animation */}
            <Zoom>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Zoom>

            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h4 className="text-white font-semibold text-lg">
                {product.name}
              </h4>
              <p className="text-white text-sm">${product.price.toFixed(2)}</p>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                Add to Cart
              </button>
            </div>

            {/* Heart Icon with Fade animation */}
            <Fade>
              <button className="absolute top-2 right-2 text-red-500 text-xl hover:text-red-600">
                <FaHeart />
              </button>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
