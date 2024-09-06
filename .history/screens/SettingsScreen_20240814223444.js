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
  const { fontSize, theme, darkMode, translation, notifications } =
    useGlobalState();
  const { colors, header } = theme;
  const [showChoices, setShowChoices] = useState(0);
  const [selectedFontSize, setSelectedFontSize] = useState(fontSize);
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
      selectedFontSize !== fontSize ||
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
          { color: colors.text, fontSize: fontSize + header.h1 },
        ]}
      >
        Settings
      </Text>
      <ThemeToggleButton />
      <View style={styles.settingsContainer}>
        <Text style={[{ color: colors.text, fontSize: fontSize + header.h3 }]}>
          Change Font Size:{" "}
        </Text>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{ marginRight: 20 }}>
            <FontAwesome
              name="minus-circle"
              size={30}
              color={colors.text}
              onPress={() => handleFontSizeChange("decrease")}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <FontAwesome
              name="plus-circle"
              size={30}
              color={colors.text}
              onPress={() => handleFontSizeChange("increase")}
            />
          </View>
        </View>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={[{ color: colors.text, fontSize: fontSize + header.h3, width: '80%' }]}>
          Change Translation:
        </Text>
        <Text style={[{ color: colors.text, fontSize: fontSize + header.h3 }]}>
          {translation}
        </Text>
      </View>
      <PillButton
        text="Notifications"
        onPress={() => alert("Button pressed!")}
      />
      <ScrollView style={{ flex: 1 }}>
        <Text
          style={[
            styles.header,
            { color: colors.text, fontSize: selectedFontSize + header.h1 },
          ]}
        >
          {testText.book}
        </Text>
        <Text
          style={[
            styles.chapter,
            { color: colors.text, fontSize: selectedFontSize + header.h2 },
          ]}
        >
          {testText.chapter}
        </Text>
        <Text
          style={[
            styles.mainContent,
            { color: colors.text, fontSize: selectedFontSize },
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
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  settingsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
});
