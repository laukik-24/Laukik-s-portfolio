"use client";

export default function YearButton({ year, currentYear, onClick }) {
  const isActive = year === currentYear;

  return (
    <button
      onClick={onClick}
      title={`View Graph for the year ${year}`}
      className={`
        rounded-lg px-4 py-2 text-sm font-medium text-center
        transition duration-100
        border
        ${
          isActive
            ? "bg-green-500 text-white border-transparent dark:text-zinc-800"
            : "bg-gray-900 dark:bg-primary-bg text-zinc-800 dark:text-white border-zinc-200 dark:border-zinc-700"
        }
        hover:border-zinc-300 dark:hover:border-zinc-600
      `}>
      {year}
    </button>
  );
}
