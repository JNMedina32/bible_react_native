import { Text, StyleSheet, Pressable } from "react-native";
import { useGlobalState } from "../helpers/GlobalStateContext";

const PillButton = ({ text, onPress }) => {
  const { theme } = useGlobalState();
  const { header, colors } = theme;

  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: colors.background, borderColor: colors.secondary },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    elevation: 2,
    margin: 10,
    width: "80%",
  },
  text: {
    textAlign: "center",
    font_size: 16,
    fontWeight: "bold",
  },
});

export default PillButton;
