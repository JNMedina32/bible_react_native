import { View, Text, StyleSheet } from "react-native";
import AnimatedLogo from "../components/AnimatedLogo";
import { useTheme } from "../hooks/ThemeContext";

export default function FallbackScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AnimatedLogo />
      <Text style={[styles.text, { color: colors.text }]}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    font_size: 20,
    fontWeight: "bold",
  },
});
