import React from 'react';
import { Image, Pressable, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
  interpolateColor,
  Extrapolation,
} from 'react-native-reanimated';
import { Planet } from '@/core/types/planet.types';
import { styles, ITEM_HEIGHT } from './PlanetWheelItem.styles';

interface Props {
  planet: Planet;
  index: number;
  scrollY: SharedValue<number>;
  onPress: () => void;
}

export const PlanetWheelItem = ({ planet, index, scrollY, onPress }: Props) => {
  const inputRange = [
    (index - 1) * ITEM_HEIGHT,
    index * ITEM_HEIGHT,
    (index + 1) * ITEM_HEIGHT,
  ];

  const animatedBorderCapsuleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      borderColor: planet.accentColor,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      inputRange,
      [0.45, 1, 0.45],
      Extrapolation.CLAMP
    );
    const color = interpolateColor(
      scrollY.value,
      inputRange,
      ['#FF8A50', planet.accentColor, '#FF8A50']
    );
    const scale = interpolate(
      scrollY.value,
      inputRange,
      [0.9, 1.05, 0.9],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      color,
      transform: [{ scale }],
    };
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP
    );
    const scale = interpolate(
      scrollY.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Pressable onPress={onPress} style={styles.pressableContainer}>
      <Animated.View style={[styles.capsuleBorder, animatedBorderCapsuleStyle]} />
      <View style={styles.rowContent}>
        <Animated.Text style={[styles.planetName, animatedTextStyle]}>
          {planet.name.toUpperCase()}
        </Animated.Text>
        <Animated.View style={[styles.imageContainer, animatedImageStyle]}>
          <Image source={planet.image} style={styles.planetImage} resizeMode="contain" />
        </Animated.View>
      </View>
    </Pressable>
  );
};