import React from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>

      </NavigationContainer>
    </ThemeProvider>
  );
}
