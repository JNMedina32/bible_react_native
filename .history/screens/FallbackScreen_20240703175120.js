import {View, Text, StyleSheet} from 'react-native';
import AnimatedLogo from '../components/AnimatedLogo';

export default function FallbackScreen() {
  return (
    <View style={styles.container}>
      <AnimatedLogo />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}