import React from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '@/core/theme/colors';
import { usePlanetDetail } from '../../hooks/usePlanetDetail';

export const PlanetDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { planet, isLoading } = usePlanetDetail(id);

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (!planet) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Planeta no encontrado</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>Volver</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Feather name="arrow-left" size={20} color={COLORS.textPrimary} />
      </Pressable>
      <View style={styles.content}>
        <Image source={planet.image} style={styles.image} resizeMode="contain" />
        <Text style={[styles.name, { color: planet.accentColor }]}>{planet.name}</Text>
        <Text style={styles.tagline}>{planet.tagline}</Text>
        <Text style={styles.description}>{planet.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  backText: {
    color: COLORS.textPrimary,
    fontSize: 14,
  },
  content: {
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  tagline: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 16,
    marginBottom: 16,
  },
});