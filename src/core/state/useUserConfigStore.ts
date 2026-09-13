import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserConfigState {
  hasCompletedOnboarding: boolean;
  isAudioEnabled: boolean;
  favoritePlanetId: string | null;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  toggleFavoritePlanet: (planetId: string) => boolean;
}

export const useUserConfigStore = create<UserConfigState>()(
  persist(
    (set, get) => ({
      hasCompletedOnboarding: false,
      isAudioEnabled: true,
      favoritePlanetId: null,
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      resetOnboarding: () => set({ hasCompletedOnboarding: false }),
      toggleFavoritePlanet: (planetId: string) => {
        const currentFavorite = get().favoritePlanetId;
        const isNowFavorite = currentFavorite !== planetId;
        set({ favoritePlanetId: isNowFavorite ? planetId : null });
        return isNowFavorite;
      },
    }),
    {
      name: 'astra-user-config',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);