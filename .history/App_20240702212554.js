import React from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";

import AppContent from "./AppContent";


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>

      </NavigationContainer>
    </ThemeProvider>
  );
}
