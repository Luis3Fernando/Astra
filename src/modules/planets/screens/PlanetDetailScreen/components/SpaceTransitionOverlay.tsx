import React, { useEffect } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { COLORS } from '../../../../../core/theme/colors';
import { FONTS } from '../../../../../core/theme/typography';

const { height } = Dimensions.get('window');

interface Props {
  accentColor: string;
  targetPlanetName: string;
}

export const SpaceTransitionOverlay = ({ accentColor, targetPlanetName }: Props) => {
  const rocketY = useSharedValue(height + 60);
  const rocketScale = useSharedValue(0.7);
  const textOpacity = useSharedValue(0);

  useEffect(() => {
    textOpacity.value = withSequence(
      withTiming(1, { duration: 300 }),
      withTiming(1, { duration: 500 }),
      withTiming(0, { duration: 300 })
    );

    rocketY.value = withTiming(-140, {
      duration: 1100,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    rocketScale.value = withTiming(1.3, {
      duration: 1100,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [rocketScale, rocketY, textOpacity]);

  const animatedRocketStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: rocketY.value },
      { scale: rocketScale.value },
    ],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.textWrapper, animatedTextStyle]}>
        <Text style={styles.subtext}>SALTO HIPERESPACIAL</Text>
        <Text style={[styles.targetText, { color: accentColor }]}>
          DESTINO: {targetPlanetName.toUpperCase()}
        </Text>
      </Animated.View>

      <Animated.View style={[styles.rocketContainer, animatedRocketStyle]}>
        <View style={styles.rocketIconWrapper}>
          <Ionicons name="rocket" size={54} color={accentColor} />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.background,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    position: 'absolute',
    top: height * 0.38,
    alignItems: 'center',
  },
  subtext: {
    fontFamily: FONTS.semiBold,
    fontSize: 10,
    color: COLORS.textMuted,
    letterSpacing: 4,
    marginBottom: 6,
  },
  targetText: {
    fontFamily: FONTS.bold,
    fontSize: 22,
    letterSpacing: 3,
  },
  rocketContainer: {
    alignItems: 'center',
  },
  rocketIconWrapper: {
    transform: [{ rotate: '-45deg' }],
  },
});