// import { redirect } from "next/navigation";

// export default function CV() {
//   redirect(
//     "https://drive.google.com/file/d/17vpBfB1Q6iXZVyc0nBXw2dYo4aDpenMi/view?usp=sharing",
//   );
// }
"use client";

import { useEffect } from "react";

export default function CV() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://drive.google.com/file/d/17vpBfB1Q6iXZVyc0nBXw2dYo4aDpenMi/view?usp=sharing";
    }, 800); // delay so loader is visible

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-600 border-t-white"></div>

        <p className="text-lg tracking-wide">Opening my resume...</p>
      </div>
    </div>
  );
}
