import { View, Text, StyleSheet } from "react-native";
import { useGlobalState } from "../hooks/GlobalStateContext";

export default function Notes(title = "Title here", note = "") {
  const { }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.noteTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.note}>{note}</Text>
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
