import React from 'react';
import LoadingIndicator from '.';
import { render, screen } from '@testing-library/react';

test('Loading indicator renders', async () => {
  render(<LoadingIndicator />);
  expect(screen.getByText('Loading weather...')).toBeInTheDocument();
});
