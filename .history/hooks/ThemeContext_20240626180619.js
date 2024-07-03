import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const theme = {
    isDarkTheme,
    background: isDarkTheme ? "#000" : "#FFFDD",
    text: isDarkTheme ? "#fff" : "#000",
    primary: isDarkTheme ? "#1a83ff" : "#007bff",
    secondary: isDarkTheme ? "#1a83ff" : "#6c757d",
  };
};