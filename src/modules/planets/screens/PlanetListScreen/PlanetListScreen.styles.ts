import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { FONTS } from '@/core/theme/typography';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    alignItems: 'center',
    paddingTop: 65,
    paddingBottom: 10,
    zIndex: 2,
  },
  subtitle: {
    fontFamily: FONTS.semiBold,
    color: COLORS.textMuted,
    fontSize: 11,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  title: {
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    fontSize: 32,
    letterSpacing: 6,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  list: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});