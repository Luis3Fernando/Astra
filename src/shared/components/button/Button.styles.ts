import { StyleSheet } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { BORDER_RADIUS } from '@/core/constants/layout.constants';

export const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: BORDER_RADIUS.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    width: '100%',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 14,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  weight_regular: {
    fontFamily: 'SpaceGrotesk-Regular',
  },
  weight_semiBold: {
    fontFamily: 'SpaceGrotesk-SemiBold',
  },
  weight_bold: {
    fontFamily: 'SpaceGrotesk-Bold',
  },
  variant_primary: {
    backgroundColor: COLORS.primary,
  },
  variant_dark: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.surfaceBorder,
  },
  variant_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  variant_ghost: {
    backgroundColor: 'transparent',
  },
  variant_error: {
    backgroundColor: COLORS.error,
  },
  text_primary: {
    color: COLORS.textPrimary,
  },
  text_dark: {
    color: COLORS.textPrimary,
  },
  text_outline: {
    color: COLORS.primary,
  },
  text_ghost: {
    color: COLORS.textSecondary,
  },
  text_error: {
    color: COLORS.textPrimary,
  },
  disabled: {
    backgroundColor: COLORS.disabled,
    borderColor: 'transparent',
  },
  disabledText: {
    color: COLORS.disabledText,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.985 }],
  },
});