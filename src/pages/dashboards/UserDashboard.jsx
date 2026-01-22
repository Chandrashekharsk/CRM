// src/dashboards/UserDashboard.jsx
import Navbar from "../../components/Navbar"

export default function UserDashboard() {
  return (
    <>
      <Navbar />

      <div className="p-8 space-y-8">
        <h1 className="text-2xl font-bold">Support Dashboard</h1>

        {/* Complaint Status */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 shadow rounded">
            <p className="text-gray-500">Open Complaints</p>
            <h2 className="text-2xl font-bold text-red-500">3</h2>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <p className="text-gray-500">In Progress</p>
            <h2 className="text-2xl font-bold text-yellow-500">2</h2>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <p className="text-gray-500">Resolved</p>
            <h2 className="text-2xl font-bold text-green-600">18</h2>
          </div>
        </div>

        {/* Complaint List */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="font-semibold mb-4">Recent Complaints</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th>Complaint</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Door Lock Issue</td>
                <td className="text-yellow-500">In Progress</td>
              </tr>
              <tr>
                <td>Kitchen Handle Broken</td>
                <td className="text-green-600">Resolved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
