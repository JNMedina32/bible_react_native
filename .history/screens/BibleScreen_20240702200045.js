import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

const db = async () => {
  const db = SQLite.openDatabaseAsync("bible.db");
  return db;
};

export default function BibleScreen({ navigation }) {
  const { colors } = useTheme();
  const [book, setBook] = useState("");
  const books = ["Old Testament", "New Testament", "All Books"];

  useEffect(() => {
    if(book === "")return;
    try {
      const fetchData = async () => {
        let query = "";
        switch (book) {
          case "Old Testament":
            query = "SELECT book_name FROM bible WHERE id <= 39";
            break;
          case "New Testament":
            query = "SELECT * FROM bible WHERE ";
            break;
          case "All Books":
            query = "SELECT * FROM bible";
            break;
          default:
            query = "SELECT * FROM bible";
            break;
        }
      };
    } catch (error) {
      
    }


  }, [book]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={books}
        style={styles.list}
        renderItem={({ item }) => (
          <PillButton
            text={item}
            onPress={() => setBook(item)}
          />
        )}
        keyExtractor={(item) => item}
      />
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
