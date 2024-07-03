import React from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider } from "expo-sqlite";

import AppContent from "./AppContent";


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <SQLiteProvider databaseName="bible.db" assetSource={{assetId: require('./a')}}>
          <AppContent />
        </SQLiteProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
