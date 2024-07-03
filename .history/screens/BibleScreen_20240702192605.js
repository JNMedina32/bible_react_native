import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

export default function BibleScreen({ navigation }) {
  const { colors } = useTheme();
  const books = ['Old Testament', 'New Testament', 'All Books'];

  useEffect(() => {
  
  }, []);

  return <View style={styles.container}>
    <FlatList
      data={books}
      style={{ width: "100%" }}
      renderItem={({ item }) => (
        <PillButton text={item} onPress={() => navigation.navigate("Bookmarks")} />
      )}
      keyExtractor={(item) => item}
    />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
