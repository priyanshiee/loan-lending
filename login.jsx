import React from "react";

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="text" placeholder="Username" className="w-full p-2 mb-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" />

        {/* Login Button (Closes the Modal) */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
