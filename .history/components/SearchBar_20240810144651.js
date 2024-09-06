import { View, TextInput, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { useGlobalState } from "../hooks/GlobalStateContext";


export default function SearchBar({ placeholder, onSearch }) {
  const { theme } = useGlobalState();

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.secondary },
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onChangeText={onSearch}
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
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 8,
  },
});
