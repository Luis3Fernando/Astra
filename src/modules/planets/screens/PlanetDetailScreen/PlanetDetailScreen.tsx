import React, { useState } from 'react';
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
import { StarFieldOverlay } from '../PlanetListScreen/components/OrbitSelector/StarFieldOverlay';
import { usePlanetDetail } from '../../hooks/usePlanetDetail';
import { DetailHeader } from './components/DetailHeader';
import { FirstDetailPage } from './pages/FirstDetailPage';
import { SecondDetailPage } from './pages/SecondDetailPage';
import { ThirdDetailPage } from './pages/ThirdDetailPage';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const PlanetDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { planet, isLoading } = usePlanetDetail(id);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const page = Math.round(offsetY / SCREEN_HEIGHT);
    if (page !== activePageIndex) {
      setActivePageIndex(page);
    }
  };

  if (isLoading || !planet) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StarFieldOverlay />
      
      {/* Header fijo superior con botones de regreso y flechas */}
      <DetailHeader
        onBack={() => router.back()}
        accentColor={planet.accentColor}
        title={planet.name.toUpperCase()}
      />

      {/* Contenedor vertical paginado: cada deslizamiento salta exactamente una pantalla */}
      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={SCREEN_HEIGHT}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollArea}
      >
        <FirstDetailPage planet={planet} />
        <SecondDetailPage planet={planet} />
        <ThirdDetailPage planet={planet} />
      </ScrollView>

      {/* Indicador vertical de páginas (3 puntos a la derecha) */}
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