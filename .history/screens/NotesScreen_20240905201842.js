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



  useEffect(() => {
    getNotes(db, setNotes).then(() => {
      console.log(notes.length);
    });
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={[styles.inner, { backgroundColor: colors.background }]}>
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
        <ScrollView style={styles.mainContent}>
          <View style={styles.noteContainer}>
            <Notes  />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  inner: {
    flex: 1,
    padding: 10,
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  headerSection: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  mainContent: {
    flex: 5,
    borderWidth: 1,
    borderColor: "yellow",
  },
  noteContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "green",
  },
});