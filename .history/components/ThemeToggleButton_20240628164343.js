import { TouchableOpacity, StyleSheet, Animated, Easing } from "react-native";
import { useTheme } from "../hooks/ThemeContext";

export default function ThemeToggleButton(){
  const { toggleTheme, colors, isDarkTheme } = useTheme();

  return (
    <TouchableOpacity>

    </TouchableOpacity>
  );
};