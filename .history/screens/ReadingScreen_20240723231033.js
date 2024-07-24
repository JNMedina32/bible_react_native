import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";

export default function ReadingScreen({ route, navigation }) {
  const { book } = route.params;
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [chapter, setChapter] = useState(1);
  const [bookText, setBookText] = useState("");

  async function getChapters() {
    setBookText("");
    const result = await db.getAllAsync(
      `SELECT verse, text, chapter FROM bible WHERE book_name = ? AND chapter = ?;`,
      [book, chapter]
    );
    for (const book of result) {
      setBookText((prev) => prev + " " + book.verse + ". " + book.text);
    }
  }

  useEffect(() => {
    getChapters();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.header}>{book}</Text>
      <ScrollView>
        <Text >{chapter}</Text>
        <Text style={styles.mainContent}>{bookText}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  chapter: {
    
  }
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontSize: 16,
  },
});
