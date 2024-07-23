import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";



export default function BibleSelectionScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);
  const category = ["Old Testament", "New Testament", "Both Testaments"];

  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        style={styles.list}
        data={category}
        renderItem={({ item }) => (
          <PillButton
            text={item}
            onPress={() => {
              setCat(item);
            }}
          />
        )}r
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  list: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    alignItems
  },
});
