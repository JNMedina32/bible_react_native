import { View, Text, StyleSheet } from "react-native";
import { useGlobalState } from "../hooks/GlobalStateContext";

export default function Notes({ title = "Title", note = "Note Here" }) {
  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View>
        <Text style={[styles.noteTitle, { fontSize: fontSize + h4 }]}>
          {title}
        </Text>
      </View>
      <View>
        <Text style={[styles.note, { color: colors.text,  fontSize: fontSize }]}>{note}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
