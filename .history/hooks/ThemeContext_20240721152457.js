import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();

  // console.log('Color Scheme:', colorScheme); // Debugging statement
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === "dark");

  const toggleTheme = () => {
    setIsDarkTheme((isDark) => !isDark);
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
    colors: {
      background: isDarkTheme ? "#2e2e2e" : "#fdf6e3",
      text: isDarkTheme ? "#e0e0e0" : "#333333",
      primary: isDarkTheme ? "#a6a1ff" : "#6c63ff",
      secondary: isDarkTheme ? "#ffc700" : "#Ffd700",
      tertiary: '#556b2f',
      danger: 'red',
    },
    test: {
      borderColor: "black",
      borderWidth: 1,
    }
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
