import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserConfigState {
  hasCompletedOnboarding: boolean;
  isAudioEnabled: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

export const useUserConfigStore = create<UserConfigState>()(
  persist(
    (set) => ({
      hasCompletedOnboarding: false,
      isAudioEnabled: true,
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      resetOnboarding: () => set({ hasCompletedOnboarding: false }),
    }),
    {
      name: 'astra-user-config',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);