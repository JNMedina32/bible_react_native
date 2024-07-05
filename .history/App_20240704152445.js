import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { SQLiteProvider, openDatabaseAsync } from "expo-sqlite/next";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";
import loadBible from "./services/loadBible";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadBible()
      .then(() => {
        setIsLoaded(true)
        console.log("Bible loaded successfully");
        
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ThemeProvider>
      <Suspense
        fallback={<FallbackScreen />}
      >
        <SQLiteProvider databaseName="bible.db" useSuspense={true}
          assetSource={{assetId: require("./assets/bible.db")}}
        >
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </SQLiteProvider>
      </Suspense>
    </ThemeProvider>
  );
}
