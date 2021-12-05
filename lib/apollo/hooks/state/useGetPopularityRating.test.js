import { renderHook } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import PopularityRating from 'graphql/queries/popularityRating.graphql';
import { useGetPopularityRating } from './useGetPopularityRating';

describe('useGetPopularityRating', () => {
  test('should return popularity rating data', async () => {
    // Arrange
    const expectedDataMock = {
      statistic: 'test',
      avatarUrl: 'test',
    };

    const mocks = [
      {
        request: {
          query: PopularityRating,
        },
        result: {
          data: { popularityRating: expectedDataMock },
        },
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useGetPopularityRating(), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.popularityRating).toEqual(expectedDataMock);
  });
  test('should return error', async () => {
    // Arrange
    const error = new Error();
    const mocks = [
      {
        request: {
          query: PopularityRating,
        },
        error,
      },
    ];

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useGetPopularityRating(), {
      wrapper: MockedProvider,
      initialProps: {
        mocks,
      },
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.error).toBeDefined();
  });
});
