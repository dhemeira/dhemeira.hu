import React from 'react';
import { cleanup, render, waitFor, screen } from '@testing-library/react';
import Uni from './uni';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        semester_start_date: '2024. 09. 09.',
        semester_end_date: '2024. 12. 15.',
        exam_start_date: '2024. 12. 16.',
        exam_end_date: '2025. 02. 08.',
      }),
  })
) as jest.Mock;

describe('University', () => {
  beforeEach(() => {
    const mockDate = new Date('2024-09-08');
    jest.useFakeTimers();
    jest.setSystemTime(mockDate);
  });
  afterEach(() => {
    cleanup();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  test('date is mocked', async () => {
    const date = new Date();
    expect(date.toISOString()).toBe('2024-09-08T00:00:00.000Z');
  });

  test('renders correctly', async () => {
    const { container } = render(<Uni />);

    // Wait for the loading text to disappear
    await waitFor(() => expect(screen.queryByText('Loading')).not.toBeInTheDocument());

    expect(container.firstChild).toMatchSnapshot();
  });

  //Emoji     Title      Type
  //⏳        Loading    Loading...
  //📖        Week 1     of study period
  //📝        Week 1     of exam period
  //🏖️        Break      Enjoy!
  test('week is study period', async () => {
    const mockDate = new Date('2024-09-09');
    jest.setSystemTime(mockDate);

    const { getByTestId } = render(<Uni key="asd" />);

    // Wait for the loading text to disappear
    await waitFor(() => expect(screen.queryByText('Loading')).not.toBeInTheDocument());

    expect(getByTestId('weekEmoji')).toHaveTextContent('📖');
    expect(getByTestId('weekTitle')).toHaveTextContent('Week 1');
    expect(getByTestId('weekType')).toHaveTextContent('of study period');
  });
  test('week is exam period', async () => {
    const mockDate = new Date('2024-12-16');
    jest.setSystemTime(mockDate);

    const { getByTestId } = render(<Uni key="asd" />);

    // Wait for the loading text to disappear
    await waitFor(() => expect(screen.queryByText('Loading')).not.toBeInTheDocument());

    expect(getByTestId('weekEmoji')).toHaveTextContent('📝');
    expect(getByTestId('weekTitle')).toHaveTextContent('Week 1');
    expect(getByTestId('weekType')).toHaveTextContent('of exam period');
  });
  test('week is break', async () => {
    const mockDate = new Date('2025-02-09');
    jest.setSystemTime(mockDate);

    const { getByTestId } = render(<Uni key="asd" />);

    // Wait for the loading text to disappear
    await waitFor(() => expect(screen.queryByText('Loading')).not.toBeInTheDocument());

    expect(getByTestId('weekEmoji')).toHaveTextContent('🏖️');
    expect(getByTestId('weekTitle')).toHaveTextContent('Break');
    expect(getByTestId('weekType')).toHaveTextContent('Enjoy!');
  });
});
