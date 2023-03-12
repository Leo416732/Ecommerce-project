import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [themeMode, setTheme] = useState(localStorage.getItem("theme"));
  return (
    <ThemeContext.Provider value={{ setTheme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
