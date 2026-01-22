import Navbar from "../../components/Navbar"
import { complaints, leads } from "../../data/crmData" 
import StatCard from "../../components/StateCard"

export default function EmployeeDashboard() {
  const myLeads = leads.filter(l => l.assignedTo === "employee1")
  const myComplaints = complaints.filter(c => c.assignedTo === "employee1")

  return (
    <>
      <Navbar />
      <div className="p-8 space-y-8 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold">Sales & Support Dashboard</h1>
        <div className="grid md:grid-cols-4 gap-4">
          <StatCard title="My Leads" value={myLeads.length} />
          <StatCard title="Follow-ups" value={myLeads.filter(l => l.followUp).length} />
          <StatCard title="Converted" value={myLeads.filter(l => l.status === "Converted").length} />
          <StatCard title="Open Complaints" value={myComplaints.filter(c => c.status !== "Resolved").length} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Today's Follow-ups</h2>

          {myLeads.map(l => l.followUp && (
            <div key={l.id} className="flex justify-between border-b py-3">
              <span>{l.name} – {l.product}</span>
              <span className="text-red-500">{l.followUp.date}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Lead Action Panel</h2>
          {myLeads.map(l => (
            <div key={l.id} className="flex justify-between border-b py-2">
              <div>
                <p className="font-medium">{l.name}</p>
                <p className="text-xs text-gray-500">{l.product}</p>
              </div>
              <select className="border px-2 py-1 rounded">
                <option>{l.status}</option>
                <option>New</option>
                <option>Follow-up</option>
                <option>Converted</option>
              </select>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Complaint Handling</h2>
          {myComplaints.map(c => (
            <div key={c.id} className="flex justify-between border-b py-3">
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="text-xs text-gray-500">{c.customer}</p>
              </div>

              <select className="border px-2 py-1 rounded">
                <option>{c.status}</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
