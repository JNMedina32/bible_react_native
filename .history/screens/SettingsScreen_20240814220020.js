import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import PillButton from "../components/PillButton";
import ThemeToggleButton from "../components/ThemeToggleButton";
import MenuButton from "../components/MenuButton";
import { useGlobalState, useGlobalDispatch } from "../hooks/GlobalStateContext";
import { FontAwesome } from "@expo/vector-icons";
import { getVerses } from "../services/dbQueries";
import { useSQLiteContext } from "expo-sqlite";

export default function SettingsScreen({ navigation }) {
  const db = useSQLiteContext();
  const [settingsChanged, setSettingsChanged] = useState(false);
  const { font_size, theme, darkMode, translation, notifications } =
    useGlobalState();
  const { colors, header } = theme;
  const [showChoices, setShowChoices] = useState(0);
  const [selectedFontSize, setSelectedFontSize] = useState(font_size);
  const [selectedTranslation, setSelectedTranslation] = useState("ASV");
  const [selectedNotifications, setSelectedNotifications] =
    useState(notifications);
  const [bookText, setBookText] = useState("");
  const testText = {
    book: "Matthew",
    chapter: 6,
    fromVerse: 9,
    toVerse: 12,
  };

  useEffect(() => {
    getVerses(
      db,
      testText.book,
      testText.chapter,
      testText.fromVerse,
      testText.toVerse,
      setBookText
    );
  }, [selectedTranslation]);

  useEffect(() => {
    if (
      selectedFontSize !== font_size ||
      selectedTranslation !== translation ||
      selectedNotifications !== notifications
    ) {
      setSettingsChanged(true);
    } else {
      setSettingsChanged(false);
    }
  }, [selectedFontSize, selectedTranslation, notifications]);

  const handleFontSizeChange = (size) => {
    if (size === "increase") {
      if (selectedFontSize === 30) return;
      setSelectedFontSize(selectedFontSize + 1);
    } else {
      if (selectedFontSize === 10) return;
      setSelectedFontSize(selectedFontSize - 1);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.menuButton}>
        <MenuButton />
      </View>
      <Text
        style={[
          styles.header,
          { color: colors.text, font_size: font_size + header.h1 },
        ]}
      >
        Settings
      </Text>
      <ThemeToggleButton />
      <View>
      <Text style={[{color: colors.text, font_size: font_size + header.h3}]}>Change Font Size: </Text>
      </View>
      {showChoices === 1 && (
        
      )}
      <PillButton
        text="Change Translation"
        onPress={() => alert("Button pressed!")}
      />
      <PillButton
        text="Notifications"
        onPress={() => alert("Button pressed!")}
      />
      <ScrollView style={{ flex: 1 }}>
        <Text
          style={[
            styles.header,
            { color: colors.text, font_size: selectedFontSize + header.h1 },
          ]}
        >
          {testText.book}
        </Text>
        <Text
          style={[
            styles.chapter,
            { color: colors.text, font_size: selectedFontSize + header.h2 },
          ]}
        >
          {testText.chapter}
        </Text>
        <Text
          style={[
            styles.mainContent,
            { color: colors.text, font_size: selectedFontSize },
          ]}
        >
          {bookText}
        </Text>
      </ScrollView>
      {settingsChanged && (
        <View style={styles.saveContainer}>
          <View>
            <PillButton text="Save" onPress={() => alert("Button pressed!")} />
          </View>
          <View>
            <PillButton
              text="Cancel"
              onPress={() => alert("Button pressed!")}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  menuButton: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  header: {
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
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
  saveContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
});
