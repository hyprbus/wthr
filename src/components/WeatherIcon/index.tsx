import React from 'react';

interface WeatherIconInterface {
  iconCode: string;
}

const WeatherIcon: React.FunctionComponent<WeatherIconInterface> = ({ iconCode }: WeatherIconInterface) => {
  const src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
  return <img src={src} />;
};

export default WeatherIcon;
