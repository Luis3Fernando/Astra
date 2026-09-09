export const COLORS = {
  background: '#0B0A10',
  surface: '#131219',
  surfaceBorder: '#201F2B',

  primary: '#FF6B2D',
  primaryDark: '#D95217',

  textPrimary: '#FFFFFF',
  textSecondary: '#8E8D9A',
  textMuted: '#504F5E',

  error: '#FF453A',
  warning: '#FFD60A',
  disabled: '#23222E',
  disabledText: '#5A586B',

  planets: {
    mercury: '#A6A09B',
    venus: '#E3BB7B',
    earth: '#4E9AF1',
    mars: '#FF6B2D',
    jupiter: '#D4A373',
    saturn: '#EAD7A1',
    uranus: '#70D6FF',
    neptune: '#3A86FF',
  },
} as const;

export type ColorKeys = keyof typeof COLORS;