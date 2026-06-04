export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-gray-900">Ez</span>
            <span className="text-blue-600">Trackly</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              href="#modules"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Modules
            </a>

            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Features
            </a>

            <a
              href="#cta"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Get Started
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a
              href="/auth"
              className="text-gray-900 text-sm md:text-base font-medium hover:text-blue-600 transition"
            >
              Sign in
            </a>

            <a
              href="/auth"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-1"
            >
              Start free
              <span>→</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}