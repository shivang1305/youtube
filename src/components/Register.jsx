import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Implement register functionality here
    console.log("Registering with", name, email, password, confirmPassword);
  };

  const handleGoogleRegister = () => {
    // Implement Google register functionality here
    console.log("Registering with Google");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          onClick={handleRegister}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-150 ease-in-out"
        >
          Register
        </button>
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
          <img
            src="/path/to/google-icon.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
