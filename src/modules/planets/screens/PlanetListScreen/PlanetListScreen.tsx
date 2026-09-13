import React, { useRef, useEffect } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from 'react-native-reanimated';
import { useThemeStore, PlanetKey } from '@/core/state/useThemeStore';
import { useUserConfigStore } from '@/core/state/useUserConfigStore';
import { styles } from './PlanetListScreen.styles';
import { COLORS } from '@/core/theme/colors';
import { ITEM_HEIGHT } from './components/OrbitSelector/PlanetWheelItem.styles';
import { usePlanets } from '../../hooks/usePlanets';
import { StarFieldOverlay } from './components/OrbitSelector/StarFieldOverlay';
import { PlanetWheelItem } from './components/OrbitSelector/PlanetWheelItem';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');
const HEADER_OFFSET = 140;
const TABBAR_OFFSET = 80;
const USABLE_HEIGHT = WINDOW_HEIGHT - HEADER_OFFSET - TABBAR_OFFSET;
const CENTER_PADDING = (USABLE_HEIGHT - ITEM_HEIGHT) / 2;

export const PlanetListScreen = () => {
  const router = useRouter();
  const { planets, isLoading } = usePlanets();
  const listRef = useRef<Animated.FlatList<any>>(null);

  const activeAccent = useThemeStore((state) => state.activeAccent);
  const setPlanetTheme = useThemeStore((state) => state.setPlanetTheme);
  const setCustomAccent = useThemeStore((state) => state.setCustomAccent);
  const lastSelectedPlanetId = useUserConfigStore((state) => state.lastSelectedPlanetId);
  const setLastSelectedPlanetId = useUserConfigStore((state) => state.setLastSelectedPlanetId);

  const initialIndex = Math.max(
    0,
    planets.findIndex((p) => p.id === lastSelectedPlanetId)
  );

  const scrollY = useSharedValue(initialIndex * ITEM_HEIGHT);
  const lastIndexRef = useRef<number>(initialIndex);

  const syncPlanetAccent = (planetId: string, accentColor: string) => {
    if (planetId in COLORS.planets) {
      setPlanetTheme(planetId as PlanetKey);
    } else {
      setCustomAccent(accentColor);
    }
  };

  useEffect(() => {
    if (!planets.length) return;
    const targetPlanet = planets[initialIndex] || planets[0];
    scrollY.value = initialIndex * ITEM_HEIGHT;
    syncPlanetAccent(targetPlanet.id, targetPlanet.accentColor);
    setLastSelectedPlanetId(targetPlanet.id);

    const timer = setTimeout(() => {
      listRef.current?.scrollToOffset({
        offset: initialIndex * ITEM_HEIGHT,
        animated: false,
      });
    }, 20);

    return () => clearTimeout(timer);
  }, [planets, initialIndex]);

  const updateGlobalAccent = (index: number) => {
    if (index >= 0 && index < planets.length && index !== lastIndexRef.current) {
      lastIndexRef.current = index;
      const targetPlanet = planets[index];
      syncPlanetAccent(targetPlanet.id, targetPlanet.accentColor);
      setLastSelectedPlanetId(targetPlanet.id);
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      const currentIndex = Math.round(event.contentOffset.y / ITEM_HEIGHT);
      runOnJS(updateGlobalAccent)(currentIndex);
    },
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={activeAccent} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StarFieldOverlay />

      <View style={styles.header}>
        <Text style={styles.subtitle}>SISTEMA SOLAR</Text>
        <Text style={[styles.title, { color: activeAccent }]}>PLANETAS</Text>
      </View>

      <Animated.FlatList
        ref={listRef}
        data={planets}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        initialScrollIndex={initialIndex}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        style={styles.list}
        contentContainerStyle={{
          paddingTop: CENTER_PADDING,
          paddingBottom: CENTER_PADDING + ITEM_HEIGHT,
        }}
        renderItem={({ item, index }) => (
          <PlanetWheelItem
            planet={item}
            index={index}
            scrollY={scrollY}
            onPress={() => {
              setLastSelectedPlanetId(item.id);
              router.push(`/planet/${item.id}`);
            }}
          />
        )}
      />
    </View>
  );
};