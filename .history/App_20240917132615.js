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
    <SQLite.SQLiteProvider
    databaseName="bible.db"
    assetSource={{ assetId: require("./assets/bible.db") }}
    options={{ useNewConnection: true }}
    useSuspense={true}
  >
    <GlobalStateProvider>
      <Suspense fallback={<FallbackScreen />}>
        <NavigationContainer>

            <AppContent />
        </NavigationContainer>
      </Suspense>
    </GlobalStateProvider>
    </SQLite.SQLiteProvider>
    <></>
  );
}
