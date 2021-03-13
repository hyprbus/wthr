import React, { useState } from 'react';
import Weather from '@/components/Weather';
import Cities from '@/components/Cities';

const cities = [
  { name: 'Helsinki', id: '1' },
  { name: 'Paris', id: '2' },
  { name: 'Buenos Aires', id: '3' },
  { name: 'Tokyo', id: '4' },
  { name: 'Parga', id: '5' },
  { name: 'Nairobi', id: '6' },
  { name: 'bogus city name for testing', id: '7' },
];

const Main: React.FunctionComponent = () => {
  const [city, selectCity] = useState<string>('');

  const setCity = (selectedCity: string) => {
    selectCity(selectedCity);
  };

  return (
    <>
      <h1 className='heading'>Weather App</h1>
      <Cities cities={cities} setCity={setCity} />
      <Weather city={city} />
    </>
  );
};

export default Main;
