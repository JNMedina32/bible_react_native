import { useEffect, useRef } from "react";
import { TouchableOpacity, StyleSheet, Animated, Easing } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ThemeToggleButton() {
  const { toggleTheme, colors, isDarkTheme } = useTheme();
  const animation = useRef(new Animated.Value(isDarkTheme ? 1 : 0)).current;

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

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  const sunOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const moonOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.primary }]}
      onPress={toggleSwitch}
    >
      <Animated.View
        style={[styles.iconContainer, { transform: [{ translateX }] }]}
      >
        <Animated.View style={[styles.icon, { opacity: sunOpacity }]}>
          <FontAwesome name="sun-o" size={16} color={colors.text} />
        </Animated.View>
        <Animated.View style={{ opacity: moonOpacity,  }}>
          <FontAwesome name="moon-o" size={16} color={colors.text} />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 24,
    borderRadius: 25,
    justifyContent: "center",
    padding: 4,
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    left: 4,
    top: 3,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});
