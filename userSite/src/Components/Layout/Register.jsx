import React, { useContext, useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { ContextProvider } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const Passregex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const Urlregex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, googleLoging, signUp, updateNewProfile, darkMode } =
    useContext(ContextProvider);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [usrePhoto, setUserPhot] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (name.trim() === "") {
      setUserName("please Write your name");
      return;
    }

    if (!regexEmail.test(email)) {
      setUserEmail("Please Write a Valid Email");
      return;
    }
    if (!Urlregex.test(photoURL)) {
      setUserPhot("invalid url photo");
      return;
    }
    if (!Passregex.test(password)) {
      setUserPassword(
        "Invalid password! It must contain at least one uppercase letter, one lowercase letter, and be a minimum of 6 characters long."
      );
      return;
    }

    signUp(email, password)
      .then((res) => {
        setUser(res);
        updateNewProfile({ displayName: name, photoURL: photoURL });
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Register Success`,
          showConfirmButton: false,
          timer: 1500,
        });
        setUser({ displayName: name, photoURL: photoURL });
        navigate("/");
        e.reset();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const googleLog = () => {
    googleLoging()
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Successfully Register`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((e) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Someting Wrong`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div
      className={`py-8 flex items-center justify-center ${
        darkMode ? "bg-black" : "bg-gray-900 text-black py-4"
      }`}
    >
      <div
        className={`${
          darkMode
            ? "bg-[rgba(0, 0, 0, 0.871)] shadow-sm shadow-amber-50"
            : "h-full w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100"
        } bg-base-200 shadow-lg rounded-lg p-8 w-full max-w-md transform transition-all duration-500 `}
      >
        <h2
          className={`text-2xl font-bold text-center ${
            darkMode ? "text-black" : "text-white"
          } mb-4`}
        >
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <p className="text-red-900">{userName}</p>
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <p className="text-red-900">{userEmail}</p>
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <p className="text-red-900">{usrePhoto}</p>
          </div>

          <div className="form-control mb-6 relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <p className="text-red-900">{userPassword}</p>

            <span
              className="absolute top-14 right-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="btn btn-primary w-full mb-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
            Register
          </button>

          <div className="divider">OR</div>

          {/* Google Sign Up Button */}
        </form>
        <button
          onClick={googleLog}
          className="btn btn-outline w-full flex items-center gap-2 py-2 px-4 border border-gray-300 rounded-lg"
        >
          <FaGoogle className="w-5 h-5 text-blue-600" />
          <span>Sign Up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
