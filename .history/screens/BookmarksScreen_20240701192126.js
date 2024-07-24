import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput, Alert } from "react-native";

import { useTheme } from "../hooks/ThemeContext";

import PillButton from "../components/PillButton";

export default function BookmarksScreen() {
  const { colors } = useTheme();
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = () => {
    Alert.prompt(
      "Add Bookmark",
      "Enter the verse you want to bookmark",
      (verse) => {
        if (!verse) {
          return;
        }

        setBookmarks((bookmarks) => [...bookmarks, verse]);
      }
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}>
          Bookmarks
        </Text>
      </View>
      <FlatList
        data={bookmarks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookmark}>
            <Text style={{ color: colors.text }}>{item}</Text>
          </View>
        )}
      />
      <PillButton text="Add Bookmark" onPress={handleAddBookmark} />
    </View>
  );

};
