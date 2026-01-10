"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import YearButton from "../shared/YearButton";
import EmptyState from "../shared/EmptyState";
import { IoIosAnalytics } from "react-icons/io";

/* Utility: calculate years */
function getGitHubYears(joinYear) {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear; y >= joinYear; y--) {
    years.push(y);
  }
  return years;
}

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState(undefined);
  const [colorScheme, setColorScheme] = useState("light");

  /* Detect theme safely on client */
  useEffect(() => {
    const isDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setColorScheme(isDark ? "dark" : "light");
  }, []);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);
  const currentYear = new Date().getFullYear();

  if (!username || !joinYear) {
    return (
      <EmptyState
        icon={<IoIosAnalytics />}
        title="Unable to load Contribution Graph"
        message="Please add NEXT_PUBLIC_GITHUB_USERNAME and NEXT_PUBLIC_GITHUB_JOIN_YEAR to your .env file."
      />
    );
  }

  return (
    <div className="flex xl:flex-row flex-col gap-10 ">
      {/* Graph */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl w-full overflow-x-auto">
        <div className="min-w-225">
          <GitHubCalendar
            username={username}
            theme={{
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
            colorScheme={colorScheme}
            blockSize={13}
            year={calendarYear}
          />
        </div>
      </div>

      {/* Year selector */}
      <div className="flex xl:flex-col flex-row flex-wrap gap-2">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? currentYear}
            onClick={() =>
              setCalendarYear(calendarYear === year ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  );
}
