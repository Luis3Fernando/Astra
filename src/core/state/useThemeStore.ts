import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '@/core/theme/colors';

export type PlanetKey = keyof typeof COLORS.planets;

interface ThemeState {
  activeAccent: string;
  favoritePlanet: PlanetKey | null;
  setPlanetTheme: (planet: PlanetKey) => void;
  setCustomAccent: (color: string) => void;
  resetTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      activeAccent: COLORS.primary,
      favoritePlanet: null,
      setPlanetTheme: (planet: PlanetKey) =>
        set({
          activeAccent: COLORS.planets[planet],
          favoritePlanet: planet,
        }),
      setCustomAccent: (color: string) =>
        set({
          activeAccent: color,
          favoritePlanet: null,
        }),
      resetTheme: () =>
        set({
          activeAccent: COLORS.primary,
          favoritePlanet: null,
        }),
    }),
    {
      name: 'astra-theme-config',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);