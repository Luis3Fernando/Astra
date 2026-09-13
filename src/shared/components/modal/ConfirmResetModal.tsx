import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { COLORS } from '@/core/theme/colors';
import { styles } from './ConfirmResetModal.styles';

interface ConfirmResetModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmResetModal = ({
  visible,
  onClose,
  onConfirm,
}: ConfirmResetModalProps) => {
  if (!visible) return null;

  return (
    <Animated.View
      entering={FadeIn.duration(180)}
      exiting={FadeOut.duration(180)}
      style={styles.overlay}
    >
      <Pressable style={styles.backdropPress} onPress={onClose} />

      <Animated.View
        entering={ZoomIn.duration(240)}
        exiting={ZoomOut.duration(180)}
        style={styles.card}
      >
        <View style={styles.iconBox}>
          <Feather name="alert-triangle" size={26} color={COLORS.error} />
        </View>

        <Text style={styles.title}>¿Restablecer Astra?</Text>

        <Text style={styles.description}>
          Se borrarán las preferencias personalizadas, el planeta favorito y se reconfigurará la
          rueda de navegación al estado inicial.
        </Text>

        <View style={styles.buttonGroup}>
          <Pressable style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </Pressable>

          <Pressable style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>Restablecer</Text>
          </Pressable>
        </View>
      </Animated.View>
    </Animated.View>
  );
};