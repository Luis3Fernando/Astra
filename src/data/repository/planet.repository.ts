import { IPlanetRepository } from './planet.repository.interface';
import { Planet } from '@/core/types/planet.types';
import { PLANETS_DATA } from '../static/planets.data';

export class PlanetRepository implements IPlanetRepository {
  async getAll(): Promise<Planet[]> {
    return Promise.resolve(PLANETS_DATA);
  }

  async getById(id: string): Promise<Planet | null> {
    const planet = PLANETS_DATA.find((p) => p.id === id);
    return Promise.resolve(planet ?? null);
  }
}

export const planetRepository = new PlanetRepository();