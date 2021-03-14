import React from 'react';

interface WeatherIconInterface {
  iconCode: string;
  altText: string;
}

const WeatherIcon: React.FunctionComponent<WeatherIconInterface> = ({ iconCode, altText }: WeatherIconInterface) => {
  const src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
  return <img src={src} alt={altText} />;
};

export default WeatherIcon;
