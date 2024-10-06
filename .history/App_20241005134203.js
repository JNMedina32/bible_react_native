import { Suspense } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import AppContent from "./AppContent";
import FallbackScreen from "./screens/FallbackScreen";
import { GlobalStateProvider } from "./helpers/GlobalStateContext";


export default function App() {
  return (
    <GlobalStateProvider>
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
    </GlobalStateProvider>
  );
}