import React from 'react';
import { cleanup, render, waitFor, screen } from '@testing-library/react';
import NotFoundPage from './404';

jest.mock('@gatsbyjs/reach-router', () => ({
  ...jest.requireActual('@gatsbyjs/reach-router'),
  useLocation: jest.fn().mockImplementation(() => ({
    pathname: '/mock-path',
  })),
}));

describe('Not Found Page', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders correctly', async () => {
    const { container } = render(<NotFoundPage />);

    await waitFor(() =>
      expect(screen.queryByText(/The following page doesn't exist: /i)).toBeInTheDocument()
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
