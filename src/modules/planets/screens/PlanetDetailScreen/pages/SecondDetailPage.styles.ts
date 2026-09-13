import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    paddingTop: 110,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  headingBlock: {
    alignItems: 'flex-start',
  },
  preTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 12,
    color: COLORS.textMuted,
    letterSpacing: 2,
  },
  mainTitle: {
    fontFamily: FONTS.bold,
    fontSize: 32,
    color: COLORS.textPrimary,
    letterSpacing: 1,
  },
  classification: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    letterSpacing: 1.5,
    marginTop: 4,
  },
  planetPreviewArea: {
    width: width * 0.7,
    height: width * 0.7,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  planetImg: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(19, 18, 25, 0.7)',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  metricCol: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginVertical: 4,
  },
  metricLabel: {
    fontFamily: FONTS.regular,
    fontSize: 10,
    color: COLORS.textMuted,
    marginBottom: 4,
  },
  metricValue: {
    fontFamily: FONTS.bold,
    fontSize: 17,
    color: COLORS.textPrimary,
  },
  metricUnit: {
    fontFamily: FONTS.semiBold,
    fontSize: 9,
    marginTop: 2,
  },
  moonsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(19, 18, 25, 0.85)',
    borderRadius: 18,
    borderWidth: 1,
    padding: 16,
  },
  moonsInfo: {
    flex: 1,
    marginRight: 12,
  },
  moonsCount: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  moonsSub: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  moonIconBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});