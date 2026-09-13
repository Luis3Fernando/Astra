import { useState, useEffect } from 'react';
import { Planet } from '@/core/types/planet.types';
import { planetRepository } from '@/data/repository/planet.repository';

export const usePlanetDetail = (planetId: string) => {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const fetchPlanet = async () => {
      try {
        const data = await planetRepository.getById(planetId);
        if (isMounted) {
          setPlanet(data);
          setIsLoading(false);
        }
      } catch {
        if (isMounted) setIsLoading(false);
      }
    };

    if (planetId) {
      fetchPlanet();
    }
    return () => {
      isMounted = false;
    };
  }, [planetId]);

  return { planet, isLoading };
};