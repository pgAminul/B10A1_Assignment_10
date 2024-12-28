import React, { useContext, useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { ContextProvider } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logIn, googleLoging, darkMode } = useContext(ContextProvider);
  const froms = location.state?.from || "/";
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Logged In`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(froms);
      })
      .catch((e) => {
        setMessage("Invalid Password or Email");
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Password or Email",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(e.message);
      });
  };

  const googleLog = () => {
    googleLoging()
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Logged In`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(froms);
      })
      .catch((e) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Invalid Password or Email`,
          showConfirmButton: false,
          timer: 1500,
        });
        setMessage("Invalid Password or Email");
        console.log(e.message);
      });
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        darkMode ? "bg-black" : "bg-gray-900 text-balck py-4"
      }`}
    >
      <div
        className={`${
          darkMode
            ? "bg-[rgba(0, 0, 0, 0.871)] shadow-sm shadow-amber-50"
            : "h-full w-full bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100"
        } bg-white shadow-lg rounded-lg p-8 w-full max-w-md`}
      >
        <h2
          className={`text-2xl font-bold text-center ${
            darkMode ? "text-black" : "text-white"
          } mb-4`}
        >
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          <div className="form-control mb-6 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
            <p className="text-red-900">{message}</p>

            <span
              className="absolute right-3 top-14 cursor-pointer text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="btn btn-primary w-full py-2 text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mb-4">
            Login
          </button>

          <div className="divider">OR</div>

          {/* Google Sign In Button */}
        </form>
        <button
          onClick={googleLog}
          className="btn btn-outline w-full flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-lg"
        >
          <FaGoogle className="w-5 h-5 text-blue-600" />
          <span>Sign In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
