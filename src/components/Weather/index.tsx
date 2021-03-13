import React from 'react';
import CityWeather from './CityWeather';

interface WeatherInterface {
  city: string | undefined;
}

const Weather: React.FunctionComponent<WeatherInterface> = ({ city }: WeatherInterface) => {
  if (!city) return null;
  return <CityWeather city={city} />;
};

export default Weather;
