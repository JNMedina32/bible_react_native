import {View, Text, StyleSheet} from 'react-native';

export default function Notes(title = 'Title here', note = '') {
  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <Text>No</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});