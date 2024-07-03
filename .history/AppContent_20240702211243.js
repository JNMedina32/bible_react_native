import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SQLiteProvider } from "expo-sqlite";

import HomeScreen from "./screens/HomeScreen";
import BibleScreen from "./screens/BibleScreen";
import BookmarksScreen from "./screens/BookmarksScreen";

const Stack = createNativeStackNavigator();

export default function AppContent() {
  return (
    <SQLiteProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bible" component={BibleScreen} />
        <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
      </Stack.Navigator>
    </SQLiteProvider>
  );
}
