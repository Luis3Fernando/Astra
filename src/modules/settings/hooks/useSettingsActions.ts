import { Alert, Linking } from 'react-native';
import { useRouter } from 'expo-router';

export const useSettingsActions = () => {
  const router = useRouter();

  const openEmailContact = async () => {
    const email = 'luisfernando3chr@gmail.com';
    const subject = encodeURIComponent('Astra App - Contacto');
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

  return {
    openEmailContact,
    openBuyMeACoffee,
    navigateToAbout,
  };
};