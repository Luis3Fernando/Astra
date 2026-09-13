import { StyleSheet } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';
import { BORDER_RADIUS } from '@/core/constants/layout.constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 24,
  },
  subtitle: {
    fontFamily: FONTS.semiBold,
    color: COLORS.textMuted,
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 4,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    fontSize: 30,
    letterSpacing: 0.5,
  },
  listContent: {
    paddingBottom: 24,
    gap: 16,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  planetImage: {
    width: 80,
    height: 80,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 18,
  },
  orderText: {
    fontFamily: FONTS.semiBold,
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  planetName: {
    fontFamily: FONTS.bold,
    color: COLORS.textPrimary,
    fontSize: 22,
    letterSpacing: 0.5,
  },
  planetTagline: {
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
});