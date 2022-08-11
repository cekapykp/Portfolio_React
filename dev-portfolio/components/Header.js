import React from "react";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex item-center justify-between text-white px-6 py-3 h-16 max-w-7xl mx-auto mt-7 bg-transparent">
      <span></span>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold uppercase"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? "dark" : "light"}
      </button>
    </header>
  );
}

export default Header;
