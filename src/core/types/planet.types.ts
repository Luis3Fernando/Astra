import { ImageSourcePropType } from 'react-native';

export interface PlanetMetrics {
  radiusKm: number;
  gravityMs2: number;
  meanTempC: number;
  orbitalPeriodDays: number;
  moonsCount: number;
}

export interface Planet {
  id: string;
  name: string;
  tagline: string;
  description: string;
  orderFromSun: number;
  accentColor: string;
  image: ImageSourcePropType;
  metrics: PlanetMetrics;
}