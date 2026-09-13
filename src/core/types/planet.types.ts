import { ImageSourcePropType } from 'react-native';

export interface PlanetHotspot {
  id: string;
  title: string;
  topPercent: number;
  leftPercent: number;
}

export interface PlanetMetrics {
  radiusKm: number;
  gravityMs2: number;
  meanTempC: number;
  orbitalPeriodDays: number;
  moonsCount: number;
  notableMoons: string[];
  distanceFromSunKm: string;
  distanceFromEarthKm: string;
  densityGcm3: number;
  rotationPeriodHours: number;
  planetType: string;
}

export interface PlanetExploration {
  curiosityFact: string;
  estimatedFlightYears: number;
  isHabitable: boolean;
  maxCrewSize: number;
  surfaceUVLevel: 'Bajo' | 'Moderado' | 'Extremo' | 'Crítico';
  primaryFeature: string;
}

export interface Planet {
  id: string;
  name: string;
  tagline: string;
  description: string;
  orderFromSun: number;
  accentColor: string;
  image: ImageSourcePropType;
  hotspots: PlanetHotspot[];
  metrics: PlanetMetrics;
  exploration: PlanetExploration;
}