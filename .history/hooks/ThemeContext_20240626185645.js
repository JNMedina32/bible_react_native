import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const theme = {
    isDarkTheme,
    background: isDarkTheme ? "#000" : "#FFFDD0",
    text: isDarkTheme ? "#fff" : "#654321",
    primary: isDarkTheme ? "#1a83ff" : "#556B2F",
    secondary: isDarkTheme ? "#1a83ff" : "#F5F5DC",
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => us