import React, { useContext, useEffect, useRef } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContextProvider } from "../Provider/AuthProvider";

function Contact() {
  const { darkMode } = useContext(ContextProvider);

  const form = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(2, "Minimum 2 characters required")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });

      emailjs
        .sendForm("service_up0cc5c", "template_8m0aens", form.current, {
          publicKey: "4kvW9pfL2e0y0N2Kn",
        })
        .then(
          () => {
            toast.success("Thanks! Message successfully sent.", {
              position: "bottom-left",
            });
          },
          (error) => {
            toast.error(`Failed to send message: ${error.text}`, {
              position: "bottom-left",
            });
          }
        );
    },
  });

  return (
    <div
      className={`${darkMode ? "bg-black" : "bg-gray-900 text-white"}  py-4`}
      id="contact"
    >
      <h2 className="text-3xl md:text-5xl pb-6 font-bold text-center bg-gradient-to-r border-b-2 border-green-500 w-fit mx-auto from-orange-700 to-gray-100 bg-clip-text text-transparent pt-4 md:pt-0">
        Contact Us
      </h2>
      <div className="grid md:grid-cols-3 justify-around md:px-2 lg:px-6 items-center pt-5">
        <div className="col-span-1 space-y-4 text-white">
          <h2 className="flex items-center space-x-2">
            <FaEnvelope className="text-xl text-red-500" />
            <span>businessbyaminul@gmail.com</span>
          </h2>
          <h2 className="flex items-center space-x-2">
            <FaWhatsapp className="text-xl text-green-500" />
            <span>+88 01752-574182 (Only Whatsapp)</span>
          </h2>
          <h2 className="flex items-center space-x-2">
            <FaPhone className="text-xl text-blue-500" />
            <span>+60 116173-4524</span>
          </h2>

          <div className="flex justify-left space-x-6 mt-6 pb-5">
            <a
              href="https://www.facebook.com/AminulislamShowrov12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/aminul_islam_showrov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-700"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/md-aminul-islam-showrov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/Web_Expert_Aminul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-400"
            >
              <FaTelegram />
            </a>
            <a
              href="https://twitter.com/aminul_islam_1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-blue-400"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div
          className="glass col-span-2 p-8 rounded-lg w-[100%] md:w-full shadow-lg space-y-6"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <form ref={form} onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Write Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="input input-bordered w-full bg-transparent text-white placeholder-gray-300 border-white focus:outline-none"
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-sm text-red-500">
                  {formik.errors.name}
                </span>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Write Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="input input-bordered w-full bg-transparent text-white placeholder-gray-300 border-white focus:outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-sm text-red-500">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your message here"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="textarea textarea-bordered w-full bg-transparent text-white placeholder-gray-300 border-white focus:outline-none"
              />
              {formik.touched.message && formik.errors.message && (
                <span className="text-sm text-red-500">
                  {formik.errors.message}
                </span>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Contact;
