import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';

const { width, height } = Dimensions.get('window');
const PLANET_SIZE = width * 1.5;

export const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    paddingTop: 100,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  topInfo: {
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 36,
    color: COLORS.textPrimary,
    letterSpacing: 4,
  },
  subtitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 10,
    letterSpacing: 2.5,
    marginTop: 4,
    textTransform: 'uppercase',
  },
  horizonWrapper: {
    position: 'absolute',
    width: PLANET_SIZE,
    height: PLANET_SIZE,
    bottom: -PLANET_SIZE * 0.22,
    left: (width - PLANET_SIZE) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  planetImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  bottomArea: {
    zIndex: 10,
    gap: 12,
  },
  atmosphereCard: {
    backgroundColor: 'rgba(15, 14, 20, 0.85)',
    borderRadius: 22,
    borderWidth: 1,
    padding: 18,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 10,
    color: COLORS.textMuted,
    letterSpacing: 1.5,
  },
  uvBadge: {
    fontFamily: FONTS.bold,
    fontSize: 10,
    letterSpacing: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricVal: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.textPrimary,
  },
  metricSub: {
    fontFamily: FONTS.regular,
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  sunIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  barIndicator: {
    width: 5,
    height: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 3,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barLevel: {
    width: '100%',
    borderRadius: 3,
  },
  scrollPromptButton: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 140,
    zIndex: 2,
  },
});