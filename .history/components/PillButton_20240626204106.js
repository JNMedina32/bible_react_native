import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';

const PillButton = ({ text, onPress, styles }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.text, {color: }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
  },
});