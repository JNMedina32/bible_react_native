import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext, openDatabaseAsync } from "expo-sqlite/next";

export default function BibleSelectionScreen({ navigation }) {
  const db = useSQLiteContext();
  console.log(db);
  const openDb = async() => await openDatabaseAsync("bible.db");
  console.log(openDb);
  const firstRow = async() => await openDb?.getAllAsync("SELECT DISTINCT book_name FROM bible LIMIT 5");
  // const firstRow = async() => await openDb?.getAllAsync("SELECT DISTINCT book_name FROM bible LIMIT 5");
  //for(const )
  // console.log(firstRow.id, firstRow.book_name);
  const { colors } = useTheme();
  const [cat, setCat] = useState("");
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
