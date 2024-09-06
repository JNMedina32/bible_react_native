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
import { getNotes } from "../services/dbQueries";

export default function NotesScreen({ navigation }) {
  const db = useSQLiteContext();
  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;



  useEffect(() => {
    getNotes(db).then((result) => {
      console.log(result.len);
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
          <Text style={{ color: colors.text, fontSize: fontSize }}>
            This is the Notes screen.
          </Text>
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