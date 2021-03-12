import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Weather from '@/components/Weather';

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className='heading'>Weather App!</h1>
      <Weather />
    </QueryClientProvider>
  );
};

export default App;
