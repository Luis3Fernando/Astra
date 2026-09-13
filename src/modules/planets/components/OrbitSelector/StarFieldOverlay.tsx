import React, { useMemo, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const STAR_COLORS = ['#FFFFFF', '#FFD8A8', '#67E8F9', '#F472B6'];

interface StarData {
  id: number;
  cx: number;
  cy: number;
  r: number;
  color: string;
  minOpacity: number;
  maxOpacity: number;
  duration: number;
  delay: number;
}

const TwinkleStar = ({ star }: { star: StarData }) => {
  const opacity = useSharedValue(star.minOpacity);

  useEffect(() => {
    opacity.value = withDelay(
      star.delay,
      withRepeat(
        withSequence(
          withTiming(star.maxOpacity, {
            duration: star.duration,
            easing: Easing.inOut(Easing.quad),
          }),
          withTiming(star.minOpacity, {
            duration: star.duration,
            easing: Easing.inOut(Easing.quad),
          })
        ),
        -1,
        true
      )
    );
  }, [star, opacity]);

  const animatedProps = useAnimatedProps(() => ({
    opacity: opacity.value,
  }));

  return (
    <AnimatedCircle
      cx={star.cx}
      cy={star.cy}
      r={star.r}
      fill={star.color}
      animatedProps={animatedProps}
    />
  );
};

export const StarFieldOverlay = () => {
  const stars = useMemo<StarData[]>(() => {
    const totalStars = 24;
    return Array.from({ length: totalStars }, (_, index) => {
      const isTop = index < totalStars / 2;
      const cy = isTop
        ? Math.random() * 150 + 30
        : height - (Math.random() * 170 + 90);

      return {
        id: index,
        cx: Math.random() * width,
        cy,
        r: Math.random() * 0.9 + 0.6,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        minOpacity: Math.random() * 0.15 + 0.05,
        maxOpacity: Math.random() * 0.4 + 0.6,
        duration: Math.random() * 2000 + 2200,
        delay: Math.random() * 2500,
      };
    });
  }, []);

  return (
    <Svg
      width={width}
      height={height}
      style={StyleSheet.absoluteFill}
      pointerEvents="none"
    >
      {stars.map((star) => (
        <TwinkleStar key={star.id} star={star} />
      ))}
    </Svg>
  );
};