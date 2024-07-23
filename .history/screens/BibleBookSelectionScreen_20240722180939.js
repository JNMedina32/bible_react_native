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
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

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
    setBooks(result);
  }

  useEffect(() => {
    getBibleBooks();
  }, []);

  const handleSelection = (testament) => {
    setSelection([]);
    console.log(books);
    if (testament === "Old Testament") {
      for (let i = 0; i < 39; i++) {
        setSelection((prev) => [...prev, books[i].book_name]);
      }
    } else {
      for (let i = 39; i < books.length; i++) {
        setSelection((prev) => [...prev, books[i].book_name]);
      }
    }
    Animated.timing(dropdownAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.buttonContainer}>
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
      ><ScrollView>
        
      </ScrollView>
        {selection.length > 0 && (
          selection.map((book, index) => (
            <PillButton 
              key={index} 
              text={book} 
              onPress={() => navigation.navigate("ChapterSelection", { book })}
            />
          ))
        )}
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
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
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
