import { View, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar({ placeholder, onSearch }) {
  const { colors } = useTheme();

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={[styles.input, { color: colors.text }]}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
      />
      <FontAwesome name="search" size={24} color={colors.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
});
