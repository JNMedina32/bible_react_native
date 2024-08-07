import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import PillButton from "../components/PillButton";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useGlobalState } from "../hooks/GlobalStateContext";
import { FontAwesome } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }) {
  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;
  const [showChoices, setShowChoices] = useState(0);
  const [selectedFontSize, setSelectedFontSize] = useState(fontSize);
  const [selectedTranslation, setSelectedTranslation] = useState("ASV");

  const handleFontSizeChange = (size) => {
    if (selectedFontSize === 24 || selectedFontSize === 16) {
      return;
    }
    if (size === "increase") {
      setSelectedFontSize(selectedFontSize + 1);
    } else {
      setSelectedFontSize(selectedFontSize - 1);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => setShowChoices(0)}>
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
          <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
            <FontAwesome
              name="minus-circle"
              size={24}
              color={colors.text}
              onPress={() => handleFontSizeChange("decrease")}
            />
            <FontAwesome
              name="plus-circle"
              size={24}
              color={colors.text}
              onPress={() => handleFontSizeChange("increase")}
            />
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
        <View style={styles.container}>
          <Text
            style={[
              styles.header,
              { color: colors.text, fontSize: selectedFontSize + header.h1 },
            ]}
          >
            Luke
          </Text>
          <Text
            style={[
              styles.chapter,
              { color: colors.text, fontSize: selectedFontSize + header.h2 },
            ]}
          >
            9
          </Text>
          <Text
            style={[
              styles.mainContent,
              { color: colors.text, fontSize: selectedFontSize },
            ]}
          >
            23. And he saind unto all, If any man would come after me, let him
            deny himself, and take up his cross daily, and follow me.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
});