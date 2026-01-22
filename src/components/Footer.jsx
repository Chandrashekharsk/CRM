// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="text-white font-medium">Lumenza CRM</span>
        </p>

        {/* Center Links */}
        <div className="flex gap-6 text-sm">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
          <span className="hover:text-white cursor-pointer">Support</span>
        </div>

        {/* Right */}
        <p className="text-sm text-gray-500">
          Built for modern teams
        </p>

      </div>
    </footer>
  )
}
