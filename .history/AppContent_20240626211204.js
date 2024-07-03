import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppContent() {
  return (
    <Stack.Navigator>
      <Stack.Screen  component={HomeScreen} />
    </Stack.Navigator>
  );
}
