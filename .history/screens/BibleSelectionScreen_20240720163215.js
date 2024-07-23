import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";


export default function BibleSelectionScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  const { colors } = useTheme();
  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);
  const category = ["Old Testament", "New Testament", "Both Testaments"];





  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
    >
{category.map((item, index) => (
        <PillButton
          key={index}
          title={item}
          onPress={() => {
            setCat(item);
          }}
          selected={cat === item}
        />
      ))}
      <FlatList
        style={styles.list}
        data={selection}
        renderItem={({ item }) => (
          <PillButton
            title={item}
            onPress={() => {
              navigation.navigate("Bible", { book: item });
            }}
          />
        )}
        keyExtractor={(item) => item}
      />
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
