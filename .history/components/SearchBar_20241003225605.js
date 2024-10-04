import { View, TextInput, StyleSheet } from "react-native";
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

  useEffect(() => {
    getBibleBooks(db, bible_translation, setBooks);
  }, []);

  const handleChange



  return (
    <View style={styles.searchBar}>
      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.secondary },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onChangeText={onSearch}
      />
      <FontAwesome name="search" size={24} color={colors.text} />
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
