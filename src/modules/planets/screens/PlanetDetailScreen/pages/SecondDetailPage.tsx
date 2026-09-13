import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Planet } from '@/core/types/planet.types';
import { styles } from './SecondDetailPage.styles';

export const SecondDetailPage = ({ planet }: { planet: Planet }) => {
  const hasMoons = planet.metrics.moonsCount > 0;
  const moonsSubtitle = hasMoons
    ? `Destacadas: ${planet.metrics.notableMoons.join(', ')}`
    : 'Sin satélites naturales en órbita';

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headingBlock}>
        <Text style={styles.preTitle}>VUELO HACIA</Text>
        <Text style={styles.mainTitle}>{planet.name}</Text>
        <Text style={[styles.classification, { color: planet.accentColor }]}>
          ÓRBITA #{planet.orderFromSun} • {planet.metrics.planetType.toUpperCase()}
        </Text>
      </View>

      <View style={styles.planetPreviewArea}>
        <Image source={planet.image} style={styles.planetImg} resizeMode="contain" />
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricCol}>
          <Text style={styles.metricLabel}>Radio medio</Text>
          <Text style={styles.metricValue}>{planet.metrics.radiusKm.toLocaleString()}</Text>
          <Text style={[styles.metricUnit, { color: planet.accentColor }]}>KM</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.metricCol}>
          <Text style={styles.metricLabel}>Distancia Sol</Text>
          <Text style={styles.metricValue}>{planet.metrics.distanceFromSunKm}</Text>
          <Text style={[styles.metricUnit, { color: planet.accentColor }]}>KM</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.metricCol}>
          <Text style={styles.metricLabel}>Rotación día</Text>
          <Text style={styles.metricValue}>{planet.metrics.rotationPeriodHours}</Text>
          <Text style={[styles.metricUnit, { color: planet.accentColor }]}>HORAS</Text>
        </View>
      </View>

      <View style={[styles.moonsCard, { borderColor: `${planet.accentColor}33` }]}>
        <View style={styles.moonsInfo}>
          <Text style={styles.moonsCount}>
            {planet.metrics.moonsCount}{' '}
            {planet.metrics.moonsCount === 1 ? 'Satélite natural' : 'Satélites naturales'}
          </Text>
          <Text style={styles.moonsSub} numberOfLines={2}>
            {moonsSubtitle}
          </Text>
        </View>
        <View style={[styles.moonIconBadge, { backgroundColor: planet.accentColor }]}>
          <Ionicons name="moon" size={18} color="#0B0A10" />
        </View>
      </View>
    </View>
  );
};