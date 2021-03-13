import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from '@/pages/Main';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
};

export default App;
