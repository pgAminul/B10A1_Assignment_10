import React, { useContext } from "react";
import Sliders from "../Pages/Sliders";
import HomeCards from "../Pages/HomeCards";
import ExtraFrst from "../Pages/ExtraFrst";
import ExtraSecond from "../Pages/ExtraSecond";
import { ContextProvider } from "../Provider/AuthProvider";
import Categories from "../Pages/Category";
import FeatureProduct from "../Pages/FetureProducts";
export default function Home() {
  const { darkMode } = useContext(ContextProvider);
  return (
    <div className={`${darkMode ? "bg-black" : "bg-gray-900 text-white py-4"}`}>
      <Sliders />
      <Categories />
      <HomeCards />
      <ExtraSecond />
      <FeatureProduct />
      <ExtraFrst />
    </div>
  );
}
