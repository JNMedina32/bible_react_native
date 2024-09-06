import { View, Text, StyleSheet } from "react-native";
import { useGlobalState } from "../hooks/GlobalStateContext";

export default function Notes({ title = "Title", note = "Note Here" }) {
  const { fontSize, theme } = useGlobalState();
  const { colors, header } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.title}>
        <Text style={[styles.noteTitle, { fontSize: fontSize + header.h4, color: colors.text }]}>
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
    width: "100%",
    height: "100%",
  },
  title: {
    width: "100%",
    alignItems: "center",
  },
});
