import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import 
import { useGlobalState } from "../hooks/GlobalStateContext";
import {
  View,
  StyleSheet,
  Animated,
  ScrollView,
} from "react-native";
import { useSQLiteContext } from "expo-sqlite";

export default function BibleBookSelectionScreen({ navigation }) {
  const { font_size, theme } = useGlobalState();
  const { colors, fontSizing } = theme;
  const db = useSQLiteContext();
  const [books, setBooks] = useState([]);
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
    // console.log(books);
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
      <View style={styles.dropdownContainer}>
        <Animated.View
          style={{
            height: dropdownAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 500],
            }),
          }}
        >
          <ScrollView style={{}}>
            {selection.length > 0 &&
              selection.map((book, index) => (
                <PillButton
                  key={index}
                  text={book}
                  onPress={() => navigation.navigate("ReadingScreen", { book })}
                />
              ))}
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "top",
    alignItems: "center",
    width: "90%",
    margin: 20,
  },
  dropdownContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
