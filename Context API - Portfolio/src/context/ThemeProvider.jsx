/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext"; // import the context

export function ThemeProvider({ children }) {
  // Step 1: Load theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  }); // manage the theme state

  // Step 2: Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    // The value prop is used to pass data to child components inside the provider.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Wraps all the child components*/}
    </ThemeContext.Provider>
  );
}
