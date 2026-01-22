// src/dashboards/EmployeeDashboard.jsx
import Navbar from "../../components/Navbar"
import StatCard from "../../components/StateCard"

export default function EmployeeDashboard() {
  return (
    <>
      <Navbar />

      <div className="p-8 space-y-8">
        <h1 className="text-2xl font-bold">Sales Dashboard</h1>

        {/* Personal Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <StatCard title="My Leads" value={48} />
          <StatCard title="New Leads Today" value={5} />
          <StatCard title="Pending Follow-ups" value={9} />
          <StatCard title="Converted" value={14} />
        </div>

        {/* Follow-up Reminder */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="font-semibold mb-4">Upcoming Follow-ups</h2>

          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Rahul – Interested in Smart Lock</span>
              <span className="text-red-500 font-semibold">Today 4:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Amit – Kitchen Fittings</span>
              <span className="text-yellow-500 font-semibold">Tomorrow</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
