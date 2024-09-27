import { useState, useEffect, Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";
import { GlobalStateProvider } from "./hooks/GlobalStateContext";
import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <GlobalStateProvider>
      <Suspense fallback={<FallbackScreen />}>
        <NavigationContainer>

            <AppContent />
          </SQLite.SQLiteProvider>
        </NavigationContainer>
      </Suspense>
    </GlobalStateProvider>
  );
}