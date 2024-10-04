import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";
import MenuButton from "../components/MenuButton";
import { useGlobalState } from "../helpers/GlobalStateContext";
import { getChapters, getNumOfChap } from "../services/readQueries";

export default function ReadingScreen({ route, navigation }) {
  const { book } = route.params;
  const db = useSQLiteContext();
  const [chapter, setChapter] = useState(1);
  const [bookText, setBookText] = useState({});
  const [numOfChap, setNumOfChap] = useState(0);
  const { font_size, theme, bible_translation } = useGlobalState();
  const { header, colors } = theme;

  const handleChapter = (param) => {
    setChapter((prevChapter) => {
      if (param === "next" && prevChapter === numOfChap) {
        return prevChapter; // No change if at the last chapter
      } else if (param === "previous" && prevChapter === 1) {
        return prevChapter; // No change if at the first chapter
      }
      return param === "next" ? prevChapter + 1 : prevChapter - 1;
    });
  };
  

  useEffect(() => {
    setBookText({});
    getChapters(db, book, chapter, bible_translation, setBookText);
  }, [chapter]);

  useEffect(() => {
    getNumOfChap(db, book, bible_translation, setNumOfChap);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.menuButton}>
        <MenuButton />
      </View>
      <Text style={[styles.header]}>
        {bible_translation}
      </Text>
      <Text
        style={[
          styles.header,
          { color: colors.text, fontSize: font_size + header.h1 },
        ]}
      >
        {book} | {chapter}
      </Text>
      <ScrollView>
        <Text
          style={[
            styles.mainContent,
            { color: colors.text, fontSize: font_size },
          ]}
        >
          {Object.entries(bookText).map(([key, value]) => (
            <}
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PillButton
          text={"Previous"}
          onPress={() => handleChapter("previous")}
        />
        <PillButton text={"Next"} onPress={() => handleChapter("next")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
  menuButton: {
    position: "absolute",
    zIndex: 1,
    left: 10,
    top: 10,
    width: "100%",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 10,
    zIndex: 2,
  },
  chapter: {
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
    margin: 1,
  },
});
