import React, { useState } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { WelcomeStep } from '../../components/WelcomeStep';
import { OrbitsStep } from '../../components/OrbitsStep';
import { ExploreStep } from '../../components/ExploreStep';
import { styles } from './WelcomeScreen.styles';

export const WelcomeScreen = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const router = useRouter();
  const completeOnboarding = useUserConfigStore((state) => state.completeOnboarding);

  const handleFinish = () => {
    completeOnboarding();
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {step === 0 && <WelcomeStep onNext={() => setStep(1)} />}
      {step === 1 && (
        <OrbitsStep
          onBack={() => setStep(0)}
          onNext={() => setStep(2)}
          onSkip={handleFinish}
        />
      )}
      {step === 2 && (
        <ExploreStep
          onBack={() => setStep(1)}
          onFinish={handleFinish}
        />
      )}
    </View>
  );
};