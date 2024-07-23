import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSQLiteContext, openDatabaseAsync } from "expo-sqlite/next";

export default function BibleSelectionScreen({ navigation }) {
  const db = useSQLiteContext();
  console.log(db);
  const { colors } = useTheme();
  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);
  const category = ["Old Testament", "New Testament", "Both Testaments"];

  useEffect(() => {
    async function getSelection(){
      const result = await db.getAllAsync("SELECT DISTINCT book_name FROM bible");
      setSelection(result.map((item) => item.book_name));
    }
    getSelection();
  }, []);



  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.mainContent}>
        <Text style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}>
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
      {/* {cat === "" ? (
        <View style={styles.list}>
          <Text
            style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}
          >
            Select a Testament
          </Text>
          <FlatList
            style={styles.list}
            data={category}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <PillButton text={item} onPress={() => getBooks(item)} />
            )}
          />
        </View>
      ) : (
        <View style={styles.mainContent}>
          <Text
            style={{ color: colors.text, fontSize: 20, fontWeight: "bold" }}
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
      )} */}
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
  },
});
