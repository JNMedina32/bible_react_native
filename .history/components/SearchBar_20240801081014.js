import {View, TextInput, StyleSheet} from "react-native";
import { useTheme } from "../hooks/ThemeContext";

export default function SearchBar({ placeholder, onSearch }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: colors.text }]}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
      />
    </View>
  );
}