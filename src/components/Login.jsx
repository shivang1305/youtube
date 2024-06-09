import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login functionality here
    console.log("Logging in with", email, password);
  };

  const handleGoogleLogin = () => {
    // Implement Google login functionality here
    console.log("Logging in with Google");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-red-600">Login</h2>
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
        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-150 ease-in-out"
        >
          Login
        </button>
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
          <img
            src="/path/to/google-icon.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
