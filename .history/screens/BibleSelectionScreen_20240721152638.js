import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext } from "expo-sqlite";


export default function BibleSelectionScreen({ navigation }) {
  const { colors } = useTheme();
  const [books, setBooks] = useState([]);

  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);




  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <PillButton text={"Old Testament"} />
      <PillButton text={"New Testament"} />
      <PillButton text={"All Books"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  list: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    
  },
});
