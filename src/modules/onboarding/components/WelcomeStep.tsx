import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Button } from '@/shared/components/button/Button';
import { COLORS } from '@/core/theme/colors';
import { FONTS, FONT_SIZES } from '@/core/theme/typography';
import { SpaceHorizon } from './SpaceHorizon';

interface Props {
  onNext: () => void;
}

export const WelcomeStep = ({ onNext }: Props) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(6, { duration: 900, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 900, easing: Easing.inOut(Easing.quad) })
      ),
      -1,
      true
    );
  }, [translateY]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ASTRA</Text>
        <Text style={styles.description}>
          Un viaje interactivo a través de las fronteras físicas y atmósferas del sistema solar.
        </Text>
      </View>

      <SpaceHorizon />

      <View style={styles.footer}>
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}>Explorar</Text>
          <Animated.View style={animatedIconStyle}>
            <Feather name="chevron-down" size={16} color="#ffffff" />
          </Animated.View>
        </View>

        <Button
          label="Comenzar viaje"
          onPress={onNext}
          variant="primary"
          fontWeight="bold"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 28,
  },
  header: {
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    fontSize: FONT_SIZES.display,
    letterSpacing: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    fontSize: FONT_SIZES.sm,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 18,
    maxWidth: 320,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    zIndex: 2,
  },
  exploreContainer: {
    alignItems: 'center',
    gap: 6,
  },
  exploreText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.textPrimary,
    fontSize: FONT_SIZES.xs,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});