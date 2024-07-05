import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SQLiteProvider } from "expo-sqlite/next";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

import AppContent from "./AppContent";



export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadBible()
      .then(() => setIsLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  if (!isLoaded)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <Suspense>
      <SQLiteProvider
        databaseName="bible.db"
        useSuspense
      >
        <ThemeProvider>
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </ThemeProvider>
      </SQLiteProvider>
    </Suspense>
  );
}
