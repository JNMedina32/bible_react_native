import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite/next";

export default function BibleScreen({ navigation }) {
  const { colors } = useTheme();
  const [book, setBook] = useState("");
  const books = ["Old Testament", "New Testament", "Both Testaments"];
  const selection = [];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {book === "" ? (
        <View style={styles.list}>
          <Text
            style={{ color: colors.text, font_size: 20, fontWeight: "bold" }}
          >
            Select a Testament
          </Text>
          <FlatList
            style={styles.list}
            data={books}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <PillButton text={item} onPress={() => setBook(item)} />
            )}
          />
        </View>
      ) : (
        <View style={styles.mainContent}>
          <Text
            style={{ color: colors.text, font_size: 20, fontWeight: "bold" }}
          >
            Select a book
          </Text>
          <FlatList
            style={styles.list}
            data={selection}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <PillButton
                text={item}
                onPress={() => navigation.navigate("Bookmarks")}
              />
            )}
          />
        </View>
      )}
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
    flex: 1,
    alignContent: "center",
  },
});
