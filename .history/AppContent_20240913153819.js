import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useGlobalState } from "./hooks/GlobalStateContext";
import HomeScreen from "./screens/HomeScreen";
import BibleBookSelectionScreen from "./screens/BibleBookSelectionScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import ReadingScreen from "./screens/ReadingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NotesScreen from "./screens/NotesScreen";

const Stack = createNativeStackNavigator();

export default function AppContent() {
  const { theme } = useGlobalState();
  const { colors } = theme;

  const headerStyle = {
    backgroundColor: colors.primary,
  };

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
          // title: false, 
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
        name="NotesScreen"
        component={NotesScreen}
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
