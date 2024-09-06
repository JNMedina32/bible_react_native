import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { useGlobalState } from "../hooks/GlobalStateContext";
import MenuButton from "../components/MenuButton";
import { FontAwesome } from "@expo/vector-icons";
import Notes from "../components/Notes";
import { getNotes } from "../services/dbQueries";

export default function NotesScreen({ navigation }) {
  const db = useSQLiteContext();
  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;
  const [notes, setNotes] = useState([]);
  let testNotes = 5;

  useEffect(() => {
    getNotes(db, 1, setNotes);
  }, []);

  return (
    <View style={[styles.noteScreen, { backgroundColor: colors.background }]}>
      <View style={styles.menuButton}>
        <MenuButton />
      </View>
      <View style={styles.headerSection}>
        <Text
          style={{
            color: colors.text,
            margin: 15,
            fontSize: fontSize + header.h1,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Notes
        </Text>
      </View>
      <ScrollView style={styles.mainBody}>
        <View>
          {notes.map((note, index) => (
            <Notes key={index} title={note.title} note={note.note} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  noteScreen: {
    flex: 1,
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  headerSection: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mainBody: {
    borderWidth: 1,
    borderColor: "yellow",
  },
  noteContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 1,
    margin: 15,
    borderRadius: 3,
    width: "45%",
    height: 90,
  },
});
