import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GOOGLE_LOGO_IMG } from "../utils/constants";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleGoogleRegister = () => {
    //TODO: login/register with google func to be integrated
    console.log("Registering through google");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/users/register",
          {
            fullName: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
          }
        );

        if (res.status === 201) {
          setMessage("Your account has been created successfully");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (error) {
        setMessage(error.response?.data?.message || "Registration failed");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">Register</h2>
        {message && (
          <div
            className={`mb-4 ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Name"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 mb-2">{formik.errors.name}</div>
          ) : null}
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Username"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-red-600 mb-2">{formik.errors.username}</div>
          ) : null}
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 mb-2">{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600 mb-2">{formik.errors.password}</div>
          ) : null}
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm Password"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-600 mb-2">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-150 ease-in-out"
            disabled={formik.isSubmitting}
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Already logged in user? </span>
          <Link to="/login" className="text-blue-600 hover:underline">
            Go to login page
          </Link>
        </div>
        <div className="flex items-center justify-center mt-6">
          <hr className="w-1/4" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="w-1/4" />
        </div>
        <button
          onClick={handleGoogleRegister}
          className="w-full mt-4 bg-white text-gray-700 py-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-150 ease-in-out flex items-center justify-center"
        >
          <img src={GOOGLE_LOGO_IMG} alt="Google" className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
