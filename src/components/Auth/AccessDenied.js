<<<<<<< HEAD
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AccessDenied.css';
=======
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
>>>>>>> new-code

const AccessDenied = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="access-denied-container">
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <button onClick={handleGoBack}>Go Back</button>
=======
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-74px)] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
        <div className="text-yellow-500 text-6xl mb-4 flex justify-center items-center">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-3xl font-bold mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-4">
          You do not have permission to view this page.
        </p>
        <button
          onClick={goHome}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go Back Home
        </button>
      </div>
>>>>>>> new-code
    </div>
  );
};

export default AccessDenied;
