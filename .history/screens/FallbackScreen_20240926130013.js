import { View, Text, StyleSheet } from "react-native";
import AnimatedLogo from "../components/AnimatedLogo";
import { useGlobalState } from "../helpers/GlobalStateContext";

export default function FallbackScreen() {
  const { theme } = useGlobalState();
  const { colors } = theme;

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
