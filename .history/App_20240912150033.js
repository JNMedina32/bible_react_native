import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";
import openDatabase from "./services/openDatabase";
import { GlobalStateProvider } from "./hooks/GlobalStateContext";

export default function App() {
  const [dbLoaded, setDbLoaded] = useState(false);

  // useEffect(() => {
  //   openDatabase()
  //     .then(() => {
  //       setDbLoaded(true);
  //       console.log("Database loaded!");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <GlobalStateProvider>
      <ThemeProvider>
        <Suspense fallback={<FallbackScreen />}>
          <NavigationContainer>
            <SQLite.SQLiteProvider
              databaseName="bible.db"
              assetSource={{ assetId: require('./assets/bible.db') }}
              // options={{ useNewConnection: true }}
              useSuspense={true}
            >
              <AppContent />
            </SQLite.SQLiteProvider>
          </NavigationContainer>
        </Suspense>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}
