import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

export default function BibleScreen({ navigation }) {
  const { colors } = useTheme();
  const [book, setBook] = useState("");
  const books = ["Old Testament", "New Testament", "Both Testaments"];
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
          tx.executeSql(query, [], (_, { rows }) => {
            for (let i = 0; i < rows.length; i++) {
              selection.push(rows.item(i).book_name);
            }
          });
        });
      };

      fetchData();
    } catch (error) {
      alert("An error occurred while fetching data");  
    }
  }, [book]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {
        book === "" ? (
          <View style={styles.list}>
            <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}>Select a Testament</Text>
            <FlatList
              style={styles.list}
              data={books}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <PillButton text={item} onPress={() => setBook(item)} />
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
    flex: 1,
    alignContent: "center",
    
  },
});
