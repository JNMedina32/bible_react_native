
import { View, Text, StyleSheet } from "react-native";
import 

export default function HomeScreen() {

  const { colors } = useTheme();

  return (
    <View style={styles.container}> 
      <Text>Home Screen</Text>
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