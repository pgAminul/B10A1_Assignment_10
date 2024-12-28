import { useContext } from "react";
import {
  FaFootballBall,
  FaBasketballBall,
  FaRunning,
  FaDumbbell,
  FaSwimmer,
  FaBiking,
  FaTableTennis,
  FaBaseballBall,
  FaSkating,
  FaHiking,
} from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";
import { ContextProvider } from "../Provider/AuthProvider";

export default function Categories() {
  const { darkMode } = useContext(ContextProvider);
  const categories = [
    { icon: <FaFootballBall />, name: "Football" },
    { icon: <FaBasketballBall />, name: "Basketball" },
    { icon: <FaRunning />, name: "Running" },
    { icon: <FaDumbbell />, name: "Gym Equipment" },
    { icon: <FaSwimmer />, name: "Swimming" },
    { icon: <FaBiking />, name: "Cycling" },
    { icon: <FaTableTennis />, name: "Tennis" },
    { icon: <FaBaseballBall />, name: "Baseball" },
    { icon: <FaSkating />, name: "Skating" },
    { icon: <FaHiking />, name: "Hiking" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Our Products Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Fade key={index} triggerOnce={false}>
              {" "}
              <div
                className={`flex flex-col items-center bg-amber-100 hover:bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border`}
              >
                <Zoom triggerOnce={false}>
                  {" "}
                  <div className="text-5xl text-blue-500 mb-3 transition-transform transform hover:scale-110">
                    {category.icon}
                  </div>
                </Zoom>
                <h3 className="text-lg font-medium text-gray-700">
                  {category.name}
                </h3>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
