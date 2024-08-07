import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import PillButton from "../components/PillButton";
import { useGlobalState } from "../hooks/GlobalStateContext";
import { getChapters, getNumOfChap } from "../services/dbQueries";

export default function ReadingScreen({ route, navigation }) {
  const { book } = route.params;
  const db = useSQLiteContext();
  const [chapter, setChapter] = useState(1);
  const [bookText, setBookText] = useState("");
  const [numOfChap, setNumOfChap] = useState(0);
  const { fontSize, theme } = useGlobalState();
  const { header, colors } = theme;

  const handleChapter = (param) => {
    if (param === "next" && chapter === numOfChap) {
      return;
    } else if (param === "previous" && chapter === 1) {
      return;
    }
    if (param === "next") {
      setChapter(chapter + 1);
    } else {
      setChapter(chapter - 1);
    }
  };

  useEffect(() => {
    getChapters(db, book, chapter, setBookText);
  }, [chapter]);

  useEffect(() => {
    getNumOfChap(db, book, setNumOfChap);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text, fontSize: fontSize + header.h1 }]}>
        {book}
      </Text>
      <ScrollView>
        <Text style={[styles.chapter, { color: colors.text, fontSize: fontSize + header.h2 }]}>
          {chapter}
        </Text>
        <Text style={[styles.mainContent, { color: colors.text, fontSize: fontSize }]}>
          {bookText}
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
  header: {
    fontWeight: "bold",
    margin: 10,
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
