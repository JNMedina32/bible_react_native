import { useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, Animated, Easing } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ThemeToggleButton(){
  const { toggleTheme, colors, isDarkTheme } = useTheme();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isDarkTheme ? 1 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isDarkTheme]);

  const toggleSwitch = () => {
    toggleTheme();
  };

  return (
    <TouchableOpacity style >
      <FontAwesome name="moon-o" size={24} color="black" />
      <FontAwesome name="sun-o" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  toggleButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});