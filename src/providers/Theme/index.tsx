import { ReactNode, createContext, useState } from "react";

interface ThemeProviderData {
  changeTheme: () => void;
  theme: string;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeProviderData>(
  {} as ThemeProviderData
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
