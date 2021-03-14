import React from 'react';
import WeatherIcon from '@/components/WeatherIcon';
import { kelvinToCelsius } from '@/utils/kelvinToCelsius';
import { useWeather } from '@/hooks/useWeather/useWeather';
import LoadingIndicator from '@/components/LoadingIndicator';

interface WeatherInterface {
  city: string;
}

const CityWeather: React.FunctionComponent<WeatherInterface> = ({ city }: WeatherInterface) => {
  const { data, isError, error, isFetching } = useWeather(city);

  if (isFetching) return <LoadingIndicator />;
  if (isError && error) return <div>{error.message}</div>;
  if (!isFetching && !isError && !data) return <div>City not found.</div>;
  if (data)
    return (
      <div className='cityWeatherContainer'>
        <div>
          <h2 className='heading2'>{data.name}</h2>
          <div className='temperatureContainer'>
            <p className='temperature'>{kelvinToCelsius(data.weather.temperature.actual)}</p>
            <p className='celsius'>C</p>
          </div>
        </div>
        <WeatherIcon iconCode={data.weather.summary.icon} altText={data.weather.summary.description} />
      </div>
    );
  return null;
};

export default CityWeather;
