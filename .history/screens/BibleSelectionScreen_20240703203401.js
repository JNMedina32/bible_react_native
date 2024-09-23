import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext } from "expo-sqlite/next";

export default function BibleSelectionScreen({ navigation }) {
  const { colors } = useTheme();
  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);
  const category = ["Old Testament", "New Testament", "Both Testaments"];

  const db = useSQLiteContext();

  async function getBooks(cat) {
    setCat(cat);
    let query = "";
    if (cat === "Old Testament") {
      query = "SELECT DISTINCT book_name FROM bible WHERE id <= 39";
    } else if (cat === "New Testament") {
      query = "SELECT DISTINCT book_name FROM bible WHERE id > 39";
    } else {
      query = "SELECT DISTINCT book_name FROM bible";
    }
    try {
      const result = await db.getAllAsync(query);
      if (result.length > 0) {
        const books = result.map((item) => item.book_name);
        setSelection(books);
      } else {
      }
    } catch (error) {}
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {cat === "" ? (
        <View style={styles.list}>
          <Text
            style={{ color: colors.text, font_size: 20, fontWeight: "bold" }}
          >
            Select a Testament
          </Text>
          <FlatList
            style={styles.list}
            data={category}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <PillButton text={item} onPress={() => getBooks(item)} />
            )}
          />
        </View>
      ) : (
        <View style={styles.mainContent}>
          <Text
            style={{ color: colors.text, font_size: 20, fontWeight: "bold" }}
          >
            Select a book
          </Text>
          <FlatList
            style={styles.list}
            data={selection}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <PillButton
                text={item}
                onPress={() => navigation.navigate("Bookmarks")}
              />
            )}
          />
        </View>
      )}
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
