import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
  const [isLight, setIsLight] = useState(
    JSON.parse(localStorage.getItem("isLightMode"))
  );

  return <ThemeContext.Provider value={[isLight, setIsLight]}> {children}</ThemeContext.Provider>
}
