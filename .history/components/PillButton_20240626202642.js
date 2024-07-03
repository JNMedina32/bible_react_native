import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {use}

const PillButton = ({ text, onPress, styles }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};