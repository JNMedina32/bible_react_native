import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import MenuButton from "../components/MenuButton";
import { FontAwesome } from "@expo/vector-icons";
import { useGlobalState } from "../helpers/GlobalStateContext";
import { useSQLiteContext } from "expo-sqlite";
import { useState, useEffect } from "react";
import { getUserSearch } from "../services/readQueries";

export default function SearchResultsScreen({ route }) {
  const { book_name, chapter, start_verse, end_verse } = route.params;
  const db = useSQLiteContext();
  const { theme, bible_translation, font_size } = useGlobalState();
  const { colors } = theme;
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    getUserSearch(db, searchItem, bible_translation, setSearchResults);
  }, []);

  useEffect(() => {
    console.log("searchItem from SearchScreen: ", searchItem);
    console.log("searchResults from SearchScreen: ", searchResults);
  }, [searchResults]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.menuButton, { backgroundColor: colors.background }]}>
        <MenuButton />
      </View>
      <View>
        {searchResults && (
          <FlatList
            data={searchResults}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable
                style={styles.results}
                onPress={() =>
                  navigation.navigate("ReadingScreen", {
                    book: item.book_name,
                    chapter: item.chapter,
                  })
                }
              >
                <Text
                  style={[
                    styles.text,
                    { color: colors.text, fontSize: font_size },
                  ]}
                >
                  {item.book_name} {item.chapter}:{item.verse} - {item.text}
                </Text>
              </Pressable>
            )}
          />
        )}
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
