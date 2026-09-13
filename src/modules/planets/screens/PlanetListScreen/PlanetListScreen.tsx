import React, { useRef } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from 'react-native-reanimated';
import { useThemeStore } from '@/core/state/useThemeStore';
import { styles } from './PlanetListScreen.styles';
import { usePlanets } from '../../hooks/usePlanets';
import { ITEM_HEIGHT } from './components/OrbitSelector/PlanetWheelItem.styles';
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
  const scrollY = useSharedValue(0);

  const activeAccent = useThemeStore((state) => state.activeAccent);
  const setCustomAccent = useThemeStore((state) => state.setCustomAccent);
  const lastIndexRef = useRef<number>(-1);

  const updateGlobalAccent = (index: number) => {
    if (index >= 0 && index < planets.length && index !== lastIndexRef.current) {
      lastIndexRef.current = index;
      setCustomAccent(planets[index].accentColor);
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
        <Text style={[styles.title, { color: activeAccent }]}>PLANETS</Text>
      </View>

      <Animated.FlatList
        data={planets}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
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
            onPress={() => router.push(`/planet/${item.id}`)}
          />
        )}
      />
    </View>
  );
};