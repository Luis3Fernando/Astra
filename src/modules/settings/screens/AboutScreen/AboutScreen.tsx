import React from 'react';
import { View, Text, Image, Pressable, ScrollView, Linking, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/core/theme/colors';
import { useThemeStore } from '@/core/state/useThemeStore';
import { styles } from './AboutScreen.styles';

export const AboutScreen = () => {
  const router = useRouter();
  const activeAccent = useThemeStore((state) => state.activeAccent);

  const openURL = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'No se pudo abrir el enlace.');
      }
    } catch {
      Alert.alert('Error', 'Ocurrió un problema al abrir el navegador.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" size={20} color={COLORS.textPrimary} />
        </Pressable>
        <Text style={styles.screenTitle}>Acerca de</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainCard}>
          <View style={[styles.appIconWrapper, { borderColor: `${activeAccent}44` }]}>
            <Image
              source={require('../../../../../assets/icon.png')}
              style={styles.appIcon}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.appName}>ASTRA</Text>
          <Text style={[styles.appTagline, { color: activeAccent }]}>Explora el universo</Text>
          <View style={styles.versionBadge}>
            <Text style={styles.versionText}>1.0.0</Text>
          </View>
        </View>

        <View style={styles.floatingCard}>
          <View style={[styles.floatingAvatarBox, { borderColor: `${activeAccent}66` }]}>
            <Ionicons name="person" size={32} color={activeAccent} />
          </View>

          <Text style={[styles.cardPretitle, { color: activeAccent }]}>
            DESARROLLADO Y DISEÑADO POR
          </Text>
          <Text style={styles.entityName}>Luis Chumbes</Text>
          <Text style={styles.entitySubtitle}>@louis3l3</Text>

          <View style={styles.socialIconsRow}>
            <Pressable
              style={styles.socialCircleButton}
              onPress={() => openURL('https://github.com/Luis3Fernando')}
            >
              <Ionicons name="logo-github" size={20} color={COLORS.textPrimary} />
            </Pressable>

            <Pressable
              style={styles.socialCircleButton}
              onPress={() => openURL('https://www.linkedin.com/in/luis-fernando3')}
            >
              <Ionicons name="logo-linkedin" size={20} color="#0A66C2" />
            </Pressable>

            <Pressable
              style={styles.socialCircleButton}
              onPress={() => openURL('mailto:luisfernando3chr@gmail.com')}
            >
              <Ionicons name="mail" size={19} color={activeAccent} />
            </Pressable>
          </View>
        </View>

        <View style={styles.floatingCard}>
          <View style={styles.floatingAvatarBox}>
            <Image
              source={require('../../../../../assets/logo_small.png')}
              style={styles.avatarLogoImage}
              resizeMode="contain"
            />
          </View>

          <Text style={[styles.cardPretitle, { color: activeAccent }]}>
            UN PRODUCTO EN COLABORACIÓN CON
          </Text>
          <Text style={styles.entityName}>Sysari</Text>
          <Text style={styles.entitySubtitle}>Software & Innovation</Text>

          <View style={styles.socialIconsRow}>
            <Pressable
              style={styles.socialCircleButton}
              onPress={() => openURL('https://www.sysari.net/')}
            >
              <Ionicons name="globe-outline" size={20} color={COLORS.textPrimary} />
            </Pressable>

            <Pressable
              style={styles.socialCircleButton}
              onPress={() => openURL('https://www.linkedin.com/company/sysari')}
            >
              <Ionicons name="logo-linkedin" size={20} color="#0A66C2" />
            </Pressable>

            <Pressable
              style={styles.socialCircleButton}
              onPress={() => openURL('https://www.instagram.com/sysari__/')}
            >
              <Ionicons name="logo-instagram" size={20} color="#E4405F" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};