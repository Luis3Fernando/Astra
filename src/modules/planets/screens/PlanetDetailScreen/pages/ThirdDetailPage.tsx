import React, { useState, useRef } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Planet } from '@/core/types/planet.types';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { styles } from './ThirdDetailPage.styles';

export const ThirdDetailPage = ({ planet }: { planet: Planet }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const favoritePlanetId = useUserConfigStore((state) => state.favoritePlanetId);
  const toggleFavoritePlanet = useUserConfigStore((state) => state.toggleFavoritePlanet);

  const isFavorite = favoritePlanetId === planet.id;

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const handleToggleFavorite = () => {
    const isNowFavorite = toggleFavoritePlanet(planet.id);
    if (isNowFavorite) {
      showToast(`${planet.name} ahora es tu planeta favorito`);
    } else {
      showToast('Se quitó de tus favoritos');
    }
  };

  return (
    <View style={styles.pageContainer}>
      {toastMessage && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          style={styles.toastContainer}
          pointerEvents="none"
        >
          <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
      )}

      <View style={styles.heroWrapper} pointerEvents="none">
        <Image source={planet.image} style={styles.heroImage} resizeMode="contain" />
        <LinearGradient
          colors={['transparent', 'rgba(11, 10, 16, 0.85)', '#0B0A10']}
          locations={[0, 0.6, 1]}
          style={styles.shadowGradient}
        />
      </View>

      <View style={[styles.infoCard, { borderColor: `${planet.accentColor}33` }]}>
        <View style={styles.cardHeader}>
          <Text style={styles.planetTitle}>{planet.name}</Text>
          <Pressable
            style={[
              styles.favoriteButton,
              {
                borderColor: `${planet.accentColor}55`,
                backgroundColor: isFavorite ? `${planet.accentColor}22` : 'rgba(255, 255, 255, 0.05)',
              },
            ]}
            onPress={handleToggleFavorite}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={planet.accentColor}
            />
          </Pressable>
        </View>

        <Text style={styles.descriptionText}>{planet.description}</Text>

        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <Text style={styles.gridValue}>{planet.metrics.distanceFromEarthKm}</Text>
            <Text style={styles.gridLabel}>Distancia Tierra</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridValue}>
              {planet.exploration.isHabitable ? 'Posible' : 'Inhóspito'}
            </Text>
            <Text style={styles.gridLabel}>Habitabilidad</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridValue}>{planet.metrics.densityGcm3} g/cm³</Text>
            <Text style={styles.gridLabel}>Densidad</Text>
          </View>
        </View>

        <View style={[styles.factBox, { borderLeftColor: planet.accentColor }]}>
          <Text style={[styles.factTitle, { color: planet.accentColor }]}>¿SABÍAS QUE?</Text>
          <Text style={styles.factBody}>{planet.exploration.curiosityFact}</Text>
        </View>
      </View>
    </View>
  );
};