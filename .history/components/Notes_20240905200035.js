import { View, Text, StyleSheet } from "react-native";
import { useGlobalState } from "../hooks/GlobalStateContext";

export default function Notes({ title = "Title", note = "Note Here" }) {
  const { font_size, theme } = useGlobalState();
  const { colors, header } = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View>
        <Text style={[styles.noteTitle, { font_size: font_size + header.h4 }]}>
          {title}
        </Text>
      </View>
      <View>
        <Text
          style={[styles.note, { color: colors.text, font_size: font_size }]}
        >
          {note}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "black",
  },
});
