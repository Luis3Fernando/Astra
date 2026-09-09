import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { styles } from './SettingsScreen.styles';

export const SettingsScreen = () => {
  const resetOnboarding = useUserConfigStore((state) => state.resetOnboarding);
  const router = useRouter();

  const handleReset = () => {
    resetOnboarding();
    router.replace('/(onboarding)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <Pressable style={styles.dangerButton} onPress={handleReset}>
        <Text style={styles.dangerText}>REINICIAR BIENVENIDA (TEST)</Text>
      </Pressable>
    </View>
  );
};