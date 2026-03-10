import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      <h1 className="text-7xl font-bold text-red-500 mb-4">404</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow">
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;