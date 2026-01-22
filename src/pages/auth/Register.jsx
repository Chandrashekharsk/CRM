import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(form);
    if (!success) {
      setError("Email already exists");
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden md:flex w-1/2 flex-col justify-center bg-gradient-to-br from-purple-600 to-pink-500 p-16 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Join Lumenza CRM</h1>
        <p className="text-lg text-purple-100 mb-8">
          Create your account and start managing your leads, complaints, and workflows smarter than ever.
        </p>
        <div className="bg-white/20 w-52 h-52 rounded-full flex items-center justify-center text-7xl font-bold text-white/50">
          ✨
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
        <Link
          to="/"
          className="absolute top-8 left-8 text-purple-600 hover:underline font-semibold"
        >
          ← Home
        </Link>

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Create Account</h2>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            <select
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="user">User</option>
              <option value="employee">Employee</option>
            </select>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Register
            </button>
          </form>

          <p className="text-sm mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
