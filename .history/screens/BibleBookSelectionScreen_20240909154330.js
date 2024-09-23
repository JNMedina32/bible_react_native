import { useState, useEffect } from "react";
import PillButton from "../components/PillButton";
import MenuButton from "../components/MenuButton";
import { useGlobalState } from "../hooks/GlobalStateContext";
import { View, StyleSheet, Animated, ScrollView } from "react-native";
import * as SQLite from "expo-sqlite/next";
import { getBibleBooks } from "../services/dbQueries";

export default function BibleBookSelectionScreen({ navigation }) {
  const { font_size, theme } = useGlobalState();
  const { colors, fontSizing } = theme;
  const db = SQLite.useSQLiteContext();
  const [books, setBooks] = useState([]);
  const [selection, setSelection] = useState([]);
  const [dropdownAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    getBibleBooks(db, setBooks);
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
      <View style={styles.menuButton}>
        <MenuButton />
      </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  buttonContainer: {
    top: 80,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  dropdownContainer: {
    top: 100,
  },
});
