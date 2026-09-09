import { StyleSheet } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { FONTS, FONT_SIZES } from '@/core/theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 28,
  },
  header: {
    alignItems: 'center',
    zIndex: 2,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    fontSize: FONT_SIZES.display,
    letterSpacing: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    fontSize: FONT_SIZES.sm,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 18,
    maxWidth: 320,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    zIndex: 2,
  },
  exploreContainer: {
    alignItems: 'center',
    gap: 6,
  },
  exploreText: {
    fontFamily: FONTS.semiBold,
    color: COLORS.textPrimary,
    fontSize: FONT_SIZES.xs,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});