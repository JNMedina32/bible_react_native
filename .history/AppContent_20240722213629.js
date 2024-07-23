import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import BibleBookSelectionScreen from "./screens/BibleBookSelectionScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import ChapterSelection from "./screens/ChapterSelection";

const Stack = createNativeStackNavigator();

export default function AppContent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title: "Sheep of the Good Shepherd",
      }}/>
      <Stack.Screen name="BibleBookSelection" component={BibleBookSelectionScreen} options={{
        title: "Sheep of the Good Shepherd",
      }}/>
      <Stack.Screen name="ChapterSelection" component={ChapterSelection} options={{
        title: "Sheep of the Good Shepherd",
      }} />
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} options={{
        title: "Sheep of the Good Shepherd",
      }}/>
    </Stack.Navigator>
  );
}
