import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';
import { useThemeStore } from '@/core/state/useThemeStore';

export default function AboutScreen() {
  const router = useRouter();
  const activeAccent = useThemeStore((state) => state.activeAccent);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Feather name="arrow-left" size={20} color={COLORS.textPrimary} />
      </Pressable>

      <Text style={styles.title}>ASTRA EXPLORER</Text>
      <Text style={[styles.subtitle, { color: activeAccent }]}>
        GUÍA Y NAVEGACIÓN DEL SISTEMA SOLAR
      </Text>

      <View style={styles.card}>
        <Text style={styles.paragraph}>
          Astra es una aplicación diseñada para la divulgación astronómica e interactiva de los
          cuerpos celestes del sistema solar, construida con React Native, Expo y Reanimated.
        </Text>
        <Text style={styles.paragraph}>
          Permite explorar métricas orbitales, condiciones atmosféricas y parámetros científicos de
          exploración espacial con una interfaz de alto rendimiento en tiempo real.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 26,
    color: COLORS.textPrimary,
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 4,
    marginBottom: 24,
  },
  card: {
    backgroundColor: 'rgba(20, 19, 26, 0.95)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    gap: 14,
  },
  paragraph: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
});