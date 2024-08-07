import { useState, useEffect, Suspense, } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite/next";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";
import loadBible from "./services/loadBible";

export default function App() {
  const [dbLoaded, setDbLoaded] = useState(false);

  useEffect(() => {
    loadBible()
      .then(() => {
        setDbLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ThemeProvider>
      <Suspense fallback={<FallbackScreen />}>
        <SQLite.SQLiteProvider databaseName="bible.db" useSuspense={true}>
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </SQLite.SQLiteProvider>
      </Suspense>
    </ThemeProvider>
  );
}
