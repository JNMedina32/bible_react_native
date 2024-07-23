import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";

export default function ChapterSelection({ route, navigation }) {
  const { book } = route.params;
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [chapters, setChapters] = useState([]);

  async function getChapters() {
    const result = await db.getAllAsync(
      `SELECT DISTINCT chapter FROM bible WHERE book_name = "${book}" ORDER BY id;`
    );
    setChapters(result);
  };

  useEffect(() => {
    getChapters();
  }, []);


  return (
    <View style={[styles.container, {backgroundColor: colors.}]} >
      <Text>Chapter Selection</Text>
      {chapters.map((chapter, index) => (
        <PillButton
          text={chapter.chapter}
          onPress={() =>
            navigation.navigate("VerseSelection", {
              book: book,
              chapter: chapter.chapter,
            })
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
