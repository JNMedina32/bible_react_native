import { useEffect, useRef } from 'react';
import {View, Animated, Image, StyleSheet, Easing } from 'react-native';
import {sheep} from '../assets/sheep.jpg';

export default function AnimatedLogo() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [s]);
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