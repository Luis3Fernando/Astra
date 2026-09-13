import { Planet } from '@/core/types/planet.types';

export interface IPlanetRepository {
  getAll(): Promise<Planet[]>;
  getById(id: string): Promise<Planet | null>;
}