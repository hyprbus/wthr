import { useQuery, UseQueryResult } from 'react-query';
import { getWeather } from './getWeather';
import { ENDPOINT } from '@/config';
import { request } from 'graphql-request';
import { WeatherDataQueryType, WeatherDataType } from '@/types/types';

export function useWeather(name: string): UseQueryResult<WeatherDataType, Error> {
  return useQuery(
    name, // refetch data when id changes
    async () => {
      const data = await request<WeatherDataQueryType>(ENDPOINT, getWeather, { name });
      return data.getCityByName;
    },
    {
      enabled: true,
      retry: false,
    },
  );
}
