import React from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
im

import AppContent from "./AppContent";


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </ThemeProvider>
  );
}