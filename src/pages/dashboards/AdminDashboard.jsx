// src/dashboards/AdminDashboard.jsx
import Navbar from "../../components/Navbar"
import StatCard from "../../components/StateCard"
import { dashboardStats } from "../../data/crmData"

export default function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard title="Total Leads" value={dashboardStats.totalLeads} />
          <StatCard title="New Leads (Today)" value={dashboardStats.newLeadsToday} />
          <StatCard title="New Leads (7 Days)" value={dashboardStats.newLeadsWeek} />
          <StatCard title="Converted Leads" value={dashboardStats.convertedLeads} />
          <StatCard title="Pending Follow-ups" value={dashboardStats.pendingFollowUps} />
          <StatCard
            title="Total Sales Value"
            value={`₹ ${dashboardStats.totalSalesValue.toLocaleString()}`}
          />
        </div>

        {/* Graph Placeholder */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="font-semibold mb-4">Leads Trend (Last 7 Days)</h2>
          <div className="h-40 flex items-center justify-center text-gray-400">
            📊 Graph Placeholder (Bar / Line)
          </div>
        </div>

        {/* Date Filter */}
        <div className="flex gap-4">
          <button className="btn">Today</button>
          <button className="btn">7 Days</button>
          <button className="btn">30 Days</button>
        </div>
      </div>
    </>
  )
}
