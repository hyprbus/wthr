import React from 'react';
import WeatherIcon from '@/components/WeatherIcon';
import { kelvinToCelsius } from '@/utils/kelvinToCelsius';
import { useWeather } from '@/hooks/useWeather/useWeather';

interface WeatherInterface {
  city: string;
}

const CityWeather: React.FunctionComponent<WeatherInterface> = ({ city }: WeatherInterface) => {
  const { data, error, isFetching } = useWeather(city);
  if (isFetching) return <div>Fetching...</div>;
  if (error) return <div>{error.message}</div>;
  if (!isFetching && !error && !data) return <div>City not found.</div>;
  if (data)
    return (
      <div>
        <h2>{data.name}</h2>
        <p>{kelvinToCelsius(data.weather.temperature.actual)}</p>
        <WeatherIcon iconCode={data.weather.summary.icon} />
      </div>
    );
  return null;
};

export default CityWeather;
