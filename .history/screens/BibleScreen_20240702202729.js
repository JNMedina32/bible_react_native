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
  const selection = [];

  useEffect(() => {
    if(book === "")return;
    try {
      const fetchData = async () => {
        let query = "";
        switch (book) {
          case "Old Testament":
            query = "SELECT DISTINCT book_name FROM bible WHERE id <= 39";
            break;
          case "New Testament":
            query = "SELECT DISTINCT book_name FROM bible WHERE id > 39";
            break;
          case "All Books":
            query = "SELECT DISTINCT book_name FROM bible";
            break;
          default:
            query = "SELECT DISTINCT book_name FROM bible";
            break;
        }

        db.transaction((tx) => {
          
        })

      };
    } catch (error) {
      alert("An error occurred while fetching data");  
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
