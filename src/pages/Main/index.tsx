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
  { name: 'Rovaniemi', id: '7' },
  { name: 'bogus city', id: '8' },
];

const Main: React.FunctionComponent = () => {
  const [city, selectCity] = useState<string | undefined>(undefined);

  const setCity = (selectedCity: string) => {
    selectCity(selectedCity);
  };

  return (
    <div className='pageContainer'>
      <h1 className='heading1'>Weather App</h1>
      <Cities cities={cities} setCity={setCity} selectedCity={city} />
      <Weather city={city} />
    </div>
  );
};

export default Main;
