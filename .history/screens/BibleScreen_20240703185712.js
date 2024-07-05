import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import {useSQLiteContext} from "expo-sqlite/next";

export default function BibleScreen({ navigation }) {
  const { colors } = useTheme();
  const [cat, setCat] = useState("");
  const category = ["Old Testament", "New Testament", "Both Testaments"];
  const selection = [];

  const db = useSQLiteContext();

  async function getBooks(cat) {
    if (cat === "Old Testament") {
      const result = await db.getAllAsync("SELECT DISTINCT book_name FROM bible WHERE id <= 39");
    } else if (cat === "New Testament") {
      const result = await db.getAllAsync("SELECT DISTINCT book_name FROM bible WHERE id > 39");
    } else {
      const result = await db.getAllAsync("SELECT DISTINCT book_name FROM bible");
    };
    for (let i = 0; i < result.length; i++) {
      selection.push(result[i].book
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {
        cat === "" ? (
          <View style={styles.list}>
            <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}>Select a Testament</Text>
            <FlatList
              style={styles.list}
              data={category}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <PillButton text={item} onPress={() => setCat(item)} />
              )}
            />
          </View>
        ) : (
          <View style={styles.mainContent}>
            <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}>Select a book</Text>
            <FlatList
              style={styles.list}
              data={selection}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <PillButton text={item} onPress={() => navigation.navigate("Bookmarks")} />
              )}
            />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
});
