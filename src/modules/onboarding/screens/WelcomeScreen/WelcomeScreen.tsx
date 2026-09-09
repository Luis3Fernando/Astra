import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
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
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { SpaceHorizon } from '../../components/SpaceHorizon';
import { styles } from './WelcomeScreen.styles';

export const WelcomeScreen = () => {
  const router = useRouter();
  const completeOnboarding = useUserConfigStore((state) => state.completeOnboarding);
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

  const handleStart = () => {
    completeOnboarding();
    router.replace('/(tabs)');
  };

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
        onPress={handleStart}
        variant="primary"
        fontWeight="bold"
        />
      </View>
    </View>
  );
};