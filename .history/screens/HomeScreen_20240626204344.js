
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/ThemeContext";
import {}

export default function HomeScreen() {

  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={{color: colors.text}}>Home Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});