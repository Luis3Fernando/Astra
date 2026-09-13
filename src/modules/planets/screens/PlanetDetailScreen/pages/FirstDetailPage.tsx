import React, { useEffect } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Planet } from '@/core/types/planet.types';
import { COLORS } from '@/core/theme/colors';
import { styles } from './FirstDetailPage.styles';

interface FirstDetailPageProps {
  planet: Planet;
  onNextPage?: () => void;
}

export const FirstDetailPage = ({ planet, onNextPage }: FirstDetailPageProps) => {
  const bounceY = useSharedValue(0);

  useEffect(() => {
    bounceY.value = withRepeat(
      withSequence(
        withTiming(8, { duration: 900, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 900, easing: Easing.inOut(Easing.quad) })
      ),
      -1,
      true
    );
  }, [bounceY]);

  const animatedArrowStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: bounceY.value }],
  }));

  return (
    <View style={styles.pageContainer}>
      <View style={styles.topInfo}>
        <Text style={styles.title}>{planet.name.toUpperCase()}</Text>
        <Text style={[styles.subtitle, { color: planet.accentColor }]}>
          {planet.tagline}
        </Text>
      </View>
      <View style={styles.horizonWrapper} pointerEvents="none">
        <Image
          source={planet.image}
          style={styles.planetImage}
          resizeMode="contain"
        />
      </View>
      <LinearGradient
        colors={['transparent', 'rgba(11, 10, 16, 0.7)', COLORS.background]}
        locations={[0, 0.6, 1]}
        style={styles.bottomGradient}
        pointerEvents="none"
      />
      <View style={styles.bottomArea}>
        <View style={[styles.atmosphereCard, { borderColor: `${planet.accentColor}33` }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>ATMÓSFERA Y CONDICIONES</Text>
            <Text style={[styles.uvBadge, { color: planet.accentColor }]}>
              UV {planet.exploration.surfaceUVLevel.toUpperCase()}
            </Text>
          </View>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.metricVal}>{planet.metrics.meanTempC}°C</Text>
              <Text style={styles.metricSub}>Temperatura media</Text>
            </View>
            <View>
              <Text style={styles.metricVal}>{planet.metrics.gravityMs2} m/s²</Text>
              <Text style={styles.metricSub}>Gravedad sup.</Text>
            </View>
            <View style={styles.sunIconWrapper}>
              <Ionicons name="sunny-outline" size={24} color={planet.accentColor} />
              <View style={styles.barIndicator}>
                <View
                  style={[
                    styles.barLevel,
                    {
                      backgroundColor: planet.accentColor,
                      height: planet.exploration.surfaceUVLevel === 'Crítico' ? '88%' : '52%',
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable onPress={onNextPage} style={styles.scrollPromptButton}>
          <Animated.View style={animatedArrowStyle}>
            <Ionicons name="chevron-down" size={24} color={planet.accentColor} />
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};