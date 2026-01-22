import Navbar from "../../components/Navbar"
import StatCard from "../../components/StateCard"
import {
  dashboardStats,
  leadsByDate,
  leads,
  systemUsers,
} from "../../data/crmData"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b"]

export default function AdminDashboard() {
  const leadStatusData = [
    { name: "New", value: leads.filter(l => l.status === "New").length },
    { name: "Follow Up", value: leads.filter(l => l.status === "Follow Up").length },
    { name: "Converted", value: leads.filter(l => l.status === "Converted").length },
    { name: "Lost", value: leads.filter(l => l.status === "Lost").length },
  ]

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8 space-y-10">

        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Overall business performance & control
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard title="Total Leads" value={dashboardStats.totalLeads} />
          <StatCard title="New Today" value={dashboardStats.newLeadsToday} />
          <StatCard title="This Week" value={dashboardStats.newLeadsWeek} />
          <StatCard title="Converted" value={dashboardStats.convertedLeads} />
          <StatCard title="Pending" value={dashboardStats.pendingFollowUps} />
          <StatCard
            title="Sales"
            value={`₹ ${dashboardStats.totalSalesValue.toLocaleString()}`}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
            <h2 className="font-semibold mb-4">Leads Trend (Weekly)</h2>

            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={leadsByDate}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="leads"
                  strokeWidth={3}
                  stroke="#2563eb"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold mb-4">Lead Status</h2>

            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={leadStatusData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  label
                >
                  {leadStatusData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recent Leads</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2">Name</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Assigned</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id} className="border-b hover:bg-slate-50">
                    <td className="py-2">{lead.name}</td>
                    <td>{lead.product}</td>
                    <td>
                      <span className="px-3 py-1 rounded-full text-xs bg-slate-200">
                        {lead.status}
                      </span>
                    </td>
                    <td>{lead.assignedTo}</td>
                    <td>
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Users & Roles</h2>

          {systemUsers.map(user => (
            <div
              key={user.id}
              className="flex items-center justify-between border-b py-3"
            >
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              <div className="flex items-center gap-4">
                <select
                  defaultValue={user.role}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                  <option value="user">User</option>
                </select>

                <button className="text-blue-600 hover:underline text-sm">
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
