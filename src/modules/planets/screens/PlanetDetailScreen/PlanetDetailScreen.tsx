import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { COLORS } from '@/core/theme/colors';
import { useThemeStore, PlanetKey } from '@/core/state/useThemeStore';
import { usePlanetDetail } from '../../hooks/usePlanetDetail';
import { usePlanets } from '../../hooks/usePlanets';
import { DetailHeader } from './components/DetailHeader';
import { FirstDetailPage } from './pages/FirstDetailPage';
import { SecondDetailPage } from './pages/SecondDetailPage';
import { ThirdDetailPage } from './pages/ThirdDetailPage';
import { SpaceTransitionOverlay } from './components/SpaceTransitionOverlay';
import { StarFieldOverlay } from '../PlanetListScreen/components/OrbitSelector/StarFieldOverlay';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const PlanetDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { planets } = usePlanets();
  const { planet, isLoading } = usePlanetDetail(id);

  const scrollRef = useRef<ScrollView>(null);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPlanetName, setTargetPlanetName] = useState('');

  const setPlanetTheme = useThemeStore((state) => state.setPlanetTheme);
  const setCustomAccent = useThemeStore((state) => state.setCustomAccent);

  useEffect(() => {
    if (planet) {
      if (planet.id in COLORS.planets) {
        setPlanetTheme(planet.id as PlanetKey);
      } else {
        setCustomAccent(planet.accentColor);
      }
      scrollRef.current?.scrollTo({ y: 0, animated: false });
      setActivePageIndex(0);
    }
  }, [planet, setPlanetTheme, setCustomAccent]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const page = Math.round(offsetY / SCREEN_HEIGHT);
    if (page !== activePageIndex) {
      setActivePageIndex(page);
    }
  };

  const navigateToPlanetByIndex = (nextIndex: number) => {
    if (!planets.length || isTransitioning) return;
    const targetPlanet = planets[nextIndex];
    setTargetPlanetName(targetPlanet.name);
    setIsTransitioning(true);

    setTimeout(() => {
      router.replace(`/planet/${targetPlanet.id}`);
      setIsTransitioning(false);
    }, 1800);
  };

  const handlePrevPlanet = () => {
    if (!planets.length || !planet) return;
    const currentIndex = planets.findIndex((p) => p.id === planet.id);
    const prevIndex = (currentIndex - 1 + planets.length) % planets.length;
    navigateToPlanetByIndex(prevIndex);
  };

  const handleNextPlanet = () => {
    if (!planets.length || !planet) return;
    const currentIndex = planets.findIndex((p) => p.id === planet.id);
    const nextIndex = (currentIndex + 1) % planets.length;
    navigateToPlanetByIndex(nextIndex);
  };

  const scrollToSecondPage = () => {
    scrollRef.current?.scrollTo({ y: SCREEN_HEIGHT, animated: true });
  };

  if (isLoading || !planet) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={planet?.accentColor || COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StarFieldOverlay />

      {isTransitioning && (
        <SpaceTransitionOverlay
          accentColor={planet.accentColor}
          targetPlanetName={targetPlanetName}
        />
      )}

      <DetailHeader
        onBack={() => router.back()}
        onPrev={handlePrevPlanet}
        onNext={handleNextPlanet}
        accentColor={planet.accentColor}
        title={planet.name.toUpperCase()}
        disabled={isTransitioning}
      />

      <ScrollView
        ref={scrollRef}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={SCREEN_HEIGHT}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollArea}
      >
        <FirstDetailPage planet={planet} onNextPage={scrollToSecondPage} />
        <SecondDetailPage planet={planet} />
        <ThirdDetailPage planet={planet} />
      </ScrollView>

      <View style={styles.pageIndicatorContainer}>
        {[0, 1, 2].map((idx) => (
          <View
            key={idx}
            style={[
              styles.dot,
              idx === activePageIndex && {
                backgroundColor: planet.accentColor,
                height: 18,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollArea: {
    flex: 1,
  },
  pageIndicatorContainer: {
    position: 'absolute',
    right: 12,
    top: '45%',
    zIndex: 25,
    gap: 6,
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
});