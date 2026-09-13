import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    paddingTop: 90,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 36,
    position: 'relative',
    overflow: 'hidden',
  },
  heroWrapper: {
    width: width * 0.72,
    height: width * 0.46,
    alignSelf: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 10,
  },
  heroImage: {
    width: width * 0.72,
    height: width * 0.72,
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
  },
  shadowGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '65%',
  },
  infoCard: {
    backgroundColor: 'rgba(19, 18, 25, 0.94)',
    borderRadius: 24,
    borderWidth: 1,
    padding: 20,
    gap: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  planetTitle: {
    fontFamily: FONTS.bold,
    fontSize: 26,
    color: COLORS.textPrimary,
  },
  favoriteButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  gridContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  gridItem: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  gridValue: {
    fontFamily: FONTS.bold,
    fontSize: 12,
    color: COLORS.textPrimary,
  },
  gridLabel: {
    fontFamily: FONTS.regular,
    fontSize: 9,
    color: COLORS.textMuted,
    marginTop: 2,
    textAlign: 'center',
  },
  factBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: 12,
    padding: 12,
    borderLeftWidth: 2,
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