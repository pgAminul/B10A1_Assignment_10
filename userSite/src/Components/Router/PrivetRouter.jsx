import React, { useContext } from "react";
import { ContextProvider } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PriverRouter({ children }) {
  const { loading, user } = useContext(ContextProvider);
  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-bars min-h-screen flex justify-center items-center mx-auto text-center loading-lg"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location.pathname }} />;
}
