import { View, TextInput, StyleSheet, Pressable, FlatList } from "react-native";
import { useSQLiteContext } from "expo-sqlite";
import { FontAwesome } from "@expo/vector-icons";
import { useGlobalState } from "../helpers/GlobalStateContext";
import { getBibleBooks } from "../services/readQueries";
import { useState, useEffect } from "react";

export default function SearchBar({ placeholder, onSearch }) {
  const db = useSQLiteContext();
  const { theme, bible_translation } = useGlobalState();
  const { colors } = theme;
  const [books, setBooks] = useState();
  const [predictiveSearch, setPredictiveSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = (text) => {
    setSearchText(text);
    if (text.length > 1) {
      const result = books.filter((book) =>
        book.book_name.toLowerCase().includes(text.toLowerCase())
      );
      setPredictiveSearch(result);
    } else {
      setPredictiveSearch([]);
    }
  };

  useEffect(() => {
    getBibleBooks(db, bible_translation, setBooks);
  }, []);

  useEffect(() => {
    console.log(predictiveSearch);
  }, [predictiveSearch]);

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.secondary },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onChangeText={(text) => handleChange(text)}
      />
      <Pressable onPress={}>
        <FontAwesome name="search" size={24} color={colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 8,
  },
});
