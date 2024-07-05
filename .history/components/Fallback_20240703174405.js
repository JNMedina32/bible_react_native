import {View, Animated, Image, St } from 'react-native';
import {sheep} from '../assets/sheep.jpg';

export default function Fallback() {
  return (
    <View>
      <Animated.Image
        source={sheep}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}