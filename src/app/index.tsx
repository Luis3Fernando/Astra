import { Redirect } from 'expo-router';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';

export default function EntryScreen() {
  const hasCompletedOnboarding = useUserConfigStore(
    (state) => state.hasCompletedOnboarding
  );

  if (!hasCompletedOnboarding) {
    return <Redirect href="/(onboarding)" />;
  }

  return <Redirect href="/(tabs)" />;
}