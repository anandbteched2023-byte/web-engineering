import { Link } from "react-router-dom";
import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-500">
      <div className="bg-white/90 p-12 rounded-3xl shadow-xl max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to LMS</h1>
        <p className="text-gray-700 mb-8">A simple learning management system for students and teachers.</p>

        <div className="flex justify-center gap-4">
          <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded-xl">Login</Link>
          <Link to="/signup" className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-xl">Sign up</Link>
          <Link to="/student" className="px-6 py-3 bg-green-600 text-white rounded-xl">Student Demo</Link>
        </div>
      </div>
    </div>
  );
}
