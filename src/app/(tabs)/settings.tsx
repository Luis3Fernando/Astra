import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';

export default function SettingsScreen() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    marginBottom: 32,
  },
  dangerButton: {
    borderColor: '#DF5E3F',
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  dangerText: {
    color: '#DF5E3F',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});