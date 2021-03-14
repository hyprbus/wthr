import React from 'react';
import { NavLink } from 'react-router-dom';

interface RouteInterface {
  routes: string[];
}

const Routes: React.FunctionComponent<RouteInterface> = ({ routes }: RouteInterface) => {
  const cityLinks = routes.map((city, index) => {
    return {
      name: city,
      link: `/${city.toLowerCase()}`,
      key: `${city}-${index}`,
    };
  });

  return (
    <ul className='cityList'>
      {cityLinks.map(city => (
        <li key={city.key} className='cityListItem'>
          <NavLink to={city.link} className={'cityLink'} activeClassName='selectedCityLink'>
            {city.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Routes;
