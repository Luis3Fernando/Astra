import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserConfigState {
  hasCompletedOnboarding: boolean;
  isAudioEnabled: boolean;
  favoritePlanetId: string | null;
  lastSelectedPlanetId: string | null;
  startWithFavoritePlanet: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  toggleFavoritePlanet: (planetId: string) => boolean;
  setLastSelectedPlanetId: (planetId: string) => void;
  setAudioEnabled: (enabled: boolean) => void;
  setStartWithFavoritePlanet: (enabled: boolean) => void;
  resetAllSettings: () => void;
  resetAppCompletely: () => void;
}

export const useUserConfigStore = create<UserConfigState>()(
  persist(
    (set, get) => ({
      hasCompletedOnboarding: false,
      isAudioEnabled: true,
      favoritePlanetId: null,
      lastSelectedPlanetId: null,
      startWithFavoritePlanet: false,
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      resetOnboarding: () => set({ hasCompletedOnboarding: false }),
      toggleFavoritePlanet: (planetId: string) => {
        const currentFavorite = get().favoritePlanetId;
        const isNowFavorite = currentFavorite !== planetId;
        set({
          favoritePlanetId: isNowFavorite ? planetId : null,
          startWithFavoritePlanet: isNowFavorite ? get().startWithFavoritePlanet : false,
        });
        return isNowFavorite;
      },
      setLastSelectedPlanetId: (planetId: string) =>
        set({ lastSelectedPlanetId: planetId }),
      setAudioEnabled: (enabled: boolean) => set({ isAudioEnabled: enabled }),
      setStartWithFavoritePlanet: (enabled: boolean) =>
        set({ startWithFavoritePlanet: enabled }),
      resetAllSettings: () =>
        set({
          isAudioEnabled: true,
          favoritePlanetId: null,
          lastSelectedPlanetId: null,
          startWithFavoritePlanet: false,
        }),
      resetAppCompletely: () =>
        set({
          hasCompletedOnboarding: true,
          isAudioEnabled: true,
          favoritePlanetId: null,
          lastSelectedPlanetId: null,
          startWithFavoritePlanet: false,
        }),
    }),
    {
      name: 'astra-user-config',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);