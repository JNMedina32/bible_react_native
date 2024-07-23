import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import { useTheme } from "../hooks/ThemeContext";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";

export default function BibleBookSelectionScreen({ navigation }) {
  const { colors } = useTheme();
  const db = useSQLiteContext();
  const [books, setBooks] = useState([]);
  const [cat, setCat] = useState("");
  const [selection, setSelection] = useState([]);
  const [dropdownAnim] = useState(new Animated.Value(0));

  async function getBibleBooks() {
    const result = await db.getAllAsync(
      `SELECT DISTINCT book_name FROM bible ORDER BY id;`
    );
    console.log(result);
    setBooks(result);
  }

  useEffect(() => {
    getBibleBooks();
  }, []);

  const handleSelection = (testament) => {
    if (testament === "Old Testament") {
      for (let i = 0; i < 39; i++) {
        setSelection((prev) => [...prev, books[i].book_name]);
        console.log(books[i].book_name);
      }
    } else {
      for (let i = 39; i < books.length; i++) {
        setSelection((prev) => [...prev, books[i].book_name]);
        console.log(books[i].book_name);
        
      }
    }
    Animated.timing(dropdownAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View>
        <PillButton
          text={"Old Testament"}
          onPress={() => handleSelection("Old Testament")}
        />
        <PillButton
          text={"New Testament"}
          onPress={() => handleSelection("New Testament")}
        />
      </View>
      <Animated.View
        style={[
          styles.dropdownContainer,
          {
            height: dropdownAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 200],
            }),
          },
        ]}
      >
        <FlatList
          data={selection}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View
              style={[styles.listItem, { backgroundColor: colors.background }]}
            >
              <Text style={{ color: colors.text }}>{item}</Text>
            </View>
          )}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  dropdownContainer: {
    width: "80%",
    overflow: "hidden",
  },
  listItem: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
