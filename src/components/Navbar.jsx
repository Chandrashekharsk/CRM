// src/components/Navbar.jsx
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const dashboardRoute =
    user?.role === "admin"
      ? "/admin"
      : user?.role === "employee"
      ? "/employee"
      : "/user"

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow">
      
      {/* Left: Brand */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center font-bold">
          L
        </div>
        <span className="text-lg font-semibold tracking-wide">
          Lumenza CRM
        </span>
      </div>

      {/* Right: Navigation */}
      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>

        {user && (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
              }
            >
              Profile
            </NavLink>

            <NavLink
              to={dashboardRoute}
              className="hover:text-blue-400 font-medium"
            >
              Dashboard
            </NavLink>

            {/* Role Badge */}
            <span className="px-3 py-1 text-xs rounded-full bg-slate-700 capitalize">
              {user.role}
            </span>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-500 cursor-pointer rounded-4xl px-4 py-1.5 hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}

        {!user && (
          <>
            <NavLink to="/login" className="hover:text-blue-400  rounded-4xl">
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-blue-600 px-4 py-1.5  rounded-4xl hover:bg-blue-700"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  )
}
