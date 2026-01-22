// src/pages/Home.jsx
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="min-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-600/20 text-blue-400">
              Modern CRM Platform
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Manage Leads, Sales <br />
              & Follow-ups <span className="text-blue-500">Smarter</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Lumenza CRM helps teams track leads, manage customers,
              close deals faster and never miss a follow-up.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                to="/login"
                className="bg-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </Link>

              <Link
                to="/register"
                className="border border-gray-500 px-7 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Create Account
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden md:block">
            <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-8 shadow-xl border border-slate-700">
              <p className="text-sm text-gray-400 mb-4">
                What you get
              </p>

              <ul className="space-y-4 text-gray-200">
                <li className="flex gap-2">✅ Lead & Customer Management</li>
                <li className="flex gap-2">✅ Role-Based Dashboards</li>
                <li className="flex gap-2">✅ Follow-up & Reminder System</li>
                <li className="flex gap-2">✅ Sales & Payment Tracking</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Lumenza CRM?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              title="Centralized Leads"
              desc="View, manage and assign leads from one clean dashboard."
            />
            <Feature
              title="Never Miss Follow-ups"
              desc="Smart reminders and visual alerts for every follow-up."
            />
            <Feature
              title="Role-Based Access"
              desc="Admin, Sales & Support get exactly what they need."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to streamline your CRM?
        </h2>
        <p className="text-gray-300 mb-8">
          Start using Lumenza CRM today and scale faster.
        </p>
        <Link
          to="/register"
          className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Create Free Account
        </Link>
      </section>

      <Footer />
    </>
  )
}

/* Feature Card */
function Feature({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  )
}
