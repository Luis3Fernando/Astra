import React, { ReactNode } from 'react';
import {
  Pressable,
  Text,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { COLORS } from '@/core/theme/colors';
import { styles } from './Button.styles';

export type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghost' | 'error';

export interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = ({
  label,
  onPress,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
}: ButtonProps) => {
  const isInteractionDisabled = disabled || isLoading;
  const spinnerColor =
    variant === 'outline' ? COLORS.primary : COLORS.textPrimary;

  return (
    <Pressable
      onPress={onPress}
      disabled={isInteractionDisabled}
      style={({ pressed }) => [
        styles.base,
        styles[`variant_${variant}`],
        isInteractionDisabled && styles.disabled,
        pressed && !isInteractionDisabled && styles.pressed,
        style,
      ]}
    >
      <View style={styles.contentContainer}>
        {isLoading ? (
          <ActivityIndicator size="small" color={spinnerColor} />
        ) : (
          <>
            {leftIcon && leftIcon}
            <Text
              style={[
                styles.text,
                styles[`text_${variant}`],
                isInteractionDisabled && styles.disabledText,
                textStyle,
              ]}
            >
              {label}
            </Text>
            {rightIcon && rightIcon}
          </>
        )}
      </View>
    </Pressable>
  );
};