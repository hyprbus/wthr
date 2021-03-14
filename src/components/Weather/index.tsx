import React from 'react';
import { useParams } from 'react-router-dom';
import CityWeather from './CityWeather';

interface ParamTypes {
  id: string;
}

const Weather: React.FunctionComponent = () => {
  const { id } = useParams<ParamTypes>();
  if (!id) return null;
  return <CityWeather city={id} />;
};

export default Weather;
