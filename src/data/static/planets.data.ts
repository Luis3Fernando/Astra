import { Planet } from '@/core/types/planet.types';
import { COLORS } from '@/core/theme/colors';

export const PLANETS_DATA: Planet[] = [
  {
    id: 'venus',
    name: 'Venus',
    tagline: 'El gemelo infernal',
    description: 'Segundo planeta desde el Sol. Presenta una atmósfera densa y tóxica que atrapa el calor en un efecto invernadero descontrolado.',
    orderFromSun: 2,
    accentColor: COLORS.planets.venus,
    image: require('../../../assets/planets/venus.png'),
    metrics: {
      radiusKm: 6051.8,
      gravityMs2: 8.87,
      meanTempC: 464,
      orbitalPeriodDays: 224.7,
      moonsCount: 0,
    },
  },
  {
    id: 'mars',
    name: 'Marte',
    tagline: 'El planeta rojo',
    description: 'Mundo desértico y frío cubierto de óxido de hierro. Cuenta con valles gigantescos y la montaña más alta del sistema solar.',
    orderFromSun: 4,
    accentColor: COLORS.planets.mars,
    image: require('../../../assets/planets/mars.png'),
    metrics: {
      radiusKm: 3389.5,
      gravityMs2: 3.72,
      meanTempC: -63,
      orbitalPeriodDays: 687,
      moonsCount: 2,
    },
  },
  {
    id: 'uranus',
    name: 'Urano',
    tagline: 'El gigante de hielo inclinado',
    description: 'Compuesto por fluidos densos de metano, amoníaco y agua sobre un núcleo rocoso. Rota sobre su costado en un ángulo casi recto.',
    orderFromSun: 7,
    accentColor: COLORS.planets.uranus,
    image: require('../../../assets/planets/uranus.png'),
    metrics: {
      radiusKm: 25362,
      gravityMs2: 8.69,
      meanTempC: -214,
      orbitalPeriodDays: 30687,
      moonsCount: 28,
    },
  },
];