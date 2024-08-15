import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';

describe('Home', () => {
  test('displays the correct title', async () => {
    const { getAllByRole } = render(<Index />);

    expect(getAllByRole('heading')[0]).toHaveTextContent('dhemeira front-end developer');
  });
});
