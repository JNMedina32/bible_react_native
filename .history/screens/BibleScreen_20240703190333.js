import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext } from "expo-sqlite/next";

export default function BibleScreen({ navigation }) {
  const { colors } = useTheme();
  const [cat, setCat] = useState("");
  const category = ["Old Testament", "New Testament", "Both Testaments"];
  const selection = [];

  const db = useSQLiteContext();

  async function getBooks(cat) {
    let query = "";
    if (cat === "Old Testament") {
      query = "SELECT * FROM books WHERE testament = 'Old'";
    } else if (cat === "New Testament") {
      query = "SELECT * FROM books WHERE testament = 'New'";
    } else {
      query = "SELECT * FROM books";
    }
    const result = await db.getAllAsync(query);
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      selection.push(result[i].book_name);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {cat === "" ? (
        <View style={styles.list}>
          <Text
            style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}
          >
            Select a Testament
          </Text>
          <FlatList
            style={styles.list}
            data={category}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <PillButton text={item} onPress={() => getBooks(i)} />
            )}
          />
        </View>
      ) : (
        <View style={styles.mainContent}>
          <Text
            style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}
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