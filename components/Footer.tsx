export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-xs text-gray-600 tracking-[0.1em] uppercase mb-2">
            © {new Date().getFullYear()} Giovanni Baioni
          </p>
          <p className="text-xs text-gray-700 tracking-wider">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
