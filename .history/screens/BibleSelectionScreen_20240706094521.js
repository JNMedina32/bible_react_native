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



  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList>
        data={category}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <PillButton
              text={item}
              onPress={() => {
                setCat(item);
                openDatabaseAsync("bible.db").then((db) => {
                  db.transaction(
                    (tx) => {
                      tx.executeSql(
                        `SELECT * FROM bible WHERE category = ?`,
                        [item],
                        (_, { rows }) => {
                          setSelection(rows._array);
                        }
                      );
                    },
                    (error) => console.log("Error: ", error)
                  );
                });
              }}
            />
          </View>
        )}
      </FlatList>
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
