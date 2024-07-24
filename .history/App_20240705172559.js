import { useState, useEffect, Suspense, createContext } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite/next";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";



export default function App() {
 
  return (
    <ThemeProvider>
      <Suspense
        fallback={<FallbackScreen />}
      >
        <SQLite.SQLiteProvider databaseName="bible.db" useSuspense={true}
          assetSource={{assetId: require("./bible.db")}}
        >
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </SQLite.SQLiteProvider>
      </Suspense>
    </ThemeProvider>
  );
}