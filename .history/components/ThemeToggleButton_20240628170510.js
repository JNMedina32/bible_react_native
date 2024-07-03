import { useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, Animated, Easing } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ThemeToggleButton(){
  const { toggleTheme, colors, isDarkTheme } = useTheme();
  

  return (
    <TouchableOpacity>
      <FontAwesome name="moon-o" size={24} color="black" />
      <FontAwesome name="sun-o" size={24} color="black" />
    </TouchableOpacity>
  );
};