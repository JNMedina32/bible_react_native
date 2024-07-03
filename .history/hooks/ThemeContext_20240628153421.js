import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  console.log('Color Scheme:', colorScheme); // Debugging statement
  const isDarkTheme = colorScheme === "dark";

  const theme = {
    isDarkTheme,
    colors: {
      background: isDarkTheme ? "#2e2e2e" : "#fdf6e3",
      text: isDarkTheme ? "#e0e0e0" : "#333333",
      primary: isDarkTheme ? "#a6a1ff" : "#6c63ff",
      secondary: isDarkTheme ? "#ffc700" : "#Ffd700",
    },
    fonts: {
      
    }
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
