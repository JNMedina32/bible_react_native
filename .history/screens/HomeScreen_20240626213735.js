import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import PillButton from "../components/PillButton";

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>

      <PillButton text="Bible: Continue Reading " onPress={() => alert("Button pressed!")} />
      <PillButton text="Bookmarks" onPress={() => alert("Button pressed!")} />
      <PillButton text="Notes" onPress={() => alert("Button pressed!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
