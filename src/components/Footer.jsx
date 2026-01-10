"use client";

export default function Footer({ dark, setDark }) {
  return (
    <footer className="border-t border-gray-700 mt-40 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} — Laukik Lanje</p>

        <label className="flex items-center gap-3 cursor-pointer">
          <span className="text-sm">Dark Theme</span>
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
            className="w-10 h-5 appearance-none bg-gray-400 rounded-full relative after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:top-0.5 after:left-0.5 checked:bg-purple-400 checked:after:translate-x-5 transition"
          />
        </label>
      </div>
    </footer>
  );
}
