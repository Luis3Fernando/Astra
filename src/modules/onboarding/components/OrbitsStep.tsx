import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '@/shared/components/button/Button';
import { COLORS } from '@/core/theme/colors';
import { FONTS, FONT_SIZES } from '@/core/theme/typography';
import { SolarOrbitsSvg } from './SolarOrbitsSvg';

interface Props {
  onBack: () => void;
  onNext: () => void;
  onSkip: () => void;
}

export const OrbitsStep = ({ onBack, onNext, onSkip }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable style={styles.iconCircle} onPress={onBack}>
          <Feather name="arrow-left" size={18} color={COLORS.textPrimary} />
        </Pressable>
        <Pressable onPress={onSkip}>
          <Text style={styles.navActionText}>Omitir</Text>
        </Pressable>
      </View>

      <View style={styles.orbitContainer}>
        <SolarOrbitsSvg />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Aprende</Text>
        <Text style={styles.description}>
          Aprende de cada planeta sobre nuestro sistema solar con datos detallados y vistas inspiradoras.
        </Text>
        <Button
          label="Siguiente"
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
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 3,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navActionText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.textSecondary,
    fontSize: FONT_SIZES.sm,
  },
  orbitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    gap: 14,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    fontSize: 32,
    letterSpacing: 2,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    fontSize: FONT_SIZES.sm,
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 300,
    marginBottom: 8,
  },
});