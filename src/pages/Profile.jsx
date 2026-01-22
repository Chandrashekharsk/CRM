// src/pages/Profile.jsx
import Navbar from "../components/Navbar"
import { useAuth } from "../context/AuthContext"

export default function Profile() {
  const { user } = useAuth()

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-slate-100 w-full px-4 sm:px-8 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-linear-to-r from-slate-900 to-slate-800 px-10 py-8">
              <h1 className="text-3xl font-bold text-white">Profile Overview</h1>
              <p className="text-slate-300 mt-1 text-sm">
                Manage your account & access your workspace
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 p-10">
              <div className="md:col-span-2 flex items-center gap-8">
                <div className="h-24 w-24 rounded-full bg-slate-900 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-slate-800">
                    {user.name}
                  </h2>
                  <p className="text-slate-500 mt-1">{user.email}</p>
                  <span
                    className={`inline-flex items-center mt-4 px-4 py-1.5 rounded-full text-sm font-semibold
                      ${user.role === "admin" && "bg-red-100 text-red-700"}
                      ${user.role === "employee" && "bg-blue-100 text-blue-700"}
                      ${user.role === "user" && "bg-green-100 text-green-700"}
                    `}
                  >
                    {user.role.toUpperCase()} ACCESS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
