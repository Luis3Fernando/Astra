import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '@/core/theme/colors';
import { useThemeStore } from '@/core/state/useThemeStore';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const activeAccent = useThemeStore((state) => state.activeAccent);

  const bottomInset = insets.bottom;
  const tabHeight = 60 + bottomInset;
  const paddingBottom = bottomInset > 0 ? bottomInset : 8;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeAccent,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: [
          styles.tabBar,
          {
            height: tabHeight,
            paddingBottom: paddingBottom,
          },
        ],
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Planetas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'planet' : 'planet-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'rocket' : 'rocket-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'settings-sharp' : 'settings-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.background,
    borderTopColor: COLORS.surfaceBorder,
    borderTopWidth: 1,
    paddingTop: 8,
    elevation: 0,
  },
  tabBarLabel: {
    fontFamily: 'SpaceGrotesk-SemiBold',
    fontSize: 11,
    letterSpacing: 0.5,
  },
  tabBarItem: {
    gap: 2,
  },
});