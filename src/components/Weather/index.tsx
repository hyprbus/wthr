/* eslint-disable react/prop-types */
import React from 'react';
import { useWeather } from './useWeather';

const Weather: React.FunctionComponent = () => {
  const { data, error, isFetching } = useWeather('Stockholm');

  if (isFetching) return <div>Fetching...</div>;

  if (error) return <div>{error.message}</div>;

  if (data)
    return (
      <div>
        <div>Yo bo flow</div>
        <div>{data.name}</div>
        <WeatherIcon iconCode={data.weather.summary.icon} />
      </div>
    );
  return null;
};

type WeatherIconProps = {
  iconCode: string;
};
const WeatherIcon: React.FunctionComponent<WeatherIconProps> = ({ iconCode }) => {
  const src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
  return <img src={src} />;
};

export default Weather;
