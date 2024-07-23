import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";

export default function ChapterSelection({ route, navigation }) {
  const { book } = route.params;
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [chapters, setChapters] = useState([]);
  const [bookText, setBookText] = useState("");

  async function getChapters() {
    setBookText("");
    const result = await db.getAllAsync(
      `SELECT text, verse FROM bible WHERE book_name = "${book}" ORDER BY id LIMIT 15;`
    );
    console.log(result);
    setChapters(result);
    for(const chapter of result) {
      setBookText((prev) => prev + chapter.text);
    }
    console.log(bookText);
  };

  useEffect(() => {
    getChapters();
  }, []);


  return (
    <View style={[styles.container, {backgroundColor: colors.background}]} >
      <Text style={styles.header}>{book}</Text>
      <ScrollView>
        <Text>
        {bookText}

        </Text>
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
  },
});
