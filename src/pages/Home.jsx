import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-600/20 text-blue-400">
              Enterprise CRM Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              One CRM to Manage <br />
              <span className="text-blue-500">Leads, Sales & Support</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Lumenza CRM helps businesses track leads, close deals faster,
              manage customers, and never miss a follow-up — all in one place.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                to="/register"
                className="bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Start Free Trial
              </Link>

              <Link
                to="/login"
                className="border border-gray-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                View Demo
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              No credit card required · Role-based access · Secure
            </p>
          </div>

          <div className="hidden md:block">
            <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-8 shadow-2xl border border-slate-700">
              <p className="text-sm text-gray-400 mb-4">
                Dashboard Overview
              </p>

              <ul className="space-y-4 text-gray-200">
                <li>📊 Real-time lead analytics</li>
                <li>📅 Smart follow-up reminders</li>
                <li>👥 Role-based dashboards</li>
                <li>💰 Sales & payment tracking</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <TrustItem title="10K+" subtitle="Leads Managed" />
          <TrustItem title="98%" subtitle="Follow-up Accuracy" />
          <TrustItem title="3x" subtitle="Sales Efficiency" />
          <TrustItem title="24/7" subtitle="Team Visibility" />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold">
              Built for Real-World CRM Workflows
            </h2>
            <p className="mt-4 text-gray-600">
              Every feature is designed around how sales, support and admins
              actually work — not theory.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Lead Management"
              desc="Capture, assign, track and convert leads with full visibility."
            />
            <FeatureCard
              title="Follow-up System"
              desc="Never miss a follow-up with visual reminders and schedules."
            />
            <FeatureCard
              title="Sales Analytics"
              desc="Understand conversion rates, revenue trends and performance."
            />
            <FeatureCard
              title="Customer & Dealer"
              desc="Manage customers and dealers with credit limits and status."
            />
            <FeatureCard
              title="Order & Payments"
              desc="Track orders, pending amounts and payment history."
            />
            <FeatureCard
              title="Complaints & Support"
              desc="Raise, track and resolve complaints with clear status flow."
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Role-Based Dashboards
            </h2>

            <p className="text-gray-600 mb-8">
              Each role sees exactly what they need — nothing more, nothing less.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✅ Admin – Full analytics & control</li>
              <li>✅ Sales – Leads, follow-ups & conversions</li>
              <li>✅ Support – Complaints & resolutions</li>
            </ul>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-10 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              Why this matters
            </h3>
            <p className="text-gray-300">
              Role separation improves focus, accountability and security
              across the organization.
            </p>
          </div>

        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Simple 4-Step Workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Step number="01" title="Capture Lead" />
            <Step number="02" title="Assign Team" />
            <Step number="03" title="Follow-up" />
            <Step number="04" title="Convert & Track" />
          </div>

        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Control Your CRM Chaos?
        </h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          Start using Lumenza CRM today and experience clarity, speed
          and accountability across your sales operations.
        </p>

        <Link
          to="/register"
          className="bg-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Create Free Account
        </Link>
      </section>

      <Footer />
    </>
  )
}


function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

function TrustItem({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
    </div>
  )
}

function Step({ number, title }) {
  return (
    <div>
      <div className="text-blue-600 text-3xl font-bold mb-3">
        {number}
      </div>
      <p className="font-medium">{title}</p>
    </div>
  )
}
