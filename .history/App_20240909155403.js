import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite/next";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";
import loadBible from "./services/loadBible";
import { GlobalStateProvider } from "./hooks/GlobalStateContext";

export default function App() {
  // const [dbLoaded, setDbLoaded] = useState(false);

  // useEffect(() => {
  //   loadBible()
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
              assetSource={{ assetId: require("./assets/bible.db") }}
              
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
