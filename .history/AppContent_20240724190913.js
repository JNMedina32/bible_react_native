import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import BibleBookSelectionScreen from "./screens/BibleBookSelectionScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import ReadingScreen from "./screens/ReadingScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppContent() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Sheep of the Good Shepherd",
        }}
      />
      <Stack.Screen
        name="BibleBookSelection"
        component={BibleBookSelectionScreen}
        options={{
          title: "Sheep of the Good Shepherd",
        }}
      />
      <Stack.Screen
        name="ReadingScreen"
        component={ReadingScreen}
        options={{
          title: "Sheep of the Good Shepherd",
        }}
      />
      <Stack.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          title: "Sheep of the Good Shepherd",
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Sheep of the Good Shepherd",
        }}  
      />
    </Stack.Navigator>
  );
}
