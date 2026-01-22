// src/pages/Profile.jsx
import Navbar from "../components/Navbar"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleDashboard = () => {
    if (user.role === "admin") navigate("/admin")
    else if (user.role === "employee") navigate("/employee")
    else navigate("/user")
  }

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <>
      <Navbar />

      {/* Full-width background */}
      <div className="min-h-[85vh] bg-slate-100 w-full">

        {/* Content wrapper */}
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-8">
              <h1 className="text-3xl font-bold">My Profile</h1>
              <p className="text-sm text-gray-300 mt-1">
                Account details & access control
              </p>
            </div>

            {/* Body */}
            <div className="p-8 grid md:grid-cols-2 gap-10 items-center">

              {/* Left: Profile Info */}
              <div className="flex items-center gap-6">
                <div className="h-20 w-20 rounded-full bg-slate-900 flex items-center justify-center text-white text-2xl font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="text-xl font-semibold">{user.name}</p>
                  <p className="text-gray-500">{user.email}</p>

                  <span className={`inline-block mt-3 px-4 py-1 text-sm rounded-full font-medium
                    ${user.role === "admin" && "bg-red-100 text-red-600"}
                    ${user.role === "employee" && "bg-blue-100 text-blue-600"}
                    ${user.role === "user" && "bg-green-100 text-green-600"}
                  `}>
                    {user.role.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="space-y-4">
                <button
                  onClick={handleDashboard}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
                >
                  Go to Dashboard
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-4 rounded-lg text-lg font-medium hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
