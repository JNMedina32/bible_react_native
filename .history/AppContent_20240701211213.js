import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import BookmarksScreen from "./screens/BookmarksScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppContent() {
  return (
    <Drawe.Navigator.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
    </Drawe.Navigator.Navigator>
  );
}