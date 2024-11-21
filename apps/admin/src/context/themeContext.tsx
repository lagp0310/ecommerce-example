"use client";

import React from "react";

export type Theme = "light" | "dark" | "system";
type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>> | (() => void);
};

const ThemeContext = React.createContext<ThemeContext>({
  theme: "system",
  setTheme: () => {},
});

export function useTheme() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return { theme, setTheme };
}

type Props = {
  children: React.ReactNode;
  initialTheme?: Theme;
};

export function ThemeContextProvider({
  children,
  initialTheme = "system",
}: Props) {
  // TODO: Read from localStorage. See tailwind docs.
  const [theme, setTheme] = React.useState<Theme>(initialTheme);
  const themeValue = React.useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}
