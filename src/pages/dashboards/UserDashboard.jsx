import Navbar from "../../components/Navbar";
import { complaints } from "../../data/crmData";
import { useState } from "react";

export default function UserDashboard() {
  const [view, setView] = useState("stats"); // stats | new | my

  const myComplaints = complaints;
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-100 p-8 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Support Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Track and resolve customer complaints
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button
              className={`px-4 py-2 rounded font-semibold transition ${
                view === "stats"
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-blue-50"
              }`}
              onClick={() => setView("stats")}
            >
              Stats
            </button>

            <button
              className={`px-4 py-2 rounded font-semibold transition ${
                view === "new"
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-blue-50"
              }`}
              onClick={() => setView("new")}
            >
              Raise Complaint
            </button>

            <button
              className={`px-4 py-2 rounded font-semibold transition ${
                view === "my"
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-blue-50"
              }`}
              onClick={() => setView("my")}
            >
              My Complaints
            </button>
          </div>
        </div>

        {view === "stats" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatusCard
              title="Open"
              value={complaints.filter(c => c.status === "Open").length}
              color="text-red-600"
            />
            <StatusCard
              title="In Progress"
              value={complaints.filter(c => c.status === "In Progress").length}
              color="text-yellow-600"
            />
            <StatusCard
              title="Resolved"
              value={complaints.filter(c => c.status === "Resolved").length}
              color="text-green-600"
            />
          </div>
        )}

        {view === "new" && (
          <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Raise New Complaint</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                alert(
                  "This is a demo — implement logic to save the complaint to your database"
                );
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Enter complaint title"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  placeholder="Enter complaint details"
                  className="w-full border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Priority</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Raise Complaint
              </button>
            </form>
          </div>
        )}

        {view === "my" && (
          <div className="bg-white p-6 rounded-xl shadow max-w-4xl mx-auto divide-y">
            <h2 className="text-2xl font-bold mb-4">My Complaints</h2>
            {myComplaints.map(c => (
              <div key={c.id} className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <p className="font-medium text-lg">{c.title}</p>
                  <p className="text-sm text-gray-500">{c.customer}</p>
                  <p className="text-sm text-gray-400 mt-1">{c.createdAt}</p>
                </div>
                <span
                  className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm
                    ${c.status === "Open" && "bg-red-100 text-red-600"}
                    ${c.status === "In Progress" && "bg-yellow-100 text-yellow-600"}
                    ${c.status === "Resolved" && "bg-green-100 text-green-600"}
                  `}
                >
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function StatusCard({ title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className={`text-3xl font-bold mt-2 ${color}`}>{value}</h2>
    </div>
  );
}
