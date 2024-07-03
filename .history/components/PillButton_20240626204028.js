import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';

const PillButton = ({ text, onPress, styles }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  