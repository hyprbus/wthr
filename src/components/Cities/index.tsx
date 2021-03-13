import React from 'react';
import { CityInterface } from '@/types/types';

interface CitiesInterface {
  cities: CityInterface[];
  setCity: (city: string) => void;
}

const Cities: React.FunctionComponent<CitiesInterface> = ({ cities, setCity }: CitiesInterface) => {
  return (
    <ul>
      {cities.map(city => (
        <li key={city.id}>
          <button onClick={() => setCity(city.name)}>{city.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default Cities;
