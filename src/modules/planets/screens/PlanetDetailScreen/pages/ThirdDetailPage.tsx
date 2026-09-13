import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Planet } from '@/core/types/planet.types';
import { COLORS } from '@/core/theme/colors';
import { styles } from './ThirdDetailPage.styles';

export const ThirdDetailPage = ({ planet }: { planet: Planet }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.heroWrapper} pointerEvents="none">
        <Image source={planet.image} style={styles.heroImage} resizeMode="contain" />
        <LinearGradient
          colors={['transparent', 'rgba(11, 10, 16, 0.85)', COLORS.background]}
          locations={[0, 0.6, 1]}
          style={styles.shadowGradient}
        />
      </View>

      <View style={[styles.infoCard, { borderColor: `${planet.accentColor}33` }]}>
        <View style={styles.cardHeader}>
          <Text style={styles.planetTitle}>{planet.name}</Text>
          <Pressable
            style={[styles.favoriteButton, { borderColor: `${planet.accentColor}55` }]}
            onPress={() => {}}
          >
            <Ionicons name="heart-outline" size={20} color={planet.accentColor} />
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