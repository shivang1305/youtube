import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GOOGLE_LOGO_IMG } from "../utils/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/users/login",
          {
            email: values.email,
            password: values.password,
          }
        );
        if (res.status === 201) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        setError("Login failed");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    console.log("Logging in with Google");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">Login</h2>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <form onSubmit={formik.handleSubmit}>
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
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-150 ease-in-out"
            disabled={formik.isSubmitting}
          >
            Login
          </button>
        </form>
        <div className="text-right mt-2">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-4">
          <span>New user? </span>
          <Link to="/register" className="text-blue-600 hover:underline">
            Go to register page
          </Link>
        </div>
        <div className="flex items-center justify-center mt-6">
          <hr className="w-1/4" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="w-1/4" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-white text-gray-700 py-2 border border-gray-300 rounded hover:bg-gray-100 transition duration-150 ease-in-out flex items-center justify-center"
        >
          <img src={GOOGLE_LOGO_IMG} alt="Google" className="w-5 h-5 mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
