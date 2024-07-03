
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/ThemeContext";

export default function HomeScreen() {



  return (
    <View style={styles.container}> 
      <Text style={{color: colors.text}}>Home Screen</Text>
    </View>
  );
}

  const { colors } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});