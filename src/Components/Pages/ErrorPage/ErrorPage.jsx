import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300 px-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-8xl font-extrabold text-orange-600 drop-shadow-lg mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
          Oops! Page not found.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md text-sm sm:text-base font-medium hover:bg-orange-600 focus:outline-none transform transition-all hover:scale-105 active:scale-95 animate-bounce-slow"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
