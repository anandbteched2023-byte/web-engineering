import React, { useState } from "react";
import { Mail, Lock, User, Users } from "lucide-react";
import Input from "../components/input";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!name) e.name = "Name is required";
    if (!email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Password must be at least 6 characters";
    if (!role) e.role = "Please select a role";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // fake signup success — route based on role
      if (role === "Student") navigate("/student");
      else navigate("/teacher");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400">
      <form onSubmit={handleSubmit} className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Sign up</h1>

        <div className="space-y-4">
          <div>
            <Input
              icon={<User />}
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <Input
              icon={<Mail />}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <Input
              icon={<Lock />}
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="password"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div>
            <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
              <Users className="text-gray-400" />
              <select
                className="w-full outline-none bg-transparent"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                aria-label="role"
              >
                <option value="">Select role</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
            {errors.role && <p className="text-sm text-red-500 mt-1">{errors.role}</p>}
          </div>
        </div>

        <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-xl">
          Sign up
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
}
