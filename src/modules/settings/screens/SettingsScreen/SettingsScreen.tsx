import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Pressable, Switch } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { COLORS } from '@/core/theme/colors';
import { useThemeStore } from '@/core/state/useThemeStore';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { ConfirmResetModal } from '@/shared/components/modal/ConfirmResetModal';
import { useSettingsActions } from '../../hooks/useSettingsActions';
import { styles } from './SettingsScreen.styles';

export const SettingsScreen = () => {
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeAccent = useThemeStore((state) => state.activeAccent);
  const resetTheme = useThemeStore((state) => state.resetTheme);

  const favoritePlanetId = useUserConfigStore((state) => state.favoritePlanetId);
  const isAudioEnabled = useUserConfigStore((state) => state.isAudioEnabled);
  const setAudioEnabled = useUserConfigStore((state) => state.setAudioEnabled);
  const startWithFavoritePlanet = useUserConfigStore(
    (state) => state.startWithFavoritePlanet
  );
  const setStartWithFavoritePlanet = useUserConfigStore(
    (state) => state.setStartWithFavoritePlanet
  );
  const resetAppCompletely = useUserConfigStore((state) => state.resetAppCompletely);

  const { openEmailContact, openBuyMeACoffee, navigateToAbout } = useSettingsActions();

  const showToast = (message: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleToggleStartFavorite = (newValue: boolean) => {
    if (newValue && !favoritePlanetId) {
      showToast('Debes tener un planeta favorito seleccionado');
      return;
    }
    setStartWithFavoritePlanet(newValue);
  };

  const handleConfirmReset = () => {
    setIsModalVisible(false);
    resetAppCompletely();
    resetTheme();
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: activeAccent }]}>AJUSTES</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PREFERENCIAS</Text>
          <View style={styles.groupCard}>
            <View style={styles.rowItem}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBox}>
                  <Feather name="star" size={17} color={activeAccent} />
                </View>
                <Text style={styles.rowLabel}>Iniciar con planeta favorito</Text>
              </View>
              <Switch
                value={startWithFavoritePlanet}
                onValueChange={handleToggleStartFavorite}
                trackColor={{ false: 'rgba(255, 255, 255, 0.1)', true: activeAccent }}
                thumbColor={COLORS.textPrimary}
              />
            </View>

            <View style={styles.rowDivider} />

            <View style={styles.rowItem}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBox}>
                  <Feather name="volume-2" size={17} color={activeAccent} />
                </View>
                <Text style={styles.rowLabel}>Efectos sonoros</Text>
              </View>
              <Switch
                value={isAudioEnabled}
                onValueChange={setAudioEnabled}
                trackColor={{ false: 'rgba(255, 255, 255, 0.1)', true: activeAccent }}
                thumbColor={COLORS.textPrimary}
              />
            </View>

            <View style={styles.rowDivider} />

            <Pressable style={styles.rowItem} onPress={() => setIsModalVisible(true)}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBox}>
                  <Feather name="rotate-ccw" size={17} color={COLORS.error} />
                </View>
                <Text style={[styles.rowLabel, { color: COLORS.error }]}>
                  Restablecer
                </Text>
              </View>
              <Feather name="chevron-right" size={18} color={COLORS.textMuted} />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SOPORTE Y FEEDBACK</Text>
          <View style={styles.groupCard}>
            <Pressable style={styles.rowItem} onPress={openBuyMeACoffee}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBox}>
                  <Feather name="coffee" size={17} color={activeAccent} />
                </View>
                <Text style={styles.rowLabel}>Invítame un café</Text>
              </View>
              <Feather name="external-link" size={16} color={COLORS.textMuted} />
            </Pressable>

            <View style={styles.rowDivider} />

            <Pressable style={styles.rowItem} onPress={openEmailContact}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBox}>
                  <Feather name="mail" size={17} color={activeAccent} />
                </View>
                <Text style={styles.rowLabel}>Contactar al desarrollador</Text>
              </View>
              <Feather name="chevron-right" size={18} color={COLORS.textMuted} />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SISTEMA</Text>
          <View style={styles.groupCard}>
            <Pressable style={styles.rowItem} onPress={navigateToAbout}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBox}>
                  <Ionicons name="information-circle-outline" size={18} color={activeAccent} />
                </View>
                <Text style={styles.rowLabel}>Acerca de Astra</Text>
              </View>
              <Feather name="chevron-right" size={18} color={COLORS.textMuted} />
            </Pressable>

            <View style={styles.rowDivider} />

            <View style={styles.rowItem}>
              <View style={styles.rowLeft}>
                <View style={styles.iconBox}>
                  <Feather name="code" size={17} color={COLORS.textMuted} />
                </View>
                <Text style={styles.rowLabel}>Versión</Text>
              </View>
              <Text style={styles.rowRightValue}>1.0.0 (Build 2026)</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {toastMessage && (
        <Animated.View
          entering={FadeInDown.duration(200)}
          exiting={FadeOutDown.duration(200)}
          style={styles.toastContainer}
          pointerEvents="none"
        >
          <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
      )}

      <ConfirmResetModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={handleConfirmReset}
      />
    </View>
  );
};