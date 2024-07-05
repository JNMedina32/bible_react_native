import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SQLiteProvider } from "expo-sqlite/next";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";
import loadBible from "./services/loadBible";

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
    <ThemeProvider>
      <Suspense
        
      >
        <SQLiteProvider databaseName="bible.db" useSuspense>
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </SQLiteProvider>
      </Suspense>
    </ThemeProvider>
  );
}
