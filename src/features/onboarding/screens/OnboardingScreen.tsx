import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { styles } from './OnboardingScreen.styles';

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

export const OnboardingScreen = () => {
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
};