
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/ThemeContext";

export default function HomeScreen() {

  const { colors } = useTheme();

  return (
    <View style={styles.container}> 
      <Text style={}>Home Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});