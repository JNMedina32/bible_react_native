import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
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
      let result = books.filter((book) =>
        book.book_name.toLowerCase().includes(text.toLowerCase())
      );

      result = result.sort((a, b) => a.book_name.localeCompare(b.book_name));

      setPredictiveSearch(result);
    } else {
      setPredictiveSearch([]);
    }
  };

  const handleSelectPrediction = (book) => {
    setSearchText(book.book_name);
    setPredictiveSearch([]);
  };

  const handleSearch = (searchItem) => {
    for(let book of books) {
      if(book.book_name === searchItem) {
        onSearch("ReadingScreen", searchItem);
        setSearchText("");
        break;
      }
    }
  };

  useEffect(() => {
    getBibleBooks(db, bible_translation, setBooks);
  }, []);

  useEffect(() => {
    console.log(predictiveSearch, searchText);
  }, [predictiveSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={[
            styles.input,
            { color: colors.text, borderColor: colors.secondary },
          ]}
          value={searchText}
          placeholder={placeholder}
          placeholderTextColor={colors.text}
          onChangeText={(text) => handleChange(text)}
        />
        <Pressable onPress={() => handleSearch(searchText)}>
          <FontAwesome name="search" size={24} color={colors.text} />
        </Pressable>
      </View>
      {predictiveSearch.length > 0 && (
        <ScrollView style={[styles.suggestionList]}>
          {predictiveSearch.map((book) => (
            <Pressable
              key={book.book_name}
              onPress={() => handleSelectPrediction(book)}
              style={{ marginBottom: 2, top: 0 }}
            >
              <View style={{ flex: 1, justifyItems: "center"}}>
                <Text style={[styles.listText, { color: colors.text }]}>{book.book_name}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    padding: 5,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 8,
  },
  suggestionList: {
    maxHeight: 150,
    borderWidth: 1,
    borderRadius: 5,
  },
  listText: {
    margin: 3,
    textAlign: "center",
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});