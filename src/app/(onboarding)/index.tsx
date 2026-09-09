import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';

const STEPS = [
  {
    title: 'Bienvenida',
    description: 'Inicia el viaje a través de los confines del cosmos',
  },
  {
    title: 'Exploración',
    description: 'Conoce los cuerpos celestes que orbitan el Sol',
  },
  {
    title: 'Aprendizaje',
    description: 'Descubre datos científicos y dimensiones reales',
  },
];

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const completeOnboarding = useUserConfigStore((state) => state.completeOnboarding);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      completeOnboarding();
      router.replace('/(tabs)');
    }
  };

  const isLastStep = currentStep === STEPS.length - 1;

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        PASO {currentStep + 1} DE {STEPS.length}
      </Text>

      <Text style={styles.title}>{STEPS[currentStep].title}</Text>
      <Text style={styles.description}>{STEPS[currentStep].description}</Text>

      <Pressable style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {isLastStep ? 'INGRESAR A ASTRA' : 'SIGUIENTE'}
        </Text>
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
    padding: 32,
  },
  counter: {
    color: '#666666',
    fontSize: 12,
    letterSpacing: 3,
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    color: '#AAAAAA',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#DF5E3F',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 2,
  },
});