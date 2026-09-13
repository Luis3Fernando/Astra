import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';

interface DetailHeaderProps {
  onBack: () => void;
  onPrev: () => void;
  onNext: () => void;
  accentColor: string;
  title?: string;
  disabled?: boolean;
}

export const DetailHeader = ({
  onBack,
  onPrev,
  onNext,
  accentColor,
  title = 'SOLAR SYSTEM',
  disabled = false,
}: DetailHeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={styles.iconButton}>
        <Feather name="chevron-left" size={24} color={COLORS.textPrimary} />
      </Pressable>

      <Text style={styles.headerTitle}>{title}</Text>

      <View style={styles.navArrowsGroup}>
        <Pressable
          style={[styles.stepButton, { borderColor: `${accentColor}44` }]}
          onPress={onPrev}
          disabled={disabled}
        >
          <Ionicons name="chevron-back" size={16} color={accentColor} />
        </Pressable>
        <Pressable
          style={[styles.stepButton, { borderColor: `${accentColor}44` }]}
          onPress={onNext}
          disabled={disabled}
        >
          <Ionicons name="chevron-forward" size={16} color={accentColor} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    zIndex: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(19, 18, 25, 0.75)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 11,
    color: COLORS.textSecondary,
    letterSpacing: 3,
  },
  navArrowsGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  stepButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(19, 18, 25, 0.75)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});