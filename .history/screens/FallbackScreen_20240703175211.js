import {View, Text, StyleSheet} from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo';
import { useTheme } from 'hooks/ThemeContext';

export default function FallbackScreen() {
  return (
    <View style={styles.container}>
      <AnimatedLogo />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});