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
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}></TouchableWithoutFeedback>
      
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
