import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserConfigState {
  hasCompletedOnboarding: boolean;
  isAudioEnabled: boolean;
  favoritePlanetId: string | null;
  lastSelectedPlanetId: string | null;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  toggleFavoritePlanet: (planetId: string) => boolean;
  setLastSelectedPlanetId: (planetId: string) => void;
}

export const useUserConfigStore = create<UserConfigState>()(
  persist(
    (set, get) => ({
      hasCompletedOnboarding: false,
      isAudioEnabled: true,
      favoritePlanetId: null,
      lastSelectedPlanetId: null,
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      resetOnboarding: () => set({ hasCompletedOnboarding: false }),
      toggleFavoritePlanet: (planetId: string) => {
        const currentFavorite = get().favoritePlanetId;
        const isNowFavorite = currentFavorite !== planetId;
        set({ favoritePlanetId: isNowFavorite ? planetId : null });
        return isNowFavorite;
      },
      setLastSelectedPlanetId: (planetId: string) =>
        set({ lastSelectedPlanetId: planetId }),
    }),
    {
      name: 'astra-user-config',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);