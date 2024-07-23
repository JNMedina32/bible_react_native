import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext, openDatabaseAsync } from "expo-sqlite/next";

export default function BibleSelectionScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const db = useSQLiteContext();
  console.log(db);
  // const openDb = async() => await openDatabaseAsync("bible.db");
  // console.log(openDb);
  // const allRows = async() => await openDb?.getAllAsync("SELECT DISTINCT book_name FROM bible LIMIT 5");
  // for(const row of allRows) {console.log(row.id, row.book_name);}
  // const firstRow = async() => await openDb?.getFirstAsync("SELECT DISTINCT book_name FROM bible LIMIT 5");
  // console.log(firstRow.id, firstRow.book_name);
  const { colors } = useTheme();
  const [cat, setCat] = useState("");as
  const [selection, setSelection] = useState([]);
  const category = ["Old Testament", "New Testament", "Both Testaments"];

  

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

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
