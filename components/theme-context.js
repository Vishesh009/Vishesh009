import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialDarkMode = savedTheme ? savedTheme === "dark" : prefersDark;

    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle("dark", initialDarkMode);
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  // Don't render until mounted to avoid flash of wrong theme
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
