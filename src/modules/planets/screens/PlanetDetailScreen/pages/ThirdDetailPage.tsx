import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Planet } from '@/core/types/planet.types';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';

const { width, height } = Dimensions.get('window');

export const ThirdDetailPage = ({ planet }: { planet: Planet }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.heroWrapper}>
        <Image source={planet.image} style={styles.heroImage} resizeMode="contain" />
      </View>

      {/* Tarjeta de Expedición Aeroespacial */}
      <View style={[styles.infoCard, { borderColor: `${planet.accentColor}33` }]}>
        <View style={styles.cardHeader}>
          <View style={styles.agencyBadge}>
            <Text style={styles.agencyText}>MISIÓN EXPLORER</Text>
          </View>
          <View style={styles.ratingBox}>
            <Ionicons name="star" size={13} color="#FFD60A" />
            <Text style={styles.ratingText}>9.8</Text>
          </View>
        </View>

        <Text style={styles.planetTitle}>{planet.name}</Text>
        <Text style={[styles.locationDetail, { color: planet.accentColor }]}>
          {planet.exploration.primaryFeature}
        </Text>

        <Text style={styles.descriptionText}>{planet.description}</Text>

        {/* Parámetros de la Misión */}
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagVal}>{planet.exploration.estimatedFlightYears} Años</Text>
            <Text style={styles.tagLabel}>Vuelo estimado</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagVal}>{planet.exploration.maxCrewSize} Tripulantes</Text>
            <Text style={styles.tagLabel}>Capacidad máxima</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagVal}>{planet.metrics.gravityMs2} G</Text>
            <Text style={styles.tagLabel}>Gravedad</Text>
          </View>
        </View>

        <View style={styles.factBox}>
          <Text style={[styles.factTitle, { color: planet.accentColor }]}>¿SABÍAS QUE?</Text>
          <Text style={styles.factBody}>{planet.exploration.curiosityFact}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    paddingTop: 100,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  heroWrapper: {
    width: width * 0.65,
    height: width * 0.65,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  infoCard: {
    backgroundColor: 'rgba(19, 18, 25, 0.92)',
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  agencyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  agencyText: {
    fontFamily: FONTS.semiBold,
    fontSize: 9,
    color: COLORS.textPrimary,
    letterSpacing: 1,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLORS.textPrimary,
  },
  planetTitle: {
    fontFamily: FONTS.bold,
    fontSize: 26,
    color: COLORS.textPrimary,
    marginTop: 4,
  },
  locationDetail: {
    fontFamily: FONTS.semiBold,
    fontSize: 11,
    letterSpacing: 1,
    marginTop: 2,
    marginBottom: 10,
  },
  descriptionText: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
    marginBottom: 14,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  tag: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  tagVal: {
    fontFamily: FONTS.bold,
    fontSize: 11,
    color: COLORS.textPrimary,
  },
  tagLabel: {
    fontFamily: FONTS.regular,
    fontSize: 9,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  factBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: 10,
    padding: 10,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.primary,
  },
  factTitle: {
    fontFamily: FONTS.bold,
    fontSize: 9,
    letterSpacing: 1,
    marginBottom: 2,
  },
  factBody: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textSecondary,
    lineHeight: 16,
  },
});