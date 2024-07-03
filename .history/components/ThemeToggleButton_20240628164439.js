import { TouchableOpacity, StyleSheet, Animated, Easing } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ThemeToggleButton(){
  const { toggleTheme, colors, isDarkTheme } = useTheme();

  return (
    <TouchableOpacity>

    </TouchableOpacity>
  );
};