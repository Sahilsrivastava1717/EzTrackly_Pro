export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-5 bg-slate-50 border-b border-gray-200">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-900">
        Ez<span className="text-blue-600">Trackly</span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-12">
        <a href="#modules"  className="text-gray-600 hover:text-black transition-colors">Modules</a>
        <a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a>
        <a href="#cta"      className="text-gray-600 hover:text-black transition-colors">Get started</a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <a href="#cta" className="text-gray-900 hover:text-indigo-600 transition-colors">Sign in</a>
        <a href="#cta" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-1">
          Start free →
        </a>
      </div>
    </nav>
  );
}