import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext, openDatabaseAsync } from "expo-sqlite/next";

export default function BibleSelectionScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const db = useSQLiteContext();
  console.log(db);

  const { colors } = useTheme();
  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);
  const category = ["Old Testament", "New Testament", "Both Testaments"];

  useEffect(() => {
    async function fetchData() {
      try {
        const query = "SELECT DISTINCT book_name FROM bible LIMIT 5";
        const result = await db.getAllAsync(`SELECT DISTINCT book_name FROM bible LIMIT 5`);
        // for (const row of result) {
        //   setBooks((prevBooks) => [...prevBooks, row.book_name]);
        // }
        setBooks(result);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    }
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const db = await openDatabaseAsync("bible.db");

  //       const query = "SELECT DISTINCT book_name FROM bible LIMIT 5";
  //       const result = await db.getAllAsync(query);
  //       for (const row of result) {
  //         setBooks((prevBooks) => [...prevBooks, row.book_name]);
  //       }
  //     } catch (error) {
  //       console.log("Error fetching data: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
    ></View>
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
