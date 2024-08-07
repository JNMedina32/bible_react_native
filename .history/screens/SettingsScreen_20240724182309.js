import { useState } from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";

export default function BookmarksScreen({ navigation }) {

  return (
    <View>
      <Text>Bookmarks Screen</Text>
    </View>
  );
};

