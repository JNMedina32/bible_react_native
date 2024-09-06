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
        <View>
          
        </View>
        <ScrollView style={styles.mainContent}>
          {notes.map((note) => {
            return (
              <Notes key={note.id} title={note.title} note={note.note} />
            );
          })}
          <View>
            
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inner: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  headerSection: {
    flex: 1,
    justifyContent: "start",
  },
});