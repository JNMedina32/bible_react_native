import * as React from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";

import AppContent from "./AppContent";

export default function App() {
  return (
    <React.Suspense>
      <ThemeProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </ThemeProvider>
    </React.Suspense>
  );
}
