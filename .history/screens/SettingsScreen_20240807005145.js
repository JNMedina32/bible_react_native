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
    console.log(fontSize, translation, notifications);
    console.log(selectedFontSize === fontSize);
  }, [selectedTranslation]);

  const handleFontSizeChange = (size) => {
    if (size === "increase") {
      if (selectedFontSize === 30) return;
      setSelectedFontSize(selectedFontSize + 1);
    } else {
      if (selectedFontSize === 10) return;
      setSelectedFontSize(selectedFontSize - 1);
    }
    console.log(selectedFontSize);
  };

  return (
    
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text
          style={[
            styles.header,
            { color: colors.text, fontSize: fontSize + header.h1 },
          ]}
        >
          Settings
        </Text>
        <ThemeToggleButton />
        <Text></Text>
        <PillButton text="Change Font Size" onPress={() => setShowChoices(1)} />
        {showChoices === 1 && (
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
        )}
        <PillButton
          text="Change Translation"
          onPress={() => alert("Button pressed!")}
        />
        <PillButton
          text="Notifications"
          onPress={() => alert("Button pressed!")}
        />
        <View>
        {settingsChanged && (
          <PillButton
            text="Save Changes"
            onPress={() => alert("Button pressed!")}
          />
          
        )}
        </View>
        <ScrollView style={{flex: 1, }}>
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
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
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
    margin: 10,
  },
});
