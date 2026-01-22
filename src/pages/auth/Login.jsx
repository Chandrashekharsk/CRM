import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (!success) {
      setError("Invalid email or password");
      return;
    }
    navigate("/profile");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden md:flex w-1/2 flex-col justify-center bg-gradient-to-br from-blue-600 to-indigo-500 p-16 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome Back!</h1>
        <p className="text-lg text-blue-100 mb-8">
          Sign in to manage your leads, complaints, and workflow efficiently. Keep everything organized and never miss a follow-up.
        </p>
        <div className="bg-white/20 w-52 h-52 rounded-full flex items-center justify-center text-7xl font-bold text-white/50">
          🔒
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
        <Link
          to="/"
          className="absolute top-8 left-8 text-blue-600 hover:underline font-semibold"
        >
          ← Home
        </Link>

        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Login</h2>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm mt-6 text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
