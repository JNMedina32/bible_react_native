import { useEffect, useRef } from 'react';
import {View, Animated, Image, StyleSheet, Easing } from 'react-native';
import {sheep} from '../assets/sheep.jpg';

export default function AnimatedLogo() {
  const spinValue = useRef(new Animated.Value(0)).current;
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