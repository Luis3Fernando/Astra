import { useState, useEffect } from 'react';
import { Planet } from '@/core/types/planet.types';
import { planetRepository } from '@/data/repository/planet.repository';

export const usePlanets = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const loadPlanets = async () => {
      try {
        const data = await planetRepository.getAll();
        if (isMounted) {
          setPlanets(data);
          setIsLoading(false);
        }
      } catch {
        if (isMounted) setIsLoading(false);
      }
    };

    loadPlanets();
    return () => {
      isMounted = false;
    };
  }, []);

  return { planets, isLoading };
};