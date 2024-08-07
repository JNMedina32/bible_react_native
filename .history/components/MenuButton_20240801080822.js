import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import sheep from '../assets/images/sheep.png';

export default function MenuButton(){
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity style={styles.button} onPress={() navigation.navigate('Men')} >  

    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
})