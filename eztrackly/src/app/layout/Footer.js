export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">

          {/* Left — Logo + copyright */}
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold">
              <span className="text-gray-900">Ez</span>
              <span className="text-blue-600">Trackly</span>
            </h1>
            <p className="text-gray-400 text-sm">© 2026 EzTrackly</p>
          </div>

          {/* Right — Links */}
          <div className="flex items-center gap-8">
            <a href="/auth" className="text-gray-500 hover:text-black text-sm transition-colors ">
              Sign in
            </a>
            <a href="#modules" className="text-gray-500 hover:text-black text-sm transition-colors">
              Modules
            </a>
            <a href="#features" className="text-gray-500 hover:text-black text-sm transition-colors">
              Features
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}