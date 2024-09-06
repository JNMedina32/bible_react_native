import { View, Text, StyleSheet } from "react-native";

export default function Notes(title = "Title here", note = "") {
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{note}</Text>
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
