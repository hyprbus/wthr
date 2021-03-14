import { useQuery, UseQueryResult } from 'react-query';
import { getWeather } from './weatherQuery';
import { ENDPOINT } from '@/config';
import { request } from 'graphql-request';
import { WeatherDataQueryType, WeatherDataType } from '@/types/types';

export function useWeather(name: string): UseQueryResult<WeatherDataType, Error> {
  return useQuery(
    ['getWeather', name],
    async () => {
      const data = await request<WeatherDataQueryType>(ENDPOINT, getWeather, { name });
      return data.getCityByName;
    },
    {
      retry: false,
    },
  );
}
