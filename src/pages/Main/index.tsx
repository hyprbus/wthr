import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Weather from '@/components/Weather';
import { CITIES } from '@/config/';
import Routes from '@/components/Routes';

const Main: React.FunctionComponent = () => {
  return (
    <div className='pageContainer'>
      <Router>
        <h1 className='heading1'>Weather App</h1>
        <Routes routes={CITIES} />
        <Switch>
          <Route path='/:id'>
            <Weather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
