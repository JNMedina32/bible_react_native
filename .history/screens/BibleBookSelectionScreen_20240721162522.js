import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet, Animated } from "react-native";
import { useSQLiteContext } from "expo-sqlite";


export default function BibleBookSelectionScreen({ navigation }) {
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [books, setBooks] = useState([]);
  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);
  const [dropdownAnim] = useState(new Animated.Value(0));

  async function getBibleBooks() {
    const result = await db.getAllAsync(
      `SELECT DISTINCT book_name FROM bible ORDER BY id;`
    );
    console.log(result.length);
    setBooks(result);
  };

  useEffect(() => {
    getBibleBooks();
  }, []);

  const handleSelection = (testament) => {
    if (testament === "Old Testament") {
      for(let i = 0; i < 39; i++) {
        setSelection((prev) => [...prev, books[i].book_name]);
      }
    } else {
      for(let i = 39; i < books.length; i++) {
        setSelection((prev) => [...prev, books[i].book_name]);
      }
    }
    Animated.timing(dropdownAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <PillButton text={"Old Testament"} />
      <PillButton text={"New Testament"} />
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
