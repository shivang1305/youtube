import React from "react";
import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleSignIn}
      className="flex items-center px-4 py-2 bg-white text-blue-600 border border-gray-300 rounded-full shadow hover:bg-gray-100 transition duration-150 ease-in-out"
    >
      <svg
        className="w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 13H11V17H13V13ZM13 7H11V11H13V7Z"
          fill="currentColor"
        />
      </svg>
      Sign In
    </button>
  );
};

export default SignInButton;
