import * as React from "react";
import { ThemeProvider } from "./hooks/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite/next";

const loadBible = async () => {
  const db = "bible.db";
  const dbAsset = require("../assets/bible.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbPath = `${FileSystem.documentDirectory}SQLite/${db}`;

  const fileInfo = await FileSystem.getInfoAsync(dbPath);
  if(!fileInfo.exists){
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      {intermediates: true}
    );
    await FileSystem.downloadAsync(dbUri, dbPath);
  }
};

import AppContent from "./AppContent";

export default function App() {
  

  useEffect(() => {
    loadBible().then(() => setIsLoaded(true))
    .catch((error) => console.error(error));
  }, []);

  if (!isLoaded)return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading...</Text>
    </View>
  );

  return (
    <React.Suspense>
      <ThemeProvider>
        <NavigationContainer>
          <AppContent />
        </NavigationContainer>
      </ThemeProvider>
    </React.Suspense>
  );
}
