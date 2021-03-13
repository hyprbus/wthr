import React from 'react';
import { CityInterface } from '@/types/types';

interface CitiesInterface {
  cities: CityInterface[];
  setCity: (city: string) => void;
  selectedCity: string | undefined;
}

const Cities: React.FunctionComponent<CitiesInterface> = ({ cities, setCity, selectedCity }: CitiesInterface) => {
  return (
    <ul className='cityList'>
      {cities.map(city => (
        <li key={city.id} className='cityListItem'>
          <button
            className={`cityButton ${city.name === selectedCity && 'selected'}`}
            onClick={() => setCity(city.name)}
          >
            {city.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cities;
