import { useState } from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function SettingsScreen({ navigation }) {
  const { colors } = useTheme();


  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={styles.header}>Settings</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});