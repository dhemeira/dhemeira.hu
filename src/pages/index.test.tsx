import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Index from './index';

describe('Home Page', () => {
  afterEach(() => {
    cleanup();
  });
  test('displays the correct title', async () => {
    const { getAllByRole } = render(<Index />);

    expect(getAllByRole('heading')[0]).toHaveTextContent('dhemeira front-end developer');
  });
});
