export default function Footer() {
  return (
    <footer className="w-Full bg-slate-100 px-15 py-12">
      <div className="flex items-center justify-between">
        
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">
            Ez<span className="text-blue-900">Trackly</span>
          </h1>

          <p className="text-gray-500 text-lg">
            © 2026 EzTrackly
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-10">
          <a href="#" className="text-gray-600 hover:text-black">
            Sign in
          </a>

          <a href="#" className="text-gray-600 hover:text-black">
            Modules
          </a>

          <a href="#" className="text-gray-600 hover:text-black">
            Features
          </a>
        </div>

      </div>
    </footer>
  );
}