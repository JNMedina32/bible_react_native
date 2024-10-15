import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import MenuButton from "../components/MenuButton";
import DisplayText from "../components/DisplayText";
import { FontAwesome } from "@expo/vector-icons";
import { useGlobalState } from "../helpers/GlobalStateContext";
import { useSQLiteContext } from "expo-sqlite";
import { useState, useEffect } from "react";
import { getUserSearch, getVerses } from "../services/readQueries";

export default function SearchResultsScreen({ route }) {
  const { book_name, chapter, verse_start, verse_end, search } = route.params;
  const db = useSQLiteContext();
  const { theme, bible_translation, font_size } = useGlobalState();
  const { colors } = theme;
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    let isMounted = true;
    if(search === "reference") {
      const handleSearchResults = async () => {
        console.log(
          "SearchResultsScreen: ",
          book_name,
          chapter,
          verse_start,
          verse_end
        );
        const result = await getVerses(
          db,
          book_name,
          chapter,
          bible_translation,
          verse_start,
          verse_end
        );
        console.log("SearchResultsScreen results: ", result);
        if (isMounted) {
          setSearchResults(result);
        }
      };
      handleSearchResults();
    } else {
      const handleUserSearch = async () => {
        const result = await getUserSearch(db, search, bible_translation);
        console.log("SearchResultsScreen results: ", result);
        if (isMounted) {
          setSearchResults(result);
        }
      };
      handleUserSearch();
    }

    return () => {
      isMounted = false;
    };
  }, [book_name, chapter, verse_start, verse_end, bible_translation, search]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.menuButton}>
        <MenuButton />
      </View>
      <View style={styles.results}>
        <DisplayText bookText={searchResults} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 10,
  },
  results: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  text: {
    fontSize: 16,
  },
});
