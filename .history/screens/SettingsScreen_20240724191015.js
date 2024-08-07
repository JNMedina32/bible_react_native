import { useState } from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";
import ThemeToggle

export default function SettingsScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Bookmarks Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});