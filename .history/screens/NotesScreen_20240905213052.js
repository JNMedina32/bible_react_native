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
  const { font_size, theme } = useGlobalState();
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
    >
      <View style={[styles.container,{ backgroundColor: colors.background }]}>
        <View style={styles.menuButton}>
          <MenuButton />
        </View>
        <View style={styles.headerSection}>
          <Text
            style={{
              color: colors.text,
              margin: 15,
              font_size: font_size + header.h1,
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Notes
          </Text>
        </View>
        <ScrollView style={styles.mainBody}>
          {while}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
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