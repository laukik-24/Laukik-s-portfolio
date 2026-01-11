"use client";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 mt-40 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} — Laukik Lanje</p>
      </div>
    </footer>
  );
}
