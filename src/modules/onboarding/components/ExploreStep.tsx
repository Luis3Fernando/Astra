import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '@/shared/components/button/Button';
import { COLORS } from '@/core/theme/colors';
import { FONTS, FONT_SIZES } from '@/core/theme/typography';
import { SaturnPlanetSvg } from './SaturnPlanetSvg';

interface Props {
  onBack: () => void;
  onFinish: () => void;
}

export const ExploreStep = ({ onBack, onFinish }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable style={styles.iconCircle} onPress={onBack}>
          <Feather name="arrow-left" size={18} color={COLORS.textPrimary} />
        </Pressable>
      </View>

      <View style={styles.visualContainer}>
        <SaturnPlanetSvg />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Comienza</Text>
        <Text style={styles.description}>
          Todo el sistema solar al alcance de tus manos con información verificada e interactiva.
        </Text>
        <Button
          label="Empezar ahora"
          onPress={onFinish}
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
  visualContainer: {
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