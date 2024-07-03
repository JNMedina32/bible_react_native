import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/ThemeContext";

export default function ThemeToggleButton() => {
  const { toggleTheme, colors, isDarkTheme } = useTheme();

  return (
    <TouchableOpacity>
      <Text>

      </Text>
    </TouchableOpacity>
  );
};