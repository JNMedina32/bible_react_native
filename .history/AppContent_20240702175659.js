import { createNativeStackNavigator } from "@react-navigation/native-stack";


import HomeScreen from "./screens/HomeScreen";
import 
import BookmarksScreen from "./screens/BookmarksScreen";

const Stack = createNativeStackNavigator();


export default function AppContent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Bookmarks" component={BookmarksScreen} />
    </Stack.Navigator>
  );
}
