import { StyleSheet } from 'react-native';
import { FONTS } from '@/core/theme/typography';

export const ITEM_HEIGHT = 76;

export const styles = StyleSheet.create({
  pressableContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: 24,
    position: 'relative',
  },
  capsuleBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 36,
    borderWidth: 1.5,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    zIndex: 2,
  },
  planetName: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    letterSpacing: 3,
  },
  imageContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  planetImage: {
    width: 42,
    height: 42,
  },
});