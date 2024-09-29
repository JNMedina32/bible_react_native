import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useGlobalState } from "./helpers/GlobalStateContext";
import HomeScreen from "./screens/HomeScreen";
import BibleBookSelectionScreen from "./screens/BibleBookSelectionScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import ReadingScreen from "./screens/ReadingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NotesScreen from "./screens/NotesScreen";
import 

const Stack = createNativeStackNavigator();

export default function AppContent() {
  const { theme } = useGlobalState();
  const { colors } = theme;

  const headerStyle = {
    title: "Sheep of the Good Shepherd",
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTitleStyle: {
      color: colors.text,
    },
    headerTitleAlign: "center",
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={headerStyle}
      />
      <Stack.Screen
        name="BibleBookSelection"
        component={BibleBookSelectionScreen}
        options={headerStyle}
      />
      <Stack.Screen
        name="ReadingScreen"
        component={ReadingScreen}
        options={headerStyle}
      />
      <Stack.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={headerStyle}
      />
      <Stack.Screen
        name="NotesScreen"
        component={NotesScreen}
        options={headerStyle}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={headerStyle}
      />
    </Stack.Navigator>
  );
}
