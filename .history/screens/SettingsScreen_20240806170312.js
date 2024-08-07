import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PillButton from "../components/PillButton";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { useGlobalState } from "../hooks/GlobalStateContext";

export default function SettingsScreen({ navigation }) {
  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;
  const [selectedFontSize, setSelectedFontSize] = useState(fontSize);
  const [selectedTranslation, setSelectedTranslation] = useState("ASV");

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
      <PillButton
        text="Change Font Size"
        onPress={() => alert("Button pressed!")}
      />
      <PillButton
        text="Change Translation"
        onPress={() => alert("Button pressed!")}
      />
      <PillButton
        text="Notifications"
        onPress={() => alert("Button pressed!")}
      />
      <View>
        <Text
          style={[
            styles.header,
            { color: colors.text, fontSize: selectedFontSize+ header.h1 },
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
            { color: colors.text, shadowColor: fontSize },
          ]}
        >
          23. And he saind unto all, If any man would come after me, let him
          deny himself, and take up his cross daily, and follow me.
        </Text>
      </View>
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