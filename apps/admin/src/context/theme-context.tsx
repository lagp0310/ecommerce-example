"use client";

import React from "react";

export type Theme = "light" | "dark" | "system";
const defaultTheme: Theme = "system";
const acceptedThemeValues: Theme[] = ["light", "dark", "system"];

type ThemeContext = {
  theme: Theme;
  prefersDarkTheme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<Theme>> | (() => void);
  setLocalStorageTheme: (theme: Theme) => void | (() => void);
};
const ThemeContext = React.createContext<ThemeContext>({
  theme: defaultTheme,
  prefersDarkTheme: true,
  setTheme: () => {},
  setLocalStorageTheme: () => {},
});

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider.");
  }

  return context;
}

type Props = {
  children: React.ReactNode;
  initialTheme?: Theme;
};

export function ThemeContextProvider({
  children,
  initialTheme = defaultTheme,
}: Props) {
  const [theme, setTheme] = React.useState<Theme>(initialTheme);
  const prefersDarkTheme = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );

  const getPreferredTheme = React.useCallback(
    (localStorageTheme: string | null) => {
      if (!!localStorageTheme) {
        return localStorageTheme;
      }

      const themeToSet =
        prefersDarkTheme || localStorageTheme === "dark" ? "dark" : "light";

      return themeToSet;
    },
    [prefersDarkTheme]
  );
  const setLocalStorageTheme = React.useCallback((theme: Theme) => {
    if (typeof window !== "undefined") {
      if (!acceptedThemeValues.includes(theme)) {
        return console.error(
          `Theme '${theme}' is invalid. Possible values are ${acceptedThemeValues.map((themeValue) => `'${themeValue}'`).join(", ")}`
        );
      }

      window.localStorage.setItem("theme", theme);

      const documentClassList = window.document.documentElement.classList;
      switch (theme) {
        case "light":
          documentClassList.remove("dark");
          break;
        case "dark":
          documentClassList.add("dark");
          break;
        case "system":
          const prefersDarkTheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
          const hasDarkClass = documentClassList.contains("dark");

          if (prefersDarkTheme) {
            if (!hasDarkClass) {
              documentClassList.add("dark");
            }
          } else {
            documentClassList.remove("dark");
          }
          break;
        default:
          throw new Error("Theme is invalid");
      }
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageTheme = window.localStorage.getItem("theme");
      if (
        !!localStorageTheme &&
        !acceptedThemeValues.includes(localStorageTheme as Theme)
      ) {
        return console.error(
          `Theme '${localStorageTheme}' is invalid. Possible values are ${acceptedThemeValues.map((themeValue) => `'${themeValue}'`).join(", ")}`
        );
      }

      const preferredTheme = getPreferredTheme(localStorageTheme);
      setTheme(preferredTheme as Theme);
      setLocalStorageTheme(preferredTheme as Theme);
    }
  }, [getPreferredTheme, setLocalStorageTheme]);

  const providerValue = React.useMemo(
    () => ({ theme, prefersDarkTheme, setTheme, setLocalStorageTheme }),
    [prefersDarkTheme, setLocalStorageTheme, theme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}
