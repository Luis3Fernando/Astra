import { Alert, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { useThemeStore } from '@/core/state/useThemeStore';

export const useSettingsActions = () => {
  const router = useRouter();
  const resetTheme = useThemeStore((state) => state.resetTheme);
  const resetAllSettings = useUserConfigStore((state) => state.resetAllSettings);

  const openEmailContact = async () => {
    const email = 'support@astra.app';
    const subject = encodeURIComponent('Astra App - Contacto y Feedback');
    const url = `mailto:${email}?subject=${subject}`;
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Error', 'No se encontró un cliente de correo configurado.');
    }
  };

  const openBuyMeACoffee = async () => {
    const url = 'https://buymeacoffee.com';
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      await Linking.openURL(url);
    }
  };

  const navigateToAbout = () => {
    router.push('/settings/about');
  };

  const confirmResetSettings = () => {
    Alert.alert(
      'Restablecer Ajustes',
      '¿Deseas volver a la configuración inicial? Se eliminará el planeta favorito guardado.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Restablecer',
          style: 'destructive',
          onPress: () => {
            resetAllSettings();
            resetTheme();
          },
        },
      ]
    );
  };

  return {
    openEmailContact,
    openBuyMeACoffee,
    navigateToAbout,
    confirmResetSettings,
  };
};