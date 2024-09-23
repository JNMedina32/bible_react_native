import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function ChapterSelection({ route, navigation }) {
  const { book } = route.params;
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [chapters, setChapters] = useState([]);

  async function getChapters() {
    const result = await db.getAllAsync(
      `SELECT text FROM bible WHERE book_name = "${book}" ORDER BY id LIMIT 15;`
    );
    console.log(result);
    setChapters(result);
  };

  useEffect(() => {
    getChapters();
  }, []);


  return (
    <View style={[styles.container, {backgroundColor: colors.background}]} >
      <Text style={styles.header}>{book}</Text>
      <ScrollView>
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
    font_size: 20,
    fontWeight: "bold",
  },
});
