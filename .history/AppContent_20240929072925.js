import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useGlobalState,
  useGlobalDispatch,
} from "./helpers/GlobalStateContext";
import HomeScreen from "./screens/HomeScreen";
import BibleBookSelectionScreen from "./screens/BibleBookSelectionScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import ReadingScreen from "./screens/ReadingScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NotesScreen from "./screens/NotesScreen";
import * as SplashScreen from "expo-splash-screen";
import * as SQLite from "expo-sqlite/next";
import { useCallback, useState, useEffect } from "react";
import { getUserSettings } from "./services/readQueries";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

//Keep the splash screen open until the app is ready
SplashScreen.preventAutoHideAsync();

export default function AppContent() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const dispatch = useGlobalDispatch();
  const { theme, user_id } = useGlobalState();
  const { colors } = theme;
  const db = SQLite.useSQLiteContext();

  // Load user settings from the database
  useEffect(() => {
    async function loadUserSettings() {
      try {
        await getUserSettings(db, user_id, dispatch);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadUserSettings();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isLoadingComplete) {
      await SplashScreen.hideAsync();
    }
  }, [isLoadingComplete]);

  if (!isLoadingComplete) {
    return null;
  }

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
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
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
    </View>
  );
}
