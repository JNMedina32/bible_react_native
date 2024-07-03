import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';

const PillButton = ({ text, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors.background, borderColor: colors.primary }]} onPress={onPress}>
      <Text style={[styles.text, {color: colors.text}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    elevation: 2,

  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default PillButton;