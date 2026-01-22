// src/pages/Register.jsx
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import Navbar from "../../components/Navbar"

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  })

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = register(form)
    if (!success) {
      setError("Email already exists")
      return
    }
    navigate("/profile")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[80vh] flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <input
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <select
            className="w-full border p-3 rounded mb-6"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="employee">Employee</option>
          </select>

          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
            Register
          </button>

          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  )
}
