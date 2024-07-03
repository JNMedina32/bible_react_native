import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

export default function BibleScreen({ navigation }) {
  const { colors } = useTheme();

  const [books, setBooks] = ['Old Testament', 'New Testament', 'All '];

  return <View>
    <PillButton text="Old Testament" onPress={() => } />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
